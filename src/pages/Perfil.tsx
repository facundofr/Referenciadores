import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, DollarSign, User, ArrowLeft, Mail, Phone, MapPin, Edit, Save, Bell, HelpCircle, FileText, LogOut, ChevronRight, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Perfil = () => {
  const [editing, setEditing] = useState(false);
  const [notificaciones, setNotificaciones] = useState(true);
  const [form, setForm] = useState({
    nombre: "Juan Referenciador",
    email: "juan@email.com",
    telefono: "11-2345-6789",
    provincia: "Buenos Aires",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setEditing(false);
    toast({
      title: "Perfil actualizado",
      description: "Tus cambios fueron guardados exitosamente.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente.",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <Link to="/dashboard">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </Link>
          <h1 className="text-xl font-bold">Mi Perfil</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto space-y-6">
        {/* Profile Card */}
        <Card className="p-6 rounded-xl text-center">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-1">{form.nombre}</h2>
          <p className="text-sm text-muted-foreground mb-4">Referenciador Activo</p>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div>
                <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-muted-foreground mt-1">Referenciados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">$24.5k</p>
              <p className="text-xs text-muted-foreground mt-1">Créditos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">3m</p>
              <p className="text-xs text-muted-foreground mt-1">Activo</p>
            </div>
          </div>
        </Card>

        {/* Personal Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Información personal</h3>
            {!editing ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditing(true)}
                className="text-primary"
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={handleSave}
              >
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </Button>
            )}
          </div>

          <Card className="p-4 rounded-xl space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo</Label>
              {editing ? (
                <Input
                  id="nombre"
                  value={form.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="h-12 rounded-xl bg-secondary border-border"
                />
              ) : (
                <div className="flex items-center gap-3 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{form.nombre}</span>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              {editing ? (
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-12 rounded-xl bg-secondary border-border"
                />
              ) : (
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{form.email}</span>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              {editing ? (
                <Input
                  id="telefono"
                  value={form.telefono}
                  onChange={(e) => handleChange("telefono", e.target.value)}
                  className="h-12 rounded-xl bg-secondary border-border"
                />
              ) : (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{form.telefono}</span>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="provincia">Provincia</Label>
              {editing ? (
                <Input
                  id="provincia"
                  value={form.provincia}
                  onChange={(e) => handleChange("provincia", e.target.value)}
                  className="h-12 rounded-xl bg-secondary border-border"
                />
              ) : (
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{form.provincia}</span>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Configuración</h3>
          
          <Card className="p-4 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">Notificaciones</p>
                  <p className="text-xs text-muted-foreground">Recibir alertas de actividad</p>
                </div>
              </div>
              <Switch
                checked={notificaciones}
                onCheckedChange={setNotificaciones}
              />
            </div>
          </Card>
        </div>

        {/* Menu Options */}
        <div className="space-y-3">
          <Card className="rounded-xl overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-sm">Centro de ayuda</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </Card>

          <Card className="rounded-xl overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-sm">Términos y condiciones</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </Card>

          <Card className="rounded-xl overflow-hidden">
            <button 
              onClick={handleLogout}
              className="w-full p-4 flex items-center justify-between hover:bg-destructive/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5 text-destructive" />
                <span className="font-medium text-sm text-destructive">Cerrar sesión</span>
              </div>
              <ChevronRight className="h-5 w-5 text-destructive" />
            </button>
          </Card>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">Versión 1.0.0</p>
        </div>
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
          <Link to="/comisiones" className="flex flex-col items-center gap-1 text-muted-foreground">
            <DollarSign className="h-5 w-5" />
            <span className="text-xs">Créditos</span>
          </Link>
          <Link to="/perfil" className="flex flex-col items-center gap-1 text-primary">
            <User className="h-5 w-5" />
            <span className="text-xs font-medium">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Perfil;
