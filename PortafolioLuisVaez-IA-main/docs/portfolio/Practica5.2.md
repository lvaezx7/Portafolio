<h1 align="center"> Inteligencia para la Retención: Predicción de Churn en Telecom con Pipelines Robustos y Evaluación Avanzada 📡🔥</h1>

![TelcoChurnBanner](../assets/ImgPractica5/img5.2.1.png)

<p align="center">
  <em>Analizando patrones de abandono en clientes telecom para anticipar bajas y optimizar estrategias de retención utilizando modelos modernos de clasificación.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#TelcoChurn` `#ClasificaciónBinaria` `#Pipelines` `#MLMetrics` `#ModelComparison` `#CustomerAnalytics`

---

## 🚀 Accesos Directos Importantes

<div align="center">

<a href="https://colab.research.google.com/drive/XXXXX_TU_ENLACE_XXXXX">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>

&nbsp;

<a href="https://drive.google.com/drive/folders/XXXXX_TU_DRIVE_XXXXX">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver visualizaciones en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo General:**  
Predecir la probabilidad de abandono (churn) en clientes de telecomunicaciones utilizando modelos de clasificación binaria, pipelines reproducibles y una batería completa de métricas más allá del accuracy.

📌 **Hallazgos clave preliminares:**

- Dataset con **7 043 clientes** y **21 variables** relacionadas a:
  - servicios contratados (internet, líneas, addons),
  - tipo de contrato,
  - forma de pago y cargos mensuales,
  - permanencia.
- El target **Churn (Yes/No)** presenta un desbalance moderado, lo que lo convierte en un escenario ideal para:
  - `StratifiedKFold`
  - Métricas sensibles al desbalance: F1, ROC-AUC, Precision-Recall
  - Comparación estable entre modelos
- Es un caso perfecto para modelar un **"riesgo de abandono"**, imitando pipelines reales usados en telecom.

📈 **Resultado preliminar:**  
Modelos lineales como **LogisticRegression** son interpretables y sorprendentemente competitivos. Árboles y ensembles (**RandomForest, GradientBoosting, XGBoost**) capturan interacciones no lineales y suelen liderar en ROC-AUC, aunque con mayor varianza. El pipeline unificado asegura comparaciones justas y sin fugas de datos.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                           | Estado |
|------------------------------------------------------------------------------------|--------|
| Cargar y explorar el dataset Telco (IBM)                                          | ✅      |
| Convertir target a binario: `Churn_Flag`                                          | ✅      |
| Separar columnas numéricas vs categóricas                                         | ⏳      |
| Construir pipeline completo con OneHotEncoder & StandardScaler                    | ⏳      |
| Entrenar modelos: LogisticReg, RandomForest, XGBClassifier                        | ⏳      |
| Evaluar con multiple-metrics via `cross_validate` y `StratifiedKFold(n=5)`        | ⏳      |
| Comparar estabilidad de modelos (media ± std por métrica)                         | ⏳      |
| Elaborar comentario técnico sobre cuál modelo gana y por qué                      | ⏳      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                     | Estimado | Real  | Nota                                                           |
|---------------------------------------------------------------|----------|-------|----------------------------------------------------------------|
| Carga + limpieza inicial del dataset                          | 20 m     | —     | Conversión de Churn y revisión de columnas                     |
| Análisis exploratorio (EDA)                                   | 30 m     | —     | Distribuciones, contrato, cargos mensuales, churn rate         |
| Preparación del pipeline (num/cat + OHE + scaler)             | 35 m     | —     | Similar a flujos corporativos de telcos                        |
| Entrenamiento: baseline + modelos avanzados                   | 45 m     | —     | Logistic → RF → XGB                                            |
| Validación cruzada con múltiples métricas                     | 35 m     | —     | Accuracy, Precision, Recall, F1, ROC-AUC, PRC                  |
| Comparación y análisis de estabilidad                         | 25 m     | —     | Tabla final tipo “torneo de modelos”                           |
| Reflexión final y recomendaciones                             | 15 m     | —     | Aplicación real en retención y marketing                       |

🕒 **Total estimado:** 3 h 00 m

---

# 🛠️ **Feature Engineering Aplicado**

| Técnica                          | Descripción                                                                 |
|----------------------------------|------------------------------------------------------------------------------|
| **Codificación categórica**       | OneHotEncoder para todas las columnas categóricas (`handle_unknown="ignore"`) |
| **Estandarización**               | StandardScaler para las variables numéricas                                   |
| **Nueva variable objetivo**       | `Churn_Flag = (Churn == "Yes").astype(int)`                                   |
| **Limpieza inicial**              | Conversión de columnas numéricas mal tipificadas (ej: `TotalCharges`)         |
| **Balance & validación**         | Uso obligatorio de `StratifiedKFold` para preservar proporciones de churn     |

---

# ⚙️ **Modelos Considerados**

#### 🔹 **Baseline**
- `DummyClassifier`  
Ideal para medir mejora real sobre un modelo trivial.

#### 🔸 **Modelos Principales**
- `LogisticRegression`  
  - Interpretabilidad total y buen rendimiento con regularización.
- `RandomForestClassifier`  
  - Captura no linealidades y relaciones de interacción.
- `XGBClassifier` *(opcional pero recomendado si quieres ir “full pro”)*  
  - Alta performance en datasets tabulares.
  - Suele liderar en ROC-AUC, especialmente con desbalance moderado.

#### 🔸 **Evaluación Avanzada**
- `cross_validate` con múltiples métricas:  
  `["accuracy", "precision", "recall", "f1", "roc_auc"]`
- Comparación de **media ± desviación estándar** por modelo.
- Análisis de **estabilidad**:  
  Quién gana, quién es más consistente, quién es más variable.

---

