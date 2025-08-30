# Landing Page Generator for Next.js

This is a landing page generator that helps you create beautiful, customized landing pages for your Next.js project in minutes. Simply answer a few questions about your style preferences and business needs, and let AI generate a complete landing page for you.

## Quick Start

### Prerequisites

1. **Node.js 18+** installed on your machine
2. **AI Assistant** (Claude, ChatGPT, or similar) Note. This has been tested with Claude Code
3. **Formbear Account** (optional, only if you want forms)

### Step 1: Set Up Formbear (Optional - For Waitlist/Newsletter Forms)

If you want to include a waitlist or newsletter signup form on your landing page:

1. Go to [Formbear.io](https://formbear.io)
2. Create a free account
3. Create a new form in your dashboard
4. Save your **Form ID** and **Secure Token** - you'll need these later

> **Tip:** You can skip this step if you don't need forms on your landing page.

### Step 2: Add Visual References (Optional but Recommended)

If you have examples of designs you like, the AI can analyze them to better match your style:

**Add your inspiration images to /references**

- Screenshots of websites you like
- Brand style guides
- Color palette examples
- Typography samples
- UI components you want to emulate

**Supported formats:** PNG, JPG, JPEG, SVG, WEBP

The AI will analyze these images for:

- Color schemes and gradients
- Typography and font pairings
- Layout patterns and spacing
- Visual hierarchy
- Design elements and components
- Overall aesthetic and mood

> **Tip:** Even 2-3 reference images can dramatically improve the AI's understanding of your desired style!

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Generate Your Landing Page

1. **Open your AI assistant** (Claude, ChatGPT, etc.)

2. **Ask your AI to read the prompt file:**

   ```
   "Please read the prompt.md file in this project and help me create a landing page"
   ```

3. **Answer the AI's questions** about:

   - Your business/project details
   - Visual style preferences
   - Color schemes and typography
   - Required sections (Hero, Features, Pricing, etc.)
   - Whether you need a waitlist form

4. **If you need a form**, the AI will guide you to:

   - Use your Formbear Form ID and Secure Token
   - Configure form placement and styling
   - Set up spam protection

5. **Let the AI generate your code** - it will create all necessary components

### Step 5: Run Your Landing Page

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your new landing page!

## Components

All components use:

- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **React Hook Form** for form handling (if forms are included)
- **Formbear API** for form submissions (if configured)

## 🔧 Environment Variables

If using Formbear forms, create a `.env.local` file:

```env
NEXT_PUBLIC_FORMBEAR_FORM_ID=your-form-id-here
NEXT_PUBLIC_FORMBEAR_TOKEN=your-secure-token-here
```

## 📚 How It Works

1. The `prompt.md` file contains a comprehensive questionnaire
2. Your AI reads this prompt and asks you relevant questions
3. Based on your answers, it generates customized React components
4. Components are styled with Tailwind CSS matching your preferences
5. Forms integrate with Formbear for easy data collection

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Hook Form** - Performant forms with validation
- **Formbear** - Simple form backend service

## 🎨 Visual References Guide

### How to Use Reference Images Effectively

1. **Website Screenshots:**

   - Focus on specific sections (hero, features, pricing)
   - Include both desktop and mobile views if relevant

2. **Brand Assets:**

   - Your logo (if you have one)
   - Brand color palettes
   - Existing marketing materials
   - Product screenshots or mockups

3. **Style Elements:**

   - Button styles you like
   - Card/component designs
   - Animation examples (as GIFs)
   - Icon styles and illustrations

4. **Naming Convention (Optional):**
   ```
   references/
   ├── hero-example.png
   ├── color-palette.jpg
   ├── typography-guide.png
   ├── competitor-site.png
   └── desired-layout.jpg
   ```

The AI will automatically check the `references/` folder and incorporate these visual elements into your landing page design.

## 💡 Tips

- **Reference images**: Place 2-5 example images in the `references/` folder for best results
- **Brand colors**: Provide exact hex codes for consistency
- **Target audience**: Be specific (e.g., "B2B SaaS startup founders" vs just "businesses")
- **Test forms**: Always test your Formbear integration after generation
- **Iterate**: You can regenerate specific sections if needed

## 🚢 Deployment

Deploy your landing page easily on:

- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- Any platform that supports Next.js
