<h1 align="center"> Regresión Lineal y Logística 📈</h1>

![Banner](../assets/ImgPractica4/img4.1.1.png)

<p align="center">
  <em>Modelos base aplicados a Titanic usando regresión lineal y logística</em>
</p>


🏷️ **Etiquetas**  
`#RegresiónLineal` `#RegresiónLogística` `#MachineLearning` `#Titanic` `#ModeloBase` `#Tarea4`


## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook y explorar las visualizaciones interactivas.*

<div align="center">

<a href="https://colab.research.google.com/drive/114DetBDXPevvD7RS_C5Bg5FB2UjcoZ0I?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir en Colab" />
</a>
&nbsp;
<a href="https://drive.google.com/drive/folders/1zLNaoXm94xbjZ3wICLOtBp_4JDL-QcB0?usp=drive_link">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver en Drive" />
</a>

</div>

---

## 🏆 **Resumen Ejecutivo**

En esta tarea, se exploraron dos modelos clásicos de Machine Learning: **Regresión Lineal** y **Regresión Logística**. Ambos modelos fueron aplicados a distintos problemas para comparar su desempeño: la predicción de precios de casas en **Boston** utilizando **Regresión Lineal** y la clasificación de **diagnóstico médico de cáncer de mama** utilizando **Regresión Logística**. El objetivo fue evaluar cómo cada modelo se comporta en **problemas de regresión** y **clasificación** respectivamente.

### **Hallazgos clave:**

- **Regresión Lineal** se utilizó para predecir el precio de las casas en el conjunto de datos de **Boston**. Se evaluó con métricas de error como **MAE**, **MSE**, **RMSE**, y **R²**.
- **Regresión Logística** se utilizó para clasificar tumores como **benignos** o **malignos**, utilizando métricas como **precision**, **recall**, **f1-score** y **accuracy**.
- **Regresión Logística** mostró un mejor rendimiento que el modelo base **DummyClassifier**, destacando cómo el **Feature Engineering** y la optimización del modelo pueden mejorar significativamente la precisión y efectividad.

---

## 🎯 **Objetivos de la tarea**

- [x] Aplicar **Regresión Lineal** para predecir el precio de las casas en el dataset de **Boston**.  
- [x] Implementar **Regresión Logística** para la clasificación binaria en el dataset de diagnóstico médico (cáncer de mama).  
- [x] Evaluar ambos modelos con métricas adecuadas como **MAE**, **MSE**, **RMSE**, **accuracy**, **precision**, y **recall**.  
- [x] Comparar el rendimiento de los modelos entrenados contra un **DummyClassifier** como baseline.  

## ⏱️ **Actividades y tiempos estimados**

| Actividad                                   | Estimado | Real | Nota |
|---|---:|---:|---|
| Configuración inicial en **Google Colab**    | 30 m | **28 m** | Instalación y carga de datos. |
| Preprocesamiento y **Feature Engineering**   | 40 m | **42 m** | Manejo de valores faltantes y creación de nuevas características. |
| Entrenamiento del **DummyClassifier**        | 20 m | **22 m** | Entrenamiento con la estrategia `most_frequent` para baseline. |
| **Entrenamiento de Regresión Logística**     | 30 m | **35 m** | Entrenamiento de modelo y evaluación. |
| Evaluación de modelos y comparación          | 30 m | **32 m** | Comparación entre modelos y métricas. |
| Reflexión y discusión de preguntas           | 15 m | **14 m** | Discusión sobre hallazgos y rendimiento de los modelos. |

> **Totales** — Estimado: **3 h** · Real: **3 h 13 m** · Δ: **+13 m** (**+6%**).

---

## 💡 **Desarrollo: Regresión Lineal - Predecir Precios de Casas**

### **1. Cargar el Dataset de Boston Housing**

El dataset contiene información sobre viviendas en Boston, incluyendo características como **edad de la vivienda**, **número de habitaciones** y **distancia a centros de trabajo**.

```python
url = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
boston_data = pd.read_csv(url)

# Datos de casas en Boston
print(boston_data.head())
```

### **2. Dividir los datos en entrenamiento y prueba**

