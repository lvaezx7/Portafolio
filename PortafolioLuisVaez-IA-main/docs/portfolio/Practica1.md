<h1 align="center">Análisis Exploratorio del Dataset Titanic</h1>

![Titanic Banner](../assets/acerca/RMS_Titanic_3.jpg)

<p align="center">
  <em>Explorando los factores que determinaron la supervivencia en el Titanic</em>
</p>

---

## 🏷️ **Etiquetas**

`#EDA` `#Titanic` `#MachineLearning` `#AnálisisDeDatos` `#Exploración`

## 🚀 **Accesos Directos Importantes**

> *Haz clic en los botones para abrir el notebook y explorar las visualizaciones interactivas.*

<div align="center">

<a href="https://colab.research.google.com/drive/1F0btMIVnncma9EYwR-2togcSPDW35evv">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir en Colab" />
</a>
&nbsp;
<a href="https://drive.google.com/drive/folders/1ozJ9VwMfqzfbsES0uH3cl2FiYWbHdOFh?usp=drive_link">
  <img src="https://img.shields.io/badge/Visualizaciones-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver en Drive" />
</a>

</div>

---

## 📝 **Resumen Ejecutivo**

**🎯 Objetivo Principal**
Realizar un análisis exploratorio detallado (EDA) para entender las correlaciones entre las variables demográficas y la probabilidad de supervivencia de los pasajeros.

**📌 Hallazgos Clave**
> * "Las mujeres y los pasajeros de primera clase tuvieron significativamente mayores probabilidades de sobrevivir."*

* **📍 Sexo:** Factor determinante n.º 1 (Mujeres > Hombres).
* **🎟️ Clase (Pclass):** Clara jerarquía socioeconómica en la supervivencia (1ª > 3ª).
* **👶 Edad:** La prioridad de "niños primero" es visible en los datos.

**📦 Ficha Técnica del Dataset**
* **Fuente:** [Kaggle - Titanic Challenge](https://www.kaggle.com/c/titanic/data)
* **Dimensiones:** 891 Observaciones · 12 Variables

---

## 📊 **Gestión del Proyecto**

### ✅ Checklist de Objetivos

| Tarea | Estado |
| :--- | :---: |
| 📥 Carga de datos y Setup en Colab | ☑️ |
| 🔍 Limpieza de datos (Nulls/Outliers) | ☑️ |
| 📈 Visualizaciones (`seaborn`/`matplotlib`) | ☑️ |
| 🧮 Análisis de Correlaciones | ☑️ |

### ⏰ Cronograma: Estimado vs. Real

| Actividad | ⏱️ Estimado | ⏰ Real | 📝 Notas |
| :--- | :---: | :---: | :--- |
| **Configuración** | 30 m | **28 m** | Setup + Carga desde Kaggle |
| **Exploración Inicial** | 30 m | **32 m** | `info()`, `describe()` |
| **Visualización** | 30 m | **35 m** | Ajuste de gráficos |
| **Limpieza** | 15 m | **18 m** | Tratamiento de NAs |
| **Correlaciones** | 20 m | **22 m** | Matriz de calor |
| **Conclusiones** | 15 m | **14 m** | Redacción final |
| **TOTAL** | **2h 20m** | **2h 39m** | 🔼 **+6%** (Desviación aceptable) |

---
## 📚 **Diccionario de Datos**

| Variable | Tipo | Rango / Valores | Descripción |
| :--- | :--- | :--- | :--- |
| `Survived` | Categórica | {0, 1} | Supervivencia |
| `Pclass` | Categórica | {1, 2, 3} | Clase del pasajero |
| `Sex` | Categórica | {male, female} | Género |
| `Age` | Numérica | 0 – 80+ | Edad del pasajero |
| `SibSp` | Numérica | 0 – 8 | Hermanos / Esposo a bordo |
| `Parch` | Numérica | 0 – 6 | Padres / Hijos a bordo |
| `Fare` | Numérica | £0 – £512.33 | Tarifa pagada |
| `Embarked` | Categórica | {C, Q, S} | Puerto de embarque |
| `Cabin` | Categórica | — | Número de cabina (muchos nulos) |
| `Ticket` | Categórica | — | Número de ticket |
| `Name` | Categórica | — | Nombre completo |

</details>

---


## 🔍 **Análisis Detallado**

### 1. Análisis Univariado
* **Desbalance de clases:** La mayoría de pasajeros no sobrevivió.
* **Demografía:** Predominancia de adultos jóvenes (20-35 años).

### 2. Análisis Bivariado & Multivariado
* **Clase vs. Precio:** Existe una correlación directa, pero con outliers en 1ª clase (tarifas muy altas).
* **El factor "Sexo":** Es el predictor más fuerte individualmente.

### 3. Matriz de Correlación
* **Fuerte:** `Fare` y `Pclass` (-0.55, a mejor clase, mayor precio).
* **Moderada:** `Pclass` y `Survived` (-0.34, a mejor clase [menor número], mayor supervivencia).

---

## 📸 **Galería de Visualizaciones**

| **Supervivencia por Clase y Sexo** | **Distribución de Edad** |
| :---: | :---: |
| ![imgP1](../assets/ImgPractica1/imgP1.png) | ![imgP1.2](../assets/ImgPractica1/imgP1.2.png) |
| *Mujeres de 1ª clase: Tasa más alta de supervivencia.* | *La mayoría de pasajeros tenía entre 20 y 35 años.* |

[🔗 Ver galería completa en Google Drive](https://drive.google.com/drive/folders/1ozJ9VwMfqzfbsES0uH3cl2FiYWbHdOFh?usp=drive_link)

---

## 🔄 **Reproducibilidad**

Instalación rápida:

```bash
pip install -q scikit-learn matplotlib seaborn
```

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

# Cargar datos
data = pd.read_csv('titanic.csv')

# Análisis exploratorio
sns.histplot(data=data, x='Age', hue='Survived', kde=True)
plt.tight_layout()
plt.show()
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

# Cargar datos
data = pd.read_csv('titanic.csv')

# Análisis exploratorio
sns.histplot(data=data, x='Age', hue='Survived', kde=True)
plt.tight_layout()
plt.show()
```

🧠 Reflexión Final

El análisis exploratorio del dataset Titanic nos permitió identificar que las variables Sexo y Pclass son determinantes para la supervivencia. Las próximas etapas incluyen la construcción de modelos predictivos más avanzados para mejorar la exactitud y tomar decisiones basadas en estos factores clave.
