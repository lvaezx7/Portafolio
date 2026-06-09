<h1 align="center"> Asistente Inteligente para Documentación LangChain: Mini-RAG con OpenAI ⚙️📚</h1>


![CustomerPersonaBanr](../assets/ImgPractica14/img14.2.png)


<p align="center">
  <em>Construcción de un sistema de recuperación aumentada (RAG) basado en la documentación oficial de LangChain. Un caso práctico que integra embeddings, vector stores, text splitting y cadenas de consulta con ChatOpenAI.</em>
</p>

---

🏷️ **Etiquetas Rápidas**  
#RAG #LangChain #OpenAI #VectorStores #FAISS #Embeddings #LLMApps #DocumentationQA #AIEngineering

---

## 🧠 Resumen Ejecutivo

Este proyecto implementa un **asistente conversacional especializado en la documentación de LangChain**, utilizando un pipeline completo de **RAG (Retrieval-Augmented Generation)**.  
Para lograrlo, se usa el dataset preprocesado **mayur456/langchain_docs**, el cual contiene fragmentos limpios y listos para indexación.

El sistema permite:

- Consultas técnicas tipo FAQ,  
- Explicación de conceptos clave de LangChain,  
- Generación de resúmenes contextuales,  
- Extracción de información relevante (“structured extraction”),  
- Comparación entre respuestas con y sin recuperación de contexto.

Es una práctica ideal dentro del módulo UT4-14 porque integra:

- **ChatPromptTemplate**  
- **ChatOpenAI**  
- **Text Splitters**  
- **Vector stores (FAISS)**  
- **Embeddings**  
- **Cadenas de recuperación (retrieval chains)**  

El resultado final es un mini-asistente completamente funcional, reproducible en Google Colab y pensado para portafolios de AI/LLM Engineering.

---

## 🎯 Objetivos del Proyecto

1. **Cargar y estandarizar el dataset** de documentación técnica (“langchain_docs”).  
2. **Preprocesar contenido** mediante conversión a documentos y text splitting recursivo.  
3. **Generar embeddings** optimizados con OpenAI.  
4. **Construir un vector store FAISS** para búsquedas semánticas rápidas.  
5. **Configurar un retriever** capaz de devolver contexto relevante.  
6. **Implementar una cadena RAG completa**:  
   - recuperación de contexto,  
   - ensamblado con prompt estructurado,  
   - respuesta final condicionada al contexto.  
7. **Demostrar contraste** entre respuestas:  
   - modelo *solo* (sin contexto),  
   - modelo con RAG (context-aware).  

---

## 📦 Dataset: *mayur456/langchain_docs*

El dataset contiene:

- **text** → fragmentos de la documentación oficial de LangChain  
- **source** → URL o archivo de origen  
- **metadata opcional** → estructura jerárquica  

Características:

- Limpieza previa de HTML y markdown.  
- Dividido en filas relativamente largas aptas para text splitting.  
- Pensado para tareas de QA, resumen, extracción y RAG.

Este dataset permite construir un asistente técnico coherente:  
**“LangChain explicado por LangChain mismo”**.

---
