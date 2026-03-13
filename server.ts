import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // メール送信API
  app.post('/api/send-email', async (req, res) => {
    const { name, email, company, message } = req.body;

    // SMTP設定 (環境変数から読み込み)
    // ※ユーザーが設定するまで、コンソールに内容を出力するフォールバックを含めます
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.log('--- Email Notification (Dry Run - No SMTP Config) ---');
      console.log(`To: otake.earthist@gmail.com, info@animalprotech.jp`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company}`);
      console.log(`Message: ${message}`);
      console.log('----------------------------------------------------');
      return res.status(200).json({ 
        success: true, 
        message: 'SMTP credentials not configured. Email content logged to server console.' 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmailを使用する場合。他のサービスの場合はhost/portを設定
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"ANIMAL PROTECH フォーム" <${smtpUser}>`,
      to: 'otake.earthist@gmail.com, info@animalprotech.jp',
      replyTo: email,
      subject: `【お問い合わせ】${company} ${name}様より`,
      text: `
ANIMAL PROTECH Webサイトから新しいお問い合わせがありました。

【お客様情報】
貴社名: ${company}
お名前: ${name}
メールアドレス: ${email}

【メッセージ内容】
${message}

---
このメールはシステムより自動送信されています。
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
