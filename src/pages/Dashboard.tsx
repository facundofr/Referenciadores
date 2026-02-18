import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, DollarSign, TrendingUp, Plus, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
           <div className="h-20 w-20 flex items-center justify-center p-0">
            <img src="/logo.png" alt="COBER" className="h-full w-full object-contain" />
          </div>
            <span className="text-lg font-bold tracking-tight">COBER</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 mr-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="text-primary">
                  <Shield className="h-4 w-4 mr-2" />
                  Inicio
                </Button>
              </Link>
              <Link to="/referenciadores">
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Referenciador
                </Button>
              </Link>
              <Link to="/comisiones">
                <Button variant="ghost" size="sm">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Créditos
                </Button>
              </Link>
            </nav>
            <Link to="/perfil">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto pb-24 md:pb-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Welcome */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">¡Hola, Referenciador!</h1>
            <p className="text-muted-foreground">Tu progreso de este mes</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 rounded-xl bg-primary/5 border-primary/20">
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">12</p>
              <p className="text-sm text-muted-foreground">Referenciadores activos</p>
            </Card>

            <Card className="p-4 rounded-xl bg-primary/5 border-primary/20">
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold mb-1">3</p>
              <p className="text-sm text-muted-foreground">Nuevos este mes</p>
            </Card>

            {/* Earnings Card - spans full width */}
            <Card className="p-6 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-sm font-medium opacity-90">Créditos disponibles</span>
              </div>
              <p className="text-4xl font-bold mb-4">$24,500</p>
              <Button variant="secondary" size="sm" className="rounded-lg" asChild>
                <Link to="/comisiones">Ver detalles</Link>
              </Button>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Acciones rápidas</h2>
              
              <Link to="/nuevo-referenciador">
            <Card className="p-4 rounded-xl hover:bg-accent transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Agregar Referenciador</h3>
                  <p className="text-sm text-muted-foreground">Cargá un nuevo contacto</p>
                </div>
              </div>
            </Card>
          </Link>

              <Link to="/referenciadores">
                <Card className="p-4 rounded-xl hover:bg-accent transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Mis Referenciadores</h3>
                      <p className="text-sm text-muted-foreground">Ver estado de contactos</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Actividad reciente</h2>
              
              <Card className="p-4 rounded-xl">
                <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 mt-0.5">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">María González fue dada de alta</p>
                  <p className="text-xs text-muted-foreground">Ganaste $2,500 en créditos · Hace 2 días</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 mt-0.5">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Carlos Ruiz contactado</p>
                  <p className="text-xs text-muted-foreground">En proceso de evaluación · Hace 3 días</p>
                </div>
              </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 mt-0.5">
                      <Plus className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Nuevo referenciador agregado</p>
                      <p className="text-xs text-muted-foreground">Ana Martínez · Hace 5 días</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Hidden on desktop */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-primary">
            <Shield className="h-5 w-5" />
            <span className="text-xs font-medium">Inicio</span>
          </Link>
          <Link to="/referenciadores" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Users className="h-5 w-5" />
            <span className="text-xs">Referenciadores</span>
          </Link>
          <Link to="/nuevo-referenciador" className="flex flex-col items-center gap-1 text-muted-foreground">
            <div className="p-2 rounded-full bg-primary">
              <Plus className="h-5 w-5 text-primary-foreground" />
            </div>
          </Link>
          <Link to="/comisiones" className="flex flex-col items-center gap-1 text-muted-foreground">
            <DollarSign className="h-5 w-5" />
            <span className="text-xs">Créditos</span>
          </Link>
          <Link to="/perfil" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Perfil</span>
          </Link>
        </div>
      </nav>

      {/* Spacing for bottom nav */}
      <div className="h-20" />
    </div>
  );
};

export default Dashboard;
