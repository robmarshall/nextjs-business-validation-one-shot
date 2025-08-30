# Next.js Landing Page Generator Prompt

## Instructions for AI Assistant/Developer

This prompt will guide you through creating a custom landing page for a Next.js App Router project. Follow these steps in order:

### STEP 1: Check for Visual References

First, check if there are any example images or design references:

```
Please check the following directories for any image files (png, jpg, jpeg, svg, webp):
- ./references/

If images are found, analyze them for:
- Color schemes
- Typography styles
- Layout patterns
- Visual elements and components
- Overall design aesthetic
```

### STEP 2: Gather Requirements

⚠️ **IMPORTANT: Ask these questions ONE AT A TIME, not all at once!**

Start by greeting the user and explaining that you'll guide them through creating their landing page step by step. Then proceed to ask each question individually, waiting for their response before moving to the next question. Keep language professional, and do not over-excite the situation. You are here to do a job.

**How to proceed:**

1. Ask one question
2. Wait for the user's answer
3. Acknowledge their response
4. Ask the next question
5. Continue until all requirements are gathered

You may group closely related sub-questions together (like style options within a single question), but keep major topic areas separate.

Ask the user the following questions to understand their preferences:

#### Business Information

1. **What is your business/project name?**
2. **What industry/sector are you in?** (e.g., SaaS, E-commerce, Agency, Healthcare, Education, etc.)
3. **Who is your target audience?** (e.g., businesses, consumers, developers, students, etc.)
4. **What is your main value proposition?** (one sentence that explains what you offer)

#### Visual Style Preferences

5. **Which visual style best describes your preference?**

   - Modern & Minimal (clean lines, lots of whitespace)
   - Bold & Dynamic (strong colors, large typography)
   - Corporate & Professional (traditional, trustworthy)
   - Playful & Creative (fun animations, unique layouts)
   - Tech & Futuristic (gradients, glassmorphism, 3D elements)
   - Elegant & Sophisticated (refined, luxury feel)

6. **Color Scheme Preference:**

   - Do you have specific brand colors? (provide hex codes)
   - Or choose a palette type:
     - Monochromatic (shades of one color)
     - High contrast (black/white with accent)
     - Vibrant (multiple bright colors)
     - Muted/Pastel (soft, subtle colors)
     - Dark theme (dark backgrounds)

7. **Typography Preference:**
   - Sans-serif (modern, clean)
   - Serif (traditional, editorial)
   - Mixed (serif for headings, sans for body)
   - Custom/Display fonts for headings

#### Layout & Structure

8. **Hero Section Style:**

   - Center-aligned with CTA
   - Split screen (text left, image right)
   - Full-width background image/video
   - Animated/Interactive hero
   - Minimalist with focus on text

9. **Which sections do you need?** (select all that apply)

   - [ ] Hero with CTA
   - [ ] Features/Benefits grid
   - [ ] How it works
   - [ ] About Us/Our Story
   - [ ] Services/Products showcase
   - [ ] Testimonials/Reviews
   - [ ] Pricing plans
   - [ ] Team members
   - [ ] FAQ
   - [ ] Newsletter signup
   - [ ] Contact form
   - [ ] Footer with links

10. **Animation Preferences:**
    - None (static page)
    - Subtle (fade-ins, smooth scrolls)
    - Moderate (parallax, hover effects)
    - Dynamic (complex animations, interactions)

#### Functionality

