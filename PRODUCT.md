# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/vanilla JS, no build step, no framework. Deployed on GitHub Pages
with a custom domain (`ops365.cl`) behind Cloudflare DNS (proxied). An externally
drafted plan proposed Next.js + TypeScript + Tailwind + Vercel; the user and Claude
reviewed it together and declined it as unnecessary infrastructure complexity for a
6-page brochure site already running cleanly on GitHub Pages. Decision: stay static.

## Users

Pymes y empresas de retail/logística en Chile que necesitan externalizar personal
operativo de bodega/logística, automatizar procesos administrativos repetitivos, o
decidir qué externalizar y cómo. Compran por WhatsApp o formulario de contacto, no
hay checkout/e-commerce en el sitio.

## Product Purpose

OPS365 combina personas, tecnología y automatización (RPA) para que una operación
de logística y bodega funcione sin pausa. Existe para vender tres servicios:
outsourcing operativo, automatización/RPA de procesos administrativos, y
consultoría de externalización. El sitio es el canal de descubrimiento y contacto;
los contratos y el trabajo real ocurren fuera del sitio.

## Positioning

No es solo dotación de personal ni solo un proveedor de RPA: la propuesta es el
ciclo completo (consultoría en terreno → diagnóstico → opciones de mejora → ahorro
→ automatización → se repite). Un proveedor de outsourcing puro no ofrece el
diagnóstico ni la automatización; un proveedor de RPA puro no pone personas en la
bodega. OPS365 combina ambos y vuelve a entrar a mejorar, en vez de entregar un
informe una sola vez.

## Operating Context

- El contacto real hoy ocurre por WhatsApp (+56 9 9450 5710) y correo
  (contacto@ops365.cl, jose@ops365.cl); el formulario de contacto del sitio existe
  pero aún no está conectado a un backend real (cae a WhatsApp como respaldo).
- OPS365 opera hoy como persona natural (José Rondón Cabrera); la sociedad (OPS365
  SpA) todavía no está constituida legalmente — esto no debe afirmarse en ningún
  texto público hasta que se formalice.
- Automatizaciones internas de OPS365 (CRM de ventas, generación de leads,
  contenido de LinkedIn) viven en un proyecto n8n separado
  (`PROYECTOS/automatizaciones OPS365/` en el repo de n8n del usuario), no en este
  sitio.
- Ley 21.719 (protección de datos personales, Chile) entra en vigor el
  1 de diciembre de 2026; la Política de Privacidad y el Aviso Legal del sitio ya
  se redactaron considerando esa fecha.

## Capabilities and Constraints

- Sitio de 6 páginas: Inicio, Operación (el ciclo de 6 pasos), Soluciones,
  Contacto, Privacidad, Aviso legal.
- Navegación: menú lateral fijo en escritorio; en móvil, header con hamburguesa +
  barra fija abajo con WhatsApp y Contacto siempre visibles. Esto fue un requisito
  explícito del usuario, no una elección de diseño libre — no simplificar de vuelta
  a una landing de una sola página ni quitar los botones fijos de móvil.
- El formulario de contacto valida en cliente (HTML5 + JS) pero no tiene backend
  real todavía; conectar a un webhook de n8n es trabajo pendiente conocido.
- Sin cookies, sin analítica, sin tracking de ningún tipo hoy.

## Brand Commitments

- Nombre: OPS365. Tagline: "Operaciones sin pausa" / "Flow · Team · Control".
- Paleta: navy `#0C3B6E` (texto/marca principal), navy-deep `#06243F` (fondos
  oscuros), acento naranja `#FF7A1A`, azules de apoyo `#3E6488`/`#8EA8C1`.
- Tipografía: Manrope (Google Fonts), todo el texto, sin tipografía secundaria.
- Logo: isotipo de 4 barras escalonadas (altura ascendente), con la primera barra
  siempre en acento naranja. Archivos ya existentes: `logo.svg`, `logo-blanco.svg`,
  `isotipo.svg`, favicons. No regenerar el logo — es activo aprobado.
- Tono: serio, profesional, B2B — nunca juguetón ni informal.
- Nunca inventar testimonios, clientes, métricas, casos de éxito o estadísticas de
  resultados. OPS365 es una empresa recién lanzada sin clientes públicos todavía.

## Evidence on Hand

- Sin testimonios, sin casos de éxito, sin logos de clientes, sin métricas de
  resultados reales. Cualquier mención de "ahorro de horas" o similar en el copy
  actual es una afirmación genérica sobre el servicio, no un dato medido — no
  convertirla en una cifra inventada.
- El dominio, DNS (Cloudflare) y despliegue (GitHub Pages) ya están configurados y
  funcionando en producción.

## Product Principles

1. El ciclo (consultoría → diagnóstico → opciones → ahorro → automatización → se
   repite) es la idea central del negocio — toda página debe reforzarlo, no
   tratarlo como una sección más.
2. Nunca fabricar prueba social. La honestidad sobre ser una empresa nueva es más
   defendible que una métrica inventada.
3. El sitio es estático a propósito; no proponer frameworks, builds ni hosting
   nuevo sin que el usuario lo pida.
4. WhatsApp es el canal de conversión principal hoy; cualquier cambio de
   navegación debe mantenerlo accesible en un toque desde cualquier página,
   especialmente en móvil.
5. Mientras OPS365 SpA no esté constituida, todo texto legal/público debe hablar
   de José Rondón Cabrera como persona natural, no de una sociedad.

## Accessibility & Inclusion

Ningún requisito específico establecido por el usuario; se sigue buen contraste
(texto ≥4.5:1), navegación por teclado y estados de foco visibles como práctica
general, sin un estándar WCAG formal exigido.
