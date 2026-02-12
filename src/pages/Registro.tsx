import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const provincias = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
  "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
  "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
  "Santiago del Estero", "Tierra del Fuego", "Tucumán",
];

const Registro = () => {
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    provincia: "",
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!aceptaTerminos) {
      toast({ 
        title: "Error", 
        description: "Debés aceptar los términos y condiciones.", 
        variant: "destructive" 
      });
      return;
    }

    if (!form.nombre || !form.dni || !form.email || !form.telefono || !form.provincia) {
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
        title: "¡Registro exitoso!", 
        description: "Tu solicitud ha sido enviada" 
      });
      navigate("/confirmacion");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-4">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3 max-w-5xl mx-auto">
        <Link to="/">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Link>
        <h1 className="text-xl font-bold">Registro de Referenciador</h1>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-5 pb-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>Nombre completo</Label>
            <Input
              placeholder="Juan Pérez"
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              required
              className="h-12 rounded-xl bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label>DNI</Label>
            <Input
              placeholder="12345678"
              value={form.dni}
              onChange={(e) => handleChange("dni", e.target.value.replace(/\D/g, "").slice(0, 8))}
              required
              className="h-12 rounded-xl bg-secondary border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Correo electrónico</Label>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="h-12 rounded-xl bg-secondary border-border"
          />
        </div>

        <div className="space-y-2">
          <Label>Teléfono</Label>
          <Input
            type="tel"
            placeholder="+54 11 1234-5678"
            value={form.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            required
            className="h-12 rounded-xl bg-secondary border-border"
          />
        </div>

        <div className="space-y-2">
          <Label>Provincia</Label>
          <Select value={form.provincia} onValueChange={(v) => handleChange("provincia", v)}>
            <SelectTrigger className="h-12 rounded-xl bg-secondary border-border">
              <SelectValue placeholder="Seleccioná tu provincia" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {provincias.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <Checkbox
            id="terminos"
            checked={aceptaTerminos}
            onCheckedChange={(c) => setAceptaTerminos(c === true)}
            className="mt-0.5"
          />
            <label htmlFor="terminos" className="text-sm text-muted-foreground leading-snug cursor-pointer">
            Acepto los <a href="#" className="text-primary hover:underline">términos y condiciones</a> del programa de referenciadores.
          </label>
        </div>

        <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl text-base font-semibold mt-4">
          {loading ? "Enviando..." : "Enviar solicitud"}
        </Button>
      </form>
    </div>
  );
};

export default Registro;
