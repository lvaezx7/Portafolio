---
title: "Creación y publicación del portafolio "
date: 2025-09-07
number: 2
status: "Completado"
tags: [GitHub Pages, MkDocs, CI/CD, Deploy, Documentación]
notebook: —
drive_viz: —
dataset: —
time_est: "1 h 30 m"
time_spent: "—"
---

# {{ page.meta.title }}

<span class="pill">{{ page.meta.status }}</span>
<span class="pill">#{{ page.meta.number }}</span>
{% if page.meta.tags %}{% for t in page.meta.tags %}<span class="pill">{{ t }}</span>{% endfor %}{% endif %}

!!! abstract "Resumen ejecutivo"
    **Objetivo:** Aqui mi proposito fue Publicar el **portafolio** utilizando **GitHub Pages** con **MkDocs + Material** y un pipeline de **GitHub Actions**.  
    **Resultado:** Me dio como resultado un sitio accesible y didactico públicamente con una estructura mínima y un **workflow de despliegue** automatizado.

---

## Contexto

Esta accion asegura que el portafolio esté **online**, con despliegues automáticos en cada `push` a **main**. Se parte de un **template** y se publica con **GitHub Actions**, dejando secciones mínimas visibles (About, prácticas e imágenes destacadas).

## Objetivos

- [x] Crear el repo **desde el template** (no fork).  
- [x] Activar **GitHub Pages** con **Source: GitHub Actions**.  
- [x] Completar el **contenido mínimo** (About, enlaces a prácticas, visualizaciones).  
- [x] Hacer **commit + push** y verificar el **workflow** de deploy.  
- [x] Entregar **URL pública** en WebAsignatura.

---

## Actividades (con tiempos estimados)

| Actividad                                         | Estimado | Real | Nota |
|---------------------------------------------------|---|---|---|
| Crear repo desde template                         | 10 m | 5 m | `Use this template` → repo público y nombre corto. |
| Activar GitHub Pages (Actions)                    | 5 m  | 5 m | Settings → Pages → **Source: GitHub Actions**. |
| Completar contenido mínimo (About, links, figs)   | 45 m | 20 m | Portada, enlaces a P1 (#01 EDA Iris), capturas destacadas. |
| Publicar cambios (commit/push)                    | 10 m | 5 m | Verificar job de **deploy** (1–3 min). |
| Entrega (WebAsignatura)                           | 5 m  | 10 m | Pegar URL pública del sitio. |

> **Totales** — Estimado: **1 h 15 m** · Real: **45 m**.

---

## Desarrollo

- **Template → Repo**: Creación desde `Use this template`; repo **público** y descripción corta.  
- **Pages (Actions)**: Settings → Pages → Source = **GitHub Actions**; se verifica el **workflow** en *Actions*.  
- **Contenido mínimo**:  
  - **About**: Breve bio + links (GitHub/LinkedIn).  
  - **Prácticas**: Enlaces relativos a #01 (EDA) y #02; 3–5 **insights** y 1–2 **figs** (pairplot/heatmap).  
  - **Backlog**: “Próximos pasos” para seguir iterando.  
- **Publicación**: `git commit -m "feat: publicar estructura inicial del portafolio"` → `git push` → Comprobar URL Pages.  
- **Entrega**: Enviar URL pública (no la del repo) y confirmar visibilidad.

---

## Indicadores de despliegue

| Indicador                                     | Estado / Valor |
|------------------------------------------------|----------------|
| URL pública (GitHub Pages)                    | **TODO**: pega aquí tu URL |
| Workflow `deploy` en Actions                  | ✅ Éxito |
| Tiempo de build (primer deploy)               | ~1–3 min |
| Secciones mínimas visibles                    | About · Prácticas · Visualizaciones |
| Accesibilidad del sitio                       | Pública (repo **Public**) |

!!! tip "Criterios de aceptación"
    - [x] Repo creado **desde template** (no fork), **público**.  
    - [x] **Pages** activado via **GitHub Actions** y deploy verde.  
    - [x] Contenido mínimo visible (About, links, figs).  
    - [x] **URL pública** funcionando y entregada.

---

## Decisiones clave (ADR-lite)

- **Source de Pages:** **GitHub Actions** (no branch `gh-pages` manual).  
- **Estructura:** Mantener `docs/` + `assets/` + `mkdocs.yml` del template.  
- **Links relativos** entre prácticas para evitar roturas al mover rutas.  
- **Sin dominio custom** por ahora; considerar más adelante.

!!! warning "Riesgos / Supuestos"
    - **404 inicial** tras el deploy → suele resolverse en 2–3 min; revisar *Actions* si persiste.  
    - **URL con `/<repo>/`** (importante en GitHub Pages de proyecto).  
    - **Leak privado**: confirmar que el repo sea **público** pero sin credenciales en commits.

---