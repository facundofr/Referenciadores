import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ArrowLeft, UserPlus, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const planes = [
  "Plan Clásico",
  "Plan Plus",
  "Plan Premium",
  "Plan Familia",
  "No está seguro/a",
];

const NuevoReferenciador = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    planInteres: "",
    notas: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Referenciado agregado!",
        description: "El contacto fue registrado exitosamente.",
      });
      navigate("/referenciadores");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 max-w-3xl mx-auto">
          <Link to="/dashboard">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </Link>
          <h1 className="text-xl font-bold">Nuevo Referenciado</h1>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto">
        <Card className="p-6 rounded-xl bg-primary/5 border-primary/20 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
              <UserPlus className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">¿Cómo funciona?</h3>
              <p className="text-sm text-muted-foreground">
                Completá los datos de tu referenciado. Nuestro equipo lo contactará y si se concreta el alta, ganarás créditos.
              </p>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-4xl mx-auto pb-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input
                id="nombre"
                placeholder="Juan Pérez"
                value={form.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                required
                className="h-12 rounded-xl bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input
                id="email"
                type="email"
                placeholder="juan@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-12 rounded-xl bg-secondary border-border"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="11-2345-6789"
                value={form.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                required
                className="h-12 rounded-xl bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Plan de interés</Label>
              <Select value={form.planInteres} onValueChange={(value) => handleChange("planInteres", value)}>
                <SelectTrigger className="h-12 rounded-xl bg-secondary border-border">
                  <SelectValue placeholder="Seleccioná un plan" />
                </SelectTrigger>
                <SelectContent>
                  {planes.map((plan) => (
                    <SelectItem key={plan} value={plan}>
                      {plan}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notas">Notas adicionales (opcional)</Label>
            <Textarea
              id="notas"
              placeholder="Ej: Tiene cobertura actual con otra prepaga, está buscando cambiar..."
              value={form.notas}
              onChange={(e) => handleChange("notas", e.target.value)}
              className="min-h-24 rounded-xl bg-secondary border-border resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Cualquier información adicional que ayude al equipo a contactar mejor al referenciado.
            </p>
          </div>

          <div className="pt-4 grid sm:grid-cols-2 gap-3">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl text-base font-semibold"
            >
              {loading ? (
                "Guardando..."
              ) : (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Agregar Referenciado
                </>
              )}
            </Button>

            <Link to="/dashboard">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 rounded-xl"
              >
                Cancelar
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoReferenciador;
