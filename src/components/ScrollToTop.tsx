import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll behavior on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check if this is an initial load or refresh
    // We use a custom check for the very first mount of the app
    const isFirstMount = !window.sessionStorage.getItem('app_mounted');
    if (isFirstMount) {
      window.sessionStorage.setItem('app_mounted', 'true');
    }

    const isHomePath = pathname === '/' || pathname === '/home';
    if (isHomePath && isFirstMount) {
      // On the very first load of the home page, always start at the top
      // and clear any hash that might have been carried over from a previous session/refresh
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    // Always reset to top on route change to ensure we scroll FROM the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    if (hash) {
      // Small delay to ensure the page has reset to top and rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 800); // 800ms is the sweet spot for a premium "start from top" feel
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}
