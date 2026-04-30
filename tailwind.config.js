/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          muted: "hsl(var(--sidebar-muted-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          border: "hsl(var(--sidebar-border))",
        },
        interactive: {
          DEFAULT: "hsl(var(--interactive))",
          foreground: "hsl(var(--interactive-foreground))",
          hover: "hsl(var(--interactive-hover))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
          muted: "hsl(var(--brand-muted))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      width: {
        sidebar: "var(--sidebar-width)",
      },
      height: {
        header: "var(--header-height)",
      },
      spacing: {
        "dialog-pad": "var(--dialog-padding)",
        "dialog-gap": "var(--dialog-gap)",
        "section-gap": "var(--section-gap)",
        "form-col": "var(--form-col-gap)",
        "form-row": "var(--form-row-gap)",
        "field-py": "var(--field-padding-y)",
        "field-px": "var(--field-padding-x)",
      },
      maxWidth: {
        dialog: "var(--dialog-max-width)",
        frame: "var(--design-frame-width)",
      },
      minHeight: {
        frame: "var(--design-frame-height)",
        control: "var(--control-min-height)",
      },
      boxShadow: {
        dialog: "var(--dialog-shadow)",
      },
      fontSize: {
        "dialog-title": [
          "var(--dialog-title-size)",
          { lineHeight: "var(--dialog-title-leading)" },
        ],
        "dialog-subtitle": [
          "var(--dialog-subtitle-size)",
          { lineHeight: "var(--dialog-subtitle-leading)" },
        ],
      },
    },
  },
  plugins: [],
};
