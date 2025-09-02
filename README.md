# ByteScribe: Modern Journaling Web App

[![Front Page Screenshot](public\Images\Frontpage.png)](https://bytescribe.vercel.app/)

> **Visit the live app:** [https://bytescribe.vercel.app/](https://bytescribe.vercel.app/)  
> **See the code:** [GitHub Repository](https://github.com/DominicTalbot/byteScribe-app)

ByteScribe is a full-stack journaling platform built to help users reflect, organize their thoughts, and track their emotional journeys. This project is a showcase of modern web development—leveraging Next.js, Shadcn UI, Clerk, PostgreSQL/Prisma, ArcJet, and more.

---

## How It Started

ByteScribe began as a simple idea: create a private, secure journal app for everyday reflection. The initial goal was to provide users with a writing space, but as development progressed, it grew into a feature-rich platform with mood analytics, custom collections, and robust security.

**Early Development Screenshots:**

- **Logo Concepts & Backgrounds:**  
  ![Logo and Background Code](/Images/Logo%20and%20background%20code.png)  
  ![Logo and Background](/Images/Logo%20and%20background.png)  
  ![Logo](/Images/Logo.png)

- **Login Page:**  
  _Early login UI using Clerk authentication._  
  ![Log In](/Images/Log%20in.png)

---

## The End Product

ByteScribe is now a complete journaling system:

- Users create rich journal entries
- Organize entries into collections
- Track mood trends and analytics
- Enjoy daily writing prompts and creative inspiration
- Everything is secured, rate-limited, and visually polished

---

## How Everything Works

### 1. Authentication & Security

- **Clerk Integration:**  
  Users sign up and log in securely. Protected routes (journal, dashboard, collections) require authentication.  
  ![Log In](/Images/Log%20in.png)

- **ArcJet Rate Limiting & Bot Protection:**  
  The app uses ArcJet to prevent abuse and bot traffic. Custom middleware protects sensitive endpoints and enforces user-based rate limits.

  - **ArcJet Code in Journal:**  
    ![ArcJet Code in Journal](/Images/ArcJet%20code%20in%20journal.png)

  - **ArcJet Configuration File:**  
    ![ArcJet File](/Images/ArcJet%20file.png)

  - **ArcJet Limit Tests & Requests:**  
    ![ArcJet Limit Test](/Images/ArcJet%20Limit%20Test.png)  
    ![ArcJet Limit Test 2](/Images/ArcJet%20Limit%20Test%202.png)  
    ![ArcJet Request](/Images/ArcJet%20request.png)

### 2. Database Architecture

- **PostgreSQL + Prisma:**  
  All data (users, entries, collections, moods) is stored in a relational database. Schema is managed by Prisma ORM.

  - **Database Overview:**  
    ![Database](/Images/Database.png)

  - **Prisma Table Generation & SQL:**  
    ![Prisma After Generating](/Images/Prisma-afterGenerating.png)  
    ![Prisma Code For Tables](/Images/Prisma-codeForTables.png)  
    ![Prisma Created Tables](/Images/Prisma-createdTables.png)  
    ![Prisma SQL Code](/Images/Prisma-sqlCode.png)

### 3. Journaling: Entry Creation & Management

- **Rich Text Editor:**  
  Users write journal entries with markdown support, embedded links, and formatting.  
  ![Toolbar](/Images/Toolbar.png)

- **Adding Journal Entry to Collection:**  
  Entries can be assigned to custom collections for organization.  
  ![Adding Journal Entry to Collection](/Images/Adding%20journal%20entry%20to%20collection.png)

- **Calendar Entry:**  
  Select and filter entries by date using a custom calendar.  
  ![Calendar Entry](/Images/Calendar%20entry.png)

### 4. Collections Feature

- **Collections Page:**  
  View all collections and their associated entries.  
  ![Collections Page](/Images/Collections%20page.png)

- **Creating New Collection:**  
  Dialog for creating collections, with validation and feedback.  
  ![Creating New Collection](/Images/Creating%20new%20collection.png)

### 5. Mood Tracking & Analytics

- **Mood Assignment:**  
  Entries are tagged with a mood (happy, anxious, etc.), each with prompts and color coding.

- **Mood Analytics:**  
  The dashboard visualizes your mood trends over time using charts.  
  ![Toolbar](/Images/Toolbar.png) <!-- Replace with a proper mood analytics screenshot if available -->

---

## Technology Stack

| Layer         | Tech Used                           |
| ------------- | ----------------------------------- |
| Frontend      | Next.js, React, Shadcn UI, Tailwind |
| Auth          | Clerk                               |
| Backend       | Next.js API, Prisma, PostgreSQL     |
| Security      | ArcJet                              |
| UI Libraries  | React-Quill-New, Recharts, Embla    |
| State/Forms   | React Hook Form, Zod                |
| Notifications | Sonner                              |

---

## Setup & Run Locally

1. **Clone & Install:**

   ```bash
   git clone https://github.com/DominicTalbot/byteScribe-app.git
   cd byteScribe-app
   npm install
   ```

2. **Configure `.env`:**  
   Add your Clerk, ArcJet, and database credentials.

3. **Database Migration:**

   ```bash
   npx prisma migrate dev
   ```

4. **Start Dev Server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

---

## Development Story & Challenges

- **Design Evolution:**  
  Started with basic UI mockups, iteratively improved to a polished, modern interface.

- **Authentication & Security:**  
  Clerk and ArcJet integration required custom middleware to protect routes and enforce limits.

- **Database Design:**  
  Modeling relationships between users, entries, moods, and collections was a challenge—solved with Prisma’s relational features.

- **Rich Editor Implementation:**  
  Building a markdown-friendly editor with custom toolbar and formats took multiple iterations.

- **Analytics:**  
  Aggregating and visualizing mood data for meaningful insights required advanced data formatting and chart design.

- **Performance & Accessibility:**  
  Optimized for fast load times and mobile responsiveness; ensured keyboard and screen reader accessibility across components.

---

## For Employers

ByteScribe demonstrates:

- **Full-stack proficiency:** Modern stack, database modeling, API design, and frontend polish
- **Security awareness:** Rate limiting, authentication, and bot protection
- **UI/UX design:** Custom components, animations, and accessible layouts
- **Problem solving:** Real-world issues like data relationships, validation, and abuse prevention

---

## Deploy

Deploy instantly on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

_From Talbot Design Co. — Crafted for reflection, built for growth._
