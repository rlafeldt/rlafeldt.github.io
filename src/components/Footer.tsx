const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Raphael Lafeldt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
