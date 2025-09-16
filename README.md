<div align="center">

# 🚀 v0.diy

### *Build, Design, and Deploy AI-Powered React Components*

[![GitHub Stars](https://img.shields.io/github/stars/SujalXplores/v0.diy?style=for-the-badge&logo=github&color=yellow)](https://github.com/SujalXplores/v0.diy/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/SujalXplores/v0.diy?style=for-the-badge&logo=github&color=blue)](https://github.com/SujalXplores/v0.diy/network)
[![License](https://img.shields.io/github/license/SujalXplores/v0.diy?style=for-the-badge&color=green)](https://github.com/SujalXplores/v0.diy/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

<p align="center">
  <strong>A powerful, feature-rich clone of v0.dev with AI-driven component generation, real-time streaming, and multi-tenant authentication. Transform your ideas into beautiful React components with the power of AI!</strong>
</p>

<p align="center">
  <a href="#-features"><strong>🌟 Features</strong></a> •
  <a href="#-quick-start"><strong>⚡ Quick Start</strong></a> •
  <a href="#-deployment"><strong>🚀 Deployment</strong></a> •
  <a href="#-tech-stack"><strong>💻 Tech Stack</strong></a> •
  <a href="#-architecture"><strong>🏗️ Architecture</strong></a>
</p>

---

</div>

## 🚀 Deployment

Deploy your own instance of v0.diy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSujalXplores%2Fv0.diy&env=V0_API_KEY,AUTH_SECRET,POSTGRES_URL&envDescription=Learn+more+about+how+to+get+the+required+environment+variables&envLink=https%3A%2F%2Fgithub.com%2FSujalXplores%2Fv0.diy%23-environment-variables&project-name=v0-diy&repository-name=v0-diy&demo-title=v0.diy&demo-description=AI-powered+React+component+generator+with+authentication&demo-url=https%3A%2F%2Fv0-diy.vercel.app)

> **💡 Note**: Make sure to set up all environment variables during deployment for full functionality.

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# 🔐 Authentication Secret
# Generate with: openssl rand -base64 32
# Or visit: https://generate-secret.vercel.app/32
AUTH_SECRET=your-auth-secret-here

# 🗄️ Database Configuration
# PostgreSQL connection string
POSTGRES_URL=postgresql://user:password@localhost:5432/v0_diy
# For Vercel Postgres, use the connection string from your dashboard

# 🤖 v0 API Configuration
# Get your API key from https://v0.dev/chat/settings/keys
V0_API_KEY=your_v0_api_key_here

# 🌐 Optional: Custom API URL
# V0_API_URL=http://localhost:3001/v1
```

<details>
<summary><strong>📋 How to get environment variables</strong></summary>

1. **AUTH_SECRET**: Generate a secure random string for session encryption
2. **POSTGRES_URL**: Set up a PostgreSQL database (locally or cloud)
3. **V0_API_KEY**: Sign up at [v0.dev](https://v0.dev) and get your API key from settings
4. **V0_API_URL**: Optional, only needed if using a custom v0 API endpoint

</details>

## 🛠️ Database Setup

This project uses **PostgreSQL** with **Drizzle ORM** for robust data management:

```bash
# 1. 📝 Generate database schema
pnpm db:generate

# 2. 🚀 Run database migrations
pnpm db:migrate

# 3. 🔍 Optional: Open database studio
pnpm db:studio
```

## ⚡ Quick Start

Get up and running in minutes:

```bash
# 📦 Install dependencies
pnpm install

# 🔧 Set up environment variables (see above)
cp .env.example .env.local

# 🗄️ Set up database
pnpm db:migrate

# 🚀 Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and start building! 🎉

## 🌟 Features

<div align="center">

### ✨ **AI-Powered Development** • 🔄 **Real-time Streaming** • 🔐 **Multi-tenant Authentication**

</div>

### 🤖 Core AI Features

| Feature | Description |
|---------|-------------|
| **🎨 AI Component Generation** | Generate beautiful React components using natural language prompts |
| **⚡ Real-time Streaming** | Watch your components come to life with live streaming responses |
| **💭 AI Reasoning Display** | Visualize AI thought processes and decision-making |
| **🔍 Smart Search Integration** | Web search and repository search capabilities |
| **🩺 Code Diagnostics** | Automated code analysis and issue detection |
| **📂 File Operations** | Intelligent file reading and manipulation |
| **🎭 Design Inspiration** | AI-generated design ideas and inspiration |

### 👥 Authentication & User Management

<table>
<tr>
<td width="33%">

**🚶 Anonymous Access**
- ✅ 3 chats per day
- ✅ Instant start
- ❌ No data persistence

</td>
<td width="33%">

**👤 Guest Users**
- ✅ 5 chats per day
- ✅ Session persistence
- ✅ Auto-registration

</td>
<td width="33%">

**🔑 Registered Users**
- ✅ 50 chats per day
- ✅ Full data persistence
- ✅ Cross-device sync

</td>
</tr>
</table>

### 🎯 Advanced Features

- **🔒 Secure Authentication**: NextAuth.js with bcrypt password hashing
- **📊 Multi-tenant Architecture**: Isolated user data with ownership mapping
- **🚦 Smart Rate Limiting**: Different limits based on user type
- **💾 Chat History**: Persistent conversation management
- **🎨 Split-screen Interface**: Chat and preview panels side-by-side
- **🔄 Task Support**: Comprehensive support for all v0 Platform API task types
- **⚡ Performance Optimized**: Built with Next.js 15 and React 19
- **📱 Responsive Design**: Works beautifully on all devices

## 💻 Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|
| **⚛️ Frontend** | React 19, Next.js 15, TypeScript, Tailwind CSS |
| **🤖 AI Integration** | v0 SDK, AI SDK, @v0-sdk/react |
| **🗄️ Database** | PostgreSQL, Drizzle ORM, Vercel Postgres |
| **🔐 Authentication** | NextAuth.js, bcrypt-ts |
| **🎨 UI Components** | Radix UI, Lucide React, Embla Carousel |
| **⚡ Development** | Turbopack, TSX, Shiki, SWR |
| **🚀 Deployment** | Vercel, Docker-ready |

</div>

## 🎯 Usage Guide

### 🚀 Getting Started

1. **🔧 Environment Setup**: Configure your `.env.local` file with required variables
2. **🗄️ Database Migration**: Run `pnpm db:migrate` to set up your database
3. **▶️ Start Development**: Launch with `pnpm dev` or production with `pnpm start`

### 💬 Using the Application

#### 👤 **For Anonymous Users**
- Visit the homepage and start creating immediately
- No registration required
- 3 chats per day limit

#### 🆔 **For Registered Users**
- Create an account for persistent data
- Higher rate limits (50 chats/day)
- Cross-device synchronization

#### ⚡ **Pro Tips**
- Toggle **Streaming** in the header for real-time responses
- Use descriptive prompts for better AI-generated components
- Iterate on your designs through conversation
- All authenticated user chats are automatically saved

## 🏗️ Architecture

<div align="center">

### 🎯 **Clean Architecture** • 🔄 **Multi-tenant Design** • ⚡ **Streaming-first**

</div>

### 📁 Project Structure

```
v0.diy/
├── 🎨 app/                    # Next.js App Router
│   ├── 🔐 (auth)/            # Authentication pages
│   ├── 🔌 api/               # API routes
│   └── 💬 chats/             # Chat management
├── 🧩 components/            # Reusable components
│   ├── 🤖 ai-elements/      # AI-powered components
│   ├── 💬 chat/             # Chat interface
│   └── 🔧 shared/           # Shared UI components
├── 🗄️ lib/                  # Core utilities
│   └── 💾 db/               # Database configuration
└── 📝 types/                # TypeScript definitions
```

### 🔧 System Design

#### **🎯 Frontend Architecture**
- **📱 `app/page.tsx`**: Main chat interface with streaming toggle
- **🧩 `components/ai-elements/`**: AI-powered UI components
- **🔗 `components/shared/app-header.tsx`**: Navigation with authentication
- **⚛️ `@v0-sdk/react`**: Streaming AI response rendering

#### **🔌 Backend & API**
- **💬 `app/api/chat/route.ts`**: Chat creation with ownership tracking
- **📋 `app/api/chats/`**: User chat listing and management
- **🔐 `app/(auth)/`**: Authentication flow and user management

#### **🗄️ Database Design**
| Table | Purpose |
|-------|---------|
| **👤 Users** | Store accounts with email and hashed passwords |
| **🏗️ ProjectOwnership** | Maps v0 API project IDs → user IDs |
| **💬 ChatOwnership** | Maps v0 API chat IDs → user IDs |
| **👻 AnonymousChatLog** | Tracks anonymous usage for rate limiting |

### 🌐 Multi-tenant Strategy

- **🎯 v0 API as Source of Truth**: All chat/project data stays in v0 API
- **🔒 Ownership Layer**: Database tracks "who owns what"
- **🛡️ Access Control**: API routes filter data by ownership
- **🚫 No Data Duplication**: Avoids redundant data storage

### ⚡ Streaming Implementation

When streaming is enabled:
1. **📤 Frontend**: Sends `streaming: true` to API route
2. **🔄 API Route**: Calls `v0.chats.create({ responseMode: 'experimental_stream' })`
3. **📡 Server**: Returns streaming response with `text/event-stream`
4. **📺 Frontend**: Uses `StreamingMessage` component for real-time rendering

## 🛠️ Development Commands

```bash
# 📦 Package Management
pnpm install              # Install dependencies
pnpm dev                  # Start development server
pnpm build                # Build for production
pnpm start                # Start production server

# 🗄️ Database Operations
pnpm db:generate          # Generate migration files
pnpm db:migrate           # Apply pending migrations  
pnpm db:studio            # Open Drizzle Studio
pnpm db:push              # Push schema changes (development)
```

## 🔒 Security Features

- **🔐 Password Security**: bcrypt hashing with salt rounds
- **🍪 Secure Sessions**: HTTPOnly cookies with CSRF protection
- **🛡️ SQL Injection Protection**: Drizzle ORM with prepared statements
- **👤 User Data Isolation**: Ownership-based access control
- **🚦 Rate Limiting**: IP-based and user-based rate limiting
- **🔒 Environment Security**: Secure environment variable handling

## 📊 Performance Features

- **⚡ Next.js 15**: Latest performance optimizations
- **🔄 React 19**: Concurrent features and improved rendering
- **🏗️ Turbopack**: Ultra-fast bundling and hot reloading
- **📦 Code Splitting**: Automatic route-based splitting
- **🎯 SWR**: Smart data fetching with caching
- **💾 Database Optimization**: Efficient queries with Drizzle ORM

---

<div align="center">

## 👨‍💻 About the Author

**Built with ❤️ by [Sujal Shah](https://github.com/SujalXplores)**

[![GitHub](https://img.shields.io/badge/GitHub-SujalXplores-black?style=for-the-badge&logo=github)](https://github.com/SujalXplores)
[![Email](https://img.shields.io/badge/Email-sujal.shah.dev%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:sujal.shah.dev@gmail.com)

### 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features  
- 🔧 Submit pull requests
- ⭐ Star the repository

### 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- [v0.dev](https://v0.dev) for the amazing AI platform
- [Vercel](https://vercel.com) for hosting and deployment
- [Next.js](https://nextjs.org) team for the incredible framework

---

**⭐ If you found this project helpful, please consider giving it a star!**

</div>
