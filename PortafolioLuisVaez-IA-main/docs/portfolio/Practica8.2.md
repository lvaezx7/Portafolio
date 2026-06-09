<h1 align="center"> Backprop & Optimización en Texto: Análisis de Sentimiento con IMDB 🎬🧠</h1>

![IMDBSentimentBanner](../assets/ImgPractica8/img8.2.1.png)

<p align="center">
  <em>Aplicando backpropagation y distintos optimizadores en un problema real de análisis de sentimiento con el dataset IMDB.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#8` `#IMDB` `#SentimentAnalysis` `#Backpropagation` `#Optimizers` `#NLP` `#DeepLearning`

---

## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook y explorar las visualizaciones interactivas.*

<div align="center">

<a href="https://colab.research.google.com/drive/1b7hsA2N3LGg7tLVQi9_d9AbpXT6nWaWf?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>
&nbsp;
<a href="https://drive.google.com/drive/folders/1QLX5i7Hup0F2UCR660jwE_f9jYkQQoHO?usp=sharing">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver visualizaciones en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Resolver un problema clásico de **análisis de sentimiento** sobre el dataset **IMDB** (50 000 reseñas de películas, divididas en 25 000 de entrenamiento y 25 000 de test, etiquetadas como **positivas** o **negativas**) utilizando **redes neuronales para texto** y comparando distintos **optimizadores**.

El flujo principal del trabajo es:

1. Cargar el dataset IMDB limitado al **vocabulario de las 10 000 palabras más frecuentes**.
2. Preparar las reseñas como **secuencias de longitud fija** (padding y truncado a `MAXLEN = 200`).
3. Construir un modelo base con:
   - Capa `Embedding` para representar palabras.
   - `GlobalAveragePooling1D` para obtener una representación fija de la reseña.
   - Capas densas con activación `relu`.
   - Capa final `Dense(1, sigmoid)` para clasificar sentimiento.
4. Mantener **la misma arquitectura** y variar únicamente el **optimizador**:
   - `Adam(1e-3)`
   - `SGD(1e-2, momentum=0.9)`
   - `RMSprop(1e-3)`
5. Analizar en **TensorBoard**:
   - Curvas de **loss** y **accuracy**.
   - Efecto del **learning rate** y del optimizador en la convergencia.
   - Impacto de **EarlyStopping** y **ReduceLROnPlateau**.

📌 **Hallazgos clave (conceptuales):**

- El mismo modelo puede **aprender de manera muy distinta** según el optimizador.
- **Adam** ofrece una **convergencia rápida y estable** para este problema de texto.
- **SGD + momentum** puede alcanzar resultados similares, pero requiere:
  - Más épocas.
  - Mayor sensibilidad al learning rate.
- **RMSprop** se comporta bien en secuencias, pero su estabilidad depende de una buena configuración del LR.
- Backpropagation y los optimizadores no son exclusivos de imágenes:  
  **también son cruciales en NLP**, donde la entrada son secuencias de enteros (tokens) y no píxeles.

📈 **Resultado final (a nivel conceptual):**  
El uso de una arquitectura simple `Embedding + Pooling + Densas`, combinado con un optimizador adecuado (por ejemplo, **Adam**), logra una **buena accuracy en sentimiento** sobre IMDB, y sirve como demostración clara de cómo **la elección del optimizador influye directamente en la convergencia y en la calidad del modelo**.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                                                       | Estado |
|---------------------------------------------------------------------------------------------------------------|--------|
| Cargar el dataset **IMDB** limitado a las 10 000 palabras más frecuentes                                      | ✅      |
| Preparar las reseñas con **padding/truncado** a longitud fija (`MAXLEN = 200`)                                | ✅      |
| Implementar un **modelo base** `Embedding + GlobalAveragePooling1D + Densas`                                  | ✅      |
| Entrenar el modelo con distintos **optimizadores** (`Adam`, `SGD+momentum`, `RMSprop`)                         | ✅      |
| Registrar el entrenamiento en **TensorBoard** (loss/accuracy, por época y por optimizador)                   | ✅      |
| Aplicar y comparar **EarlyStopping** y **ReduceLROnPlateau**                                                  | ✅      |
| Comparar **train_acc, val_acc y test_acc** entre optimizadores                                                | ✅      |
| Redactar una **reflexión final** sobre cómo el optimizador afecta la convergencia y el resultado final        | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                                                                      | Estimado | Real  | Nota                                                                                     |
|---------------------------------------------------------------------------------------------------------------|----------|-------|------------------------------------------------------------------------------------------|
| Carga y exploración inicial del dataset IMDB (dimensiones, ejemplos de reseñas)                               | 20 m     | 25 m  | Revisión de longitudes de secuencia y distribución de etiquetas                         |
| Preprocesamiento: padding/truncado de secuencias (`MAXLEN = 200`)                                             | 20 m     | 20 m  | Construcción de `X_train_pad`, `X_test_pad`                                             |
| Implementación del **modelo base** (Embedding + Pooling + Densas)                                             | 30 m     | 32 m  | Definición de la arquitectura y compilación                                             |
| Entrenamiento con **Adam(1e-3)** + callbacks                                                                  | 30 m     | 35 m  | Análisis de convergencia rápida y estabilidad                                           |
| Entrenamiento con **SGD(1e-2, momentum=0.9)**                                                                  | 30 m     | 38 m  | Ajuste de LR y observación de curvas más ruidosas                                       |
| Entrenamiento con **RMSprop(1e-3)**                                                                            | 30 m     | 34 m  | Evaluación intermedia entre Adam y SGD                                                  |
| Análisis en **TensorBoard** (comparación visual de loss/accuracy por optimizador)                             | 25 m     | 27 m  | Comparación lado a lado de las curvas                                                   |
| Redacción de comparación final y reflexión sobre el rol de los optimizadores en problemas de texto            | 20 m     | 22 m  | Síntesis para el portafolio y lecciones aprendidas                                      |

