<h1 align="center">Cuando los datos hablan mejor</h1>

![skylearn](../assets/ImgPractica3/Img3.1.1.png)

<p align="center">
  <em>Aplicando ingeniería de características y comparando modelos.</em>
</p>

---

## 🏷️ **Etiquetas Rápidas**

`#2` `#FeatureEngineering` `#MachineLearning` `#ModeloBase`

---

## 🚀 **Accesos Directos Importantes**

> *Haz clic en los botones para abrir el notebook y explorar las visualizaciones interactivas.*

<div align="center">

<a href="https://colab.research.google.com/drive/1xOjYjaSN2DM7szuRU7wsep-l2vCXaDSR?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir en Colab" />
</a>
&nbsp;
<a href="https://drive.google.com/drive/folders/1WMHuuZMkUeXZYrEZBdhwqgbqwMg7vktG?usp=drive_link">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver en Drive" />
</a>

</div>

---

## 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Explorar y aplicar técnicas de **Feature Engineering**, entrenar un modelo de **Regresión Logística** y compararlo con un modelo base (**DummyClassifier**).

📌 **Hallazgos clave:**

- **Sexo** fue la variable más influyente.
- El modelo de **Regresión Logística** superó al DummyClassifier por amplio margen.
- Nuevas características como `Title` y `FamilySize` mejoraron la predicción.

📈 **Resultado final:**  
Modelo con precisión del **78.5%** y F1-score de **0.73**.

---

## 🎯 **Objetivos Específicos**

| Objetivo                                                                 | Estado |
|--------------------------------------------------------------------------|--------|
| Aplicar Feature Engineering al dataset Titanic                           | ✅      |
| Entrenar un modelo base (DummyClassifier)                                | ✅      |
| Entrenar un modelo real (Regresión Logística)                            | ✅      |
| Evaluar modelos con Accuracy, F1, Reporte de Clasificación y Confusión  | ✅      |

---

## 📅 **Actividades y Tiempos**

| Actividad                                       | Estimado | Real  | Nota                                                   |
|------------------------------------------------|----------|-------|--------------------------------------------------------|
| Configuración en Google Colab                  | 30 m     | 28 m  | Carga desde Kaggle                                     |
| Feature Engineering                            | 40 m     | 42 m  | Nuevas features + valores nulos                       |
| DummyClassifier (modelo base)                  | 20 m     | 22 m  | Estrategia: `most_frequent`                          |
| Regresión Logística                            | 30 m     | 35 m  | `liblinear` como solver                              |
| Evaluación de ambos modelos                    | 30 m     | 32 m  | Accuracy, F1, matriz de confusión                     |
| Reflexión final                                | 15 m     | 14 m  | Análisis de errores                                   |

🕒 **Total estimado:** 3 h · **Total real:** 3 h 13 m · Δ: +13 m (+6%)

---

## 🛠️ **Feature Engineering Aplicado**

| Técnica                  | Descripción                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| **Imputación de valores**| - `Embarked`: modo<br>- `Fare`: mediana<br>- `Age`: mediana por `Sex` y `Pclass` |
| **Nuevas variables**     | - `FamilySize = SibSp + Parch + 1`<br>- `IsAlone = (FamilySize == 1)`       |
| **Títulos desde el nombre** | - Extracción de `Title` (`Mr`, `Mrs`, `Miss`, etc.)<br>- Agrupación en `Rare`     |

---

## ⚙️ **Modelos Entrenados**

### 🔹 **Modelo Base: DummyClassifier**

- **Estrategia:** `most_frequent`
- **Accuracy:** 62%
- **Rol:** Referencia para comparar modelos reales

### 🔸 **Modelo Real: Regresión Logística**

- **Librería:** `scikit-learn` (`LogisticRegression`)
- **Solver:** `liblinear`
- **Accuracy:** 78.5%
- **F1-Score:** 0.73

✅ **Mejora significativa sobre el baseline**

---

## 📈 **Métricas de Evaluación**