- **X (variables independientes):** todas las columnas excepto `medv` (precio).
- **y (variable dependiente):** el precio de las casas.

### **3. Entrenar el modelo de Regresión Lineal**

Usamos el modelo de **LinearRegression** de **scikit-learn** para predecir el precio de las casas.

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

X = boston_data.drop('medv', axis=1)
y = boston_data['medv']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenamiento de Regresión Lineal
modelo_regresion = LinearRegression()
modelo_regresion.fit(X_train, y_train)
```

### **4. Evaluación del Modelo**

Evaluamos el modelo utilizando varias métricas como **MAE**, **MSE**, **RMSE**, y **R²**:

```python
from sklearn.metrics import mean_squared_error
import numpy as np

# Predicciones
predicciones = modelo_regresion.predict(X_test)

# Métricas
mae = mean_absolute_error(y_test, predicciones)
mse = mean_squared_error(y_test, predicciones)
rmse = np.sqrt(mse)
r2 = modelo_regresion.score(X_test, y_test)

print(f"MAE: ${mae:.2f}k")
print(f"MSE: {mse:.2f}")
print(f"RMSE: ${rmse:.2f}k")
print(f"R²: {r2:.3f}")
```

### **5. Interpretación**

- **R²** nos dice qué porcentaje de la variabilidad en el precio de las casas es explicado por nuestro modelo.
- **MAE** y **RMSE** nos indican cuánto se alejan, en promedio, nuestras predicciones del precio real.

---

## 📸 **Evidencias Visuales**

### Visualización de relaciones en el dataset Titanic

1. **Gráfico de Regresión Lineal - Predicción de Precios de Casas:**
   ![Gráfico de Regresión Lineal](../assets/ImgPractica4/imgP3.1.png)
   - **Relación entre variables clave**: El número de habitaciones (`RM`) y el precio de las casas (`medv`), destacando la tendencia ascendente en los precios conforme aumenta el número de habitaciones.

2. **Análisis Detallado de la Regresión Lineal:**
   ![Gráfico de Regresión Detallado](../assets/ImgPractica4/imgP3.2.png)
   - **Relación entre variables clave**: Dispersión de los datos de precio de casas y número de habitaciones, con la línea de regresión ajustada para visualizar mejor la correlación.


## 🏥 **Regresión Logística - Diagnóstico Médico**

### **1. Cargar el dataset de cáncer de mama**

Utilizamos el dataset **Breast Cancer Wisconsin**, que contiene características sobre tumores (benignos o malignos).

```python
from sklearn.datasets import load_breast_cancer

cancer_data = load_breast_cancer()
X_cancer = pd.DataFrame(cancer_data.data, columns=cancer_data.feature_names)
y_cancer = cancer_data.target
```

### **2. Evaluar el Balance de Clases**

Vemos cuántos tumores son **benignos** y **malignos**:

```python
benignos = (y_cancer == 1).sum()
malignos = (y_cancer == 0).sum()
print(f"Casos benignos: {benignos}")
print(f"Casos malignos: {malignos}")
```

### **3. Entrenar el Modelo de Regresión Logística**

Usamos **LogisticRegression** para predecir si un tumor es **benigno** o **maligno**.

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# División de datos
X_train_cancer, X_test_cancer, y_train_cancer, y_test_cancer = train_test_split(X_cancer, y_cancer, test_size=0.2, random_state=42)

# Entrenamiento de Regresión Logística
modelo_clasificacion = LogisticRegression(max_iter=5000, random_state=42)
modelo_clasificacion.fit(X_train_cancer, y_train_cancer)
```

### **4. Evaluar el Modelo**

Calculamos la **exactitud**, **precisión**, **recall**, y **f1-score**.

```python
# Predicciones
predicciones_cancer = modelo_clasificacion.predict(X_test_cancer)

# Métricas
accuracy = accuracy_score(y_test_cancer, predicciones_cancer)
precision = precision_score(y_test_cancer, predicciones_cancer)
recall = recall_score(y_test_cancer, predicciones_cancer)
f1 = f1_score(y_test_cancer, predicciones_cancer)

print(f"Accuracy: {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
print(f"F1-Score: {f1:.3f}")
```

