import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import CategoryPage from "./pages/CategoryPage";
import AuthPage from "./pages/AuthPage";
import ProductDetail from "./pages/ProductDetail";
import StoreLocator from "./pages/StoreLocator";
import MerchantDashboard from "./pages/MerchantDashboard";
import DealsPage from "./pages/DealsPage";
import CartPage from "./pages/CartPage";
import ComparePage from "./pages/ComparePage";
import Navigation from "./components/Navigation";
import AIAssistant from "./components/AIAssistant";
import CustomerSupport from "./components/CustomerSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/stores" element={<StoreLocator />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/merchant" element={<MerchantDashboard />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/support" element={<CustomerSupport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIAssistant />
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
