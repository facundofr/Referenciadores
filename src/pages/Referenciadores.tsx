import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, DollarSign, User, ArrowLeft, Search, Plus, Phone, Mail, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const referenciadoresMock = [
  { id: 1, nombre: "María González", email: "maria@email.com", telefono: "11-2345-6789", estado: "activo", creditos: 2500, fecha: "15/01/2026" },
  { id: 2, nombre: "Carlos Ruiz", email: "carlos@email.com", telefono: "11-3456-7890", estado: "pendiente", creditos: 0, fecha: "10/01/2026" },
  { id: 3, nombre: "Ana Martínez", email: "ana@email.com", telefono: "11-4567-8901", estado: "contactado", creditos: 0, fecha: "08/01/2026" },
  { id: 4, nombre: "Juan Pérez", email: "juan@email.com", telefono: "11-5678-9012", estado: "activo", creditos: 2500, fecha: "05/01/2026" },
  { id: 5, nombre: "Laura Sánchez", email: "laura@email.com", telefono: "11-6789-0123", estado: "rechazado", creditos: 0, fecha: "02/01/2026" },
  { id: 6, nombre: "Roberto Díaz", email: "roberto@email.com", telefono: "11-7890-1234", estado: "pendiente", creditos: 0, fecha: "28/12/2025" },
];

type EstadoReferenciador = "activo" | "pendiente" | "contactado" | "rechazado";

const estadoConfig: Record<EstadoReferenciador, { label: string; variant: "default" | "secondary" | "destructive" | "outline"; icon: React.ComponentType<{ className?: string }> }> = {
  activo: { label: "Activo", variant: "default", icon: CheckCircle },
  pendiente: { label: "Pendiente", variant: "secondary", icon: Clock },
  contactado: { label: "Contactado", variant: "outline", icon: Phone },
  rechazado: { label: "Rechazado", variant: "destructive", icon: XCircle },
};

const Referenciadores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredReferenciadores = referenciadoresMock.filter(ref => 
    ref.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <Link to="/dashboard">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Mis Referenciadores</h1>
            <p className="text-sm text-muted-foreground">{referenciadoresMock.length} referenciadores en total</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 rounded-xl bg-secondary border-border pl-10"
          />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-green-600">2</p>
            <p className="text-xs text-muted-foreground mt-1">Activos</p>
          </Card>
          <Card className="p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-amber-600">3</p>
            <p className="text-xs text-muted-foreground mt-1">Pendientes</p>
          </Card>
          <Card className="p-3 rounded-xl text-center">
            <p className="text-xl font-bold text-red-600">1</p>
            <p className="text-xs text-muted-foreground mt-1">Rechazados</p>
          </Card>
        </div>

          {/* Referenciadores List */}
          <div className="grid md:grid-cols-2 gap-3">
            {filteredReferenciadores.map((referenciador) => {
            const config = estadoConfig[referenciador.estado as EstadoReferenciador];
            const Icon = config.icon;
            
            return (
              <Card key={referenciador.id} className="p-4 rounded-xl hover:bg-accent transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-full bg-primary/10 mt-1">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold truncate">{referenciador.nombre}</h3>
                      <Badge variant={config.variant} className="shrink-0 text-xs">
                        <Icon className="h-3 w-3 mr-1" />
                        {config.label}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{referenciador.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>{referenciador.telefono}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Agregado: {referenciador.fecha}</span>
                      {referenciador.creditos > 0 && (
                        <span className="text-xs font-semibold text-green-600">
                          +${referenciador.creditos.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
            })}
          </div>

          {filteredReferenciadores.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No se encontraron referenciadores</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button - Hidden on desktop */}
      <Link to="/nuevo-referenciador">
        <Button
          size="lg"
          className="md:hidden fixed bottom-24 right-6 h-14 w-14 rounded-full shadow-lg z-40"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </Link>

      {/* Bottom Navigation - Hidden on desktop */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-xs">Inicio</span>
          </Link>
          <Link to="/referenciadores" className="flex flex-col items-center gap-1 text-primary">
            <Users className="h-5 w-5" />
            <span className="text-xs font-medium">Referenciadores</span>
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
    </div>
  );
};

export default Referenciadores;