### **5. Interpretación**

- **Precision**: De todas las predicciones positivas, ¿cuántas fueron realmente correctas?
- **Recall**: De todos los casos reales positivos, ¿cuántos fueron detectados?
- **F1-Score**: Balance entre precisión y recall, útil cuando hay un desbalance de clases.

---

## 📸 **Evidencias Visuales**

### Visualización de relaciones en el dataset de Cáncer de Mama

1. **Gráfico de Regresión Logística - Diagnóstico de Cáncer de Mama:**
   ![Gráfico de Regresión Lineal](../assets/ImgPractica4/imgP4.1.png)
   - **Relación entre variables clave**: El radio medio del tumor (`mean radius`) y el diagnóstico (benigno o maligno), destacando la relación entre las características y la probabilidad de malignidad.

2. **Análisis Detallado de la Regresión Logística:**
   ![Gráfico de Regresión Detallado](../assets/ImgPractica4/imgP4.2.png)
   - **Relación entre variables clave**: Dispersión de los datos de suavidad y compactidad del tumor, con la línea de regresión ajustada para visualizar mejor la probabilidad de malignidad.



## ❓ **Preguntas de Reflexión**

1. **¿Cuál es la diferencia principal entre regresión lineal y logística?**
   - **Regresión Lineal** predice valores numéricos continuos (e.g., precio de casas).
   - **Regresión Logística** predice categorías (e.g., maligno vs benigno).

2. **¿Por qué dividimos los datos en entrenamiento y prueba?**
   - Para entrenar el modelo en un conjunto de datos y evaluarlo en un conjunto diferente, asegurando que el modelo generalice bien.

3. **¿Qué significa una exactitud del 95%?**
   - El modelo predice correctamente el 95% de los casos.

4. **¿Cuál es más peligroso: predecir "benigno" cuando es "maligno", o al revés?**
   - Es más peligroso predecir "benigno" cuando en realidad es "maligno", ya que podría no tratar a un paciente con un tumor maligno a tiempo.

---

## Parte 3: Actividad Final - Compara los Dos Modelos

Puedes acceder al archivo PDF de la actividad final a continuación:

<a href="../assets/Parte_3_Actividad_Final.pdf" target="_blank"
   style="display:inline-block;
          padding:10px 20px;
          margin-top:12px;
          background-color:#4A7CA6;
          color:white;
          font-weight:500;
          text-align:center;
          text-decoration:none;
          border-radius:8px;
          font-size:15px;
          transition:background-color .3s ease;">
  📄 Descargar Actividad Final — Compara los Dos Modelos
</a>


## 🧑‍💻 **Reproducibilidad**

```bash
pip install -q scikit-learn matplotlib seaborn
```

```python
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Cargar datos
data = pd.read_csv('titanic.csv')

# Preparar datos
X = data[['Pclass', 'Sex', 'Age', 'Fare', 'Embarked']]
y = data['Survived']
X = pd.get_dummies(X, drop_first=True)

# Dividir datos
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Regresión Logística
lr = LogisticRegression(max_iter=1000, solver='liblinear', random_state=42)
lr.fit(X_train, y_train)
predictions = lr.predict(X_test)

# Evaluación
print("Accuracy:", accuracy_score(y_test, predictions))
```

---

## 💡 **Conclusión**

El **Feature Engineering** y el entrenamiento de modelos como **Regresión Logística** y **Lineal** nos permitieron obtener **modelos más precisos y efectivos**. Continuaremos ajustando estos modelos y aplicando nuevas técnicas para mejorar la predicción en problemas de regresión y clasificación.

---
# 🚀 **Explora el Notebook Interactivo en Google Colab** 🎓


Haz clic en el siguiente **botón** para acceder al **notebook** interactivo y realizar el análisis directamente en Google Colab:

[![Ver Notebook en Google Colab](https://img.shields.io/badge/Accede%20al%20Notebook%20en%20Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab)](https://colab.research.google.com/drive/114DetBDXPevvD7RS_C5Bg5FB2UjcoZ0I?usp=sharing)

> **¡Haz clic para empezar a trabajar directamente en el código y explorar las visualizaciones en tiempo real!**

---
