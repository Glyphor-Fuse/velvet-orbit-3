import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import DJLineup from "@/components/DJLineup";
import VIPPackages from "@/components/VIPPackages";
import FloorPlan from "@/components/FloorPlan";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Hero />
          <DJLineup />
          <VIPPackages />
          <FloorPlan />
          <Gallery />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;