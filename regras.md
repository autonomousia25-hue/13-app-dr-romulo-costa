# REGRAS DO PROJETO — LANDING PAGE PROFISSIONAL (SEM CARA DE IA)

## 1. OBJETIVO COMERCIAL
Landing page de altíssima conversão para venda de serviços premium de Odontologia, focada em captar pacientes para o consultório do Dr. Rômulo Costa e quebrar objeções (ex: medo de dentista).

## 2. DADOS PROFISSIONAIS E CONTEÚDO (CONTEÚDO OBRIGATÓRIO)
- **Profissional:** Dr. Rômulo Costa (Odontologia)
- **Registro:** CROSP 101.185
- **Especialidades (Serviços):** Especialista em Ortodontia, Clínico Geral, Implantes, Clareamento Dental, Endodontia (Canal) e Próteses.
- **Copy principal (Dor/Solução):** "Você é feliz com o seu sorriso? Muitos pacientes reclamam do seu sorriso e dizem que foram adiando o tratamento por terem medo de dentista. Não cometa o mesmo erro! Apenas procure um bom profissional e recupere sua autoestima."
- **Informações de Contato:**
  - Telefones: (12) 3933-0821 / WhatsApp: (12) 97407-1990
  - Link de Conversão (WhatsApp): `api.whatsapp.com/send?phone=5512974071990`
  - Endereço: Rua Icatú, 530, sala 13 - Parque Industrial, São José dos Campos (SP) - CEP: 12237-010
  - Link GPS (Google Maps): `https://www.google.com/maps/search/?api=1&query=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010`
  - Link GPS (Waze): `https://waze.com/ul?q=Rua+Icatu,+530+-+Parque+Industrial,+Sao+Jose+dos+Campos+-+SP,+12237-010`
  - Instagram: `@drromulocosta` (usar fotos da subpasta `public/prova-tecnica` para prova social).
  - Dicas e Avisos: Extrair conteúdo da pasta `public/avisos-dicas` para compor seções extras informativas.

## 3. DIRETRIZES DE DESIGN SYSTEM (UI UX PRO MAX SKILL)
- **Acionar a skill ui-ux-pro-max:** Para seleção automática da interface, respeitando a paleta oficial extraída da logo (Primária: Verde-Água/Teal `#63a3b4` | Fundo Clínico: `#F8FAFC` | Texto: Chumbo `#1E293B`).
- **Proibido terminantemente:** Gradientes roxos genéricos de IA e botões amadores.
- **Proibido:** Emojis como ícones (usar apenas *Lucide React Icons* profissionais).
- **Estrutura visual:** Bento Grid moderno destacando tratamentos e tecnologia 3D.
- **Uso da Logo:** A logo (`public/logo-oficial.jpg`) deve estar obrigatoriamente presente na Navbar (cabeçalho) e no Footer (rodapé), formatada de maneira circular (arredondada, estilo foto de perfil do Instagram).
- **Mobile-first:** Botões com altura mínima de 48px pro clique fácil do polegar.
- **Ponto de Conversão:** Botão flutuante de WhatsApp fixo com animação de pulso.

## 4. ARQUITETURA E TECNOLOGIAS
- **Stack:** React 18 com Vite.
- **Estilização:** Tailwind CSS (sem uso de classes genéricas de IA, garantindo design system sólido).
- **Ícones:** Lucide React Icons.
- **Hospedagem / Deploy:** Cloudflare Pages (inicialmente focado na geração de link provisório para avaliação e aprovação técnica do cliente).
- **Qualidade Visual:** Acabamento de agência premium, visual customizado "sem cara de IA".

## 5. ESTRUTURA DA LANDING PAGE (SEÇÕES)
1. **Hero Section (Impactante):** Navbar com logo circular. Proposta de valor clara (Copy: "Você é feliz com o seu sorriso?..."), com foco em quebrar a objeção do medo de dentista. Botão de Agendamento CTA forte (primário).
2. **Procedimentos (Bento Grid):** Layout moderno em Bento Grid listando as especialidades e serviços (Ortodontia, Implantes, Clareamento, Endodontia, Próteses, Clínico Geral).
3. **Diferenciais:** Foco em tecnologia 3D, conforto, e atendimento profissional de alta qualidade.
4. **Prova Social:** Espaço para fotos reais de pacientes/casos extraídos da pasta `public/prova-tecnica`.
5. **Rodapé (Footer) Completo:** Logo circular, endereço físico em texto, botões de Link GPS (Maps e Waze) para rota, telefones de contato e informações do CROSP.
6. **Global:** Botão flutuante do WhatsApp onipresente.
