import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Websites from "./pages/Websites.tsx";
import Payments from "./pages/Payments.tsx";
import Book from "./pages/Book.tsx";
import Checkout from "./pages/Checkout.tsx";
import CheckoutReturn from "./pages/CheckoutReturn.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToRoutePosition = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const GtmRouteTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToRoutePosition />
        <GtmRouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/book" element={<Book />} />
          <Route path="/checkout/return" element={<CheckoutReturn />} />
          <Route path="/checkout/:priceId" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
