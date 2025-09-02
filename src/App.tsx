import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import PlayerPortal from "./pages/PlayerPortal";
import OrganizerPortal from "./pages/OrganizerPortal";
import Events from "./pages/Events";
import Training from "./pages/Training";
import Community from "./pages/Community";
import Agencies from "./pages/Agencies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/player-portal" element={<PlayerPortal />} />
          <Route path="/organizer-portal" element={<OrganizerPortal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/training" element={<Training />} />
          <Route path="/community" element={<Community />} />
          <Route path="/agencies" element={<Agencies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
