import React from 'react';
import { Phone, ShieldCheck, HeartPulse, Smile, ChevronRight, CheckCircle, Clock, MapPin, ArrowRight, Sparkles, Activity } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

function App() {


  const provaTecnica = [
    "/prova-tecnica/drromulocosta_1550175177_1979335307528357733_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1554921941_2019154053925570384_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1559334909_2056172710161878768_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1563910496_2094555518063592774_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1564243579_2097349619683930857_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1570740858_2151852745484573532_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1625229686_2608938164291578433_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1628712318_2638152598203233049_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1630679892_2654657801878366718_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1630679892_2654657801886631393_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1630679892_2654657801903484594_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1666997443_2959311500704913254_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1729605338_3484504589942219133_10853754012.jpg",
    "/prova-tecnica/drromulocosta_1763397814_3767976429108410575_10853754012.jpg"
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-textPrimary">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-oficial.jpg" 
                alt="Logo Dr. Rômulo Costa" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primaryLight" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primaryDark leading-tight">Dr. Rômulo Costa</span>
                <span className="text-xs font-medium text-primary tracking-wide">Odontologia | CROSP 101.185</span>
              </div>
            </div>
            <div className="hidden md:flex">
              <a 
                href="https://api.whatsapp.com/send?phone=5512974071990" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 min-h-[48px]"
              >
                <Phone size={18} />
                (12) 97407-1990
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primaryLight/30 to-background py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-primaryDark font-semibold text-sm mb-6 border border-primaryLight/50">
                <Smile size={18} className="text-primary" /> Especialista em Ortodontia
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primaryDark leading-tight mb-6">
                Você é feliz com o seu sorriso?
              </h1>
              
              <p className="text-lg md:text-xl text-textPrimary/80 mb-8 leading-relaxed">
                Muitos pacientes reclamam do seu sorriso e dizem que foram adiando o tratamento por terem <strong className="text-primaryDark">medo de dentista</strong>. Não cometa o mesmo erro! Apenas procure um bom profissional e recupere sua autoestima.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5512974071990" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20 min-h-[48px]"
                >
                  Agendar minha avaliação
                  <ChevronRight size={20} />
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-textPrimary/70">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-full shadow-sm"><ShieldCheck size={20} className="text-primary" /></div>
                  Atendimento Premium
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-full shadow-sm"><HeartPulse size={20} className="text-primary" /></div>
                  Tecnologia 3D
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative hidden lg:block">
               {/* Decorative background shape */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primaryLight rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
               
               <div className="relative rounded-3xl shadow-2xl bg-white p-8 border-4 border-white aspect-square flex items-center justify-center">
                  <img src="/logo-oficial.jpg" alt="Clínica Sorriso" className="w-full h-full object-contain opacity-90 rounded-2xl" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Procedimentos - Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryDark mb-4">Tratamentos Especializados</h2>
            <p className="text-textPrimary/70 text-lg">Oferecemos uma odontologia completa para transformar a sua saúde bucal e a estética do seu sorriso com máxima previsibilidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
            {/* Item 1 - Ortodontia */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-primaryLight/10 p-8 border border-primaryLight/20 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Smile size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primaryDark mb-3">Ortodontia</h3>
                <p className="text-textPrimary/80 leading-relaxed max-w-md">Especialista em alinhamento perfeito. Trabalhamos com os aparelhos mais modernos e discretos do mercado para garantir um sorriso simétrico no menor tempo possível.</p>
              </div>
              <a href="https://api.whatsapp.com/send?phone=5512974071990" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-primaryDark transition-colors">Saber mais <ArrowRight size={18} /></a>
            </div>

            {/* Item 2 - Implantes */}
            <div className="md:col-span-2 rounded-3xl bg-white shadow-sm p-8 border border-gray-100 flex flex-col justify-between hover:border-primaryLight/50 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primaryDark mb-2">Implantes</h3>
                  <p className="text-textPrimary/70 text-sm leading-relaxed">Recupere a função mastigatória e a estética com implantes seguros e duradouros.</p>
                </div>
                <div className="w-12 h-12 bg-primaryLight/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
              </div>
            </div>

            {/* Item 3 - Clareamento */}
            <div className="rounded-3xl bg-primary text-white p-8 flex flex-col justify-between hover:bg-primaryDark transition-all group">
              <div>
                <Sparkles size={32} className="mb-4 opacity-80 group-hover:opacity-100 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Clareamento</h3>
                <p className="text-white/80 text-sm">Dentes brancos e iluminados com segurança e sem dor.</p>
              </div>
            </div>

            {/* Item 4 - Endodontia */}
            <div className="rounded-3xl bg-white shadow-sm p-8 border border-gray-100 flex flex-col justify-between hover:border-primaryLight/50 hover:shadow-md transition-all group">
               <div className="w-10 h-10 bg-primaryLight/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:rotate-12 transition-transform">
                  <Activity size={20} />
                </div>
              <h3 className="text-lg font-bold text-primaryDark mb-1">Endodontia</h3>
              <p className="text-textPrimary/70 text-sm">Tratamento de canal moderno e humanizado.</p>
            </div>
            
             {/* Item 5 - Próteses */}
             <div className="rounded-3xl bg-white shadow-sm p-8 border border-gray-100 flex flex-col justify-between hover:border-primaryLight/50 hover:shadow-md transition-all group">
               <div className="w-10 h-10 bg-primaryLight/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:rotate-12 transition-transform">
                  <CheckCircle size={20} />
                </div>
              <h3 className="text-lg font-bold text-primaryDark mb-1">Próteses</h3>
              <p className="text-textPrimary/70 text-sm">Materiais de alta estética e resistência.</p>
            </div>

             {/* Item 6 - Clínico Geral */}
             <div className="rounded-3xl bg-primaryLight/20 p-8 flex flex-col justify-between hover:bg-primaryLight/30 transition-all group">
              <h3 className="text-lg font-bold text-primaryDark mb-1">Clínico Geral</h3>
              <p className="text-textPrimary/70 text-sm">Prevenção, limpeza e saúde bucal contínua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primaryDark mb-12">Por que escolher o Dr. Rômulo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primaryLight/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary"><HeartPulse size={32} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Tecnologia 3D Avançada</h4>
              <p className="text-textPrimary/70 leading-relaxed">Diagnósticos precisos através de escaneamento digital e modelagem 3D, eliminando moldagens desconfortáveis e garantindo resultados previsíveis.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primaryLight/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary"><Smile size={32} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Conforto Absoluto</h4>
              <p className="text-textPrimary/70 leading-relaxed">Ambiente preparado para reduzir a ansiedade. Nosso foco principal é em quem tem medo de dentista, garantindo procedimentos humanizados.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primaryLight/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary"><ShieldCheck size={32} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Segurança Clínica</h4>
              <p className="text-textPrimary/70 leading-relaxed">Biossegurança rigorosa e utilização dos melhores materiais odontológicos disponíveis mundialmente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Técnica (14 imagens) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-primaryDark mb-2">Sorrisos Transformados</h2>
              <p className="text-textPrimary/70 text-lg">Confira alguns dos resultados clínicos incríveis que realizamos em nossa clínica.</p>
            </div>
            <a href="https://instagram.com/drromulocosta" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primaryLight/20 text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
              <InstagramIcon size={20} />
              Mais no Instagram
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {provaTecnica.map((imgSrc, index) => (
              <div key={index} className="bg-background rounded-2xl aspect-square overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <img src={imgSrc} alt={`Prova Técnica ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Dicas do Dr. Rômulo (Extraídas das Imagens) */}
      <section className="py-24 bg-primaryLight/10 border-t border-primaryLight/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryDark mb-4">Dicas de Ouro para o seu Sorriso</h2>
            <p className="text-textPrimary/70 text-lg">Informações valiosas e práticas que ajudam você a cuidar melhor da sua saúde bucal no dia a dia.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primaryLight/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primaryLight/20 rounded-xl flex items-center justify-center text-primary mb-6"><CheckCircle size={24} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Combate ao Mau Hálito</h4>
              <ul className="text-textPrimary/70 text-sm space-y-2">
                <li>• <strong>Beba muita água:</strong> evita a boca seca.</li>
                <li>• <strong>Escove a língua:</strong> foco das bactérias.</li>
                <li>• <strong>Use fio dental:</strong> sempre após refeições.</li>
                <li>• <strong>Dieta:</strong> cuidado com alho e cebola.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primaryLight/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primaryLight/20 rounded-xl flex items-center justify-center text-primary mb-6"><ShieldCheck size={24} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">O Poder do Fio Dental</h4>
              <p className="text-textPrimary/70 text-sm leading-relaxed">
                Você sabia que quando não usamos fio dental, deixamos de limpar <strong>35% da superfície</strong> do dente? Ele é essencial para remover a placa bacteriana onde a escova jamais alcança.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primaryLight/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primaryLight/20 rounded-xl flex items-center justify-center text-primary mb-6"><Clock size={24} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Troca da Escova</h4>
              <p className="text-textPrimary/70 text-sm leading-relaxed">
                Troque a sua escova a cada <strong>3 meses</strong> ou ao notar desgaste nas cerdas. Escovas velhas acumulam bactérias e perdem a eficiência na remoção da placa bacteriana.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primaryLight/50 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primaryLight/20 rounded-xl flex items-center justify-center text-primary mb-6"><Smile size={24} /></div>
              <h4 className="text-xl font-bold text-primaryDark mb-4">Cuidados c/ a Prótese</h4>
              <p className="text-textPrimary/70 text-sm leading-relaxed">
                Para sua prótese removível durar muito mais, higienize diariamente com escovas macias adequadas e evite pastas muito abrasivas que possam arranhar a resina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Completo */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            
            {/* Branding */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo-oficial.jpg" alt="Logo" className="h-14 w-14 rounded-full object-cover border-2 border-primaryLight" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-primaryDark">Dr. Rômulo Costa</span>
                  <span className="text-xs font-medium text-primary">CROSP 101.185</span>
                </div>
              </div>
              <p className="text-textPrimary/70 text-sm leading-relaxed mb-6">
                Odontologia estética e reabilitação de alto padrão com foco absoluto no bem-estar e conforto do paciente.
              </p>
            </div>

            {/* Endereço & GPS */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-primaryDark mb-4 flex items-center gap-2"><MapPin size={18} className="text-primary"/> Localização</h4>
              <p className="text-textPrimary/70 text-sm leading-relaxed mb-4">
                Rua Icatú, 530, sala 13<br />
                Parque Industrial<br />
                São José dos Campos (SP)<br />
                CEP: 12237-010
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:text-primaryDark underline underline-offset-4">Abrir no Google Maps</a>
                <a href="https://waze.com/ul?q=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010" target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:text-primaryDark underline underline-offset-4">Navegar pelo Waze</a>
              </div>
            </div>

            {/* Contatos & Horários */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-primaryDark mb-4 flex items-center gap-2"><Clock size={18} className="text-primary"/> Contato e Horários</h4>
              <ul className="space-y-3 text-sm text-textPrimary/70 mb-6">
                <li>Seg a Sex: 08:00 às 18:00</li>
                <li>Fixo: (12) 3933-0821</li>
                <li>WhatsApp: (12) 97407-1990</li>
              </ul>
              <div className="flex gap-4">
                <a href="https://instagram.com/drromulocosta" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primaryLight/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5512974071990" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primaryLight/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Phone size={18} />
                </a>
              </div>
            </div>

          </div>
          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="text-textPrimary/50 text-xs">
              © {new Date().getFullYear()} Dr. Rômulo Costa Odontologia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=5512974071990" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <Phone size={28} className="relative z-10" />
      </a>

    </div>
  );
}

export default App;
