import React from 'react';
import { Phone, ShieldCheck, HeartPulse, ChevronRight, CheckCircle, Clock, MapPin, ArrowRight, Sparkles, Activity, PlusCircle, Award, Image, Home, Lightbulb } from 'lucide-react';
import QRCode from "react-qr-code";
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const ToothIcon = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 21c-2.3 0-4-1.7-4-4V7a4 4 0 1 1 8 0v10c0 2.3-1.7 4-4 4"></path>
    <path d="M10 21c0-2.3 1.7-4 4-4s4 1.7 4 4"></path>
  </svg>
);

const ToothSparkleIcon = ({ size = 24, strokeWidth = 1.5, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <mask id="sparkle-mask">
        <rect width="24" height="24" fill="white" />
        <circle cx="18" cy="5" r="4.5" fill="black" />
      </mask>
    </defs>
    
    <path mask="url(#sparkle-mask)" d="M12 5.5C11 4 9.5 3.5 8 3.5 5.5 3.5 3.5 5.5 3.5 8c0 2 1 3.5 1.5 5.5.5 2 1 5 3 5 1.5 0 2-2 3-4 .5-1 1.5-1 2 0 1 2 1.5 4 3 4 2 0 2.5-3 3-5 .5-2 1.5-3.5 1.5-5.5 0-2.5-2-4.5-4.5-4.5-1.5 0-3 .5-4 2z" />
    <path d="M18 1c0 2.5 1.5 4 4 4-2.5 0-4 1.5-4 4 0-2.5-1.5-4-4-4 2.5 0 4-1.5 4-4z" />
  </svg>
);
const MaskedIcon = ({ src, size = 32, className = "" }) => (
  <div 
    className={`inline-block ${className}`}
    style={{
      width: size,
      height: size,
      WebkitMaskImage: `url(${src})`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      backgroundColor: 'currentColor'
    }}
  />
);

const TopBarMarquee = () => (
  <div className="w-full bg-primaryDark text-white overflow-hidden py-2 relative z-50">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
      className="flex whitespace-nowrap w-max"
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 px-4 text-[13px] md:text-sm font-medium tracking-wide">
          <span className="flex items-center gap-1.5 text-white"><MapPin size={15} className="text-primaryLight" /> Rua Icatú, 530, Cj R Trinta Um Marco - São José dos Campos SP</span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5 text-white"><Clock size={15} className="text-primaryLight" /> Seg a Sex: 08:00 às 19:00 | Sáb: 08:00 às 12:00</span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5 text-white"><Phone size={15} className="text-primaryLight" /> (12) 3933-0821</span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1.5 text-white"><WhatsAppIcon size={15} className="text-[#25D366]" /> (12) 97407-1990</span>
          <span className="text-white/30 px-2">•</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const OrtodontiaIcon = (props) => <MaskedIcon src="/tratamentos/ortodontia.png" {...props} />;
const ImplantesIcon = (props) => <MaskedIcon src="/tratamentos/implantes.png" {...props} />;
const EndodontiaIcon = (props) => <MaskedIcon src="/tratamentos/endodontia.png" {...props} />;
const ProtesesIcon = (props) => <MaskedIcon src="/tratamentos/proteses.png" {...props} />;
const ClinicoGeralIcon = (props) => <MaskedIcon src="/tratamentos/clinico-geral.png" {...props} />;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [lgpdAccepted, setLgpdAccepted] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lgpd") === "true";
    }
    return false;
  });

  const acceptLgpd = () => {
    localStorage.setItem("lgpd", "true");
    setLgpdAccepted(true);
  };

  const getWhatsAppLink = () => {
    const hour = new Date().getHours();
    let greeting = "Bom dia";
    if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde";
    } else if (hour >= 18) {
      greeting = "Boa noite";
    }
    const message = `${greeting}! Gostaria de agendar uma avaliação.`;
    return `https://api.whatsapp.com/send?phone=5512974071990&text=${encodeURIComponent(message)}`;
  };

  const provaTecnica = [
    "/prova-tecnica/drromulocosta_1729605338_3484504590017691916_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1729605338_3484504589942219133_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1549303269_1972021216845575521_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1550175177_1979335307528357733_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1550763382_1984269525760871423_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1554921941_2019154053925570384_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1563910496_2094555518063592774_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1625229686_2608938164291578433_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1628712318_2638152598203233049_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1630679892_2654657801903484594_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1666997443_2959311500704913254_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1763397814_3767976429108410575_10853754012.jpg"
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-textPrimary scroll-smooth pb-20 md:pb-0">
      <TopBarMarquee />
      {/* Navbar (Nielsen Heuristics: Clear Navigation & Consistency) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/logo-oficial.jpg" 
                  alt="Logo Dr. Rômulo Costa" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-primaryLight transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primaryDark leading-tight group-hover:text-primary transition-colors">Dr. Rômulo Costa</span>
                <span className="text-[10px] sm:text-xs font-semibold text-primary tracking-widest uppercase">Odontologia | CROSP 101.185</span>
              </div>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#tratamentos" className="text-sm font-semibold text-textPrimary/70 hover:text-primary transition-all hover:-translate-y-0.5">Tratamentos</a>
              <a href="#diferenciais" className="text-sm font-semibold text-textPrimary/70 hover:text-primary transition-all hover:-translate-y-0.5">Diferenciais</a>
              <a href="#casos-clinicos" className="text-sm font-semibold text-textPrimary/70 hover:text-primary transition-all hover:-translate-y-0.5">Casos Clínicos</a>
              <a href="#dicas" className="text-sm font-semibold text-textPrimary/70 hover:text-primary transition-all hover:-translate-y-0.5">Dicas</a>
            </div>

            <div className="hidden md:flex">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-gradient-to-r from-primary to-primaryDark text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2 min-h-[48px] overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <WhatsAppIcon size={18} className="animate-pulse" />
                Agendar Avaliação
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section (Disney Effect) */}
      <section className="relative bg-gradient-to-b from-primaryLight/20 via-background to-background pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden">
        {/* Floating background elements */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 w-64 h-64 bg-primaryLight/30 rounded-full blur-3xl"></motion.div>
        <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryDark leading-[1.1] mb-6 text-center">
                Você é feliz com o <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark">seu sorriso?</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-textPrimary/80 mb-8 lg:mb-16 leading-relaxed text-justify">
                Muitos pacientes reclamam do seu sorriso e dizem que foram adiando o tratamento por terem <strong className="text-primaryDark">medo de dentista</strong>. Não cometa o mesmo erro! Apenas procure um bom profissional e recupere sua autoestima.
              </motion.p>
              
              {/* Mobile Hero Image */}
              <motion.div 
                variants={fadeUp}
                className="relative mb-8 block lg:hidden"
              >
                <div className="relative rounded-[2.5rem] shadow-2xl bg-white p-2 border-4 border-white aspect-square flex items-center justify-center overflow-hidden">
                   <img src="/drromulocosta_hero-section.jpg" alt="Dr. Rômulo Costa" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 group relative flex items-center justify-center gap-2 bg-[#3e6b72] hover:bg-[#32575c] transition-colors text-white px-4 py-3.5 rounded-full font-semibold text-[1.05rem] shadow-sm"
                >
                  <WhatsAppIcon size={20} />
                  Agendar avaliação
                </motion.a>
                <div className="flex-1 flex items-center justify-center gap-2 bg-white text-[#3e6b72] px-4 py-3.5 rounded-full font-semibold text-[1.05rem] border border-gray-300">
                  <Award size={20} className="text-[#3e6b72]" /> Especialista em Ortodontia
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="mt-8 lg:mt-16 flex justify-center items-center gap-8 text-sm font-semibold text-textPrimary/70">
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform"><ShieldCheck size={20} className="text-primary" /></div>
                  Atendimento Premium
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2.5 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform"><HeartPulse size={20} className="text-primary" /></div>
                  Tecnologia 3D
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
               {/* Decorative background shape */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primaryLight rounded-[3rem] opacity-20 scale-105"></div>
               
               <div className="relative rounded-[2.5rem] shadow-2xl bg-white p-3 border-4 border-white aspect-square flex items-center justify-center overflow-hidden group">
                  <img src="/drromulocosta_hero-section.jpg" alt="Dr. Rômulo Costa" className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 rounded-3xl ring-inset ring-1 ring-black/10 z-10 pointer-events-none"></div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Procedimentos - Bento Grid */}
      <section id="tratamentos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-4">Tratamentos Especializados</h2>
            <p className="text-textPrimary/70 text-lg">Oferecemos uma odontologia completa para transformar a sua saúde bucal e a estética do seu sorriso com máxima previsibilidade.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: OrtodontiaIcon, title: "Ortodontia", desc: "Aparelhos modernos e discretos para um sorriso simétrico e perfeito no menor tempo possível." },
              { icon: ImplantesIcon, title: "Implantes", desc: "Recupere sua mastigação e estética com implantes altamente seguros, previsíveis e duradouros." },
              { icon: ToothSparkleIcon, title: "Clareamento", desc: "Técnicas avançadas para dentes brancos e iluminados, priorizando sua segurança e conforto." },
              { icon: EndodontiaIcon, title: "Endodontia", desc: "Tratamento de canal moderno, rápido e humanizado, priorizando sempre o alívio imediato da dor." },
              { icon: ProtesesIcon, title: "Próteses", desc: "Reabilitação oral completa com materiais de alta estética que devolvem a naturalidade do sorriso." },
              { icon: ClinicoGeralIcon, title: "Clínico Geral", desc: "Foco na prevenção, limpeza profissional e manutenção contínua para sua saúde bucal em longo prazo." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primaryDark">{item.title}</h3>
                </div>
                <p className="text-textPrimary/70 font-medium leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-16"
          >
            Por que escolher o Dr. Rômulo?
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: HeartPulse, title: "Tecnologia 3D Avançada", desc: "Diagnósticos precisos através de escaneamento digital e modelagem 3D, eliminando moldagens desconfortáveis e garantindo resultados previsíveis." },
              { icon: Award, title: "Conforto Absoluto", desc: "Ambiente preparado para reduzir a ansiedade. Nosso foco principal é em quem tem medo de dentista, garantindo procedimentos humanizados." },
              { icon: ShieldCheck, title: "Segurança Clínica", desc: "Biossegurança rigorosa e utilização dos melhores materiais odontológicos disponíveis mundialmente." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-primaryDark">{item.title}</h4>
                </div>
                <p className="text-textPrimary/70 font-medium leading-relaxed text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prova Técnica (14 imagens) */}
      <section id="casos-clinicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-3">Sorrisos Transformados</h2>
            <p className="text-textPrimary/70 text-lg">Confira alguns dos resultados clínicos incríveis que realizamos em nossa clínica.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {provaTecnica.map((imgSrc, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                className="bg-background rounded-3xl aspect-square overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group relative cursor-pointer"
                onClick={() => setSelectedImage(imgSrc)}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img src={imgSrc} alt={`Prova Técnica ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/drromulocosta" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 bg-gradient-to-r from-primaryLight/30 to-primaryLight/10 text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <InstagramIcon size={20} />
              Mais no Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Dicas do Dr. Rômulo */}
      <section id="dicas" className="py-24 bg-gradient-to-b from-primaryLight/10 to-white border-t border-primaryLight/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-4">Dicas de Ouro para o seu Sorriso</h2>
            <p className="text-textPrimary/70 text-lg">Informações valiosas e práticas que ajudam você a cuidar melhor da sua saúde bucal no dia a dia.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
          >
            {[
              { 
                icon: CheckCircle, 
                title: "Combate ao mau hálito", 
                content: (
                  <div className="text-textPrimary/70 text-[15px] space-y-4 text-justify">
                    <p><strong>Beba muita água</strong> — evita a boca seca.</p>
                    <p><strong>Escove a língua</strong> — foco das bactérias.</p>
                    <p><strong>Use fio dental</strong> — sempre após refeições.</p>
                    <p><strong>Cuidado com a dieta</strong> — alho e cebola em excesso.</p>
                  </div>
                )
              },
              { 
                icon: ShieldCheck, 
                title: "O poder do fio dental", 
                content: <p className="text-textPrimary/70 text-[15px] leading-relaxed text-justify">Quando não usamos fio dental, deixamos de limpar <strong>35%</strong> da superfície do dente. Ele remove a placa bacteriana onde a escova jamais alcança.</p> 
              },
              { 
                icon: Clock, 
                title: "Troca da escova", 
                content: <p className="text-textPrimary/70 text-[15px] leading-relaxed text-justify">Troque a sua escova a cada <strong>3 meses</strong>, ou ao notar desgaste nas cerdas. Escovas velhas acumulam bactérias e perdem eficiência.</p> 
              },
              { 
                icon: Award, 
                title: "Cuidados com a prótese", 
                content: <p className="text-textPrimary/70 text-[15px] leading-relaxed text-justify">Higienize diariamente com escovas macias adequadas e evite pastas abrasivas que possam arranhar a resina.</p> 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className={`p-8 md:p-12 flex flex-col justify-start bg-transparent
                  ${i === 0 ? 'md:border-r md:border-b border-gray-200 border-b' : ''}
                  ${i === 1 ? 'md:border-b border-gray-200 border-b' : ''}
                  ${i === 2 ? 'md:border-r border-gray-200 border-b md:border-b-0' : ''}
                  ${i === 3 ? '' : ''}
                `}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-primaryDark">{item.title}</h4>
                </div>
                {item.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Completo */}
      <footer id="contato" className="bg-background border-t border-gray-200 pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-8">
            
            {/* Branding */}
            <div className="md:col-span-4 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src="/logo-oficial.jpg" alt="Dr. Rômulo Costa" className="h-14 w-14 rounded-full object-cover border-2 border-primaryLight shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-primaryDark leading-tight">Dr. Rômulo Costa</span>
                  <span className="text-[11px] font-bold tracking-wider text-primary uppercase">CROSP 101.185</span>
                </div>
              </div>
              <p className="text-textPrimary/70 text-[15px] leading-relaxed mb-6 font-medium text-justify">
                Odontologia estética e reabilitação de alto padrão, com foco absoluto no bem-estar e conforto do paciente.
              </p>
              <div className="inline-flex flex-col items-center md:items-start gap-4 mt-auto">
                <a href="https://instagram.com/drromulocosta" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold text-[15px] hover:text-primaryDark transition-colors">
                  <InstagramIcon size={20} />
                  Seguir no Instagram @dr.romulocosta
                </a>
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 self-center md:self-start md:ml-2">
                  <QRCode value="https://instagram.com/drromulocosta" size={120} fgColor="#0F3443" />
                </div>
              </div>
            </div>

            {/* Endereço & GPS */}
            <div className="md:col-span-4 flex flex-col h-full">
              <h4 className="font-bold text-[17px] text-primaryDark mb-6 flex items-center gap-2"><MapPin size={18} className="text-primary"/> Localização</h4>
              <p className="text-textPrimary/70 text-[15px] leading-relaxed mb-6 text-justify">
                Rua Icatú, 530, Cj R Trinta Um Marco, São José dos Campos SP, 12237-010, Brasil
              </p>
              <div className="w-full flex-grow rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <iframe width="100%" height="100%" style={{ border: 0, minHeight: '200px' }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=Rua+Icat%C3%BA,+530,+S%C3%A3o+Jos%C3%A9+dos+Campos&t=&z=15&ie=UTF8&iwloc=&output=embed" title="Mapa do Consultório"></iframe>
              </div>
              <div className="flex md:hidden justify-center items-center gap-6 mt-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Icat%C3%BA,+530,+Cj+R+Trinta+Um+Marco,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-[15px] font-bold text-primary hover:text-primaryDark transition-colors underline-offset-4 hover:underline">Abrir no Google Maps</a>
                <a href="https://waze.com/ul?q=Rua+Icat%C3%BA,+530,+Cj+R+Trinta+Um+Marco,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-[15px] font-bold text-primary hover:text-primaryDark transition-colors underline-offset-4 hover:underline">Navegar pelo Waze</a>
              </div>
            </div>

            {/* Contatos & Horários */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-[17px] text-primaryDark mb-6 flex items-center gap-2"><Clock size={18} className="text-primary"/> Contato e horários</h4>
              <ul className="space-y-4 text-[15px] text-textPrimary/70 font-medium">
                <li className="flex justify-between border-b border-gray-200 pb-3"><span>Seg a sex</span> <span className="font-bold text-primaryDark">08:00 às 19:00</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-3"><span>Sábado</span> <span className="font-bold text-primaryDark">08:00 às 12:00</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-3">
                  <span>Fixo</span> 
                  <a href="tel:+551239330821" className="font-bold text-primaryDark hover:text-primary transition-colors hover:underline">(12) 3933-0821</a>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-3">
                  <span>WhatsApp</span> 
                  <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="font-bold text-primaryDark hover:text-primary transition-colors hover:underline">(12) 97407-1990</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-textPrimary/40 text-[13px] font-medium">
              © {new Date().getFullYear()} Dr. Rômulo Costa — Odontologia
            </p>
            <p className="text-textPrimary/40 text-[13px] font-medium mt-4 md:mt-0 md:pr-24">
              Desenvolvido por <a href="https://autonomousai.com.br/" target="_blank" rel="noreferrer" className="text-primary hover:text-primaryDark font-bold transition-colors underline underline-offset-4 relative z-50">AIA</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noreferrer" 
        className="hidden md:flex fixed bottom-24 md:bottom-6 right-4 md:right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 items-center justify-center group"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <WhatsAppIcon size={28} className="relative z-10" />
      </motion.a>

      {/* LGPD Banner */}
      <AnimatePresence>
        {!lgpdAccepted && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-[80px] md:bottom-4 left-0 right-0 md:left-4 md:right-auto md:w-full md:max-w-md bg-white border border-gray-200 shadow-2xl p-4 md:rounded-2xl z-[60] flex flex-col gap-3"
          >
            <p className="text-xs md:text-sm text-textPrimary/80">
              Utilizamos cookies para melhorar sua experiência e direcionar conteúdos do seu interesse. Ao continuar navegando, você concorda com a nossa política de privacidade.
            </p>
            <button onClick={acceptLgpd} className="w-full bg-[#3e6b72] text-white text-sm font-bold py-2.5 rounded-lg hover:bg-[#32575c] transition-colors">
              Aceitar e fechar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-2 py-2 flex justify-between items-end shadow-[0_-10px_30px_rgba(0,0,0,0.08)] pb-safe">
        <a href="#tratamentos" className="flex flex-col items-center gap-1 text-textPrimary/40 hover:text-primary p-2 flex-1">
          <Activity size={22} strokeWidth={2} />
          <span className="text-[10px] font-bold tracking-tight">Tratamentos</span>
        </a>
        <a href="#diferenciais" className="flex flex-col items-center gap-1 text-textPrimary/40 hover:text-primary p-2 flex-1">
          <Award size={22} strokeWidth={2} />
          <span className="text-[10px] font-bold tracking-tight">Diferenciais</span>
        </a>
        <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 flex-1 relative -top-3">
          <div className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/40 flex items-center justify-center">
            <WhatsAppIcon size={24} />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#25D366]">Agendar</span>
        </a>
        <a href="#casos-clinicos" className="flex flex-col items-center gap-1 text-textPrimary/40 hover:text-primary p-2 flex-1">
          <Image size={22} strokeWidth={2} />
          <span className="text-[10px] font-bold tracking-tight">Casos</span>
        </a>
        <a href="#dicas" className="flex flex-col items-center gap-1 text-textPrimary/40 hover:text-primary p-2 flex-1">
          <Lightbulb size={22} strokeWidth={2} />
          <span className="text-[10px] font-bold tracking-tight">Dicas</span>
        </a>
      </div>

    {/* Lightbox / Modal de Imagem */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Caso Clínico Ampliado"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na própria imagem
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
