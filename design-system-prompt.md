# Prompt de estilo gráfico — Sitio Daniela Gutiérrez (danielagutierrezmkt.com)

Voy a enviarte el HTML viejo de una página (export de WordPress + Elementor) para que lo mejores. **Reconstrúyelo como UN solo bloque HTML autocontenido** (con `<style>` embebido arriba y `<script>` al final), listo para pegar en **un widget HTML de Elementor**. Ya rediseñé varias páginas con este sistema y la nueva debe verse idéntica en estilo.

## Tipografía
- Títulos: **Million Design** (mayúsculas). Fallback: `'Million Design','Archivo Black','Arial Black',sans-serif`.
- Cuerpo: **DM Sans**.
- `@import` de Google Fonts: `DM Sans` + `Archivo Black`.
- Los headings van en `text-transform:uppercase` y `letter-spacing:-.01em`.

## Paleta (variables CSS en `.lp-root`)
`--lp-lime:#d5f379` · `--lp-purple:#bb65ee` · `--lp-deep:#310075` · `--lp-green:#a9e700` · `--lp-dark:#141f33` (navy) · `--lp-gray:#f5f5f5` · `--lp-white:#fff`

## Reglas estructurales
- **Prefijo `lp-` en TODAS las clases** (evita choques con Elementor).
- **Full-bleed obligatorio** en `.lp-root` para romper el contenedor "boxed":
  `position:relative;width:100vw;max-width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;overflow-x:hidden;`
- Secciones: `.lp-section{padding:clamp(4rem,8vw,7rem) 1.5rem}` + `.lp-inner{max-width:1200px;margin:0 auto}`.
- **Fondos alternados, nunca dos iguales seguidos**: `lp-bg-navy` / `lp-bg-purple` (deep) / `lp-bg-white` / `lp-bg-gray`.
- Reset de párrafos: usa **`.lp-root :where(p){margin:0}`** (con `:where()`, especificidad 0). NO uses `.lp-root p{margin:0}` — pisa los márgenes de las clases (rompe el centrado de bloques con `margin:auto`).
- Botones: el color del texto va con `!important` porque Elementor pisa los links.

## Componentes establecidos (reutilízalos)
- **Botones**: `.lp-btn--primary` = fondo lima, texto `#141f33 !important`, hover → verde + `translateY(-3px)` + sombra. `.lp-btn--ghost` = transparente, borde blanco, texto blanco.
- **Labels**: chip pequeño en mayúsculas, `lp-label--ondark` (verde) / `lp-label--onlight` (morado).
- **Cards**: radio ~20px, hover `translateY(-6px)` + borde de color + sombra.
- **Resaltado**: `.lp-hl` (texto lima sobre fondo oscuro); marcador lima (`linear-gradient(transparent 62%, lima 62%)`) sobre fondo claro.
- **Reveal on scroll**: IntersectionObserver añade `.lp-in`; gateado por `.lp-js` (sin JS, todo visible).
- Patrones ya creados: hero con foto (split o foto de fondo con gradiente); split 2-col texto + media redondeada; tarjetas de servicio con precio y lista ✓/✗; tarjetas-paso numeradas; grid de features con ícono emoji; comparación Sí ✓ / No ✕ en dos tarjetas; tarjetas tipo **carpeta** (pestaña con `::before`); **visor de PDF tipo revista** (iframe); pricing con badge "más popular"; CTA final centrado.

## Imágenes
- Van por **URL** (no base64 — WordPress lo bloquea). Usa la ruta de la Biblioteca de Medios: `https://danielagutierrezmkt.com/wp-content/uploads/AAAA/MM/<nombre>.jpg`.
- Si no tengo el nombre final, deja un **link placeholder** con un comentario `<!-- CAMBIA ESTE LINK -->` encima; yo lo reemplazo manualmente.
- Cada `<img>` con `alt` descriptivo. Aviso: la carpeta `/AAAA/MM/` debe ser la del mes en que se subió la imagen, o da 404.

## Copy y reglas de marca
- **Nunca uses la palabra "branding"** — habla de "marca", "estrategia de marca", "psicología del consumidor".
- **Método RAYO** (no "BrainBrand"). 10 documentos en 4 fases, nombres en español — **R** Raíz (Esencia, Voz, Identidad de Marca), **A** Arquitectura (Perfil de Negocio, Cliente Ideal, Análisis de Mercado), **Y** Yo en el mercado (Brand Gang, Catálogo de Ofertas), **O** Origen en acción (Experiencia de Marca, FODA).
- **Em-dashes cerrados** (palabra—palabra), sin espacios.
- Voz: cercana, estratégica, sin rodeos, shareable. Que suene humana, nunca a IA.
- No inventes testimonios, datos ni cifras. Marca huecos con [PLACEHOLDER].
- **CTA final estándar** (cuando aplique): label "El siguiente paso" · h2 "¿Lista para dejar de publicar y empezar a vender?" · "Agenda una sesión gratuita de **20 minutos**…" · botón "Agendar sesión diagnóstica" → `/diagnostico-gratis`. (Siempre 20 min.) En páginas de venta directa, usa el CTA propio de la página (ej. WhatsApp).

## Datos de contacto
WhatsApp `https://wa.me/584227138195` · tel `+58 422 7138195` · IG `instagram.com/danielagutierrez.mk` · email `deumdaniela@gmail.com` · página de contacto `/contactame`.

## Verificación
Previsualiza con un server estático local y revisa cada sección. Nota: en preview standalone los breakpoints pueden no dispararse y los acentos verse como mojibake por charset — en Elementor (UTF-8) salen bien. No es bug.

---
**Tarea:** te paso el HTML viejo + "mejóralo con este sistema". Reorganiza el contenido para que sea claro y digerible, manténte 100% fiel a los datos/precios del original (no inventes), y entrégame un solo bloque HTML listo para pegar.
