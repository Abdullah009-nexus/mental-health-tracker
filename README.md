# 🧠 Mental Health Tracker Web App

A fullstack AI-powered Mental Health Tracker built with Next.js, Supabase Auth, MongoDB, and deployed on Vercel. Users can log in via magic link, access an AI companion, track their mood, and receive personalized insights.

## 🌐 Live Demo

🔗 [Visit the Live App](https://mental-health-tracker.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, DaisyUI, ShadCN UI
- **Auth**: Supabase Magic Link Authentication
- **Databases**:
  - MongoDB Atlas (for storing full blog content and user mood data)
  - Supabase (for storing summarized insights and user auth)
- **AI Backend**: n8n workflows + OpenAI API (via webhook)
- **Deployment**: Vercel

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/Abdullah009-nexus/mental-health-tracker.git
cd mental-health-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENROUTER_API_KEY=your_openrouter_api_key
MONGODB_URI=your_mongodb_connection_uri
```

> ⚠️ Keep these values secret. Do not commit `.env.local` to GitHub.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📁 Project Structure

- `app/` – Next.js app directory with pages and routing
- `components/` – Reusable UI components (chat, mood tracker, navbar, etc.)
- `lib/` – Supabase and MongoDB client setup
- `api/` – API routes for interacting with n8n and databases
- `public/` – Static assets

## ✨ Features

- 🧘 Mood Tracking: Users can track their emotional state daily
- 🤖 AI Companion: Chat with an AI trained to provide mental health support
- 💡 Personalized Insights: AI provides helpful feedback and coping suggestions
- 🌍 Secure Auth: Login via Supabase magic link
- 💾 Data Storage: MongoDB for full content, Supabase for summaries

## 🤝 Contributing

Feel free to fork this repo, suggest features, or submit pull requests.

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).
