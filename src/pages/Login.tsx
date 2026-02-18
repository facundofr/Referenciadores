import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({ 
        title: "Error", 
        description: "Por favor completá todos los campos", 
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({ 
        title: "¡Bienvenido!", 
        description: "Inicio de sesión exitoso" 
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 sm:px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <Link to="/" className="flex flex-col items-center gap-3">
             <div className="h-24 w-24 flex items-center justify-center p-0">
            <img src="/logo.png" alt="COBER" className="h-full w-full object-contain" />
          </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Cober Referenciadores</h1>
              <p className="text-sm text-muted-foreground">Programa de Referidos</p>
            </div>
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl bg-secondary border-border pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl text-base font-semibold">
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿No tenés cuenta?{" "}
          <Link to="/registro" className="text-primary hover:underline font-medium">
            Registrate
          </Link>
        </p>

        <div className="mt-12 flex justify-center gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Términos</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground">Privacidad</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground">Soporte</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
