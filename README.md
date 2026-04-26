# 🎵 Spotify Clone – Full Stack Music Streaming App

![Status](https://img.shields.io/badge/status-live-success?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-77.4%25-3178C6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=node.js)

Un clon de Spotify full‑stack construido con **React 19**, **TypeScript**, **Tailwind CSS** y **Node.js**, desplegado en Render. El objetivo fue llevar las buenas prácticas de una codebase real de Fintech (modularidad, manejo de estado con Zustand, tipado estricto, autenticación robusta) a un proyecto de portafolio de alto impacto visual e interactivo.

**[🚀 Ver demo en vivo](https://spotify-clone-ag5m.onrender.com/)** _(La primera carga puede tardar 30‑50s por el cold start de Render)_

---

## 🖼️ Preview

<p align="center">
  <img src="https://via.placeholder.com/800x450/121212/1DB954?text=Spotify+Clone+Desktop+View" alt="Desktop view" width="80%">
</p>

_¿No tienes capturas aún? Saca 3 screenshots (Home + Álbum + Chat) y súbelas a una carpeta `/screenshots`. Luego reemplaza estos placeholders._

---

## ✨ Funcionalidades Implementadas

### 🏠 Experience Principal

- **Dashboard al estilo Spotify**: Sección de canciones destacadas y "Lo que están escuchando".
- **Reproductor de música funcional**: Play, pause, barra de progreso y control de volumen.
- **Autenticación completa** con Google OAuth a través de **Clerk** (Login, registro y callback seguros).
- **Diseño responsive**: Panel izquierdo, contenido central y panel de actividad derecha con `react-resizable-panels`.

### 💬 Chat en Tiempo Real (Extra Diferenciador)

- **Mensajería instantánea** usando **Socket.IO**.
- **Indicador de usuarios activos** y estado de conexión en vivo.
- Lista de usuarios y panel de chat integrado.

### 🛡️ Panel de Administración

- Ruta `/admin` protegida con lazy loading.
- Vista para gestionar contenido de la plataforma.

### 🔧 Calidad de Ingeniería

- **101 commits** con historial profesional (conventional commits).
- **TypeScript estricto** desde el día 1 (`77.4%` del código).
- **State management con Zustand**: Stores independientes para autenticación, música, player y chat.
- **Skeleton loaders** para carga asíncrona (buena UX mientras carga el contenido).
- **Rate limiting** y `helmet` en el backend para seguridad básica.

---

## 🧰 Stack Tecnológico

| Capa         | Tecnologías                                                                    |
| :----------- | :----------------------------------------------------------------------------- |
| **Frontend** | React 19, TypeScript, Tailwind CSS, Radix UI, Zustand, Socket.IO Client, Clerk |
| **Backend**  | Node.js, Express, MongoDB + Mongoose, Socket.IO, Clerk Middleware              |
| **DevOps**   | Git + GitHub, Conventional Commits, Deploy en Render                           |

## 🚀 Arranque Local

```bash
# 1. Clona el repo
git clone https://github.com/didierpereira/spotify-clone.git
cd spotify-clone

# 2. Backend
cd backend
npm install
npm run dev     # Arranca en http://localhost:3001

# 3. Frontend
cd ../frontend
npm install
npm run dev     # Arranca en http://localhost:5173
```
