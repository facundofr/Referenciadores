import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp, Award, Menu, CheckCircle, DollarSign, Lock } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
          <div className="h-20 w-20 flex items-center justify-center p-0">
            <img src="/logo.png" alt="COBER" className="h-full w-full object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight">COBER</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Iniciar sesión</Button>
          </Link>
          <Link to="/registro">
            <Button>Registrarme</Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-20 text-center">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="mx-auto md:mx-0 flex items-center justify-center order-1 md:order-2">
              <img
                src="/referenciadoreshero.png"
                alt="Referenciados"
                className="h-36 w-36 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Conectá y <span className="text-primary">Ganá</span>
              </h1>
              <p className="mb-6 text-muted-foreground text-sm sm:text-base lg:text-xl">
                Sumate al programa de referidos de Cober y generá ingresos recomendando planes de medicina prepaga.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-start">
                <Link to="/registro" className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto rounded-xl text-sm sm:text-base font-semibold h-12 sm:h-14 px-6 sm:px-8">
                       Quiero ser Referenciador
                  </Button>
                </Link>
                <Link to="/login" className="md:hidden">
                  <Button variant="outline" size="lg" className="w-full rounded-xl h-12 text-sm">
                    Iniciar sesión
                  </Button>
                </Link>
              </div>
              <Link to="/login" className="mt-3 hidden md:inline-block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ya tengo cuenta · Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24 bg-muted/30">
        <div className="max-w-6xl mx-auto pt-12 sm:pt-16 lg:pt-20">
          <h2 className="mb-6 sm:mb-8 lg:mb-12 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Beneficios Exclusivos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
              { icon: Award, title: "Sin experiencia previa", desc: "No necesitás ser vendedor, solo conectar personas." },
              { icon: TrendingUp, title: "Comisiones atractivas", desc: "Ganá créditos por cada referido que se convierta en alta." },
              { icon: Users, title: "Capacitación gratuita", desc: "Accedé a cursos para mejorar tus resultados." },
              { icon: Shield, title: "Respaldo de Cober", desc: "Trabajá con una empresa líder en medicina prepaga." },
            ].map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 sm:p-4"
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  {b.img ? (
                    <img src={b.img} alt={b.title} className="h-4 w-4 sm:h-5 sm:w-5 object-contain" />
                  ) : (
                    <b.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-3 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">¿Cómo funciona?</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8 sm:mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg z-10">
                1
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 flex items-center justify-center mb-4 sm:mb-6 bg-transparent p-0">
                <img
                  src="/notebook.jpg"
                  alt="Notebook"
                  className="w-full h-full object-cover border-0 shadow-none"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Registrate</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Completá el formulario y activá tu perfil oficial hoy mismo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg z-10">
                2
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 flex items-center justify-center mb-4 sm:mb-6 bg-transparent p-0">
                <img
                  src="/cel.jpg"
                  alt="Conectá"
                  className="w-full h-full object-cover border-0 shadow-none"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Conectá</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Empezá a registrar Referenciadores en la plataforma
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base sm:text-lg z-10">
                3
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 flex items-center justify-center mb-4 sm:mb-6 bg-transparent p-0">
                <img
                  src="/calculadora.jpg"
                  alt="Calculadora"
                  className="w-full h-full object-cover border-0 shadow-none"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Cobrá</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Recibí tus Créditos por cada conexión exitosa
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link to="/registro">
              <Button size="lg" className="rounded-full text-sm sm:text-base font-semibold h-12 sm:h-14 px-8 sm:px-12 bg-primary hover:bg-primary/90">
                Quiero ser Referenciador 🚀
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="h-20 w-20 flex items-center justify-center p-0">
            <img src="/logo.png" alt="COBER" className="h-full w-full object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight">COBER</span>
        </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Programa de Referidos - Conectá y Ganá
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/login" className="hover:text-primary transition-colors">Iniciar sesión</Link></li>
                <li><Link to="/registro" className="hover:text-primary transition-colors">Registrarme</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Email: contacto@cober.com.ar</li>
                <li>Tel: 0800-123-COBER</li>
                <li>Lun a Vie: 9:00 - 18:00 hs</li>
              </ul>
            </div>
          </div>

          {/* Security Icons & Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center ">
              
              <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                © 2026 COBER. TODOS LOS DERECHOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
