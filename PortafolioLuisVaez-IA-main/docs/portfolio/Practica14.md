<h1 align="center"> Agente de Soporte E-Commerce con LangGraph 🛒  
De Conversaciones Reales a un Agente RAG con Memoria y Herramientas</h1>

![LangGraphEcommerce](../assets/ImgPractica14/img14.3.png)

<p align="center">
  <em>Construyendo un agente de atención al cliente capaz de resolver dudas reales mediante RAG, herramientas personalizadas y memoria conversacional sobre flujos típicos de e-commerce.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#LangGraph` `#RAG` `#Ecommerce` `#ConversationalAI` `#FAISS` `#OpenAI` `#Agents`

---

## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook y explorar las ejecuciones paso a paso.*

<div align="center">

<a href="https://colab.research.google.com/drive/1WQvy5CNlD6FEdrKyPWwchAdWo1zFYZZj?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>
&nbsp;
<a href="ENLACE_A_DRIVE">
  <img src="https://img.shields.io/badge/Dataset%20y%20Recursos-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver Recursos en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Diseñar un agente conversacional avanzado para e-commerce utilizando **LangGraph**, integrando *retrieval*, *tools* y memoria continua. Se trabaja con conversaciones reales de soporte para construir un flujo robusto y controlado.

📌 **Hallazgos clave:**

- El uso de **FAISS + RAG** permite responder consultas complejas sin depender únicamente del modelo base.
- LangGraph facilita controlar el flujo del agente, evitando respuestas inconsistentes o loops.
- Las conversaciones reales sirven como “ground truth” para diseñar intenciones, herramientas y políticas del agente.
- La memoria conversacional persistente mejora la coherencia y continuidad en diálogos largos.
- La combinación **OpenAI + Tools + RAG** logra respuestas más precisas que un LLM “puro”.

📈 **Resultado final:**  
Se obtiene un agente modular, transparente y extensible capaz de resolver preguntas típicas de atención al cliente: seguimiento de pedidos, devoluciones, stock, políticas, etc.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                  | Estado |
|---------------------------------------------------------------------------|--------|
| Cargar conversaciones reales y realizar análisis exploratorio             | ✅      |
| Diseñar un esquema de herramientas (tracking, stock, políticas)           | ✅      |
| Construir un índice FAISS para el RAG                                    | ✅      |
| Implementar el agente en LangGraph con control de flujo                  | ✅      |
| Integrar memoria conversacional y contexto persistente                    | ✅      |
| Evaluar el agente con consultas reales                                    | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                        | Estimado | Real | Nota |
|------------------------------------------------------------------|----------|------|------|
| EDA de conversaciones reales                                     | 35 m     | 40 m | Extracción de intenciones y patrones comunes |
| Diseño del set de herramientas (tracking, stock, políticas)      | 25 m     | 22 m | Definición de APIs simuladas |
| Construcción del índice FAISS para el RAG                        | 20 m     | 18 m | Normalización y embeddings |
| Implementación del agente con LangGraph                          | 60 m     | 65 m | Flujo multietapa y manejo de estados |
| Integración de memoria conversacional                            | 20 m     | 18 m | Estado persistente entre turnos |
| Evaluación con conversaciones reales                             | 25 m     | 27 m | Comparación con LLM sin RAG |

🕒 **Total estimado:** 3 h 5 m · **Total real:** 3 h 30 m · Δ: +25 m (+13%)

---

# 🛠️ **Feature Engineering del RAG**

| Técnica                    | Descripción |
|----------------------------|-------------|
| **Limpieza de diálogos**   | Normalización, eliminación de ruido y duplicados |
| **Chunking inteligente**   | Segmentación por intención detectada en diálogos |
| **Embeddings**             | Sentencias vectorizadas para recuperar contexto relevante |
| **FAISS**                  | Búsqueda rápida para el flujo del agente |
| **Conversational Memory**  | Estado persistente para diálogos largos |

---

# ⚙️ **Componentes del Agente**

### 🔹 **Motor RAG**
- Indexación con FAISS  
- Recuperación basada en similitud  
- Respuestas contextualizadas  

### 🔸 **Herramientas del Agente**
- **TrackOrderTool**: estado del pedido + actualizaciones  
- **StockTool**: disponibilidad de productos  
- **RefundPolicyTool**: políticas de cambio/devolución  
- **SearchFAQTool**: preguntas frecuentes indexadas  

### 🔸 **Memoria Conversacional**
- Mantiene contexto entre turnos
- Permite respuestas más coherentes
- Facilita flujos de preguntas encadenadas

### 🔸 **LangGraph**
- Control preciso de nodos y estados  
- Prevención de loops  
- Transparencia en ejecución  

---