11. **Do you need dark mode support?** (yes/no)
12. **Primary Call-to-Action:** (e.g., "Sign Up", "Get Started", "Contact Us", "Download")
13. **Do you need a waitlist/newsletter form?** (yes/no)

    ⚠️ **If YES, please follow these steps first:**

    1. Go to [Formbear.io](https://formbear.io)
    2. Create a free account (takes 1 minute)
    3. Click "Create New Form" in your dashboard
    4. Name your form (e.g., "Landing Page Waitlist")
    5. **IMPORTANT: Configure your form fields in FormBear** (see below)
    6. Copy your **Form ID** (looks like: c3b0e925-4b62-4d98-9750-b152b6467898)
    7. Copy your **Secure Token** (found in form settings)
    8. Come back here and continue with the questions below

    **Form Field Requirements:**

    📝 **What fields would you like in your form?** (List all fields you need)

    Common examples:

    - Email (required)
    - First Name
    - Last Name
    - Company Name
    - Phone Number
    - Message/Comments (textarea)
    - Country/Region (dropdown)
    - How did you hear about us? (dropdown)
    - Subscribe to newsletter (checkbox)

    ⚠️ **CRITICAL: You MUST create these exact fields in FormBear for validation to work!**

    To add fields in FormBear:

    1. Go to your form in FormBear dashboard
    2. Click "Form Fields" or "Field Configuration"
    3. Add each field with the exact name and type you want
    4. Set validation rules (required, email format, etc.)
    5. Save your configuration

    **Form Configuration:**

    - List your form fields: [e.g., email (required), name, company]
    - Where should the form appear?
      - In the Hero section
      - As a standalone section
      - In the footer
      - Multiple locations
    - Form ID from Formbear: [paste your Form ID here]
    - Secure Token from Formbear: [paste your Secure Token here]
    - Enable honeypot spam protection? (yes/no)

**Progress Tracking Tip:** Consider showing users their progress (e.g., "Question 3 of 13" or "Next: Visual Style Preferences") to help them understand how many questions remain.

**Remember:** Ask questions individually and conversationally. If a user seems unsure about a question, provide examples or offer to use sensible defaults.

### STEP 3: Generate the Landing Page

Based on the answers above, create the following structure:

## File Structure to Create

```
src/app/
├── page.tsx (main landing page)
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── WaitlistForm.tsx (if requested)
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── [other requested sections].tsx
```

## Component Templates

### 1. Main Page (src/app/page.tsx)

```tsx
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
```

### 2. Hero Section Template

Based on style preference, implement one of these patterns:

#### Modern Minimal Hero

```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          {/* Main headline */}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          {/* Subheadline */}
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          {/* CTA buttons */}
        </div>
      </div>
    </section>
  );
}
```

#### Bold Dynamic Hero

```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white">
              {/* Main headline */}
            </h1>
            <p className="mt-6 text-xl text-white/90">{/* Subheadline */}</p>
            <div className="mt-10 flex gap-4">{/* CTA buttons */}</div>
          </div>
          <div>{/* Hero image/graphic */}</div>
        </div>
      </div>
    </section>
  );
}
```

### 3. Features Section Template

```tsx
const features = [
  {
    title: "Feature 1",
    description: "Description of feature 1",
    icon: "🚀",
  },
  // Add more features
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">What makes us different</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 4. Waitlist Form Component (with React Hook Form & Formbear)

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  website?: string; // Honeypot field
};

interface WaitlistFormProps {
  formId: string; // Formbear form ID
  secureToken: string; // Formbear secure token
  enableHoneypot?: boolean;
  className?: string;
  variant?: "inline" | "centered" | "card";
}

export default function WaitlistForm({
  formId,
  secureToken,
  enableHoneypot = true,
  className = "",
  variant = "centered",
}: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Check honeypot
    if (enableHoneypot && data.website) {
      // Bot detected, silently reject
      setSubmitStatus("success");
      reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("secure_token", secureToken);

      const response = await fetch(`https://formbear.io/f/${formId}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormStyles = () => {
    switch (variant) {
      case "inline":
        return "flex flex-col sm:flex-row gap-4 max-w-md";
      case "card":
        return "bg-white rounded-lg shadow-lg p-8 max-w-md";
      case "centered":
      default:
        return "max-w-md mx-auto";
    }
  };

  return (
    <div className={`${getFormStyles()} ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <input type="hidden" name="secure_token" value={secureToken} />

        {variant === "card" && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
            <p className="text-gray-600">
              Be the first to know when we launch!
            </p>
          </div>
        )}

        <div
          className={
            variant === "inline"
              ? "flex flex-col sm:flex-row gap-4"
              : "space-y-4"
          }
        >
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.email ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-colors
              `}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Honeypot field for spam protection */}
          {enableHoneypot && (
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                {...register("website")}
                type="text"
                id="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              ${variant === "inline" ? "sm:w-auto" : "w-full"}
              px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200
            `}
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              🎉 You're on the list! Check your email for confirmation.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm font-medium">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
```

### 4. Using the Waitlist Form in Different Sections

#### In Hero Section

```tsx
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Your Amazing Product
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Join thousands waiting for the launch
        </p>

        <WaitlistForm
          formId="your-form-id"
          secureToken="your-secure-token"
          variant="inline"
          className="justify-center"
        />
      </div>
    </section>
  );
}
```

#### As Standalone Section

```tsx
import WaitlistForm from "./components/WaitlistForm";

export default function WaitlistSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Be the First to Know</h2>
        <p className="text-xl text-gray-600 mb-10">
          Get early access and exclusive updates
        </p>

        <WaitlistForm
          formId="your-form-id"
          secureToken="your-secure-token"
          variant="card"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
```

## Tailwind CSS Style Guidelines

### Color Schemes by Style

#### Modern & Minimal

```css
- Background: white, gray-50
- Text: gray-900, gray-600
- Accent: Single bold color (blue-600, green-600)
- Borders: gray-200
```

#### Bold & Dynamic

```css
- Gradients: from-purple-600 to-pink-600
- High contrast: black, white
- Bright accents: yellow-400, cyan-400
- Shadows: shadow-2xl, shadow-xl
```

#### Corporate & Professional

```css
- Primary: blue-800, slate-700
- Background: white, gray-50
- Text: gray-700, gray-900
- Accents: blue-600
```

#### Tech & Futuristic

```css
- Dark backgrounds: gray-900, black
- Neon accents: cyan-400, purple-400
- Glassmorphism: backdrop-blur-lg bg-white/10
- Gradients: from-cyan-500 to-purple-500
```

### Responsive Design Patterns

Always use responsive utilities:

- Mobile first: `text-base sm:text-lg lg:text-xl`
- Padding: `px-4 sm:px-6 lg:px-8`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexbox: `flex flex-col sm:flex-row`

### Animation Classes

#### Subtle

```css
- transition-all duration-300
- hover:scale-105
- animate-fade-in (custom)
```

#### Moderate

```css
- group-hover:translate-x-2
- hover:shadow-2xl transition-shadow
- animate-slide-up (custom)
```

#### Dynamic

```css
- animate-bounce
- animate-pulse
- Custom keyframes for complex animations
```

## Formbear API Integration Guide

### Setting Up Formbear

1. **Create a Formbear Account:**

   - Go to https://formbear.io
   - Sign up and create a new form
   - Note your Form ID and Secure Token

2. **Form Configuration in Formbear Dashboard:**

   - Set up email notifications
   - Configure success/error redirects (optional)
   - Enable spam protection features
   - Add custom fields if needed

3. **Environment Variables (Recommended):**

   ```env
   # .env.local
   NEXT_PUBLIC_FORMBEAR_FORM_ID=your-form-id
   NEXT_PUBLIC_FORMBEAR_TOKEN=your-secure-token
   ```

   Then use in component:

   ```tsx
   <WaitlistForm
     formId={process.env.NEXT_PUBLIC_FORMBEAR_FORM_ID!}
     secureToken={process.env.NEXT_PUBLIC_FORMBEAR_TOKEN!}
     variant="inline"
   />
   ```

## Implementation Checklist

After generating the landing page, ensure:

- [ ] All requested sections are included
- [ ] Color scheme matches preference
- [ ] Typography follows the chosen style
- [ ] Responsive design works on all breakpoints
- [ ] Animations match the requested level
- [ ] CTAs are prominent and accessible
- [ ] Dark mode is implemented (if requested)
- [ ] Waitlist form is integrated with Formbear (if requested)
- [ ] Form validation works correctly
- [ ] Honeypot spam protection is enabled (if requested)
- [ ] Images are optimized with Next.js Image component
- [ ] SEO meta tags are included in layout.tsx
- [ ] Accessibility standards are met (ARIA labels, contrast ratios)

## Example Usage Flow

1. **Assistant checks for example images:**
   "I'll check for any design references in your project..."

2. **Assistant asks questions:**
   "Let me gather some information about your landing page requirements..."

3. **User provides answers**

4. **Assistant generates code:**
   "Based on your preferences for a modern, minimal SaaS landing page with blue accent colors, I'll create the following components..."

5. **Assistant implements each section with appropriate styling**

6. **Assistant provides instructions for customization and next steps**

## Additional Notes

- Always use Next.js 15+ App Router patterns
- Utilize Tailwind CSS v4 features where applicable
- Ensure all components are TypeScript-ready
- Follow React best practices (hooks, composition)
- Keep components modular and reusable
- Add comments for complex logic or styling decisions
