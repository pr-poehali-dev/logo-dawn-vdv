import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const EMBLEM_URL = "https://cdn.poehali.dev/projects/d06cddc4-fb69-47ec-a1ed-f3e80f74c016/files/396285ed-07fe-46f1-96f2-f633771f69e9.jpg";

const HISTORY_ITEMS = [
  {
    year: "1930",
    title: "Рождение ВДВ",
    text: "2 августа 1930 года — первое в мире воздушно-десантное подразделение высажено под Воронежем. День, изменивший военное искусство навсегда.",
  },
  {
    year: "1941–1945",
    title: "Великая Отечественная война",
    text: "Десантники сражались на всех фронтах. Вяземская операция, оборона Москвы, форсирование Днепра — ВДВ всегда там, где труднее всего.",
  },
  {
    year: "1968",
    title: "Операция «Дунай»",
    text: "Захват аэропорта Прага за 15 минут без единого выстрела. Десантники продемонстрировали молниеносность и точность, ставшие легендой.",
  },
  {
    year: "1979–1989",
    title: "Афганистан",
    text: "Девять лет горной войны закалили ВДВ. Сотни боевых операций, высочайший профессионализм и несгибаемое братство в экстремальных условиях.",
  },
  {
    year: "Сегодня",
    title: "Элита России",
    text: "ВДВ — боеготовный резерв Верховного Главнокомандующего. Тысячи бойцов, готовых выполнить любую задачу в любой точке земного шара.",
  },
];

