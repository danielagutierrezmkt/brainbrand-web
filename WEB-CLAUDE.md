# Sistema de diseño web — danielagutierrezmkt.com

Mejoro páginas viejas del sitio de Daniela Gutiérrez (export de WordPress + Elementor).
Cuando me pasen un HTML viejo y me pidan "mejóralo", **reconstruyo el contenido como UN solo
bloque HTML autocontenido** (con `<style>` embebido y un `<script>` al final), listo para pegar
en **un widget HTML de Elementor**. No toco la estructura de Elementor ni el CSS global: entrego
un bloque que reemplaza el contenido viejo.

Ya hay 6 páginas hechas con este sistema (Inicio, Conóceme, CV, Diagnóstico, Formaciones,
Servicios). La nueva debe verse idéntica en estilo.

## Tipografía
- Títulos: **Million Design** en mayúsculas. `font-family:'Million Design','Archivo Black','Arial Black',sans-serif`.
- Cuerpo: **DM Sans**.
- Cargar con `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:...&family=Archivo+Black&display=swap')`.
- Headings: `text-transform:uppercase; letter-spacing:-.01em; line-height:1.05`.

## Paleta (variables CSS en `.lp-root`)
```
--lp-lime:#d5f379;  --lp-purple:#bb65ee;  --lp-deep:#310075;  --lp-green:#a9e700;
--lp-dark:#141f33;  --lp-gray:#f5f5f5;    --lp-white:#ffffff;
```
Estilo general: oscuro, moderno, urbano, alto contraste. Nada pastel.

## Reglas estructurales (innegociables)
- **Prefijo `lp-` en TODAS las clases** (evita choques con Elementor).
- **Full-bleed en `.lp-root`** para romper el contenedor boxed de Elementor:
  `position:relative;width:100vw;max-width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;overflow-x:hidden;`
- Secciones: `.lp-section{padding:clamp(4rem,8vw,7rem) 1.5rem}` + `.lp-inner{max-width:1200px;margin:0 auto}`.
- **Fondos alternados, nunca dos iguales seguidos**: `lp-bg-navy` / `lp-bg-purple` / `lp-bg-white` / `lp-bg-gray`.
- Para no usar siempre blanco: en secciones blancas, cards en `#f5f5f5`; usar grises en vez de blanco puro.

## Componentes establecidos
- **Botones**: `.lp-btn--primary` = fondo lima, texto `#141f33 !important`, hover→verde `#a9e700` + `translateY(-3px)` + sombra. `.lp-btn--ghost` = transparente, borde y texto blancos. El `!important` en el color es obligatorio (Elementor pisa el color de los `<a>`).
- **Labels**: chip pequeño mayúsculas con letter-spacing; `lp-label--ondark` (verde) / `lp-label--onlight` (morado).
- **Cards**: radio ~20px; hover `translateY(-6px)` + borde de color de marca + sombra.
- **Resaltado de palabras**: `.lp-hl` (texto lima) sobre fondo oscuro; marcador lima (fondo + texto oscuro) sobre hero claro.
- **Reveal al hacer scroll**: IntersectionObserver añade `.lp-in`; gated por `.lp-js` (sin JS, todo visible). Incluir siempre el script.
- Patrones reutilizables: hero con foto de fondo (gradiente oscuro encima) o split texto+foto; split 2-col (texto + media redondeada); pasos/fases con badge numerado; tarjetas de precio con lista ✓/✗ y pill de RAYO; testimonios con avatar; **mockups tipo teléfono** clicables a Instagram; **collage asimétrico** de fotos; **tarjetas tipo carpeta** (pestaña con `::before`, hover que levanta, color de acento por grupo); **visor de PDF tipo revista** (iframe + link de respaldo).

## Imágenes (crítico)
- WordPress **bloquea base64 / `data:`** → las imágenes van por **URL de Biblioteca de Medios**, no incrustadas.
- Usar URLs predichas: `https://danielagutierrezmkt.com/wp-content/uploads/AAAA/MM/<nombre>.jpg` (año/mes del momento de subida).
- Optimizar con `sips` (ancho ~800–1500px, JPG calidad ~80; PNG solo si necesita transparencia). Convertir HEIC→JPG.
- Dejar los archivos optimizados en `imagenes-optimizadas/` para que ella los suba con esos **nombres exactos**.
- Cada `<img>` con `alt` descriptivo. Avisar que si la URL real difiere, ella la cambia en el bloque.

## Copy y marca
- **Nunca usar la palabra "branding"** (no se posiciona así). Decir "marca", "estrategia de marca", "psicología del consumidor", "neuromarketing".
- **Método RAYO** (no "BrainBrand"). Metodología propia: 10 documentos en Notion, en 4 fases:
  - **R — Raíz**: Esencia de Marca, Voz de Marca, Identidad de Marca.
  - **A — Arquitectura**: Perfil de Negocio, Cliente Ideal, Análisis de Mercado.
  - **Y — Yo en el mercado**: Brand Gang, Catálogo de Ofertas.
  - **O — Origen en acción**: Experiencia de Marca, Análisis FODA.
  - Página: `/metodorayo`. Documentos con nombres en español.
- **Em-dashes cerrados** (palabra—palabra), nunca con espacios.
- Voz: cercana, estratégica, sin rodeos, shareable, amiga. El copy debe sonar humano, nunca a IA.
- **CTA final estándar**: label "El siguiente paso" · h2 "¿Lista para dejar de publicar y empezar a vender?" · "Agenda una sesión gratuita de **20 minutos** para diagnosticar tu marca y saber desde dónde arrancar." · botón "Agendar sesión diagnóstica" → `/diagnostico-gratis`. **Siempre 20 min, nunca 30.**

## Datos de contacto / enlaces
- WhatsApp: `https://wa.me/584227138195` · Tel: `+58 422 7138195`
- Instagram: `https://instagram.com/danielagutierrez.mk`
- Email: `deumdaniela@gmail.com`
- Slugs: `/conoceme`, `/formaciones`, `/recursos`, `/diagnostico-estrategico`, `/diagnostico-gratis`, `/metodorayo`, `/cv`, `/generadoresencia`.

## Verificación
- Previsualizar con un server estático local y revisar cada sección.
- En preview standalone los breakpoints responsive **no disparan** (falta `<meta viewport>`); en Elementor sí funcionan — no es bug. No "arreglar" eso.
- Acentos/emoji se ven como mojibake en el preview por charset; en Elementor (UTF-8) salen bien.
- Responsive: grids colapsan 4→2→1; splits se apilan a ~880px; usar media queries completas.

## Output esperado
Un archivo `.html` único, con `<style>` + HTML + `<script>` de reveal. Sin `<html>/<head>/<body>`.
Comentario inicial listando las imágenes a subir y sus URLs. Listo para copiar/pegar en un bloque
HTML de Elementor. Si la página ocupa todo el ancho, recordar poner el contenedor de Elementor en
ancho completo y padding 0 (o usar plantilla "Elementor Ancho completo").
