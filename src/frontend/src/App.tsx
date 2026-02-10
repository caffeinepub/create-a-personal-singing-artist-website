import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { SiteHeader } from './components/navigation/SiteHeader';
import { SiteFooter } from './components/navigation/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { BiographySection } from './components/sections/BiographySection';
import { MusicSection } from './components/sections/MusicSection';
import { VideosSection } from './components/sections/VideosSection';
import { ShowsSection } from './components/sections/ShowsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';
import ListenPage from './pages/ListenPage';

// Layout component with header and footer
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

// Home page with all sections
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BiographySection />
      <MusicSection />
      <VideosSection />
      <ShowsSection />
      <ContactSection />
    </>
  );
}

// Create root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const listenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/listen',
  component: ListenPage,
});

// Create router
const routeTree = rootRoute.addChildren([indexRoute, listenRoute]);
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
