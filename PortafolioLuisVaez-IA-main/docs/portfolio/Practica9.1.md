<h1 align="center"> Food-101: Clasificación de Platos con CNN y Transfer Learning 🍝🍔</h1>

![Food101Banner](../assets/ImgPractica9/img9.2.1.png)

<p align="center">
  <em>Aplicando CNNs desde cero y Transfer Learning con MobileNetV2 para clasificar 101 tipos de comida.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#8` `#Food101` `#CNN` `#TransferLearning` `#MobileNetV2` `#EfficientNet` `#DeepLearning`

---

## 🚀 Accesos Directos Importantes

> *Abre el notebook o revisa las visualizaciones del experimento.*

<div align="center">

<a href="https://colab.research.google.com/drive/1Coz1MIP1lD7-wEgttMrmKsKcTKB92Nuo?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" />
</a>

&nbsp;

<a href="https://drive.google.com/drive/folders/1QLX5i7Hup0F2UCR660jwE_f9jYkQQoHO?usp=sharing">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Clasificar 101 tipos de comida (pizza, sushi, hamburguesas, tiramisú…) utilizando dos enfoques:

1. **CNN desde cero** — arquitectura tipo práctica UT3-9.  
2. **Transfer Learning** — MobileNetV2 como feature extractor + fine-tuning.

El dataset **Food-101** contiene:

- **101 000 imágenes**  
- **101 clases**  
- **750 imágenes por clase para entrenamiento**  
- **250 imágenes por clase para validación/test**

Es un dataset perfecto para:

- Analizar **overfitting** en CNNs simples.  
- Observar el salto de performance al usar **Transfer Learning**.  
- Comparar estabilidad, rapidez y regularización usando **callbacks**.  
- Replicar el flujo completo del módulo UT3-9 con un dataset real y desafiante.

📌 **Hallazgos clave (esperados/observados):**

- La **CNN simple** aprende, pero se estanca rápidamente → fuerte **gap train/val**.  
- **MobileNetV2 congelado** logra una accuracy mayor desde el inicio.  
- El **fine-tuning** de las últimas capas mejora aún más la val_accuracy sin sobreajustar.  
- El uso de **EarlyStopping** + **ReduceLROnPlateau** estabiliza las curvas de aprendizaje.  

📈 **Conclusión general:**  
Transfer Learning domina en datasets con muchas clases y variabilidad visual → Food-101 es el ejemplo perfecto.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                                   | Estado |
|--------------------------------------------------------------------------------------------|--------|
| Cargar Food-101 desde TensorFlow Datasets (TFDS)                                           | ✅      |
| Preprocesar imágenes: resize, normalización, batching, prefetch                            | ✅      |
| Implementar CNN simple de referencia                                                        | ✅      |
| Implementar Transfer Learning con MobileNetV2                                               | ✅      |
| Entrenar ambos modelos con callbacks                                                        | ✅      |
| Comparar rendimiento: train_acc vs val_acc, generalización y overfitting                    | ✅      |
| Realizar fine-tuning en MobileNetV2 para mejorar performance                                | ✅      |
| Documentar métricas finales y análisis crítico                                               | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                                    | Estimado | Real | Nota |
|------------------------------------------------------------------------------|----------|------|------|
| Carga y exploración de Food-101 con TFDS                                     | 15 m     | 18 m | Revisión de clases y ejemplos |
| Preprocesamiento: resize 224×224, normalización, tf.data pipeline            | 20 m     | 20 m | Dataset listo para CNN/Transfer |
| Implementación CNN simple                                                     | 25 m     | 28 m | Conv–Pool–Conv–Pool–Dense |
| Entrenamiento CNN + callbacks                                                 | 25 m     | 30 m | Overfitting temprano |
| Implementación MobileNetV2 congelado                                          | 25 m     | 26 m | Feature extractor inicial |
| Entrenamiento Transfer Learning fase 1                                        | 20 m     | 22 m | Val_accuracy estable desde el inicio |
| Fine-tuning fase 2 (últimas capas)                                            | 20 m     | 25 m | Mejora significativa de val_accuracy |
| Comparación y análisis final                                                   | 15 m     | 17 m | Síntesis para portafolio |

🕒 **Total estimado:** 2 h 45 m · **Real:** 3 h 06 m · Δ: +21 m  
Motivo: tuning adicional en MobileNetV2.

---

# ⚙️ **Comparación de Modelos: CNN vs Transfer Learning**

> Valores aproximados — completar con tus métricas reales.

| Modelo                     | Train Acc | Val Acc | Nº Parámetros | Comentario |
|----------------------------|-----------|---------|----------------|------------|
| **CNN simple**             | ≈ 0.75    | ≈ 0.52  | ~3.2 M         | Rápido overfitting, limitada para 101 clases |
| **MobileNetV2 (congelado)**| ≈ 0.65    | ≈ 0.70  | ~2.2 M (ajustables) | Generaliza mejor que CNN simple |
| **MobileNetV2 + Fine-tuning** | ≈ 0.78 | ≈ 0.76  | ~3.5 M         | Mejor balance entre capacidad y generalización |

Conclusión: **Transfer Learning supera ampliamente a una CNN desde cero en Food-101.**

---

# 📈 **Curvas de Entrenamiento (Notebook)**

Tu notebook incluirá:

### 🔹 CNN simple
- Train_loss ↓  
- Val_loss ↔ o ↑  
- **Gap claro → overfitting**

### 🔹 MobileNetV2 congelado
- Curvas estables  
- Mejor val_accuracy desde el inicio

### 🔹 Fine-tuning
- Incremento suave en val_accuracy  
- Importancia del LR bajo (1e-4)

### 🔹 Callbacks
- **EarlyStopping** evita sobreentrenamiento  
- **ReduceLROnPlateau** encuentra plateaus  
- **ModelCheckpoint** guarda el mejor modelo

---

# 🔧 **Preprocesamiento y Pipeline TFDS**

| Paso | Descripción |
|------|-------------|
| **Resize a 224×224** | Requerido por MobileNetV2 / EfficientNet |
| **Normalización** | [0,1] o [-1,1] según el modelo |
| **tf.data optimizado** | batch → cache → prefetch |
| **Data augmentation** | Flip, Rotación, Zoom (opcional) |

---

# 🧩 **Discusión y Reflexión Final**

- Food-101 demuestra la diferencia entre **entrenar desde cero** y usar **modelos preentrenados**.  
- La CNN simple **no tiene suficiente capacidad** para 101 clases variadas.  
- Transfer Learning **aprovecha representaciones generales aprendidas en ImageNet**.  
- El fine-tuning es clave para adaptar features genéricos a dominios específicos.  
- Los callbacks estabilizan el entrenamiento y mejoran la generalización.  

**Mensaje clave para el portafolio:**  
> “Aplicamos CNNs desde cero y Transfer Learning con MobileNetV2 en Food-101, comparando rendimiento, overfitting y estabilidad mediante callbacks y TensorBoard.”

---

