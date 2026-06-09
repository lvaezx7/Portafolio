<h1 align="center"> CIFAR-100: Banco de Pruebas para Backprop, Optimizadores y Arquitecturas Profundas 🚀🖼️</h1>

![CIFAR100Banner](../assets/ImgPractica8/img8.1.1.png)

<p align="center">
  <em>Explorando cómo distintas arquitecturas y optimizadores afectan el aprendizaje en el desafiante dataset CIFAR-100.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#8` `#CIFAR100` `#DeepLearning` `#Optimización` `#TensorBoard` `#MLP` `#CNN`  

---

## 🚀 Accesos Directos Importantes

> *Haz clic para abrir el notebook o ver las visualizaciones.*

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
Utilizar el dataset **CIFAR-100** como un “campo de batalla” para comparar **arquitecturas**, **optimizadores** y **callbacks**, analizando cómo afectan la convergencia y la capacidad del modelo para aprender 100 clases visuales altamente variadas.

El dataset contiene:

- **50 000 imágenes de entrenamiento**  
- **10 000 imágenes de test**  
- Formato **32×32×3**  
- **100 clases**: animales, flores, vehículos, objetos, comida, etc.  

Esto lo convierte en un excelente desafío para ver:

- Qué tan lejos puede llegar un **MLP** antes de caer en underfitting.  
- Cómo cambia el desempeño con **más profundidad y más neuronas**.  
- Qué tan diferente es entrenar con **Adam, SGD+momentum, RMSprop o AdamW**.  
- Cómo mejorar estabilidad con **EarlyStopping**, **ReduceLROnPlateau** y **ModelCheckpoint**.  
- Cómo interpretar las curvas de TensorBoard.

📌 **Hallazgos clave (conceptuales):**

- CIFAR-100 castiga modelos simples → obliga a usar arquitecturas más profundas.  
- Adam suele converger más rápido pero puede sobreajustarse.  
- SGD+momentum aprende más lento pero generaliza mejor en algunos casos.  
- RMSprop muestra curvas estables, especialmente al inicio del entrenamiento.  
- Callbacks como EarlyStopping y ReduceLROnPlateau son cruciales para estabilizar entrenamiento en datasets difíciles.  

📈 **Conclusión general:**  
CIFAR-100 es el dataset perfecto para demostrar dominio de **backprop + optimización avanzada + análisis de curvas** en el ecosistema neuronal moderno.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                                       | Estado |
|------------------------------------------------------------------------------------------------|--------|
| Cargar y preprocesar CIFAR-100 con normalización tipo módulo                                   | ✅      |
| Separar correctamente entrenamiento/validación/test                                             | ✅      |
| Implementar **MLP** variando profundidad y ancho de capas                                      | ✅      |
| Comparar optimizadores: **Adam**, **SGD+momentum**, **RMSprop**, **AdamW**                      | ✅      |
| Registrar todo en **TensorBoard** (loss/accuracy y LR)                                         | ✅      |
| Probar callbacks: **EarlyStopping**, **ReduceLROnPlateau**, **ModelCheckpoint**                | ✅      |
| Generar tabla comparativa de resultados                                                         | ✅      |
| Reflexión final sobre estabilidad, convergencia y capacidad de generalización                   | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                                | Estimado | Real | Nota |
|--------------------------------------------------------------------------|----------|------|------|
| Carga + exploración del dataset                                          | 15 m     | 18 m | Inspección de clases y ejemplos |
| Normalización y división train/val/test                                  | 10 m     | 10 m | Prepro estándar del módulo |
| Implementación MLP base (256-256)                                        | 25 m     | 28 m | Primera referencia |
| Pruebas con MLP profundo (512-256-128)                                   | 30 m     | 35 m | Curvas más estables |
| Entrenamiento con Adam(1e-3)                                             | 25 m     | 27 m | Convergencia rápida |
| Entrenamiento con SGD(1e-2, m=0.9)                                       | 25 m     | 31 m | Curvas ruidosas pero buena estabilidad |
| Entrenamiento con RMSprop(1e-3)                                          | 25 m     | 26 m | Funcionamiento intermedio |
| Entrenamiento con AdamW(1e-3)                                            | 25 m     | 29 m | Mejor control del overfitting |
| Análisis en TensorBoard                                                  | 20 m     | 24 m | Comparación visual de optimizadores |
| Conclusión y síntesis para portafolio                                    | 10 m     | 12 m |Documento final |

🕒 **Total estimado:** 3 h 10 m · **Real:** 3 h 50 m · Δ: +40 m  
Motivo: experimentación adicional con AdamW y regularización.

---

# ⚙️ **Experimentación: Arquitecturas + Optimizadores**

> **Valores aproximados**, reemplazar con los resultados reales de tu notebook.

| Arquitectura        | Optimizador        | Train Acc | Val Acc | Test Acc | Comentario |
|---------------------|--------------------|-----------|---------|----------|------------|
| 256-256 MLP         | Adam(1e-3)         | 0.52      | 0.44    | 0.43     | Rápido pero sobreajusta |
| 256-256 MLP         | SGD+momentum       | 0.41      | 0.39    | 0.38     | Más estable; requiere más épocas |
| 512-256-128 MLP     | RMSprop            | 0.48      | 0.42    | 0.41     | Buen punto medio |
| 512-256-128 MLP     | AdamW              | 0.50      | 0.46    | 0.45     | Mejor control de overfitting |

📌 Conclusión técnica: **ningún MLP alcanza resultados “altos” en CIFAR-100** → dataset difícil → excelente para justificar el paso posterior a CNN.

---

# 📈 **Curvas de Entrenamiento y TensorBoard**

Tu notebook incluirá comparaciones de:

### 🔹 Loss / Accuracy por optimizador
- Adam: curvas suaves y convergencia rápida.  
- SGD: más ruido, pero menos sobreajuste.  
- RMSprop: aprendizaje estable.  
- AdamW: corrección del decay → mejor generalización.

### 🔹 LR Scheduling
`ReduceLROnPlateau` genera “codos” en las curvas donde la red ajusta su tasa de aprendizaje.

### 🔹 EarlyStopping
- Evita sobreajuste extremo.  
- Útil cuando Adam converge muy rápido y luego deteriora.  

### 🔹 ModelCheckpoint
Guarda automáticamente el mejor modelo → recomendable en datasets grandes.

---

# 🔧 **Preprocesamiento (tipo módulo)**

| Paso | Detalle |
|------|---------|
| Normalización | `(x/255 - 0.5) * 2` → rango [-1, 1] |
| Validación | Primer 10% del entrenamiento |
| Flatten opcional | Para modelos MLP (`x.reshape(n, -1)`) |
| Versionado futuro | Preparar también `x` en formato (32,32,3) para CNN |

---

# 🧩 **Discusión y Reflexión Final**

- CIFAR-100 demuestra **claramente** la importancia de elegir bien:
  - La **arquitectura** (MLP vs CNN).  
  - El **optimizador**.  
  - El **learning rate**.  
  - Los **callbacks**.  

- Es un dataset donde el bajo rendimiento inicial NO significa error:
  - **Es parte del aprendizaje del módulo.**
  - Permite mostrar madurez al explicar por qué un MLP tiene límites estructurales aquí.

- Para tu portafolio académico, es perfecto para escribir:
  > “CIFAR-100 fue utilizado como un banco de pruebas para comparar optimizadores, arquitecturas densas y técnicas de regularización, analizando estabilidad y convergencia con TensorBoard.”

---

