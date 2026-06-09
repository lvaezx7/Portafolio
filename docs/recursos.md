---
title: "Recursos"
description: "Bibliografía, documentación y lecturas de referencia del portfolio AI/ML"
hide:
  - toc
---

<div class="page-hero reveal">
  <p class="page-hero__eyebrow">Material de referencia</p>
  <h1 class="page-hero__title">Recursos <span>seleccionados</span></h1>
  <p class="page-hero__sub">
    Libros, documentación de herramientas y papers que sustentan el trabajo del portfolio.
    Solo lo que realmente se usa.
  </p>
</div>

---

## Libros de base

<div class="cards-grid stagger-children">

  <div class="card">
    <h3>Hands-On Machine Learning</h3>
    <p>Aurélien Géron. El libro más práctico para aprender ML moderno: flujo de trabajo completo, algoritmos supervisados y no supervisados, redes neuronales.</p>
    <p><small>Nivel: Intro → Avanzado</small></p>
  </div>

  <div class="card">
    <h3>Machine Learning Mastery with Python</h3>
    <p>Jason Brownlee. Implementación directa de algoritmos, experimentación y ajuste de modelos. Orientado a resultados.</p>
    <p><small>Nivel: Intermedio</small></p>
  </div>

</div>

---

## Documentación de herramientas

<div class="cards-grid stagger-children">

  <div class="card">
    <h3>Pandas</h3>
    <p>Manipulación y análisis de datos tabulares. Referencia central para limpieza, transformación y exploración.</p>
    <p><small><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener">pandas.pydata.org/docs</a></small></p>
  </div>

  <div class="card">
    <h3>Scikit-learn</h3>
    <p>Modelos supervisados y no supervisados, pipelines, validación cruzada y métricas. Stack principal del portfolio ML.</p>
    <p><small><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener">scikit-learn.org</a></small></p>
  </div>

  <div class="card">
    <h3>PyTorch</h3>
    <p>Framework de deep learning para CNN, transformers y fine-tuning. Usado en Computer Vision y NLP avanzado.</p>
    <p><small><a href="https://pytorch.org/docs/stable/" target="_blank" rel="noopener">pytorch.org/docs</a></small></p>
  </div>

  <div class="card">
    <h3>HuggingFace Transformers</h3>
    <p>Modelos preentrenados BERT, RoBERTa y fine-tuning para clasificación de texto, NER y generación.</p>
    <p><small><a href="https://huggingface.co/docs/transformers" target="_blank" rel="noopener">huggingface.co/docs</a></small></p>
  </div>

  <div class="card">
    <h3>LangChain</h3>
    <p>Framework para construir aplicaciones con LLMs: cadenas, RAG, agentes y memoria conversacional.</p>
    <p><small><a href="https://python.langchain.com/docs/get_started" target="_blank" rel="noopener">python.langchain.com</a></small></p>
  </div>

  <div class="card">
    <h3>Vertex AI</h3>
    <p>Plataforma de Google Cloud para pipelines de ML en producción, Model Registry y monitoreo continuo.</p>
    <p><small><a href="https://cloud.google.com/vertex-ai/docs" target="_blank" rel="noopener">cloud.google.com/vertex-ai</a></small></p>
  </div>

</div>

---

## Cursos de práctica

<div class="cards-grid stagger-children">

  <div class="card">
    <h3>Kaggle Learn</h3>
    <p>Intro to ML, Data Cleaning, Feature Engineering, Pandas, Time Series. Cada micro-curso incluye ejercicios interactivos con datasets reales.</p>
    <p><small><a href="https://www.kaggle.com/learn" target="_blank" rel="noopener">kaggle.com/learn</a> · Intro → Intermedio</small></p>
  </div>

  <div class="card">
    <h3>Machine Learning Crash Course</h3>
    <p>Google. Conceptos fundamentales de ML con ejemplos en TensorFlow. Buena base teórica sin exceso de matemática.</p>
    <p><small><a href="https://developers.google.com/machine-learning/crash-course" target="_blank" rel="noopener">developers.google.com/ml</a> · Intro</small></p>
  </div>

  <div class="card">
    <h3>Guía del Curso UCU — IA</h3>
    <p>Material oficial del curso de Inteligencia Artificial de la UCU. Estándares, rúbricas y ejemplos de entregables del portfolio.</p>
    <p><small><a href="https://juanfkurucz.com/ucu-ia/" target="_blank" rel="noopener">juanfkurucz.com/ucu-ia</a></small></p>
  </div>

</div>

---

## Papers de referencia

Los papers más relevantes detrás de los proyectos del portfolio, organizados por tema.

| Tema | Paper | Relevancia |
|------|-------|------------|
| **Clases desbalanceadas** | Learning from Imbalanced Data — IEEE TKDE | Proyectos con churn, fraude, diagnóstico |
| **Oversampling** | SMOTE: Synthetic Minority Over-sampling Technique | Técnica estándar en datasets con skew severo |
| **Métricas** | The Precision-Recall Plot Is More Informative Than ROC | Métricas correctas para clases raras |
| **Anomaly Detection** | Isolation Forest (Liu et al.) | Base del detector de anomalías |
| **Data Leakage** | Data Leakage and Deceptive Performance in Fraud Detection | Validación correcta en series temporales |
| **LLMs como agentes** | ReAct: Synergizing Reasoning and Acting in LLMs | Arquitectura base de los agentes LangGraph |
| **RAG** | Retrieval-Augmented Generation for NLP (Lewis et al.) | Base del mini-FAQ con FAISS + OpenAI |
| **SAM** | Segment Anything (Kirillov et al., Meta AI) | Fine-tuning para segmentación de inundaciones |