| Métrica                         | DummyClassifier | Logistic Regression |
|---------------------------------|------------------|----------------------|
| Accuracy                        | 62%             | **78.5%**            |
| F1-Score                        | —               | **0.73**             |
| Classification Report           | ❌              | ✅                   |
| Matriz de Confusión             | ❌              | ✅                   |

> ℹ️ F1-score combina precisión y recall, ideal en contextos con clases desbalanceadas.

---

## 📊 **Visualizaciones Relevantes**

### 🎯 Matriz de Confusión - Logistic Regression

![imgP2.1](../assets/ImgPractica2/imgP2.1.png)

- **Análisis:** El modelo comete más errores tipo **falso negativo**, es decir, no predice que alguien sobrevivió cuando sí lo hizo.

---

### 📈 Comparación de Accuracy

![imgP2.2](../assets/ImgPractica2/imgP2.2.png)

> El modelo real supera claramente al DummyClassifier

---

## 📸 **Explora Todas las Visualizaciones Interactivas**

[![🔗 Ver Visualizaciones - Google Drive](https://img.shields.io/badge/Ver%20Visualizaciones-Google%20Drive-yellowgreen?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/drive/folders/1WMHuuZMkUeXZYrEZBdhwqgbqwMg7vktG?usp=drive_link)

> 🖼️ *Mira las gráficas generadas durante el análisis:*  
> Matrices de confusión · Histogramas · Comparaciones de modelos · Distribuciones por sexo, clase, edad y más.

---

---

## 🤔 **Preguntas para el Equipo**

---

### 1. ¿Qué variables aportaron más al modelo?

- `Sex`
- `Pclass`
- `Title`
- `Fare`
- `FamilySize`

---

### 2. ¿Qué desafíos encontramos?

- Imputación de `Age` y valores nulos en `Embarked`.
- Transformación de variables categóricas con baja frecuencia.

---

### 3. ¿Qué variables podrían estar correlacionadas?

- `Pclass` ↔️ `Fare`
- `IsAlone` ↔️ `FamilySize`

---

## 🔍 **Reflexión Final**

📌 El uso de **Feature Engineering básico** incrementó la capacidad del modelo para distinguir entre pasajeros que sobrevivieron y los que no.  
🧠 Variables como `Title` y `IsAlone` resultaron muy efectivas para captar relaciones no evidentes.

---

## 📌 **Siguientes Pasos**

| Próxima Acción                                       | Estado |
|------------------------------------------------------|--------|
| Probar modelos como **Random Forest**, **KNN**       | ✅      |
| Usar curvas **ROC**, métricas por clase              | 🔜      |
| Aplicar **GridSearchCV** para optimizar hiperparámetros | 🔜      |
| Explorar más técnicas de Feature Engineering         | 🔜      |

---

## 🧑‍💻 **Reproducibilidad**

Para ejecutar este análisis en tu máquina, asegúrate de tener las librerías necesarias:

```bash
pip install -q scikit-learn matplotlib seaborn
```

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.dummy import DummyClassifier

# Cargar datos
data = pd.read_csv('titanic.csv')

# Preprocesar datos y entrenar modelos
X = data[['Pclass', 'Sex', 'Age', 'Fare', 'Embarked']]
y = data['Survived']
X = pd.get_dummies(X, drop_first=True)

# División de datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Entrenamiento del DummyClassifier
dummy = DummyClassifier(strategy='most_frequent', random_state=42)
dummy.fit(X_train, y_train)
dummy_pred = dummy.predict(X_test)

# Entrenamiento de Logistic Regression
lr = LogisticRegression(max_iter=1000, solver='liblinear', random_state=42)
lr.fit(X_train, y_train)
lr_pred = lr.predict(X_test)

# Resultados
print('DummyClassifier Accuracy:', accuracy_score(y_test, dummy_pred))
print('Logistic Regression Accuracy:', accuracy_score(y_test, lr_pred))
```

---

## 💡 **Conclusión**

Esta práctica no solo nos permitió aplicar **Feature Engineering** básico, sino también comprobar que incluso un modelo sencillo como **Regresión Logística** puede superar el modelo base, destacando la importancia de la ingeniería de características en problemas de Machine Learning.
