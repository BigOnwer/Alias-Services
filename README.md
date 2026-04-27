<div align="center">

# 💼 Alias Services

### Dashboard Financeiro Inteligente com Controle por Cargo

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

**[🚀 Demo ao vivo](https://alias-services.vercel.app)** • **[📋 Reportar Bug](https://github.com/BigOnwer/Alias-Services/issues)** • **[💡 Sugerir Feature](https://github.com/BigOnwer/Alias-Services/issues)**

</div>

---

## 📖 Sobre o Projeto

O **Alias Services** é um dashboard financeiro SaaS com foco em gestão de times e controle de acesso por cargo. A aplicação oferece uma visão centralizada das finanças, atividades e metas da equipe — com cada membro visualizando apenas o que é relevante para a sua função.

> ⚠️ **Status:** Em desenvolvimento ativo. A versão atual é uma base funcional. Novos módulos estão sendo construídos.

---

## ✨ Funcionalidades

### ✅ Disponíveis
- 🔐 **Autenticação completa** via NextAuth.js (login, registro, sessões seguras)
- 📊 **Dashboard principal** com visão geral financeira e gráficos interativos
- 💳 **Integração com Stripe** para gestão de planos e pagamentos
- 🎨 **Tema claro/escuro** com suporte a preferências do sistema
- 📱 **Interface responsiva** com componentes shadcn/ui + Radix UI
- 📧 **Envio de e-mails** com Nodemailer
- 🔒 **Controle de acesso** baseado em cargo (role-based)

### 🚧 Em Desenvolvimento
- 📈 **Relatórios** — exportação e visualização detalhada de dados financeiros
- 🎯 **Metas** — definição e acompanhamento de objetivos por equipe
- 👥 **Equipes** — gerenciamento de times, membros e permissões
- ✅ **Atividades Pendentes** — tarefas e notificações filtradas por cargo

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS + shadcn/ui |
| **Componentes UI** | Radix UI + Lucide React |
| **ORM / Banco** | Prisma |
| **Autenticação** | NextAuth.js v4 |
| **Pagamentos** | Stripe |
| **Formulários** | React Hook Form + Zod |
| **Gráficos** | Recharts + React Google Charts |
| **Notificações** | Sonner |
| **E-mail** | Nodemailer |
| **HTTP Client** | Axios |
| **Deploy** | Vercel |

---

## 🗂️ Estrutura do Projeto

```
alias-services/
├── app/                  # Rotas e páginas (Next.js App Router)
├── components/           # Componentes reutilizáveis
├── Contexts/             # Context API (estado global)
├── hooks/                # Custom hooks
├── lib/                  # Utilitários, auth, configurações
├── prisma/               # Schema e migrations do banco de dados
├── public/               # Assets estáticos
├── utils/                # Funções auxiliares
├── assets/               # Recursos visuais
└── config.ts             # Configurações globais da aplicação
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Banco de dados compatível com Prisma (PostgreSQL recomendado)
- Conta no Stripe (para funcionalidades de pagamento)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/BigOnwer/Alias-Services.git
cd Alias-Services

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# 4. Execute as migrations do banco
npx prisma migrate dev

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de Dados
DATABASE_URL="postgresql://user:password@localhost:5432/alias_services"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="seu_secret_aqui"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# E-mail (Nodemailer)
EMAIL_HOST="smtp.exemplo.com"
EMAIL_PORT=587
EMAIL_USER="seu@email.com"
EMAIL_PASS="sua_senha"
```

---

## 📊 Módulos Planejados

```
Dashboard
├── 📈 Relatórios
│   ├── Receitas e despesas por período
│   ├── Exportação em PDF/Excel
│   └── Comparativos mensais
│
├── 🎯 Metas
│   ├── Definição por equipe ou cargo
│   ├── Progresso em tempo real
│   └── Alertas de prazo
│
├── 👥 Equipes
│   ├── Criação e gerenciamento de times
│   ├── Atribuição de cargos e permissões
│   └── Visão consolidada por equipe
│
└── ✅ Atividades Pendentes
    ├── Tarefas filtradas por cargo
    ├── Notificações e lembretes
    └── Histórico de atividades
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se quiser ajudar no desenvolvimento:

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ☕ por **[Gustavo Leal](https://github.com/BigOnwer)**

</div>
