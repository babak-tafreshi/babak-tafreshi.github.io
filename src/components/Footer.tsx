export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-10 border-t border-border bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-[11px] text-muted-foreground/70 font-medium tracking-wider">
          © {new Date().getFullYear()} Babak Nassir Tafreshi. All rights reserved.
        </p>
        <p className="text-[10px] text-muted-foreground/50 mt-2">
          Designed and built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
