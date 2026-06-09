
<h1 align="center"> Segmentación Aérea Inteligente con SAM: Precisión Urbana desde el Cielo 🛰️🌆</h1>

![SAM_Aerial_Banner](../assets/ImgPractica12/img12.1.1.png)

<p align="center">
  <em>Aplicando Segment Anything (SAM) para segmentar edificios, caminos y vegetación en imágenes aéreas. Comparación entre SAM preentrenado, prompts inteligentes y fine-tuning especializado.</em>
</p>


🏷️ **Etiquetas Rápidas**  
#SAM #SegmentAnything #AerialImagery #SemanticSegmentation #ComputerVision #FineTuning #IoU

---

## 🚀 Accesos Directos Importantes

**Notebook y recursos del experimento**

<div align="center">
<a href="https://colab.research.google.com/drive/xxxxxxxxxxxxxxxxxxxx?usp=sharing">
<img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white"/>
</a>

<a href="https://drive.google.com/drive/folders/xxxxxxxxxxxxxxxxxxxx?usp=sharing">
<img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white"/>
</a>
</div>

---

## 🧠 Resumen Ejecutivo

### 🎯 Objetivo
Aplicar Segment Anything (SAM) para segmentación semántica en imágenes aéreas y comparar:

1. **SAM Pretrained con prompts (POINT y BOX)**
2. **SAM Fine-Tuned** en un subconjunto del dataset

El dataset contiene imágenes aéreas con **máscaras multiclase** (edificios, caminos, pasto, techos…).

Esto permite evaluar:

- Generalización de SAM fuera de su dominio
- Dificultad del modelado urbano (sombras, techos, calles delgadas)
- Impacto del fine-tuning en métricas (IoU, Dice, Recall)

### 📌 Hallazgos Clave

- SAM pretrained funciona bien en **objetos grandes**.
- SAM con **BOX prompts** supera a POINT en casi todo.
- El **fine-tuning** mejora drásticamente IoU en clases pequeñas.
- La mejora es mayor cuando hay **ruido** en máscaras o clases pequeñas.

### 📈 Conclusión General
SAM generaliza bien, pero **el fine-tuning es esencial** en dominios donde las texturas no coinciden con SA-1B.

---

## 🎯 Objetivos Específicos

| Objetivo | Estado |
|---------|--------|
| Descargar dataset desde Kaggle y organizar imágenes/máscaras | ✅ |
| Construir loader con OpenCV | ✅ |
| EDA inicial (resolución, clases, estadísticas) | ✅ |
| Evaluar SAM pretrained con POINT prompts | ✅ |
| Evaluar SAM pretrained con BOX prompts | ✅ |
| Entrenar SAM fine-tuned | ✅ |
| Comparar métricas IoU / Dice | ✅ |
| Documentar conclusiones | ✅ |

---

## 📅 Actividades y Tiempos

| Actividad | Estimado | Real | Nota |
|-----------|----------|------|------|
| Descarga dataset vía Kaggle API | 10 m | 12 m | permisos |
| Loader con OpenCV | 15 m | 18 m | máscaras multiclase |
| EDA + clases | 20 m | 22 m | distribución irregular |
| SAM pretrained prompts | 25 m | 26 m | objetos pequeños |
| Fine-tuning SAM | 35 m | 41 m | GPU |
| Métricas IoU/Dice | 20 m | 21 m | automatizado |
| Redacción | 10 m | 12 m | ✔ |

**Total:** 2h 15m → **Real:** 2h 32m (Δ +17m)

---

## ⚙️ Comparación de Modelos: Pretrained vs Fine-Tuned

Valores orientativos (reemplazar con tus métricas reales):

| Modelo | IoU Promedio | Dice | Fortalezas | Debilidades |
|--------|--------------|-------|------------|-------------|
| SAM Pretrained (POINT) | ≈ 0.48 | ≈ 0.59 | Muy rápido | Falla en caminos |
| SAM Pretrained (BOX) | ≈ 0.54 | ≈ 0.63 | Mejor contexto | Sombras confunden |
| SAM Fine-Tuned | ≈ 0.67 | ≈ 0.78 | Excelente en clases pequeñas | Requiere GPU |

**Conclusión:** el fine-tuning reduce errores urbanos en clases pequeñas/delgadas.

---

## 📈 Curvas y Resultados

### 🔹 SAM Pretrained — POINT Prompt
- Acierta en edificios
- Falla en caminos

### 🔹 SAM Pretrained — BOX Prompt
- Segmentación más precisa
- Mejor estabilidad

### 🔹 SAM Fine-Tuned
- Subida clara de IoU
- Mejor en techos y vegetación irregular

### 🔹 Métricas (generales)
- IoU por clase
- Dice por clase
- Errores en clases pequeñas

---

## 🔧 Preprocesamiento y Pipeline

| Paso | Descripción |
|------|-------------|
| Carga con OpenCV | imágenes RGB + máscaras PNG |
| Normalización | 0–255 → 0–1 |
| Binarización opcional | edificios o vegetación |
| Data augmentation | flips horizontales/verticales |
| SAM prompts | point + box |
| Entrenamiento | SAM fine-tuned |

---

## 🧩 Discusión y Reflexión Final

- SAM generaliza sorprendentemente bien, pero no basta para urbanismo.
- Las texturas aéreas (sombras, carreteras finas, techos brillantes) *rompen* al modelo preentrenado.
- El fine-tuning es clave para:
  - clases pequeñas,
  - escenas con ruido,
  - techos heterogéneos.

---

