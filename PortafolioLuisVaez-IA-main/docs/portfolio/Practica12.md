<h1 align="center"> Agente de Soporte E-Commerce con LangGraph 🛒  
De Conversaciones Reales a un Agente RAG con Memoria y Herramientas</h1>

![LangGraphEcommerce](../assets/ImgPractica12/img12.1.png)

<p align="center">
  <em>Construyendo un asistente de atención al cliente capaz de responder dudas reales mediante RAG, herramientas especializadas y memoria conversacional persistente sobre flujos típicos de e-commerce.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#LangGraph` `#RAG` `#Ecommerce` `#ConversationalAI` `#FAISS` `#OpenAI` `#Agents`

---

## 🚀 Accesos Directos Importantes

> *Abre el notebook o los recursos del proyecto con estos botones.*

<div align="center">

<a href="https://colab.research.google.com/drive/18Oj7ScxlqFxHHK-w_bGy0qFGI7truUZO?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>

&nbsp;

<a href="ENLACE_A_TU_DRIVE">
  <img src="https://img.shields.io/badge/Dataset%20y%20Recursos-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver Recursos en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo General:**  
Construir un **agente de soporte para e-commerce**, implementado con **LangGraph**, capaz de resolver preguntas reales sobre pedidos, devoluciones, políticas, inventario y FAQs, integrando:

- 🔍 **RAG** con FAISS  
- 🧰 **Herramientas (Tools)** para acciones reales del negocio  
- 🧠 **Memoria conversacional persistente**  
- 🕸️ **Control de flujo mediante grafos (LangGraph)**

📌 **Puntos clave aprendidos:**

- El uso de **RAG + FAISS** mejora significativamente la precisión para preguntas sobre políticas y procesos operativos.
- LangGraph permite controlar el comportamiento del agente, evitando loops y asegurando respuestas **determinísticas y auditables**.
- Las conversaciones reales de soporte funcionan como “verdad de referencia” para definir intenciones, flujos y herramientas.
- La memoria conversacional evita repeticiones, re-preguntas innecesarias y genera experiencias más naturales.
- El agente supera ampliamente a un LLM puro gracias a la integración de capa de herramientas y recuperación contextual.

📈 **Resultado final:**  
Un asistente conversacional **modular, robusto y extensible** capaz de:

- Consultar órdenes  
- Verificar stock  
- Explicar políticas  
- Recuperar respuestas desde documentos reales  
- Mantener conversación fluida y coherente  

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                           | Estado |
|--------------------------------------------------------------------|--------|
| Cargar dataset de conversaciones reales (Hugging Face)            | ✅ |
| EDA de diálogos, intenciones y patrones                           | ✅ |
| Construir índice FAISS para documentos y políticas                 | ✅ |
| Diseñar herramientas: tracking, stock, políticas, FAQs            | ✅ |
| Implementar grafo del agente en LangGraph                          | ✅ |
| Integrar memoria conversacional persistente                        | ✅ |
| Evaluación con escenarios reales                                   | ✅ |

---

# 📅 **Actividades y Tiempos**

| Actividad                                                        | Estimado | Real | Nota |
|------------------------------------------------------------------|----------|------|------|
| EDA y análisis de diálogos reales                                | 30 m     | 35 m | Extracción de intenciones |
| Diseño de herramientas (tracking, stock, políticas, faq)         | 25 m     | 22 m | API simulada |
| Construcción del índice FAISS                                     | 20 m     | 18 m | Normalización + embeddings |
| Implementación del grafo del agente en LangGraph                  | 60 m     | 65 m | Diseño de nodos y rutas |
| Memoria conversacional con estado persistente                     | 20 m     | 18 m | Manejo de turnos |
| Evaluación con conversaciones reales                              | 25 m     | 30 m | Comparación contra baseline sin RAG |

🕒 **Total estimado:** 3 h · **Total real:** 3 h 28 m · Δ ≈ +28 m

---

# 🛠️ **Feature Engineering del Sistema RAG**

| Técnica                         | Descripción |
|--------------------------------|-------------|
| **Limpieza de conversación**   | Retiro de ruido, timestamps, tokens y saludos irrelevantes |
| **Chunking inteligente**       | División por intención y contexto de políticas |
| **Embeddings**                 | Textos vectorizados para recuperación semántica |
| **FAISS**                      | Búsqueda vectorial rápida y escalable |
| **Conversational Memory**      | Estado persistente del usuario, orden y tema actual |

---

# ⚙️ **Componentes del Agente**

## 🔹 **Motor RAG**
- Indexación con FAISS  
- Recuperación contextual  
- Respuestas específicas a políticas, procesos y flujos del negocio  

## 🔸 **Herramientas (Tools)**
- **TrackOrderTool** → Estado de pedidos y actualizaciones  
- **StockTool** → Chequeo de inventario  
- **RefundPolicyTool** → Políticas de reembolsos y cambios  
- **SearchFAQTool** → FAQs indexadas en el vector store

## 🔸 **Memoria Conversacional**
- Mantiene contexto: pedido, producto, cliente  
- Evita re-preguntas  
- Mantiene coherencia entre turnos

## 🔸 **LangGraph**
- Control explícito del flujo conversacional  
- Nodos: `user_input → routing → RAG → tools → llm → memory → end`  
- Prevención de loops  
- Transparencia total del pipeline

---
