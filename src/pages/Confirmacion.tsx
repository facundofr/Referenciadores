import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Confirmacion = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 sm:px-6 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15">
            <CheckCircle className="h-14 w-14 text-primary" />
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-bold">¡Solicitud Enviada con Éxito!</h1>
        <p className="mb-2 text-muted-foreground">
          Tu solicitud para ser referenciador fue recibida correctamente.
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          Nuestro equipo la revisará en un plazo de <strong className="text-foreground">48 horas hábiles</strong>. Te notificaremos por email cuando sea aprobada.
        </p>

        <div className="space-y-3">
          <Link to="/">
            <Button variant="outline" className="w-full h-12 rounded-xl border-border">
              Volver al Inicio
            </Button>
          </Link>
          <Link to="/login">
            <Button className="w-full h-12 rounded-xl font-semibold">
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion;
