<h1 align="center"> Agente de Soporte E-Commerce con LangGraph 🛒  
De Consultas Reales a un Asistente Inteligente con RAG, Tools y Memoria Conversacional </h1>

![EcommerceB222otBanner](../assets/ImgPractica15/img15.1.png)

<p align="center">
  <em>Construcción de un agente conversacional avanzado para e-commerce usando LangGraph, recuperación semántica, herramientas externas y razonamiento multi-turno.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#14` `#LangGraph` `#RAG` `#Agents` `#Ecommerce` `#FAISS` `#Tools` `#MemoriaConversacional`

---

## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook e interactuar con el agente.*

<div align="center">

<a href="https://colab.research.google.com/drive/1HWQ3NSZUJfOWieC6W_uHsu0jWLTSIPeN?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" />
</a>
&nbsp;
<a href="LINK_A_DRIVE_RECURSOS">
  <img src="https://img.shields.io/badge/Recursos-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Construir un agente conversacional para atención al cliente en e-commerce capaz de:
- recuperar información vía **RAG**,  
- ejecutar **tools** para estado de pedidos o utilidades,  
- mantener **memoria conversacional**,  
- y usar **LangGraph** para orquestar reasoning multi-turno.

📌 **Hallazgos principales:**

- **LangGraph permite controlar el flujo del reasoning**, creando agentes predecibles y escalables.  
- **RAG (FAISS)** mejora la precisión en consultas sobre políticas, productos y FAQs.  
- Las **tools externas** permiten resolver tareas operativas como consultar pedidos o devolver la hora actual.  
- El agente gestionó conversaciones multi-turn sin perder contexto gracias al estado persistente.  
- La arquitectura permite escalar a agentes transaccionales reales (devoluciones, pagos, reclamos).

📈 **Resultado final:**  
El agente logra responder preguntas reales de soporte con alta coherencia, invocando tools cuando es necesario y combinando RAG con razonamiento del LLM. La interfaz en **Gradio** demuestra un flujo conversacional estable y reutilizable.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                    | Estado |
|-----------------------------------------------------------------------------|--------|
| Construir un `AgentState` con historial y memoria                           | ✅      |
| Implementar un grafo en LangGraph con reasoning + tools                     | ✅      |
| Integrar FAISS para búsqueda semántica (RAG)                                 | ✅      |
| Agregar tools de soporte: estado de pedido y hora actual                    | ✅      |
| Probar el sistema en una interfaz Gradio                                     | ✅      |
| Simular conversaciones reales de e-commerce                                   | ✅      |

---

# 📅 **Actividades y Tiempos**

| Actividad                                               | Estimado | Real | Nota |
|---------------------------------------------------------|----------|------|------|
| Creación del corpus y vector store FAISS (RAG)          | 25 m     | 23 m | Preprocesado y chunking eficaz |
| Implementación de tools externas                         | 20 m     | 22 m | Estado de pedidos + utilidades |
| Construcción del grafo LangGraph                        | 40 m     | 45 m | Manejo de loops y tool-calls |
| Diseño del razonamiento del agente                       | 35 m     | 38 m | Ajuste fino de decisiones |
| Integración con Gradio                                   | 25 m     | 21 m | Interfaz ligera y clara |
| Pruebas multi-turn y debugging                           | 30 m     | 29 m | Conversaciones simuladas |

🕒 **Total estimado:** 2 h 55 m · **Total real:** 3 h 08 m · Δ: +13 m (+7%)

---

# 🛠️ **Feature Engineering Aplicado (RAG)**

| Técnica                     | Descripción |
|-----------------------------|-------------|
| **División en chunks**     | Segmentación del corpus con tamaños óptimos para recuperación eficiente. |
| **Embeddings**             | Uso de modelos OpenAI para generar vectores del contenido. |
| **FAISS Index**            | Construcción de índice para búsquedas rápidas y relevantes. |
| **Filtro de relevancia**   | Selección del top-k para entregar contexto útil al agente. |

---

# ⚙️ **Componentes del Agente**

### 🔹 **Reasoning del Asistente (LLM Node)**
- Decide si responder directo o invocar una tool.  
- Produce mensajes `AIMessage` con posibles `tool_calls`.  
- Integra contexto del RAG + memoria.

### 🔹 **ToolNode**
Ejecuta tools definidas:

- `rag_search()`  
- `get_order_status(order_id)`  
- `get_utc_time()`  

### 🔹 **Memoria Conversacional**
Se mantiene un estado que incluye:

- Historial completo,  
- Resumen opcional para sesiones largas,  
- Variables compartidas entre nodos.