import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, LogOut, User as UserIcon, Menu, X, Square } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { handleSignIn } from '@/firebase';
import { toast } from 'sonner';

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const onSignIn = async () => {
    try {
      const signedInUser = await handleSignIn();
      if (signedInUser) {
        toast.success(`Welcome back, ${signedInUser.displayName || 'User'}!`);
      }
    } catch (error) {
      toast.error("An error occurred during sign in.");
    }
  };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' || location.pathname === '/home' : location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/library' },
    { name: 'Services', path: '/pages' },
    { name: 'About', path: '/author' },
    { name: 'Vault', path: '/vault' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-md py-4'
          : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 shrink-0 group">
          <div className="w-6 h-6 border-[1.5px] border-foreground flex items-center justify-center transition-transform duration-700 group-hover:rotate-45">
            <Square className="w-3 h-3 fill-foreground" />
          </div>
          <span className="font-serif text-lg font-medium tracking-[0.2em] uppercase text-foreground">
            KEANG <span className="text-primary">&</span> CO.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative text-[11px] font-sans font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:text-primary',
                isActive(link.path)
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Auth Controls */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8 border border-border/50 grayscale hover:grayscale-0 transition-all duration-500">
                <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
                <AvatarFallback className="bg-muted text-[10px] font-sans">
                  {user.displayName?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="icon"
                onClick={logout}
                className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={onSignIn}
              className="h-10 px-6 font-sans text-[10px] font-bold tracking-[0.2em] uppercase border border-border/60 hover:border-foreground transition-all duration-500"
            >
              Sign In
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background border-none p-12 flex flex-col justify-center items-center gap-12">
              <div className="flex flex-col gap-8 text-center w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'text-3xl font-serif font-medium tracking-wide transition-all duration-300',
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