🕒 **Total estimado:** 3 h 5 m · **Total real:** 3 h 53 m · Δ: +48 m (experimentos adicionales con LR y callbacks)

---

# ⚙️ **Comparación de Optimizadores en el Modelo IMDB**

> 💡 *Valores de ejemplo; deben actualizarse con los resultados reales del notebook.*

| Optimizador                 | LR       | Momentum | Arquitectura (misma para todos)                                      | Train Acc | Val Acc | Test Acc |
|----------------------------|----------|----------|-----------------------------------------------------------------------|-----------|---------|----------|
| **Adam**                   | 1e-3     | –        | Embedding(10 000, 64) → GAP1D → Dense(64, relu) → Dense(1, sigmoid)  | ≈ 0.94    | ≈ 0.90  | ≈ 0.89   |
| **SGD + momentum**         | 1e-2     | 0.9      | Misma arquitectura                                                    | ≈ 0.92    | ≈ 0.88  | ≈ 0.87   |
| **RMSprop**                | 1e-3     | –        | Misma arquitectura                                                    | ≈ 0.93    | ≈ 0.89  | ≈ 0.88   |

📝 **Lectura rápida de la tabla:**

- **Adam**:
  - Converge más rápido.
  - Suele alcanzar mejores métricas de validación y test.
- **SGD + momentum**:
  - Necesita más épocas y tuning fino del LR.
  - Curvas más ruidosas, pero más “clásicas” para estudiar optimización.
- **RMSprop**:
  - Se comporta bien en datos secuenciales, obteniendo resultados cercanos a Adam.

---

# 🔧 **Preprocesamiento y Representación del Texto (IMDB)**

Aunque aquí no hay variables numéricas clásicas, sí hay decisiones clave de “feature engineering” para texto:

| Paso / Técnica                                  | Descripción                                                                                             |
|-------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **Limitación del vocabulario**                 | Uso de solo las **10 000 palabras más frecuentes** (`num_words=10000`) para controlar la dimensionalidad. |
| **Codificación como enteros**                  | Cada reseña es una secuencia de IDs de palabras.                                                       |
| **Padding / truncado de secuencias**          | `pad_sequences(..., maxlen=MAXLEN, padding="post", truncating="post")` para obtener longitud fija de 200 tokens. |
| **Embedding**                                  | Capa `Embedding(input_dim=10000, output_dim=64)` para mapear cada ID a un vector denso.                |
| **GlobalAveragePooling1D**                     | Promedia los embeddings de la reseña → representa el “significado global” en un solo vector.           |
| **División train/val/test**                    | Uso de parte de `X_train_pad` como validación para monitorear generalización durante el entrenamiento. |

> 🔭 **Extensiones posibles:**  
> - Reemplazar `GlobalAveragePooling1D` por una **LSTM** o **Bidirectional LSTM**.  
> - Probar **GRU** o incluso arquitecturas **CNN para texto**.  
> - Experimentar con **embeddings pre-entrenados** (GloVe, Word2Vec) en lugar de embeddings aprendidos desde cero.  

---

# 📉 **Curvas de Entrenamiento y TensorBoard**

En el notebook se registran los experimentos con **TensorBoard**, permitiendo:

- Ver **loss** y **accuracy** de entrenamiento y validación por época.
- Comparar directamente:
  - Adam vs SGD vs RMSprop.
  - Diferentes learning rates para un mismo optimizador.
- Visualizar el efecto de:
  - **EarlyStopping** (detener cuando la val_loss deja de mejorar).
  - **ReduceLROnPlateau** (reducir LR automáticamente si no mejora la métrica).

Puntos clave a observar:

- Con Adam, la **val_loss** suele bajar de forma más estable y rápida.
- Con SGD, las curvas pueden ser más **oscilantes**, pero muestran bien los efectos del LR.
- RMSprop, en muchos casos, se posiciona “en el medio” en cuanto a velocidad y estabilidad.

---

# 🧩 **Discusión y Reflexión Final**

- **Backpropagation no es solo para imágenes**:  
  Aquí se ve claramente cómo el mismo mecanismo de **propagación hacia atrás** y actualización de pesos se aplica sobre **secuencias de texto** representadas como embeddings.

- **El rol del optimizador es crítico**:  
  - Cambiar de Adam a SGD, manteniendo todo lo demás igual, puede modificar:
    - Cuántas épocas necesitas.
    - El nivel de ruido en las curvas.
    - El máximo de accuracy que alcanzas.
  - Esto muestra que **el optimizador es una hiper-decisión tan importante como la arquitectura**.

- **IMDB como caso de estudio para el portafolio**:  
  - Permite decir: _“Aplicamos backpropagation y distintos optimizadores en un problema real de texto (IMDB), analizando la convergencia con TensorBoard y usando callbacks como EarlyStopping y ReduceLROnPlateau”_.
  - Conecta muy bien con la idea de que los conceptos del ecosistema neuronal (backprop, optimizadores, arquitectura) **son transversales a visión, tabular y NLP**.

En resumen, este experimento con IMDB consolida la idea de que:

> **“La calidad del entrenamiento de una red neuronal depende tanto de cómo represento los datos (embeddings, padding) como del optimizador que uso para ajustar los pesos.”**

---
