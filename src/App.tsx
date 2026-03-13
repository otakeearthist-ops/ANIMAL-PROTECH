/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Drone, 
  Bird, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Brain,
  VolumeX,
  Zap
} from 'lucide-react';

// Original local images (moved to public folder for production reliability)
const heroBg = "/hero-bg.jpg";
const crow1 = "/crow1.jpg";
const higai1 = "/higai1.jpg";
const higai2 = "/higai2.jpg";
const higai3 = "/higai3.jpg";
const drone1 = "/drone1.jpg";
const drone2 = "/drone2.jpg";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <Drone className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
        <span className="font-bold text-lg sm:text-xl tracking-tight text-emerald-900">ANIMAL PROTECH</span>
      </a>
      <div className="flex items-center gap-3 sm:gap-8">
        <a 
          href="https://forms.gle/v4BgsozwcWRqVUuj7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:block text-sm font-medium text-emerald-800 hover:text-emerald-600 transition-colors"
        >
          無料トライアル
        </a>
        <a 
          href="https://forms.gle/v4BgsozwcWRqVUuj7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200"
        >
          お問い合わせ
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-950">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'brightness(1.05) contrast(1.1) saturate(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-black/35 z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-wider text-white uppercase bg-emerald-600 rounded-full shadow-lg">
                ゴルフ場運営者様向け
              </span>
              <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-wider text-white uppercase bg-orange-500 rounded-full animate-pulse shadow-lg">
                今だけ完全無料
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ドローンによる<br />
              <span className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">カラス対策</span><br />
              <span className="text-3xl sm:text-5xl md:text-7xl inline-block">無料トライアル</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 mb-8 sm:mb-12 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              ゴルフ場運営におけるカラス被害に対し、ドローン技術を用いた「スマートな解決策」を提案。プレイヤーの満足度向上とコース管理の効率化を実現します。
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="https://forms.gle/v4BgsozwcWRqVUuj7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-emerald-500 text-white rounded-2xl font-bold text-lg sm:text-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-950/50 flex items-center justify-center gap-3 group"
              >
                無料トライアル申込
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#solution" 
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/20 transition-all flex items-center justify-center"
              >
                詳しく見る
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

