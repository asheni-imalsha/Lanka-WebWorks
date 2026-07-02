import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/theme-provider";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";
import { ScrollProgress } from "../components/site/ScrollProgress";
import { PageTransition } from "../components/site/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-heading text-xs tracking-[0.3em] text-foreground/60">ERROR / 404</p>
      <h1 className="mt-4 font-display text-[28vw] leading-none md:text-[16vw]">404</h1>
      <p className="mt-4 max-w-md text-muted-foreground">This page wandered off the grid. Let's get you back to safety.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 font-heading text-xs tracking-[0.2em] text-background">
        ← BACK HOME
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-5xl">SOMETHING BROKE</h1>
        <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-foreground px-5 py-2.5 font-heading text-xs tracking-widest text-background">RETRY</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 font-heading text-xs tracking-widest">HOME</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lanka WebWorks — Your Digital Presence Starts Here" },
      { name: "description", content: "Premium website design and digital solutions for Sri Lankan businesses. Modern, fast, mobile-friendly websites built to grow your brand online." },
      { name: "author", content: "Lanka WebWorks" },
      { property: "og:title", content: "Lanka WebWorks — Your Digital Presence Starts Here" },
      { property: "og:description", content: "Modern, fast, mobile-friendly websites built for Sri Lankan businesses." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Lanka WebWorks" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lanka WebWorks",
          description: "Web design and digital solutions for Sri Lankan businesses",
          url: "/",
          telephone: "+94729911398",
          email: "lankawebworks@gmail.com",
          address: { "@type": "PostalAddress", addressCountry: "LK" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <ScrollProgress />
          <Header />
          <main className="flex-1 pt-16 md:pt-20">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
