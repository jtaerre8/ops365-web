# 🌐 Ops365 — Sitio web oficial

Landing page de Ops365, empresa de outsourcing operativo y automatización para logística y bodegas en Chile.

**Sitio web:** [www.ops365.cl](https://www.ops365.cl)

---

## 📁 Archivos

| Archivo | Función |
|---|---|
| `index.html` | Página principal (HTML + CSS + JS en uno solo) |
| `logo.svg` | Logo horizontal a color |
| `logo-blanco.svg` | Logo blanco para footer |
| `isotipo.svg` | Solo símbolo (barras escalonadas) |
| `favicon-16.png` | Favicon 16×16 px |
| `favicon-32.png` | Favicon 32×32 px |
| `favicon.png` | Apple touch icon (48×48 px) |
| `CNAME` | Configuración de dominio personalizado |

---

## 🚀 Cómo desplegar en GitHub Pages

### Paso 1 — Crear el repositorio

1. Entra a [github.com](https://github.com) con tu cuenta
2. Clic en el botón **"+"** arriba a la derecha → **"New repository"**
3. Configurar:
   - **Repository name:** `ops365.cl` (recomendado) o `ops365-web`
   - **Description:** "Sitio web oficial de Ops365"
   - **Visibility:** Public ✅ (obligatorio para GitHub Pages gratis)
   - NO marcar "Initialize with README"
4. Clic en **"Create repository"**

### Paso 2 — Subir los archivos

**Opción A — Arrastrar y soltar (más fácil)**

1. En la página del repositorio recién creado, busca el enlace **"uploading an existing file"**
2. Arrastra TODOS los archivos de esta carpeta (`index.html`, `logo.svg`, etc.)
3. Abajo escribe un mensaje como "Versión inicial del sitio web"
4. Clic en **"Commit changes"**

**Opción B — GitHub Desktop**

Si tienes GitHub Desktop instalado:
1. Clona el repositorio recién creado
2. Copia todos los archivos de esta carpeta dentro
3. Commit + Push

### Paso 3 — Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (pestaña arriba)
2. En el menú izquierdo, clic en **"Pages"**
3. En **"Source"** selecciona **"Deploy from a branch"**
4. En **"Branch"** selecciona **"main"** y carpeta **"/ (root)"**
5. Clic en **"Save"**
6. Espera 1-2 minutos

Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]/`

### Paso 4 — Conectar tu dominio ops365.cl

Esto es lo que hace que tu web se vea en `www.ops365.cl` en lugar de la URL larga de GitHub.

**En GitHub:**
1. En Settings → Pages
2. En **"Custom domain"** escribe: `www.ops365.cl`
3. Clic en **"Save"**
4. Marca la casilla **"Enforce HTTPS"** (puede tardar unos minutos en activarse)

**En Cloudflare (donde tienes el DNS):**

1. Entra a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Selecciona el dominio `ops365.cl`
3. Ve a la pestaña **"DNS"** → **"Records"**
4. Agrega los siguientes registros:

| Tipo | Nombre | Contenido | Proxy |
|---|---|---|---|
| `CNAME` | `www` | `[tu-usuario].github.io` | 🟠 Proxied |
| `A` | `@` | `185.199.108.153` | 🟠 Proxied |
| `A` | `@` | `185.199.109.153` | 🟠 Proxied |
| `A` | `@` | `185.199.110.153` | 🟠 Proxied |
| `A` | `@` | `185.199.111.153` | 🟠 Proxied |

⚠️ **Importante:** las 4 IPs son las oficiales de GitHub Pages. Cópialas exactas.

5. La propagación tarda entre 5 min y 1 hora típicamente

### Paso 5 — Verificar

1. Espera 10-15 minutos después de configurar todo
2. Abre `www.ops365.cl` en una ventana incógnito
3. Si ves la web → ✅ todo funciona
4. Si ves un error → espera más (DNS puede tardar)

---

## 🔧 Cómo actualizar la web después

Cada vez que quieras cambiar algo:

1. Edita `index.html` directamente en GitHub (botón del lápiz)
2. O sube una nueva versión arrastrando el archivo
3. GitHub Pages se actualiza automáticamente en 1-2 minutos

---

## 📊 Características técnicas

- ✅ **Responsive** — funciona perfecto en móvil y escritorio
- ✅ **Sin dependencias externas** — solo Google Fonts
- ✅ **Performance optimizado** — CSS inline, sin frameworks pesados
- ✅ **SEO básico** — meta tags, Open Graph, descripción
- ✅ **Accesible** — semántica HTML correcta
- ✅ **Sin tracking** — cero cookies, cero analytics (privacy first)

---

## 💡 Próximas mejoras (cuando tengas tiempo)

Una vez tengas el primer cliente y testimonios reales:

- [ ] Agregar testimonios de clientes
- [ ] Agregar logos de clientes (con su autorización)
- [ ] Agregar casos de éxito
- [ ] Agregar Google Analytics si lo deseas
- [ ] Agregar formulario de contacto con [Formspree](https://formspree.io) (gratis)
- [ ] Agregar blog con artículos sobre logística (mejora SEO)

---

— Ops365 · Operaciones sin pausa · FLOW · TEAM · CONTROL
