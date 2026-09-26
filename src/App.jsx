import React from 'react';
import { Phone, ShieldCheck, HeartPulse, ChevronRight, CheckCircle, Clock, MapPin, ArrowRight, Sparkles, Activity, PlusCircle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.11 2.89A10.02 10.02 0 0 0 12 0a10 10 0 0 0-8.52 15.26L2 22l6.9-1.42A9.95 9.95 0 0 0 12 20a10 10 0 0 0 9.11-17.11z"></path>
    <path d="M16.5 13.5c-.28-.14-1.63-.8-1.88-.89-.25-.09-.44-.14-.62.14-.19.28-.72.89-.88 1.08-.16.19-.31.21-.59.07-.28-.14-1.16-.43-2.21-1.37-.82-.74-1.37-1.65-1.53-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.23-.54-.46-.47-.62-.48h-.53c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39 0 1.41 1.03 2.77 1.17 2.96.14.19 2.02 3.09 4.89 4.33 2.87 1.24 2.87.82 3.39.77.52-.05 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z"></path>
  </svg>
);

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
    <div className="min-h-screen bg-background font-sans text-textPrimary scroll-smooth">
      {/* Navbar (Nielsen Heuristics: Clear Navigation & Consistency) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100"
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
                href="https://api.whatsapp.com/send?phone=5512974071990" 
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
      <section className="relative bg-gradient-to-b from-primaryLight/20 via-background to-background pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
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
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-primaryDark font-semibold text-sm mb-8 border border-primaryLight/50">
                <Award size={18} className="text-primary" /> Especialista em Ortodontia
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryDark leading-[1.1] mb-6">
                Você é feliz com o <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark">seu sorriso?</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-textPrimary/80 mb-10 leading-relaxed">
                Muitos pacientes reclamam do seu sorriso e dizem que foram adiando o tratamento por terem <strong className="text-primaryDark">medo de dentista</strong>. Não cometa o mesmo erro! Apenas procure um bom profissional e recupere sua autoestima.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://api.whatsapp.com/send?phone=5512974071990" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primaryDark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  Agendar minha avaliação
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
              
              <motion.div variants={fadeUp} className="mt-12 flex items-center gap-8 text-sm font-semibold text-textPrimary/70">
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
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-gradient-to-tr from-primary to-primaryLight rounded-[3rem] opacity-20 scale-105"
               ></motion.div>
               
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
              { icon: Activity, title: "Ortodontia", desc: "Aparelhos modernos e discretos para um sorriso simétrico e perfeito no menor tempo possível." },
              { icon: ShieldCheck, title: "Implantes", desc: "Recupere sua mastigação e estética com implantes altamente seguros, previsíveis e duradouros." },
              { icon: Sparkles, title: "Clareamento", desc: "Técnicas avançadas para dentes brancos e iluminados, priorizando sua segurança e conforto." },
              { icon: HeartPulse, title: "Endodontia", desc: "Tratamento de canal moderno, rápido e humanizado, priorizando sempre o alívio imediato da dor." },
              { icon: CheckCircle, title: "Próteses", desc: "Reabilitação oral completa com materiais de alta estética que devolvem a naturalidade do sorriso." },
              { icon: PlusCircle, title: "Clínico Geral", desc: "Foco na prevenção, limpeza profissional e manutenção contínua para sua saúde bucal em longo prazo." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-primaryDark">{item.title}</h3>
                </div>
                <p className="text-textPrimary/70 font-medium leading-relaxed">{item.desc}</p>
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
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-3">Sorrisos Transformados</h2>
              <p className="text-textPrimary/70 text-lg">Confira alguns dos resultados clínicos incríveis que realizamos em nossa clínica.</p>
            </div>
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-4">Dicas de Ouro para o seu Sorriso</h2>
            <p className="text-textPrimary/70 text-lg">Informações valiosas e práticas que ajudam você a cuidar melhor da sua saúde bucal no dia a dia.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: CheckCircle, title: "Combate ao Mau Hálito", content: <ul className="text-textPrimary/70 text-sm space-y-3 text-justify"><li>• <strong>Beba muita água:</strong> evita a boca seca.</li><li>• <strong>Escove a língua:</strong> foco das bactérias.</li><li>• <strong>Use fio dental:</strong> sempre após refeições.</li><li>• <strong>Dieta:</strong> cuidado com alho e cebola.</li></ul> },
              { icon: ShieldCheck, title: "O Poder do Fio Dental", content: <p className="text-textPrimary/70 text-sm leading-relaxed text-justify">Você sabia que quando não usamos fio dental, deixamos de limpar <strong>35% da superfície</strong> do dente? Ele é essencial para remover a placa bacteriana onde a escova jamais alcança.</p> },
              { icon: Clock, title: "Troca da Escova", content: <p className="text-textPrimary/70 text-sm leading-relaxed text-justify">Troque a sua escova a cada <strong>3 meses</strong> ou ao notar desgaste nas cerdas. Escovas velhas acumulam bactérias e perdem a eficiência na remoção da placa bacteriana.</p> },
              { icon: Award, title: "Cuidados c/ a Prótese", content: <p className="text-textPrimary/70 text-sm leading-relaxed text-justify">Para sua prótese removível durar muito mais, higienize diariamente com escovas macias adequadas e evite pastas muito abrasivas que possam arranhar a resina.</p> }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={26} strokeWidth={1.5} />
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
      <footer id="contato" className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            
            {/* Branding */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-8">
                <img src="/logo-oficial.jpg" alt="Logo" className="h-16 w-16 rounded-full object-cover border-2 border-primaryLight shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-extrabold text-2xl text-primaryDark">Dr. Rômulo Costa</span>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">CROSP 101.185</span>
                </div>
              </div>
              <p className="text-textPrimary/70 text-sm leading-relaxed mb-6 font-medium">
                Odontologia estética e reabilitação de alto padrão com foco absoluto no bem-estar e conforto do paciente.
              </p>
            </div>

            {/* Endereço & GPS */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-lg text-primaryDark mb-6 flex items-center gap-3"><MapPin size={20} className="text-primary"/> Localização</h4>
              <p className="text-textPrimary/70 text-sm leading-relaxed mb-6">
                Rua Icatú, 530, sala 13<br />
                Parque Industrial<br />
                São José dos Campos (SP)<br />
                CEP: 12237-010
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:text-primaryDark flex items-center gap-1 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> Abrir no Google Maps</a>
                <a href="https://waze.com/ul?q=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:text-primaryDark flex items-center gap-1 group"><ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> Navegar pelo Waze</a>
              </div>
            </div>

            {/* Contatos & Horários */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-lg text-primaryDark mb-6 flex items-center gap-3"><Clock size={20} className="text-primary"/> Contato e Horários</h4>
              <ul className="space-y-4 text-sm text-textPrimary/70 mb-8 font-medium">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Seg a Sex:</span> <span className="font-bold text-primaryDark">08:00 às 18:00</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fixo:</span> <span className="font-bold text-primaryDark">(12) 3933-0821</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>WhatsApp:</span> <span className="font-bold text-primaryDark">(12) 97407-1990</span></li>
              </ul>
              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://instagram.com/drromulocosta" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primaryLight/20 text-primary flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-primaryDark hover:text-white transition-all shadow-sm">
                  <InstagramIcon size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://api.whatsapp.com/send?phone=5512974071990" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primaryLight/20 text-primary flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-primaryDark hover:text-white transition-all shadow-sm">
                  <WhatsAppIcon size={20} />
                </motion.a>
              </div>
            </div>

          </div>
          <div className="border-t border-gray-100 pt-8 text-center flex flex-col items-center justify-center">
            <p className="text-textPrimary/40 text-sm font-medium">
              © {new Date().getFullYear()} Dr. Rômulo Costa Odontologia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://api.whatsapp.com/send?phone=5512974071990" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center group"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <WhatsAppIcon size={28} className="relative z-10" />
      </motion.a>

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
