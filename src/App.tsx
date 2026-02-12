import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Confirmacion from "./pages/Confirmacion";
import Dashboard from "./pages/Dashboard";
import Referenciadores from "./pages/Referenciadores";
import NuevoReferenciador from "./pages/NuevoReferenciador";
import Comisiones from "./pages/Comisiones";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/referenciadores" element={<Referenciadores />} />
          <Route path="/nuevo-referenciador" element={<NuevoReferenciador />} />
          <Route path="/comisiones" element={<Comisiones />} />
          <Route path="/perfil" element={<Perfil />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
