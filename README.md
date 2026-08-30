# IronCore

Landing page responsiva para uma academia fictícia premium. O projeto apresenta programas de treino, grade de aulas, planos, equipe, canais de contato e fluxos interativos de reserva e acesso do aluno.

## Índice

- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Scripts](#scripts)
- [Navegação e fluxos](#navegação-e-fluxos)
- [Persistência e limitações](#persistência-e-limitações)
- [Melhorias futuras](#melhorias-futuras)

## Demonstração

O site é composto por uma página inicial com as seções de treinos, programas, aulas, agenda, treinadores, planos e contato. Páginas institucionais e a emissão de certificado usam rotas baseadas em hash, sem dependência de um roteador externo.

## Funcionalidades

- Navegação suave entre as seções da página inicial.
- Cabeçalho fixo com ações para acesso do aluno e agendamento de visita.
- Catálogo de treinos, programas e aulas com horários e instrutores.
- Modal de reserva preenchido dinamicamente pela aula, programa ou plano selecionado.
- Modal de planos com encaminhamento direto para a reserva.
- Formulário de contato com estado de confirmação após o envio.
- Modal de acesso da área do aluno com confirmação simulada.
- Emissão de certificado de uso com o nome informado pelo usuário.
- Páginas institucionais de academia, professores, dúvidas frequentes, carreiras, privacidade, cookies e termos.
- Banner de consentimento de cookies, com a escolha armazenada no navegador.
- Animações de revelação acionadas durante a rolagem da página.
- Layout responsivo para telas menores.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| [React 19](https://react.dev/) | Construção dos componentes e gerenciamento de estado da interface. |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e geração do build de produção. |
| CSS puro | Estilos, responsividade, animações e identidade visual. |
| JavaScript | Regras de interação, modais, formulários e rotas por hash. |
| Oxlint | Verificação estática do código. |

## Estrutura do projeto

```text
driblle/
|- public/             # Arquivos públicos servidos sem processamento
|- src/
|  |- assets/          # Recursos locais da aplicação
|  |- App.jsx          # Tela principal, dados e fluxos interativos
|  |- App.css          # Estilos dos componentes e seções
|  |- index.css        # Estilos globais
|  `- main.jsx         # Ponto de entrada do React
|- index.html          # Documento HTML base
|- package.json        # Dependências e scripts
`- vite.config.js      # Configuração do Vite
```

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior.
- npm 10 ou superior, instalado junto ao Node.js.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd driblle
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá a URL local no terminal, normalmente `http://localhost:5173`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor Vite com atualização automática. |
| `npm run build` | Gera os arquivos otimizados de produção em `dist/`. |
| `npm run preview` | Serve localmente o último build de produção. |
| `npm run lint` | Executa o Oxlint nos arquivos do projeto. |

## Navegação e fluxos

### Seções principais

Os links do menu usam âncoras para navegar pela página inicial:

| Seção | Âncora |
| --- | --- |
| Início | `#inicio` |
| Treinos | `#treinos` |
| Aulas | `#aulas` |
| Planos | `#planos` |
| Contato | `#contato` |

### Páginas internas

Os links do rodapé atualizam o hash da URL. O componente principal identifica esse hash e exibe o conteúdo institucional correspondente.

| Página | URL |
| --- | --- |
| A academia | `#academia` |
| Professores | `#professores` |
| Dúvidas frequentes | `#duvidas` |
| Trabalhe conosco | `#trabalhe` |
| Política de privacidade | `#privacidade` |
| Política de cookies | `#cookies` |
| Termos de uso | `#termos` |
| Certificado de uso | `#certificado` |

### Reserva de aulas

Os botões de agendamento abrem um formulário modal. O item selecionado é incluído no campo de aula ou atendimento. Após o envio, a interface mostra uma confirmação e permite encerrar o modal.

### Cookies

Ao escolher uma opção no banner, a decisão é salva na chave `ironcore-cookie-choice` do `localStorage`. Enquanto essa chave existir, o banner não será exibido novamente. Para testá-lo outra vez, remova a chave pelo painel de armazenamento do navegador.

## Persistência e limitações

Esta é uma interface de demonstração. Os formulários de reserva, contato e acesso não enviam dados para um servidor, e as confirmações são controladas apenas pelo estado do React durante a sessão atual.

O certificado é gerado visualmente com o nome preenchido e a data local do navegador. Ele não é um documento validado, não cria arquivo para download e não é persistido.

As fotos da equipe e do destaque principal são carregadas do Unsplash. Para uso em produção, substitua-as por imagens próprias, com direitos de uso adequados e, preferencialmente, otimizadas localmente.

## Melhorias futuras

- Integrar os formulários a uma API com validação e armazenamento dos dados.
- Implementar autenticação real para a área do aluno.
- Persistir reservas, usuários e certificados em banco de dados.
- Adicionar geração e download de certificado em PDF.
- Substituir dados de exemplo por conteúdo gerenciado em CMS ou API.
- Incluir testes de componentes, fluxos de formulário e acessibilidade.
- Otimizar imagens e adicionar uma estratégia de carregamento progressivo.

## Licença

Projeto desenvolvido para fins educacionais e de portfólio.
