export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Babak Nassir Tafreshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
