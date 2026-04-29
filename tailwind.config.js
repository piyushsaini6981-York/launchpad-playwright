/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
        },
        brand: {
          info: "hsl(var(--brand-info))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        section: "var(--spacing-section)",
        card: "var(--spacing-card-padding)",
        field: "var(--spacing-field-gap)",
        row: "var(--spacing-form-row-gap)",
        stepper: "var(--stepper-aside-width)",
        shell: "var(--shell-horizontal-padding)",
        header: "var(--header-block-padding)",
      },
      maxWidth: {
        shell: "var(--shell-max-width)",
      },
      width: {
        sidebar: "var(--sidebar-width)",
      },
      fontSize: {
        pageTitle: [
          "var(--text-page-title-size)",
          { lineHeight: "var(--text-page-title-leading)" },
        ],
        pageSubtitle: [
          "var(--text-page-subtitle-size)",
          { lineHeight: "var(--text-page-subtitle-leading)" },
        ],
      },
    },
  },
  plugins: [],
};
