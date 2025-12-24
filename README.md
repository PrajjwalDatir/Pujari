# Pujari - The Ritual Matching Platform 🙏

Connecting you with the Sacred. Find and book verified Vedic experts for authentic ceremonies, Sanskaras, and Homas.

## 🚀 Mission: The "Demand-First" Waitlist

Pujari is currently operating on a **Demand-First** model. Instead of a pre-populated directory, we capture specific ritual intent from devotees and use that data to verify and onboard the most relevant priests for their area.

### Tech Stack
- **Frontend**: Next.js 16 (App Router), Tailwind CSS, Framer Motion
- **UI Components**: Radix UI + Shadcn UI
- **Backend/Database**: Supabase (PostgreSQL)
- **Communications**: Resend (Email)
- **Validation**: Zod + React Hook Form

## 🛠 Features
- **Intelligent Search Widget**: Transitions from search to priority waitlist when no immediate matches are found.
- **Automated Notifications**: Instant confirmation emails upon joining the waitlist.
- **Sacred Design DNA**: A high-fidelity "Liquid Glass" aesthetic inspired by Vedic architecture.
- **Mobile Optimized**: Fully responsive navigation and form factors.

## 🏁 Getting Started

### 1. Clone & Install
```bash
git clone <repository-url>
cd pujari
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

### 3. Database Schema
Ensure your Supabase instance has a `waitlist` table. 

**Waitlist Table Columns:**
- `id` (uuid, primary key)
- `email` (text, not null)
- `looking_for` (text)
- `ritual_type` (text)
- `location` (text)
- `created_at` (timestamptz)

### 4. Run Locally
```bash
npm run dev
```

## 🔒 Security
- **Server Actions**: All database and email mutations are handled via secure Next.js Server Actions.
- **RLS**: Row Level Security is enabled on Supabase to ensure data privacy.
- **Sanitized Env**: Secrets are maintained in `.env.local` and never checked into version control.

---
Built with faith and code.
