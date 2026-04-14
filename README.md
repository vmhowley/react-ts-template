## 🤖 AI-Optimized Template

This project is optimized for AI-assisted development.

To ensure best results:

- Follow GEMINI.md for coding standards
- Follow AGENTS.md for AI behavior
- Follow project structure strictly

⚠️ Do not ignore these files when using AI tools like Cursor or Copilot.

# 🚀 React SaaS Starter Template (Vite + TS + Arquitectura Pro)

Template base para construir aplicaciones tipo **dashboard, SaaS, ERP o sistemas administrativos** usando:

- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🧠 Zustand (estado global)
- 🌍 Axios (API layer)
- 🔐 Sistema de autenticación base
- 📱 Layout 100% responsive
- 🧱 Arquitectura por features (escalable)

---

## 📦 Instalación

```bash
git clone https://github.com/TU-USUARIO/react-saas-template my-app
cd my-app
npm install
npm run dev
```

---

## 🌍 Variables de entorno

Crea un archivo `.env`:

```
VITE_API_URL=http://localhost:3000/api
```

---

# 🧱 Estructura del proyecto

```
src/
│
├── app/              → Router y providers globales
├── assets/           → Imágenes, logos, íconos
├── components/
│   ├── ui/           → Componentes reutilizables globales
│   └── layout/       → Navbar, Sidebar, Layout
│
├── features/         → 🔥 Arquitectura por módulos
│   ├── auth/
│   ├── dashboard/
│   └── users/
│
├── hooks/            → Custom hooks
├── services/         → Axios, llamadas API
├── store/            → Estado global (Zustand)
├── styles/           → Estilos globales
├── types/            → Tipos TypeScript globales
└── utils/            → Helpers
```

---

# 🧠 Arquitectura por Features

Cada módulo contiene todo lo que necesita:

```
features/users/
│
├── pages/        → Pantallas que se usan en rutas
├── components/   → Componentes internos del módulo
├── services.ts   → Llamadas API del módulo
└── types.ts      → Tipos del módulo
```

📌 Regla:

| Si es…                         | Va en                               |
| ------------------------------ | ----------------------------------- |
| Página usada en router         | `features/x/pages`                  |
| Componente reutilizable global | `components/ui`                     |
| Lógica de API                  | `services/` o `features/x/services` |

---

# 🔐 Autenticación

El template incluye:

- Login base
- Persistencia de sesión
- Interceptor de token
- Rutas protegidas

### Login API esperada

```
POST /auth/login
{
  email,
  password
}
```

Respuesta:

```json
{
  "id": "1",
  "name": "Victor",
  "email": "test@mail.com",
  "token": "jwt-token"
}
```

---

# 🧠 Estado Global (Zustand)

Ejemplo:

```ts
const user = useAuthStore((s) => s.user);
```

Stores incluidos:

- `authStore` → usuario logueado
- `themeStore` → tema claro/oscuro
- `uiStore` → control de sidebar

---

# 🌍 Axios Global

Configurado en:

```
src/services/api.ts
```

Incluye:

- Base URL automática
- Envío de token
- Logout automático si 401

---

# 🎨 Layout Responsive

| Dispositivo | Comportamiento      |
| ----------- | ------------------- |
| 📱 Móvil    | Sidebar tipo drawer |
| 📲 Tablet   | Sidebar colapsable  |
| 💻 Desktop  | Sidebar fijo        |

---

# 🧩 Alias disponibles

```ts
@/              → src
@app            → src/app
@components     → src/components
@ui             → src/components/ui
@layout         → src/components/layout
@features       → src/features
@hooks          → src/hooks
@services       → src/services
@store          → src/store
@styles         → src/styles
@types          → src/types
@utils          → src/utils
```

---

# 🚦 Crear un nuevo módulo (feature)

Ejemplo: `products`

```
features/products/
├── pages/ProductsPage.tsx
├── components/ProductCard.tsx
├── services.ts
└── types.ts
```

Agregar ruta en `app/router.tsx`.

---

# 🏗️ Flujo recomendado de desarrollo

1. Crear feature
2. Crear types
3. Crear services
4. Crear pages
5. Conectar al router

---

# 📱 Reglas responsive

Siempre usar:

```
p-4 md:p-6
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
text-sm md:text-base
```

---

# 🏁 Listo para:

✔ SaaS  
✔ Sistemas administrativos  
✔ ERP  
✔ Facturación  
✔ Dashboards

---

## 👨‍💻 Autor

Template base creado para acelerar desarrollo de aplicaciones React escalables.
