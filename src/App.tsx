import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import CV from '@/pages/CV';
import Portfolio from '@/pages/Portfolio';
import Services from '@/pages/Services';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                 <Route path="/blog/1" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
