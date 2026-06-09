<h1 align="center"> Assignment UT5-16: De Notebook a Sistema MLOps 🏭 <br> Demo en Vertex AI</h1>

![Flowers1www02](../assets/ImgPractica16/img10.11.1.png)

<p align="center">
  <em>Transición desde la experimentación local hacia un sistema de ML productivo, automatizado y observable utilizando el ecosistema de Google Cloud Platform (Vertex AI).</em>
</p>

🏷️ **Etiquetas Rápidas**
`#VertexAI` `#MLOps` `#GoogleCloud` `#Pipelines` `#AutoMLOps` `#TechnicalDebt` `#ModelMonitoring`

---

## 🚀 Accesos Directos Importantes

> *Recursos para la actividad y entrega.*

<div align="center">

<a href="https://console.cloud.google.com/vertex-ai">
  <img src="https://img.shields.io/badge/Google%20Cloud-Vertex%20AI%20Console-blue?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Vertex AI Console" />
</a>

&nbsp;

<a href="ENLACE_A_TU_DOC_DE_REFLEXION">
  <img src="https://img.shields.io/badge/Entrega-Reflexión%20Escrita-orange?style=for-the-badge&logo=googledocs&logoColor=white" alt="Documento de Tarea" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo General:**
Comprender la brecha existente entre un modelo experimental (Notebook local) y un sistema operacional, mediante la observación de una **demo técnica en Vertex AI**. Se busca identificar cómo se automatiza el ciclo de vida del ML para resolver problemas de escalabilidad, versionado y degradación del modelo.

📌 **Puntos clave aprendidos:**
- **Más allá del código:** El modelo es solo el ~5% del sistema; el resto es infraestructura y operaciones (Lectura: *Hidden Technical Debt*).
- **Automatización (AutoMLOps):** Transformación automática de funciones Python en contenedores y componentes de infraestructura.
- **Orquestación:** Uso de Pipelines para gestionar dependencias y ejecución reproducible.
- **Observabilidad:** Importancia de detectar *Drift* (cambios en la distribución de datos) en tiempo real.

📈 **Resultado final:**
Al finalizar, el estudiante será capaz de diseñar una estrategia de migración para llevar sus propios modelos del portafolio hacia una arquitectura MLOps robusta, identificando los componentes necesarios para CI/CD/CT.

---

# 🎯 **Objetivos de Aprendizaje**

| Objetivo | Estado |
|--------------------------------------------------------------------|--------|
| Observar la estructura de un sistema ML en producción usando Vertex AI | ✅ |
| Identificar componentes clave: Pipelines, Registry, Endpoints, Monitoring | ✅ |
| Conectar la demo con los conceptos de *Technical Debt* y *ML Systems* | ✅ |
| Reflexionar sobre la implementación de un modelo propio del portafolio | 📝 |
| Analizar trade-offs y reducción de deuda técnica | 📝 |

---

# 📅 **Actividades y Tiempos**

| Actividad | Estimado | Tipo | Descripción |
|------------------------------------------------------------------|----------|------|------|
| **1. Definición de Componentes** | 5 m | Demo | Uso de `AutoMLOps` para crear contenedores de carga y entrenamiento. |
| **2. Ejecución del Pipeline** | 10 m | Demo | Visualización del grafo (DAG), logs y paso de artefactos en Vertex. |
| **3. Registro y Despliegue** | 10 m | Demo | Versionado en *Model Registry* y exposición de API en *Endpoint*. |
| **4. Monitoreo (Monitoring)** | 5 m | Demo | Configuración de alertas de *Drift* para detectar degradación. |
| **5. Reflexión Escrita** | 30 m | Tarea | Análisis de deuda técnica y conexión con portafolio propio. |

🕒 **Total estimado:** 1 hora (30 min Demo + 30 min Tarea)

---

# 🛠️ **Arquitectura del Sistema (El "Stack" MLOps)**

| Componente GCP | Función en el Demo | Concepto MLOps Asociado |
|----------------|--------------------|-------------------------|
| **Cloud Storage** | Almacena datos crudos (`csv`) y artefactos del pipeline. | *Data Lake / Artifact Store* |
| **Vertex Pipelines** | Orquesta el flujo: `Carga -> Preproceso -> Entrenar -> Evaluar`. | *Orchestration / Reproducibility* |
| **Model Registry** | Guarda el modelo entrenado con versiones y metadatos. | *Model Versioning / Lineage* |
| **Vertex Endpoint** | Expone el modelo como API REST para predicciones. | *Model Serving (Inference)* |
| **Model Monitoring** | Revisa las predicciones en busca de anomalías. | *Observability / Drift Detection* |

---