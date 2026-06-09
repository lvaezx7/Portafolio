<h1 align="center"> Clasificación de Prendas con MLP y Activaciones Avanzadas 👗👟🧥</h1>

![FashionMNISTBanner](../assets/ImgPractica7/img7.1.2.png)

<p align="center">
  <em>Explorando cómo la elección de la activación afecta la capacidad de un MLP para clasificar prendas en Fashion-MNIST.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#8` `#FashionMNIST` `#RedesNeuronales` `#Activaciones` `#MLP` `#DeepLearning`

---

## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook y explorar las visualizaciones interactivas.*

<div align="center">

<a href="https://colab.research.google.com/drive/1E9lYYTWLB2NB2TqJHWb9lQzoCHvBSWs6?usp=sharing">
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
Entrenar y comparar redes neuronales multicapa (**MLP**) sobre el dataset **Fashion-MNIST**, compuesto por imágenes de prendas de vestir (10 clases: zapatillas, remeras, bolsos, abrigos, etc.).  
Este dataset tiene la misma estructura que MNIST (28×28, escala de grises), pero es **más desafiante**, lo que permite ver con claridad:

- Cómo la **activación** usada en las capas ocultas afecta el rendimiento.
- Cómo aparecen fenómenos como **overfitting** o **underfitting** según la profundidad de la red.
- Diferencias visibles entre **ReLU**, **tanh** y **sigmoid**, tanto en convergencia como en capacidad de representación.

📌 **Hallazgos clave esperados / observados:**

- **ReLU** suele converger más rápido y alcanzar mejor val_accuracy.
- **tanh** puede competir con ReLU pero con entrenamiento más lento.
- **sigmoid** tiende a saturarse, lo que hace que su aprendizaje sea más lento y menos estable.
- Fashion-MNIST revela más claramente las limitaciones de las activaciones clásicas frente a ReLU.
- A mayor profundidad del MLP, aumenta el riesgo de **overfitting**, especialmente con activaciones suaves como `sigmoid`.

📈 **Resultado final (conceptual):**  
El experimento muestra que la elección de activación **no es un detalle menor**, sino un factor crítico que influye directamente en:

- La capacidad del modelo para aprender fronteras complejas.
- La estabilidad y velocidad del entrenamiento.
- La generalización en validación y test.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                                         | Estado |
|--------------------------------------------------------------------------------------------------|--------|
| Cargar y explorar el dataset **Fashion-MNIST**                                                   | ✅      |
| Normalizar y aplanar imágenes (28×28 → 784)                                                     | ✅      |
| Implementar un **MLP base** con activación configurable                                          | ✅      |
| Entrenar el MLP con **ReLU**, **tanh**, **sigmoid**                                              | ✅      |
| Comparar las curvas de aprendizaje (loss/accuracy) de cada activación                             | ✅      |
| Analizar convergencia, overfitting y estabilidad según activación                                 | ✅      |
| Construir tabla resumen de métricas: train_acc, val_acc, mejor época                              | ✅      |
| Elaborar reflexión final sobre teoría vs práctica en activaciones                                 | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                                | Estimado | Real | Nota                                                                                  |
|--------------------------------------------------------------------------|----------|------|---------------------------------------------------------------------------------------|
| Carga y exploración del dataset                                          | 15 m     | 17 m | Inspección de shapes y ejemplo de imágenes                                            |
| Preprocesamiento: normalización + aplanado                               | 10 m     | 10 m | Preparación de `X_train_flat`, `X_test_flat`                                          |
| Implementación del MLP configurable por activación                        | 20 m     | 20 m | Arquitectura: 128 → 64 → 10                                                           |
| Entrenamiento con **ReLU**                                               | 25 m     | 28 m | Convergencia rápida, tendencia a buenos val_acc                                       |
| Entrenamiento con **tanh**                                               | 25 m     | 30 m | Curvas más estables pero más lentas                                                   |
| Entrenamiento con **sigmoid**                                            | 25 m     | 33 m | Saturación y aprendizaje lento                                                        |
| Comparación de métricas + gráficas overlay                               | 20 m     | 24 m | Análisis visual de val_accuracy                                                       |
| Reflexión final                                                          | 10 m     | 11 m | Síntesis entre teoría y práctica                                                       |

