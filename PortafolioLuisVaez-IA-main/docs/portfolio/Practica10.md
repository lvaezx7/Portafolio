<h1 align="center"> Data Augmentation Avanzado & Explicabilidad en Flowers102 🌸  
UT3-10 — Robustez y Explicabilidad en Computer Vision</h1>

![Flowers102]()

<p align="center">
  <em>Construyendo modelos robustos para clasificación de imágenes con técnicas de augmentation avanzado, mixup, cutmix y explicabilidad mediante GradCAM & Integrated Gradients.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#ComputerVision` `#Flowers102` `#DataAugmentation` `#GradCAM` `#IntegratedGradients` `#TensorFlow` `#DeepLearning` `#Explainability`

---

## 🚀 Accesos Directos Importantes

<div align="center">

<a href="https://colab.research.google.com/drive/1nFL7m7ud6BZqNfpFcMnWnBcvQ_DNM4KR?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>

&nbsp;

<a href="ENLACE_A_TU_DRIVE">
  <img src="https://img.shields.io/badge/Dataset%20y%20Recursos-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver Recursos en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo General:**  
Desarrollar un modelo robusto para clasificar las **102 especies del dataset Flowers102**, integrando:

- Augmentation avanzado  
- Técnicas adicionales (Mixup, CutMix)  
- Evaluación de robustez  
- Explicabilidad visual (GradCAM & Integrated Gradients)

📌 **Principales aprendizajes:**

- Los modelos pre-entrenados (EfficientNet) mejoran sustancialmente con augmentation agresivo.  
- Mixup y CutMix aportan regularización adicional y ayudan contra overfitting.  
- Las visualizaciones de GradCAM permiten comprender qué regiones activan al modelo.  
- Integrated Gradients aporta atribuciones más estables a nivel píxel.  
- El dataset Flowers102 es desafiante por su **alto desbalanceo** y **variabilidad visual extrema**.

📈 **Resultado final:**  
Un clasificador **más robusto, interpretable y confiable**, validado con explicabilidad visual y comparaciones antes/después del augmentation.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                    | Estado |
|-----------------------------------------------------------------------------|--------|
| Cargar y preparar el dataset Flowers102                                     | ✅ |
| Implementar augmentation avanzado en Keras                                  | ✅ |
| Integrar Mixup y CutMix (opcional)                                          | 🟨 Parcial |
| Entrenar modelo baseline vs modelo con augmentation                         | ✅ |
| Evaluar robustez y métricas (accuracy, pérdida, curvas)                     | ✅ |
| Implementar GradCAM para explicabilidad visual                              | ✅ |
| Implementar Integrated Gradients (opcional)                                 | 🟨 Parcial |
| Comparar explicabilidad antes y después del training                        | ✅ |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                   | Estimado | Real | Nota |
|-------------------------------------------------------------|----------|------|------|
| Descarga y preparación del dataset                          | 15 m     | 20 m | Normalización + resize |
| Diseño del pipeline de augmentation                         | 25 m     | 28 m | Inclusión de brightness/contrast |
| Implementación Mixup y CutMix                               | 20 m     | 25 m | Integración manual |
| Entrenamiento baseline                                      | 20 m     | 18 m | Sin augmentation |
| Entrenamiento full con augmentation                         | 30 m     | 32 m | Evitar overfitting |
| Implementación y visualización con GradCAM                  | 25 m     | 30 m | Elección de última conv layer |
| Atribuciones con Integrated Gradients                       | 20 m     | 18 m | Aproximación simple |
| Comparación de resultados y análisis                        | 15 m     | 16 m | Evaluación cualitativa |

🕒 **Total estimado:** 2 h 50 m · **Total real:** 3 h 07 m · Δ ≈ +17 m

---

# 🏢 **Contexto de Negocio (CRISP-DM)**

### **Problema de negocio**  
Una aplicación móvil debe identificar **102 especies de flores** en condiciones reales donde las fotos presentan:

- Luz variable  
- Ángulos extremos  
- Fondos ruidosos  
- Distintos estados de floración  

Los modelos base (ImageNet) **fallan en distinguir clases muy similares**.

### **Objetivos del proyecto**
1. Aumentar accuracy en clases difíciles  
2. Mejorar robustez del modelo ante variaciones de captura  
3. Hacer el modelo explicable para validación botánica  
4. Reducir sobreajuste en clases poco representadas  
5. Comparar baseline vs modelo mejorado

### **Variables críticas**
- 102 clases  
- Dataset altamente desbalanceado  
- Imágenes RGB de alta resolución  
- Entorno real de captura complejo  

### **Valor para el negocio**
- Educativo  
- Jardinería inteligente  
- Investigación botánica  
- Transparencia en decisiones del modelo (XAI)

---

# 🛠️ **Pipeline de Data Augmentation Avanzado**

| Técnica                    | Descripción |
|---------------------------|-------------|
| **RandomFlip**           | Refuerza simetrías naturales |
| **RandomRotation**       | Tolerancia a ángulos extremos |
| **RandomZoom**           | Cambios de escala |
| **RandomTranslation**    | Robustez espacial |
| **Brightness/Contrast**  | Cambios de iluminación |
| **Mixup** (opcional)     | Regularización | 
| **CutMix** (opcional)    | Combinación espacial |

---

# ⚙️ **Componentes del Modelo**

## 🔹 **Backbone**
- EfficientNetB0 preentrenado  
- Capas convolucionales congeladas inicialmente  

## 🔸 **Clasificador**
- GAP  
- Dense con softmax  
- 102 clases

## 🔸 **Entrenamiento**
- Adam  
- Cross-entropy  
- 10–20 epochs  

---

# 🔬 **Explicabilidad**

## **GradCAM**
- Identifica regiones activas de la última capa conv  
- Útil para ver **qué flor o pétalo activa al modelo**  

## **Integrated Gradients**
- Atribuciones por píxel  
- Más estable que saliency maps tradicionales  

---

# 📈 **Resultados Esperados**

- Accuracy superior al baseline  
- Mejor desempeño en clases raras  
- Heatmaps coherentes con la forma real de la flor  
- Comportamiento más estable en perturbaciones de luz/ángulo  

---

<h2 align="center">✨ Fin del Assignment UT3-10 ✨</h2>
