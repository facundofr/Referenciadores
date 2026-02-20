import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, DollarSign, User, ArrowLeft, TrendingUp, Download, Calendar, CheckCircle, Plus } from "lucide-react";

const transaccionesMock = [
  { id: 1, referenciador: "María González", monto: 2500, fecha: "15/01/2026", estado: "pagado", tipo: "Alta" },
  { id: 2, referenciador: "Juan Pérez", monto: 2500, fecha: "05/01/2026", estado: "pagado", tipo: "Alta" },
  { id: 3, referenciador: "Laura Sánchez", monto: 1800, fecha: "28/12/2025", estado: "pendiente", tipo: "Alta" },
  { id: 4, referenciador: "Ajuste mensual", monto: 5000, fecha: "01/12/2025", estado: "pagado", tipo: "Bonus" },
  { id: 5, referenciador: "Roberto Díaz", monto: 2500, fecha: "15/11/2025", estado: "pagado", tipo: "Alta" },
];

const estadisticasMensuales = [
  { mes: "Enero 2026", referenciadores: 3, creditos: 7300, activos: 2 },
  { mes: "Diciembre 2025", referenciadores: 2, creditos: 6800, activos: 1 },
  { mes: "Noviembre 2025", referenciadores: 4, creditos: 12500, activos: 3 },
];

const Comisiones = () => {
  const totalDisponible = 24500;
  const totalPendiente = 1800;
  const totalHistorico = 52100;

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <Link to="/dashboard">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </Link>
          <h1 className="text-xl font-bold">Mis Créditos</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto space-y-6">
        {/* Balance Card */}
        <Card className="p-6 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Créditos disponibles</p>
              <p className="text-4xl font-bold">${totalDisponible.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-full bg-white/20">
              <DollarSign className="h-8 w-8" />
            </div>
          </div>
          <Button variant="secondary" className="w-full rounded-xl" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Solicitar retiro
          </Button>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-amber-600" />
              <span className="text-xs text-muted-foreground">Pendiente</span>
            </div>
            <p className="text-2xl font-bold">${totalPendiente.toLocaleString()}</p>
          </Card>

          <Card className="p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-xs text-muted-foreground">Total histórico</span>
            </div>
            <p className="text-2xl font-bold">${totalHistorico.toLocaleString()}</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="transacciones" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl">
            <TabsTrigger value="transacciones" className="rounded-lg">Movimientos</TabsTrigger>
            <TabsTrigger value="historico" className="rounded-lg">Historial</TabsTrigger>
          </TabsList>

          <TabsContent value="transacciones" className="mt-6">
            <div className="grid md:grid-cols-2 gap-3">
              {transaccionesMock.map((trans) => (
                <Card key={trans.id} className="p-4 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{trans.referenciador}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {trans.tipo}
                        </Badge>
                        <Badge 
                          variant={trans.estado === "pagado" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {trans.estado === "pagado" ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Pagado
                            </>
                          ) : (
                            <>
                              <Calendar className="h-3 w-3 mr-1" />
                              Pendiente
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${trans.estado === "pagado" ? "text-green-600" : "text-amber-600"}`}>
                        +${trans.monto.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-3 border-t border-border">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{trans.fecha}</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="historico" className="mt-6">
            <div className="grid md:grid-cols-2 gap-3">
              {estadisticasMensuales.map((est, idx) => (
              <Card key={idx} className="p-4 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{est.mes}</h3>
                  <p className="text-xl font-bold text-primary">
                    ${est.creditos.toLocaleString()}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Referenciadores</p>
                    <p className="text-lg font-semibold">{est.referenciadores}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Activos</p>
                    <p className="text-lg font-semibold">{est.activos}</p>
                  </div>
                </div>
              </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Info Card */}
        <Card className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
              <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">¿Cómo se calculan los créditos?</h3>
              <p className="text-xs text-muted-foreground">
                Ganás $2,500 por cada referenciado que se dé de alta. Los créditos quedan disponibles una vez confirmada el alta del cliente.
              </p>
            </div>
          </div>
        </Card>
        </div>
      </div>

      {/* Bottom Navigation - Hidden on desktop */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-xs">Inicio</span>
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
          <Link to="/comisiones" className="flex flex-col items-center gap-1 text-primary">
            <DollarSign className="h-5 w-5" />
            <span className="text-xs font-medium">Créditos</span>
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

export default Comisiones;