const SYMBOLS = [
  {
    icon: "🦅",
    name: "Орёл",
    desc: "Символ силы, власти и зоркости. Двуглавый орёл смотрит на восток и запад — ВДВ готов действовать в любом направлении.",
  },
  {
    icon: "🪂",
    name: "Парашют",
    desc: "Главный инструмент десантника. Купол парашюта в эмблеме олицетворяет стремительность, внезапность и небо как стихию.",
  },
  {
    icon: "🌿",
    name: "Лавровый венок",
    desc: "Древний символ воинской славы и победы. Венок окружает эмблему, увековечивая подвиги каждого поколения десантников.",
  },
  {
    icon: "⭐",
    name: "Звезда",
    desc: "Путеводная звезда воина. Символизирует верность Родине, точность и несгибаемость духа.",
  },
  {
    icon: "💙",
    name: "Голубой цвет",
    desc: "Цвет неба — родной стихии десантника. Небесно-голубой берет стал визитной карточкой ВДВ во всём мире.",
  },
  {
    icon: "🤍",
    name: "Белый цвет",
    desc: "Чистота помыслов, честь и достоинство. Белый символизирует благородство воинского братства.",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("symbols");
  const [visible, setVisible] = useState(false);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleEmblemClick = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 800);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-vdv-dark text-white font-oswald overflow-x-hidden">
      {/* Фоновый узор */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a3a6e_0%,_#0a1428_60%)]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #4a90d9 0, #4a90d9 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-vdv-dark/90 backdrop-blur-md border-b border-vdv-blue/30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪂</span>
            <span className="text-white font-bold tracking-widest text-sm uppercase">
              ВДВ России
            </span>
          </div>
          <div className="flex gap-1">
            {[
              { id: "symbols", label: "Символика" },
              { id: "history", label: "История" },
              { id: "download", label: "Скачать" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 text-xs tracking-widest uppercase transition-all rounded ${
                  activeSection === item.id
                    ? "bg-vdv-blue text-white"
                    : "text-vdv-blue/70 hover:text-vdv-blue hover:bg-vdv-blue/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 flex flex-col items-center justify-center min-h-screen">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Девиз */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-vdv-blue" />
              <span className="text-vdv-gold text-xs tracking-[0.5em] uppercase">
                Никто кроме нас
              </span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-vdv-blue" />
            </div>
          </div>

          {/* Эмблема */}
          <div className="flex justify-center mb-10">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-vdv-blue/20 blur-2xl scale-110 group-hover:bg-vdv-blue/30 transition-all duration-500" />
              <div className="absolute inset-0 rounded-full border-2 border-vdv-blue/40" style={{ animation: "spin 20s linear infinite" }} />
              <div className="absolute inset-2 rounded-full border border-vdv-gold/30" style={{ animation: "spin 15s linear infinite reverse" }} />
              <button
                onClick={handleEmblemClick}
                className={`relative block w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-vdv-blue/60 shadow-[0_0_60px_rgba(74,144,217,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(74,144,217,0.6)]`}
                style={rotating ? { animation: "spin 0.8s ease-in-out" } : {}}
              >
                <img
                  src={EMBLEM_URL}
                  alt="Эмблема ВДВ"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Заголовок */}
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white mb-2 uppercase">
              ВДВ
            </h1>
            <h2 className="text-lg md:text-xl tracking-[0.4em] text-vdv-blue uppercase mb-6">
              Воздушно-десантные войска России
            </h2>
            <p className="text-white/60 font-roboto text-sm max-w-md mx-auto leading-relaxed">
              Элитные войска. Небо как стихия. Боевое братство, закалённое поколениями.
            </p>
          </div>

          {/* Стрелка вниз */}
          <div className="flex justify-center mt-12" style={{ animation: "bounce 2s infinite" }}>
            <button onClick={() => scrollTo("symbols")} className="text-vdv-blue/50 hover:text-vdv-blue transition-colors">
              <Icon name="ChevronDown" size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Символика */}
      <section id="symbols" className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-vdv-blue/50" />
              <span className="text-vdv-blue/50 text-xs tracking-widest uppercase">раздел</span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-vdv-blue/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase text-white">
              Символика
            </h2>
            <p className="text-white/50 font-roboto text-sm mt-3 tracking-wide">
              Каждый элемент эмблемы несёт глубокий смысл
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYMBOLS.map((sym) => (
              <div
                key={sym.name}
                className="group relative bg-white/5 border border-vdv-blue/20 rounded-lg p-6 hover:border-vdv-blue/50 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{sym.icon}</div>
                <h3 className="text-lg font-bold tracking-widest uppercase text-white mb-2">
                  {sym.name}
                </h3>
                <p className="text-white/55 font-roboto text-sm leading-relaxed">
                  {sym.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vdv-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История */}
      <section id="history" className="relative py-20 px-4 bg-black/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-vdv-blue/50" />
              <span className="text-vdv-blue/50 text-xs tracking-widest uppercase">раздел</span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-vdv-blue/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase text-white">
              История
            </h2>
            <p className="text-white/50 font-roboto text-sm mt-3 tracking-wide">
              Девяносто лет побед и боевого братства
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-vdv-blue/50 via-vdv-blue/30 to-transparent" />

            <div className="space-y-8">
              {HISTORY_ITEMS.map((item) => (
                <div key={item.year} className="flex gap-6 group">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-vdv-gold font-black text-sm tracking-wider">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-vdv-blue border-2 border-vdv-blue/50 group-hover:bg-vdv-gold group-hover:border-vdv-gold/50 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-full bg-vdv-blue/30 group-hover:bg-vdv-gold/30 blur-sm transition-all" />
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-base font-bold tracking-widest uppercase text-white mb-1 group-hover:text-vdv-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/55 font-roboto text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Скачать */}
      <section id="download" className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-vdv-blue/50" />
              <span className="text-vdv-blue/50 text-xs tracking-widest uppercase">раздел</span>
              <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-vdv-blue/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase text-white">
              Скачать
            </h2>
            <p className="text-white/50 font-roboto text-sm mt-3 tracking-wide">
              Эмблема в высоком качестве для любых задач
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-vdv-blue/10 blur-3xl rounded-full" />
              <img
                src={EMBLEM_URL}
                alt="Эмблема ВДВ"
                className="relative w-48 h-48 rounded-full border-2 border-vdv-blue/40 shadow-[0_0_40px_rgba(74,144,217,0.3)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "PNG", desc: "Для печати и экрана", icon: "Image" },
              { label: "SVG", desc: "Векторный формат", icon: "Shapes" },
              { label: "JPG", desc: "Для аватаров", icon: "Camera" },
            ].map((fmt) => (
              <button
                key={fmt.label}
                className="group flex flex-col items-center gap-3 p-6 bg-white/5 border border-vdv-blue/20 rounded-lg hover:border-vdv-blue/60 hover:bg-vdv-blue/10 transition-all duration-300"
              >
                <Icon name={fmt.icon as "Image" | "Shapes" | "Camera"} size={28} className="text-vdv-blue group-hover:text-white transition-colors" />
                <div>
                  <div className="text-white font-black tracking-widest text-lg">{fmt.label}</div>
                  <div className="text-white/50 font-roboto text-xs mt-1">{fmt.desc}</div>
                </div>
                <Icon name="Download" size={16} className="text-vdv-blue/50 group-hover:text-vdv-blue transition-colors" />
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-roboto text-white/40">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={14} className="text-vdv-blue" />
              <span>Круглый формат</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={14} className="text-vdv-blue" />
              <span>Прозрачный фон (PNG)</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={14} className="text-vdv-blue" />
              <span>Высокое разрешение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t border-vdv-blue/20 py-8 px-4 text-center">
        <div className="text-2xl mb-3">🪂</div>
        <p className="text-white/30 font-roboto text-xs tracking-widest uppercase">
          ВДВ России — Никто кроме нас
        </p>
        <p className="text-white/15 font-roboto text-xs mt-2">
          2 августа 1930 — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