🕒 **Total estimado:** 2 h 30 m · **Total real:** 2 h 53 m · Δ: +23 m  
Motivo: entrenamiento más lento en `sigmoid`.

---

# 📊 **Comparación de Activaciones en Fashion-MNIST**

> 💡 Valores aproximados; reemplazar por resultados reales del notebook.

| Activación | Train Acc | Val Acc | Test Acc | Mejor Época | Observación |
|------------|-----------|----------|-----------|--------------|-------------|
| **ReLU**   | ≈ 0.93    | ≈ 0.88   | ≈ 0.87    | 7–8          | Convergencia rápida, buen balance bias-variance |
| **tanh**   | ≈ 0.92    | ≈ 0.86   | ≈ 0.85    | 8–9          | Menos overfitting que ReLU pero más lenta |
| **sigmoid**| ≈ 0.89    | ≈ 0.82   | ≈ 0.81    | 9–10         | Saturación, gradientes pequeños, desempeño inferior |

---

# 📈 **Curvas de Entrenamiento y Validación**

En el notebook se generan:

- **Train vs Val Loss** para ReLU, tanh, sigmoid.
- **Val Accuracy Overlay** (gráfica combinada donde se ve claramente cuál converge mejor).

Puntos clave a observar:

- **ReLU** suele despegar rápido y alcanzar mejor val_accuracy.
- **tanh** ofrece una curva suave y estable, pero llega más lento a valores altos.
- **sigmoid** muestra:
  - Curvas más planas (por saturación).
  - Mayor diferencia train-val → posible underfitting o dificultad en el entrenamiento.

Fashion-MNIST permite ver claramente que las activaciones tradicionales (`sigmoid`, `tanh`) pueden ser insuficientes para problemas de visión un poco más complejos.

---

# 🔧 **Preprocesamiento y Feature Engineering para Fashion-MNIST**

| Paso / Técnica                      | Descripción                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| **Normalización**                  | Convertir a float32 y dividir entre 255.                                    |
| **Aplanado**                        | 28×28 → 784 para alimentar al MLP.                                          |
| **Codificación de etiquetas**       | 10 clases codificadas como enteros (0–9).                                   |
| **Split de validación**             | Se usa `validation_split=0.2` en el entrenamiento.                          |
| **Mismo pipeline que MNIST**        | Esto facilita comparar dataset fácil vs dataset desafiante.                 |

> 🔭 Extensiones posibles:  
> - Aumentar profundidad del MLP para observar overfitting.  
> - Probar `BatchNormalization` o `Dropout`.  
> - Migrar a **CNN** simple para comparar vs MLP.  

---

# 🧩 **Discusión y Reflexión Final**

- **Fashion-MNIST es ideal para ver diferencias reales entre activaciones.**
- **ReLU** domina en velocidad y precisión, coherente con la teoría de gradientes no saturados.
- **tanh** sigue siendo útil, especialmente cuando se quiere estabilidad y se controla la profundidad.
- **sigmoid** deja en evidencia sus limitaciones:
  - Saturación.
  - Gradiente pequeño.
  - Entrenamiento lento.
- Este dataset muestra que **la arquitectura + la activación** determinan cómo fluye la información dentro del MLP, y cómo se comporta el gradiente en cada época.

En conclusión:

> **Fashion-MNIST es un puente perfecto entre MNIST “fácil” y datasets más complejos. Permite ver cómo decisiones pequeñas (activar ReLU vs tanh vs sigmoid) cambian radicalmente el aprendizaje del modelo.**

---
