import { useEffect, useState } from 'react'
import './App.css'

const features = [
  { title: 'Treinos avançados', text: 'Programas pensados para força, resistência e condicionamento físico.' },
  { title: 'Acompanhamento', text: 'Coaches especialistas para evoluir com segurança e consistência.' },
  { title: 'Estrutura premium', text: 'Academia com equipamentos modernos e ambiente motivador.' },
]

const classes = [
  { title: 'HIIT Burn', time: '06:30', instructor: 'Lucas', accent: 'orange' },
  { title: 'Musculação', time: '08:00', instructor: 'Ana', accent: 'purple' },
  { title: 'CrossFit', time: '12:15', instructor: 'João', accent: 'gold' },
  { title: 'Yoga Flow', time: '18:30', instructor: 'Marina', accent: 'green' },
]

const schedule = [
  { day: 'Segunda', slot: 'Funcional + Cardio', time: '18:00' },
  { day: 'Terça', slot: 'Força total', time: '19:00' },
  { day: 'Quarta', slot: 'Box + HIIT', time: '17:30' },
  { day: 'Sexta', slot: 'Treino de performance', time: '18:45' },
]

const trainers = [
  { name: 'Rafael Costa', role: 'Personal trainer', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
  { name: 'Beatriz Lima', role: 'Coach de condicionamento', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80' },
]

const plans = [
  { title: 'Básico', price: 'R$ 79', description: 'Acesso ao espaço e aulas em grupo' },
  { title: 'Premium', price: 'R$ 149', description: 'Treino personalizado + acompanhamento' },
  { title: 'Elite', price: 'R$ 249', description: 'Consultoria completa e plano de performance' },
]

const trainingPrograms = [
  { title: 'Musculação', text: 'Força, hipertrofia e técnica para todos os níveis.', level: 'Todos os níveis' },
  { title: 'Funcional', text: 'Movimentos completos para mais energia no dia a dia.', level: 'Iniciante e intermediário' },
  { title: 'HIIT', text: 'Sessões intensas para acelerar o condicionamento.', level: 'Intermediário' },
  { title: 'Cross training', text: 'Potência, resistência e agilidade em uma rotina dinâmica.', level: 'Intermediário e avançado' },
  { title: 'Cardio', text: 'Bike, esteira e remo para desenvolver o fôlego.', level: 'Todos os níveis' },
  { title: 'Powerlifting', text: 'Agachamento, supino e levantamento com acompanhamento técnico.', level: 'Avançado' },
  { title: 'Mobilidade', text: 'Amplitude, estabilidade e prevenção para treinar melhor.', level: 'Todos os níveis' },
  { title: 'Emagrecimento', text: 'Plano progressivo com treino orientado e consistência.', level: 'Todos os níveis' },
]

const classCatalog = [
  { title: 'HIIT Burn', description: 'Circuito de alta intensidade para elevar o condicionamento.', time: '06:30', instructor: 'Lucas' },
  { title: 'Musculação guiada', description: 'Acompanhamento técnico para execução e evolução.', time: '08:00', instructor: 'Ana' },
  { title: 'CrossFit', description: 'Força e resistência em treinos constantemente variados.', time: '12:15', instructor: 'João' },
  { title: 'Yoga Flow', description: 'Respiração, flexibilidade e equilíbrio.', time: '18:30', instructor: 'Marina' },
  { title: 'Bike Indoor', description: 'Ritmo intenso e muita energia sobre duas rodas.', time: '07:15', instructor: 'Caio' },
  { title: 'Boxe', description: 'Técnica, coordenação e condicionamento no ringue.', time: '19:30', instructor: 'Renata' },
  { title: 'Pilates solo', description: 'Controle, postura e fortalecimento do centro do corpo.', time: '09:30', instructor: 'Clara' },
  { title: 'Alongamento', description: 'Recupere o corpo e ganhe liberdade de movimento.', time: '20:15', instructor: 'Marina' },
]

const footerPages = {
  academia: { eyebrow: 'A IronCore', title: 'Uma academia feita para evoluir.', intro: 'Somos um espaço de treino, técnica e consistência. Cada aluno encontra orientação para construir uma rotina possível e duradoura.', sections: [['Nossa estrutura', 'Equipamentos selecionados, áreas de treino livre, salas para aulas e profissionais disponíveis durante todo o horário de funcionamento.'], ['Nossa proposta', 'Transformar objetivos em hábitos por meio de treino bem orientado, acompanhamento próximo e uma comunidade que se move junto.'], ['Horários', 'Segunda a sexta, das 6h às 22h. Sábados, das 8h às 14h.']] },
  professores: { eyebrow: 'Time IronCore', title: 'Profissionais que acompanham de perto.', intro: 'Nossa equipe une experiência técnica e escuta para montar uma jornada segura, desafiadora e adequada ao seu momento.', sections: [['Avaliação inicial', 'Todo aluno começa com uma conversa de objetivos e uma orientação de treino.'], ['Acompanhamento', 'Professores presentes na sala para corrigir movimentos, ajustar cargas e orientar a evolução.'], ['Especialidades', 'Musculação, condicionamento, mobilidade, treinamento funcional, força e aulas coletivas.']] },
  duvidas: { eyebrow: 'Dúvidas frequentes', title: 'Tudo o que você precisa saber.', intro: 'Confira as respostas rápidas antes de iniciar sua experiência IronCore.', sections: [['Preciso ter experiência?', 'Não. Nossa equipe orienta desde o primeiro treino e adapta os exercícios ao seu nível.'], ['Posso fazer uma aula experimental?', 'Sim. Agende uma aula experimental pelo formulário de reserva e retornaremos para confirmar o horário.'], ['Como funcionam os planos?', 'Você escolhe a modalidade mais adequada à sua rotina. Não há taxa para a avaliação inicial.']] },
  trabalhe: { eyebrow: 'Carreiras', title: 'Construa sua jornada com a IronCore.', intro: 'Buscamos pessoas que tratam movimento, atendimento e evolução com seriedade.', sections: [['Vagas', 'Recepcionista, professor de musculação, instrutor de aulas e consultor comercial.'], ['Como se candidatar', 'Envie seu currículo e uma breve apresentação para talentos@ironcore.com.br.'], ['Nossa cultura', 'Trabalhamos com respeito, energia, responsabilidade e atenção real às pessoas.']] },
  privacidade: { eyebrow: 'Privacidade', title: 'Política de privacidade.', intro: 'A IronCore trata seus dados pessoais com transparência e apenas para finalidades necessárias ao atendimento e à prestação de serviços.', sections: [['Dados coletados', 'Nome, e-mail, telefone e informações enviadas voluntariamente nos formulários de contato e reserva.'], ['Finalidade do uso', 'Usamos esses dados para responder solicitações, confirmar reservas e comunicar informações relacionadas à academia.'], ['Seus direitos', 'Você pode solicitar acesso, correção, exclusão ou informações sobre o tratamento dos seus dados pelo e-mail privacidade@ironcore.com.br.']] },
  cookies: { eyebrow: 'Cookies', title: 'Política de cookies.', intro: 'Cookies são pequenos arquivos que ajudam o site a funcionar corretamente e podem melhorar sua experiência de navegação.', sections: [['Cookies necessários', 'Mantêm preferências essenciais, como sua escolha de consentimento, e não exigem autorização adicional.'], ['Cookies opcionais', 'Só são utilizados quando você os aceita. Eles ajudam a compreender como o site é utilizado.'], ['Gerenciar preferências', 'Você pode apagar cookies pelas configurações do navegador ou ajustar seu consentimento quando solicitado.']] },
  termos: { eyebrow: 'Termos de uso', title: 'Regras para usar nossos canais.', intro: 'Ao utilizar o site e enviar um formulário, você concorda com as condições abaixo.', sections: [['Uso do site', 'Os conteúdos têm finalidade informativa. A disponibilidade de aulas e serviços deve ser confirmada com a unidade.'], ['Reservas', 'O envio do formulário representa uma solicitação. A reserva é válida somente após confirmação da equipe IronCore.'], ['Responsabilidades', 'Informações de saúde relevantes devem ser comunicadas à equipe antes do início de qualquer atividade física.']] },
}

function InternalPage({ pageId, certificateName, certificateIssued, onCertificateNameChange, onIssueCertificate }) {
  if (pageId === 'certificado') {
    return (
      <section className="internal-page certificate-page">
        <p className="eyebrow">Área do aluno</p>
        <h1>Emita seu certificado de uso.</h1>
        <p className="internal-intro">Preencha o nome do aluno para gerar uma declaração de participação e utilização da estrutura IronCore.</p>
        <form className="certificate-form" onSubmit={onIssueCertificate}>
          <label>Nome completo do aluno<input value={certificateName} onChange={(event) => onCertificateNameChange(event.target.value)} required placeholder="Nome completo" /></label>
          <label>Período de referência<select defaultValue="2026"><option>2026</option><option>2025</option><option>2024</option></select></label>
          <button type="submit" className="nav-button primary">Emitir certificado</button>
        </form>
        {certificateIssued && <div className="certificate-issued"><span>IRONCORE</span><h2>Certificado de uso</h2><p>Certificamos que <strong>{certificateName}</strong> participou das atividades e utilizou a estrutura IronCore no período informado.</p><small>Documento emitido em {new Date().toLocaleDateString('pt-BR')}.</small></div>}
      </section>
    )
  }

  const content = footerPages[pageId]
  return (
    <section className="internal-page">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p className="internal-intro">{content.intro}</p>
      <div className="internal-content">
        {content.sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </div>
    </section>
  )
}

function App() {
  const [cookiesVisible, setCookiesVisible] = useState(() => localStorage.getItem('ironcore-cookie-choice') === null)
  const [reservation, setReservation] = useState({ open: false, className: 'Aula experimental' })
  const [reservationSent, setReservationSent] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const [page, setPage] = useState(() => window.location.hash.slice(1))
  const [certificateName, setCertificateName] = useState('')
  const [certificateIssued, setCertificateIssued] = useState(false)
  const [plansModalOpen, setPlansModalOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [loginSent, setLoginSent] = useState(false)

  useEffect(() => {
    function syncPage() {
      setPage(window.location.hash.slice(1))
    }

    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.hero-copy, .feature-card, .classes-section, .programs-section, .all-classes-section, .schedule-section, .trainers-section, .plans-section, .results-section, .contact-section, .internal-page, .footer')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [page])

  function saveCookieChoice(choice) {
    localStorage.setItem('ironcore-cookie-choice', choice)
    setCookiesVisible(false)
  }

  function openReservation(className = 'Aula experimental') {
    setReservation({ open: true, className })
    setReservationSent(false)
  }

  function closeReservation() {
    setReservation((current) => ({ ...current, open: false }))
  }

  function submitReservation(event) {
    event.preventDefault()
    setReservationSent(true)
  }

  function submitContact(event) {
    event.preventDefault()
    setContactSent(true)
  }

  function issueCertificate(event) {
    event.preventDefault()
    setCertificateIssued(true)
  }

  function submitLogin(event) {
    event.preventDefault()
    setLoginSent(true)
  }

  return (
    <div className="gym-shell">
      <header className="topbar">
        <div className="brand" aria-label="IronCore academy home">
          <span className="brand-mark">I</span>
          IronCore
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#inicio">Início</a>
          <a href="#treinos">Treinos</a>
          <a href="#aulas">Aulas</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-button ghost" onClick={() => { setLoginSent(false); setLoginModalOpen(true) }}>
            Entrar
          </button>
          <button type="button" className="nav-button primary" onClick={() => openReservation('Visita à IronCore')}>
            Agendar visita
          </button>
        </div>
      </header>

      <main>
        {page in footerPages || page === 'certificado' ? (
          <InternalPage
            pageId={page}
            certificateName={certificateName}
            certificateIssued={certificateIssued}
            onCertificateNameChange={setCertificateName}
            onIssueCertificate={issueCertificate}
          />
        ) : <>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Academia premium</p>
            <h1>Força, foco e resultado em cada treino.</h1>
            <p className="lede">
              Mais do que uma academia: um ambiente para transformar hábitos, fortalecer o corpo e elevar a performance.
            </p>

            <div className="cta-row">
              <button type="button" className="nav-button primary action-button" onClick={() => openReservation()}>
                Agendar aula
              </button>
              <button type="button" className="nav-button ghost action-button" onClick={() => setPlansModalOpen(true)}>
                Ver planos
              </button>
            </div>

            <div className="stats-row" aria-label="Fitness stats">
              <div>
                <strong>12k+</strong>
                <span>alunos</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>acesso</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>avaliação</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="Pessoa treinando em academia"
              />
              <div className="floating-badge badge-top">
                <span className="tiny-label">Treino do dia</span>
                <strong>Performance 45 min</strong>
              </div>
              <div className="floating-badge badge-bottom">
                <span>+ 320 kcal</span>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="classes-section" id="treinos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Treinos em destaque</p>
              <h2>Escolha sua rotina ideal.</h2>
            </div>
            <a href="#">Ver todas</a>
          </div>

          <div className="classes-grid">
            {classes.map((item) => (
              <article key={item.title} className={`class-card ${item.accent}`}>
                <div className="class-header">
                  <span className="pill">{item.time}</span>
                  <span className="class-instructor">{item.instructor}</span>
                </div>
                <h3>{item.title}</h3>
                <button type="button" onClick={() => openReservation(item.title)}>Reservar</button>
              </article>
            ))}
          </div>
        </section>

        <section className="programs-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Programas de treino</p>
              <h2>Treine para o seu objetivo.</h2>
            </div>
          </div>
          <div className="programs-grid">
            {trainingPrograms.map((program, index) => (
              <article key={program.title} className="program-card">
                <span>0{index + 1}</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <small>{program.level}</small>
                <button type="button" onClick={() => openReservation(program.title)}>Quero experimentar</button>
              </article>
            ))}
          </div>
        </section>

        <section className="all-classes-section" id="aulas">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Grade completa</p>
              <h2>Aulas para cada ritmo.</h2>
            </div>
            <a href="#contato">Tire suas dúvidas</a>
          </div>
          <div className="class-catalog">
            {classCatalog.map((item) => (
              <article key={item.title} className="catalog-item">
                <time>{item.time}</time>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <span>{item.instructor}</span>
                <button type="button" onClick={() => openReservation(item.title)}>Reservar</button>
              </article>
            ))}
          </div>
        </section>

        <section className="schedule-section">
          <div className="schedule-copy">
            <p className="eyebrow">Agendamento</p>
            <h2>Seus treinos organizados em um só lugar.</h2>
            <p>
              Veja os horários das aulas, escolha o melhor momento e reserve sua próxima sessão com praticidade.
            </p>
            <button type="button" className="nav-button primary" onClick={() => openReservation()}>Agendar agora</button>
          </div>

          <div className="schedule-grid">
            {schedule.map((item) => (
              <div key={item.day} className="schedule-item">
                <span>{item.day}</span>
                <strong>{item.slot}</strong>
                <em>{item.time}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="trainers-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nossos especialistas</p>
              <h2>Coaches que te impulsionam.</h2>
            </div>
          </div>

          <div className="trainers-grid">
            {trainers.map((trainer) => (
              <article key={trainer.name} className="trainer-card">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p>{trainer.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Planos</p>
              <h2>Escolha o melhor para sua rotina.</h2>
            </div>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article key={plan.title} className={`plan-card ${plan.title === 'Premium' ? 'featured-plan' : ''}`}>
                <span className="plan-tag">{plan.title}</span>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>
                <button type="button">Escolher</button>
              </article>
            ))}
          </div>
        </section>

        <section className="results-section">
          <div className="results-copy">
            <p className="eyebrow">Resultados reais</p>
            <h2>O seu próximo nível começa aqui.</h2>
            <p>Treino, acompanhamento e estrutura para você evoluir com constância.</p>
          </div>
          <div className="results-numbers" aria-label="Resultados da IronCore">
            <div><strong>10+</strong><span>anos de experiência</span></div>
            <div><strong>500+</strong><span>alunos ativos</span></div>
            <div><strong>15k</strong><span>treinos concluídos</span></div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div>
            <p className="eyebrow">Fale com a gente</p>
            <h2>Venha conhecer a IronCore.</h2>
          </div>
          <div className="contact-details">
            <p><strong>Endereço</strong> Rua da Performance, 180 - Centro</p>
            <p><strong>Atendimento</strong> Segunda a sexta, das 6h às 22h. Sábado, das 8h às 14h.</p>
            <p><strong>Contato</strong> (11) 99999-9999<br />contato@ironcore.com.br</p>
          </div>
          {contactSent ? (
            <p className="contact-success">Mensagem enviada. Retornaremos em breve.</p>
          ) : (
            <form className="contact-form" onSubmit={submitContact}>
              <input name="contactName" required aria-label="Nome" placeholder="Nome" />
              <input name="contactEmail" type="email" required aria-label="E-mail" placeholder="E-mail" />
              <textarea name="message" required aria-label="Mensagem" placeholder="Como podemos ajudar?" rows="3" />
              <button type="submit" className="nav-button primary">Enviar mensagem</button>
            </form>
          )}
        </section>
        </>}
      </main>

      <footer className="footer">
        <div className="footer-intro">
          <div className="brand footer-brand">
            <span className="brand-mark">I</span>
            IronCore
          </div>
          <p>Treino de verdade para uma evolução que permanece.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>IronCore</strong>
            <a href="#academia">A academia</a>
            <a href="#professores">Professores</a>
            <a href="#planos">Planos</a>
          </div>
          <div>
            <strong>Suporte</strong>
            <a href="#contato">Contato</a>
            <a href="#duvidas">Dúvidas frequentes</a>
            <a href="#trabalhe">Trabalhe conosco</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#privacidade">Política de privacidade</a>
            <a href="#cookies">Política de cookies</a>
            <a href="#termos">Termos de uso</a>
            <a href="#certificado">Certificado de uso</a>
          </div>
        </div>
        <p className="copyright">© 2026 IronCore. Todos os direitos reservados.</p>
      </footer>

      {cookiesVisible && (
        <aside className="cookie-banner" id="cookies" aria-label="Preferências de cookies">
          <div>
            <strong>Sua privacidade importa</strong>
            <p>Usamos cookies necessários para o funcionamento do site e, com sua autorização, para melhorar sua experiência. Consulte nossa <a id="privacidade" href="#privacidade">Política de Privacidade</a>.</p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-necessary" onClick={() => saveCookieChoice('necessary')}>Somente necessários</button>
            <button type="button" className="nav-button primary" onClick={() => saveCookieChoice('accepted')}>Aceitar cookies</button>
          </div>
        </aside>
      )}

      {reservation.open && (
        <div className="reservation-backdrop" role="presentation" onMouseDown={closeReservation}>
          <section className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Fechar formulário de reserva" onClick={closeReservation}>×</button>
            {reservationSent ? (
              <div className="reservation-success">
                <p className="eyebrow">Reserva solicitada</p>
                <h2>Estamos te esperando.</h2>
                <p>Recebemos seus dados e entraremos em contato para confirmar o melhor horário.</p>
                <button type="button" className="nav-button primary" onClick={closeReservation}>Concluir</button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Reserve seu horário</p>
                <h2 id="reservation-title">Comece seu treino.</h2>
                <p className="form-intro">Preencha seus dados e nossa equipe confirma sua reserva.</p>
                <form className="reservation-form" onSubmit={submitReservation}>
                  <label>
                    Nome completo
                    <input name="name" type="text" autoComplete="name" required placeholder="Seu nome" />
                  </label>
                  <label>
                    E-mail
                    <input name="email" type="email" autoComplete="email" required placeholder="voce@email.com" />
                  </label>
                  <label>
                    WhatsApp
                    <input name="phone" type="tel" autoComplete="tel" required placeholder="(00) 00000-0000" />
                  </label>
                  <label>
                    Aula ou atendimento
                    <select name="className" value={reservation.className} onChange={(event) => setReservation((current) => ({ ...current, className: event.target.value }))}>
                      <option>HIIT Burn</option>
                      <option>Musculação</option>
                      <option>CrossFit</option>
                      <option>Yoga Flow</option>
                      <option>Aula experimental</option>
                      <option>Visita à IronCore</option>
                    </select>
                  </label>
                  <label>
                    Melhor data
                    <input name="date" type="date" required />
                  </label>
                  <label className="consent-field">
                    <input name="privacy" type="checkbox" required />
                    <span>Li e concordo com a Política de Privacidade e o uso dos meus dados para este atendimento.</span>
                  </label>
                  <button type="submit" className="nav-button primary">Solicitar reserva</button>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      {plansModalOpen && (
        <div className="reservation-backdrop" role="presentation" onMouseDown={() => setPlansModalOpen(false)}>
          <section className="plans-modal" role="dialog" aria-modal="true" aria-labelledby="plans-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Fechar planos" onClick={() => setPlansModalOpen(false)}>×</button>
            <p className="eyebrow">Planos IronCore</p>
            <h2 id="plans-modal-title">Escolha como evoluir.</h2>
            <p className="form-intro">Planos flexíveis para encaixar o treino na sua rotina.</p>
            <div className="modal-plans-grid">
              {plans.map((plan) => (
                <article key={plan.title} className={plan.title === 'Premium' ? 'modal-plan featured-modal-plan' : 'modal-plan'}>
                  <span>{plan.title}</span>
                  <strong>{plan.price}<small>/mês</small></strong>
                  <p>{plan.description}</p>
                  <button type="button" onClick={() => { setPlansModalOpen(false); openReservation(`Plano ${plan.title}`) }}>Escolher plano</button>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      {loginModalOpen && (
        <div className="reservation-backdrop" role="presentation" onMouseDown={() => setLoginModalOpen(false)}>
          <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Fechar acesso" onClick={() => setLoginModalOpen(false)}>×</button>
            {loginSent ? (
              <div className="reservation-success">
                <p className="eyebrow">Acesso solicitado</p>
                <h2>Confira seu e-mail.</h2>
                <p>Enviamos as instruções para acessar a área do aluno.</p>
                <button type="button" className="nav-button primary" onClick={() => setLoginModalOpen(false)}>Concluir</button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Área do aluno</p>
                <h2 id="login-modal-title">Entre na sua rotina.</h2>
                <p className="form-intro">Informe seu e-mail para receber o acesso à sua área.</p>
                <form className="login-form" onSubmit={submitLogin}>
                  <label>E-mail<input type="email" autoComplete="email" required placeholder="voce@email.com" /></label>
                  <label>Senha<input type="password" autoComplete="current-password" required placeholder="Sua senha" /></label>
                  <button type="submit" className="nav-button primary">Entrar</button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