const Problem = () => (
  <section id="problem" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-emerald-950 mb-6">
            なぜ、これまでのカラス対策は<br />
            効果が薄れてしまうのか？
          </h2>
          <div className="space-y-6 text-emerald-800/90 leading-relaxed">
            <p>
              カラスは犬や猫よりも知能が高く、<span className="font-bold text-emerald-700">7歳の子供程度の能力</span>があると言われています。
            </p>
            <p>
              スピーカーから流れる毎回同じ威嚇音や、動かない案山子。彼らはそれらが「自分に危害を加えない」とすぐに学習してしまいます。
            </p>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
              <Brain className="w-12 h-12 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-900 mb-2">高い学習能力への対抗</h4>
                <p className="text-sm">
                  いたずらをした時、毎回同じ声で怒られても怖くないのと同じです。カラスには「慣れ」させない対策が必要です。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
            <img 
              src={crow1} 
              alt="ゴルフ場のカラス被害の原因となる知能の高いカラス" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-50 max-w-xs">
            <p className="text-emerald-800 font-medium italic">
              「退治」するのではなく、「居心地の悪さ」を感じてもらい、自ら移動してもらう。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const DamageAndMeasures = () => (
  <section className="py-24 bg-emerald-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-4 px-4">ゴルフ場が抱えるカラス被害の現状</h2>
        <p className="text-emerald-800/60 px-4">多くの運営者様が、終わりのない対策に苦慮されています</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { src: higai1, title: "カートの荷物荒らし", desc: "賢いカラスはファスナーも開けます" },
          { src: higai2, title: "芝生の掘り起こし", desc: "ミミズなどを探してグリーンを傷つけます" },
          { src: higai3, title: "ボールの持ち去り", desc: "プレーの進行を妨げる深刻な問題です" }
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl shadow-md"
          >
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold mb-1">{img.title}</h4>
              <p className="text-white/80 text-sm">{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-[2rem] shadow-sm border border-emerald-100"
        >
          <h3 className="text-xl font-bold text-emerald-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-500 rounded-full" />
            害獣被害の例
          </h3>
          <ul className="space-y-4">
            {[
              "カラスによるカートの荷物荒らし",
              "グリーンの芝生のほじくり",
              "ゴルフボールの持ち去り",
              "糞害",
              "人を襲う",
              "鳴き声や景観の問題"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-emerald-800/80">
                <span className="text-emerald-500 mt-1.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white p-10 rounded-[2rem] shadow-sm border border-emerald-100"
        >
          <h3 className="text-xl font-bold text-emerald-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-600 rounded-full" />
            現在の主な対策
          </h3>
          <ul className="space-y-4">
            {[
              "荷物置きにネットやシートをかけてガードをする",
              "多く集まる場所にカラスの死骸のダミーを設置",
              "カラスの鳴き声放送や超音波、破裂音による対策"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-emerald-800/80">
                <span className="text-emerald-600 mt-1.5">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-emerald-50 rounded-xl text-sm text-emerald-700 font-medium">
            ※これらの対策は、知能の高いカラスには「慣れ」が生じやすく、一時的な効果に留まるケースが多く見られます。
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={drone1} 
          alt="ゴルフ場の空を飛ぶ対策用ドローン" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/40 skew-x-12 translate-x-1/4" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">ドローンによる「物理的プレッシャー」</h2>
        <p className="text-emerald-200 max-w-2xl mx-auto">
          複雑な装置や威嚇音は使いません。ドローンの存在そのものがカラスに心理的な不安を与えます。
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Zap className="w-8 h-8" />,
            title: "物理的プレッシャー",
            desc: "上空を飛行・旋回することで、カラスに直接的な警戒心を抱かせます。"
          },
          {
            icon: <VolumeX className="w-8 h-8" />,
            title: "静寂を維持",
            desc: "大きな威嚇音を出さないため、ゴルフ場の静かな環境を損ないません。"
          },
          {
            icon: <Bird className="w-8 h-8" />,
            title: "学習を阻害",
            desc: "不規則な動きと物理的な接近により、カラスが「安全」と判断するのを防ぎます。"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all"
          >
            <div className="bg-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-emerald-100/80 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-emerald-950 mb-4">活動イメージ</h2>
        <p className="text-emerald-800/60">実際のフィールドでの運用と機体のイメージ</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-emerald-50"
        >
          <img 
            src={drone2} 
            alt="ドローンによるカラス対策の活動イメージ" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const TrialDetails = () => (
  <section id="trial" className="py-24 bg-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 relative px-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-xl shadow-orange-500/20"
        >
          今だけ限定！
        </motion.div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-emerald-950 leading-tight tracking-tighter">
          <span className="text-orange-600 text-base sm:text-xl block mb-2 sm:mb-4 font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase">Limited Offer</span>
          <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">完全無料</span>
          <span className="text-emerald-950">トライアル</span>
        </h2>
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-emerald-100">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-16">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-8 sm:10 pb-4 border-b border-emerald-100 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full" />
              無料トライアルの実施内容
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-emerald-700 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">実施手法</h4>
                  <p className="text-emerald-800/70 text-sm">被害多発エリアの上空をドローンが飛行・旋回。機体音と視覚的な存在感だけで反応を確認します。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-emerald-700 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">期間・時間帯</h4>
                  <p className="text-emerald-800/70 text-sm">1日間。早朝（トップスタート前）や夕方など、お客様の少ない時間帯で柔軟に調整可能です。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-emerald-700 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">費用負担ゼロ</h4>
                  <p className="text-emerald-800/70 text-sm">人件費、機材費、交通費など、一切の請求はございません。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                <ShieldCheck className="w-5 h-5" />
                徹底した安全管理
              </div>
              <ul className="text-sm text-emerald-800/80 space-y-1">
                <li>・有資格者による経験豊富な操縦</li>
                <li>・安全マージンを確保したルート選定</li>
                <li>・対人・対物賠償責任保険への加入済み</li>
              </ul>
            </div>
          </div>
          
          <div className="relative bg-emerald-600 p-8 md:p-16 text-white flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Drone technology" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center">トライアル後のステップ</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/20" />
                
                {[
                  { step: "01", title: "結果報告", desc: "カラスの逃げ方、戻り時間などの反応を詳細にご報告します。" },
                  { step: "02", title: "効果の判断", desc: "効果が見込めない場合は、トライアルのみで終了。費用は発生しません。" },
                  { step: "03", title: "今後のご相談", desc: "効果が確認できた場合のみ、本格導入に向けたプランをご提案します。" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm z-10">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-emerald-100/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://forms.gle/v4BgsozwcWRqVUuj7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-12 w-full py-4 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center"
              >
                無料トライアルを予約する
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white pt-24 pb-12 border-t border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Drone className="w-8 h-8 text-emerald-600" />
            <span className="font-bold text-2xl tracking-tight text-emerald-900">ANIMAL PROTECH</span>
          </div>
          <div className="text-emerald-700 font-bold mb-6">株式会社アーシスト</div>
          <p className="text-emerald-800/70 mb-8 max-w-md">
            私たちは、ゴルフ場運営におけるカラス被害という深刻な課題に対し、ドローン技術を用いた「スマートで持続可能な解決策」を提案します。プレイヤーの満足度向上とコース管理の効率化を同時に実現します。
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-emerald-900">
              <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
              <span>東京都品川区西五反田8-7-11 アクシス五反田ビル2F</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-900">
              <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>03-5719-1970</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-900">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>info@animalprotech.jp</span>
            </div>
          </div>
        </div>
        
        <div className="bg-emerald-50 p-8 sm:p-12 rounded-[2.5rem] border border-emerald-100 flex flex-col items-center text-center justify-center">
          <h3 className="text-2xl font-bold text-emerald-950 mb-4">お問い合わせ・お申し込み</h3>
          <p className="text-emerald-800/70 mb-8 max-w-sm">
            無料トライアルのご予約や、サービスに関するご質問は専用フォームよりお気軽にお送りください。
          </p>
          <a 
            href="https://forms.gle/v4BgsozwcWRqVUuj7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 group"
          >
            専用フォームを開く
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="pt-12 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-800/50">
        <p>© 2026 株式会社アーシスト (Earthist Co., Ltd.) All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-emerald-950 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <DamageAndMeasures />
        <Solution />
        <Gallery />
        <TrialDetails />
        
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">「ドローンを飛ばすだけで、カラスが逃げるのか？」</h2>
            <p className="text-lg text-emerald-800/80 mb-12 leading-relaxed">
              まずはこのシンプルな疑問を解消するために、当社のドローンをテスト飛行させていただけないでしょうか。<br />
              御社にデメリットのない形でのご提案ですので、ぜひ前向きにご検討いただけますと幸いです。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
