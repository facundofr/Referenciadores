

# Plan: Cober Conectados - Programa de Conectados de Medicina Prepaga

## Estética y Diseño
- **Tema oscuro** con fondo negro/gris muy oscuro
- **Acentos en púrpura** (#8B5CF6) para botones principales y elementos destacados
- **Tipografía blanca** sobre fondos oscuros
- **Tarjetas** con fondo gris semitransparente y bordes sutiles
- **Mobile-first**, responsive para todos los dispositivos
- **Bottom navigation bar** con 5 tabs (Home, Conectados, Capacitación, Créditos, Perfil)

---

## Pantallas a implementar

### 1. Landing Page (pública)
- Hero con título "Conectá y Ganá"
- Ilustración de profesional médico
- Botón CTA "Quiero ser conector"
- Sección de beneficios exclusivos (sin experiencia previa, etc.)
- Header con logo COBER y menú hamburguesa

### 2. Registro de Conector
- Formulario con: nombre completo, DNI, correo electrónico, teléfono, provincia (dropdown)
- Checkbox de aceptación de términos y condiciones
- Validación de campos
- Navegación con flecha de retorno

### 3. Confirmación de Solicitud
- Ícono de check en púrpura
- Mensaje "¡Solicitud Enviada con Éxito!"
- Info de próximos pasos (revisión en 48hs hábiles)
- Botones: "Volver al Inicio" y "Ver Mis Solicitudes"

### 4. Login
- Logo Cober Conectados
- Campos: email y contraseña (con toggle de visibilidad)
- Link "¿Olvidaste tu contraseña?"
- Botón "Iniciar sesión"
- Link a registro
- Footer con links: Términos, Privacidad, Soporte

### 5. Dashboard Principal (Home)
- Saludo personalizado con avatar y nombre
- Tarjetas de métricas: Conectados Activos (con nivel), Acumulado en créditos (con categoría Platinum/Gold)
- Barra de progreso XP y meta mensual
- 4 accesos rápidos: Conectá, Estados, Cursos, Créditos
- Sección de capacitación con curso en progreso
- Botón flotante "+ cargar conectado"
- Bottom navigation bar

### 6. Formulario "Nuevo Conectado"
- Campos: nombre completo, DNI, email, teléfono, plan de interés (dropdown), notas/comentarios
- Header con título y flecha de retorno
- Estilo dark con inputs de borde sutil

### 7. Panel de Control / Lista de Conectados
- Header con avatar y "Panel de Control"
- 3 métricas: Total Conectados, Altas Efectivas, En Gestión
- Lista de conectados con: avatar, nombre, plan, fecha, estado (APROBADO/EN GESTIÓN/RECHAZADO)
- Filtros
- Botón "Ver detalle" por cada conectado
- Botón flotante "+ cargar conectado"

### 8. Mis Créditos
- Créditos acumulados totales con barra de progreso
- Desglose: Pendientes vs Pagados
- Tarjeta de objetivo mensual con progreso (nivel y meta)
- Lista de transacciones recientes con estado (PENDIENTE/PAGADA), referencia, monto
- Link "Ver todo"

### 9. Capacitación
- Título motivacional
- Lista de cursos con: título, porcentaje completado, imagen, botón "ver curso"
- Botón "lo veré más tarde"

### 10. Perfil de Usuario
- Avatar con borde púrpura
- Nombre y categoría (Conector Gold)
- Opciones: Datos Personales, Información de Cobro (CBU/CVU), Seguridad y Contraseña, Soporte y Ayuda, Legales
- Botón "Cerrar sesión"

---

## Backend (Supabase)
- **Autenticación** con email/contraseña
- **Tablas**: profiles, conectados, transacciones/créditos, cursos y progreso
- **Roles**: conector, admin
- **RLS** para que cada conector solo vea sus datos
- **Estados de conectados**: pendiente, en gestión, aprobado, rechazado

---

## Implementación por fases

**Fase 1 - Base visual y autenticación:**
Landing page, Login, Registro, Confirmación, setup de Supabase con auth

**Fase 2 - Dashboard y navegación:**
Dashboard principal, bottom nav bar, layout autenticado

**Fase 3 - Gestión de conectados:**
Formulario nuevo conectado, lista/panel de control con estados y filtros

**Fase 4 - Créditos y capacitación:**
Pantalla de créditos con transacciones, pantalla de cursos

**Fase 5 - Perfil:**
Pantalla de perfil con todas las secciones

