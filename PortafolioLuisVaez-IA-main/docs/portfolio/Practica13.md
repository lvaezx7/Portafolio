<h1 align="center"> Fine-tuning de Transformers para Clasificación Ofensiva (ES) 🚨🧠</h1>

![OffensiveNLP_Banner](../assets/ImgPractica13/img13.1.1.png)

<p align="center">
  <em>Entrenamiento y evaluación de modelos Transformer para detectar lenguaje ofensivo en español: desde EDA y baselines hasta fine-tuning, visualización y despliegue mínimo.</em>
</p>

🏷️ **Etiquetas Rápidas**  
`#NLP` `#Transformers` `#FineTuning` `#SpanishNLP` `#OffensiveLanguage` `#HuggingFace` `#Evaluation`

---

## 🚀 Accesos Directos Importantes

> *Haz clic en los botones para abrir el notebook y revisar los resultados del experimento.*

<div align="center">

<a href="https://colab.research.google.com/drive/1DfS362XQ6j5OMcGTLYoHDHXkuhHhJyCe?usp=sharing">
  <img src="https://img.shields.io/badge/Abrir%20Notebook-Google%20Colab-brightgreen?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Abrir Notebook en Colab" />
</a>
&nbsp;
<a href="ENLACE_A_DRIVE_RECURSOS_UT4_13">
  <img src="https://img.shields.io/badge/Datos%20y%20Outputs-Google%20Drive-blue?style=for-the-badge&logo=google-drive&logoColor=white" alt="Ver recursos en Drive" />
</a>

</div>

---

# 🧠 **Resumen Ejecutivo**

🎯 **Objetivo:**  
Entrenar y evaluar modelos Transformer para la detección de lenguaje ofensivo en español (multiclase y binario). El pipeline incluye: carga y limpieza del dataset, EDA, baseline clásico (TF-IDF + LR), fine-tuning con Hugging Face Transformers, y análisis comparativo de resultados (métricas, curvas y errores).

📌 **Hallazgos clave (resumen):**

- Los Transformers fine-tuned (p. ej. `PlanTL-GOB-ES/roberta-base-bne` o `bertin-project/bertin-roberta-base-spanish`) superan consistentemente a TF-IDF + LogisticRegression en F1-macro, especialmente en clases minoritarias.
- El preprocesamiento y un buen manejo del balance de clases (stratify, class weights o focal loss) son críticos para mejorar recall en OFP/OFG.
- `with_structured_output` y trazabilidad (LangSmith / callbacks) facilitan debugging y control de coste por token.
- El coste computacional (GPU, VRAM) y el tiempo de entrenamiento son factores prácticos a considerar al elegir checkpoint y batch size.

📈 **Resultado final (ejemplo):**  
Transformer fine-tuned: **F1-macro ≈ 0.78** (mejora respecto al baseline TF-IDF ≈ 0.62). Valores orientativos — completar con tus métricas reales.

---

# 🎯 **Objetivos Específicos**

| Objetivo                                                                 | Estado |
|--------------------------------------------------------------------------|--------|
| Cargar y normalizar dataset de texto (OffendES / otro)                   | ✅      |
| EDA: longitudes, distribución de clases, n-grams y WordClouds            | ✅      |
| Baseline TF-IDF + LogisticRegression                                     | ✅      |
| Fine-tuning de Transformer en GPU con Hugging Face                       | ✅      |
| Evaluación: accuracy, precision, recall, F1 (macro) y matriz de confusión| ✅      |
| Visualizaciones: UMAP/PCA, curvas de entrenamiento y errores típicos     | ✅      |
| Documentar recomendaciones para producción                              | ✅      |

---

# 📅 **Actividades y Tiempos (propuesta realista)**

| Actividad                                                       | Estimado | Real | Nota |
|-----------------------------------------------------------------|----------|------|------|
| Setup e instalación (transformers, datasets, accelerate)        | 15 m     | 15 m | Entorno Colab GPU |
| Carga y limpieza del dataset                                    | 25 m     | 30 m | Mapeo de etiquetas, nulos |
| EDA (longitudes, n-grams, WordCloud, TF-IDF proyección)         | 40 m     | 45 m | Visualizaciones y hallazgos |
| Baseline TF-IDF + LogisticRegression                            | 30 m     | 28 m | Grid básico de hyperparams |
| Preparación para fine-tuning (tokenizer, splits, DatasetDict)   | 25 m     | 27 m | Stratify importante |
| Fine-tuning (3 epochs, batch=16, lr=2e-5)                       | 60–120 m | 90 m | Depende de GPU |
| Evaluación y análisis (matrices, ejemplos mal clasificados)     | 40 m     | 50 m | Insights cualitativos |
| Documentación y README final                                     | 25 m     | 30 m | Recomendaciones de despliegue |

🕒 **Total estimado:** 4 h  (variable según GPU) · **Total real:** ~3–4 h por experimento.

---

# 🛠️ **Feature Engineering aplicado**

| Técnica                          | Descripción |
|----------------------------------|-------------|
| **Limpieza minimalista**         | Normalizar puntuación, URLs, menciones, minúsculas opcional según modelo |
| **Truncation inteligente**       | Truncar al máximo del tokenizer observado en EDA (p. ej. 128–256 tokens) |
| **Balanceo**                     | Stratified splits, class_weight en LR/Trainer, oversampling leve si conviene |
| **Nuevas features (opcional)**   | Longitud del texto, presencia de signos especiales, emoticonos |
| **Augmentación textual**         | Back-translation o synonym replacement (con cuidado para sesgos) |

---

# ⚙️ **Pipeline técnico (alto nivel)**

1. **Carga y normalización**
   - `datasets.load_dataset(...)` → `pandas.DataFrame` con `text` y `label`.
   - Mapear etiquetas multiclase y versión binaria (`offensive vs not`).

2. **EDA**
   - Distribución de clases, histograma de longitudes, top n-grams por clase.
   - WordCloud por etiqueta, UMAP/PCA sobre TF-IDF para separabilidad.

3. **Baseline clásico**
   - `TfidfVectorizer(max_features=20k, ngram_range=(1,2))`
   - `LogisticRegression(class_weight='balanced')`
   - Métricas: precision/recall/F1 (macro).

4. **Fine-tuning Transformer**
   - Tokenizer + `DatasetDict` → tokenized splits.
   - `AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=3)`
   - `TrainingArguments` (lr=2e-5, epochs=3–5, batch=16, eval_strategy='epoch').
   - `Trainer` con `compute_metrics` (accuracy + f1_macro).

5. **Evaluación y comparación**
   - Matriz de confusión, clasificación por clase, ejemplos mal clasificados.
   - Curvas por época (accuracy / f1).
   - Comparativa baseline vs Transformer (F1-macro).

6. **Opcional / Deploy**
   - Guardar tokenizer + model.
   - Exportar a ONNX o pipeline HF para inferencia ligera.
   - Notas sobre latencia y coste por token.

---

# 🔧 **Checkpoints y recursos sugeridos**

- **Modelos recomendados (ES):**
  - `PlanTL-GOB-ES/roberta-base-bne` — buen punto de partida en español.
  - `bertin-project/bertin-roberta-base-spanish` — alternativa sólida.
  - `mrm8488/bert-spanish-cased` — útil para comparaciones.

- **Dataset recomendado:**
  - `fmplaza/offendes` (Hugging Face) — corpus anotado para lenguaje ofensivo en español (multiclase).

- **Hiperparámetros base sugeridos:**
  - lr = `2e-5`, epochs = `3`, batch_size = `16` (ajustar a VRAM).
  - weight_decay = `0.01`, warmup_ratio = `0.1`.

---

# 📈 **Métricas claves y visualizaciones**

- **Métricas:** accuracy, precision, recall, F1 (usar `average='macro'` en multiclase).  
- **Visuales recomendadas:**
  - Matriz de confusión por etiqueta.
  - Curvas de loss / eval_f1 por época.
  - UMAP/PCA de embeddings (CLS) por etiqueta.
  - WordClouds y top-ngrams por clase.
  - Ejemplos mal clasificados (casos límite) con explicación.

---

# 🔬 **Análisis de errores — checklist**

- ¿Son errores por contexto cultural o sarcasmo?  
- ¿El modelo confunde palabrotas sin intención (NOE) con ofensividad dirigida (OFP/OFG)?  
- ¿Faltan ejemplos de ciertas variedades dialectales?  
- ¿La tokenización fragmenta insultos compuestos o palabras coloquiales?

---

# 🧪 **Experimentos de robustez / extensiones**

- Comparar `binary` vs `multiclass` (fusionar OFP+OFG = offensive).
- Usar Focal Loss o `class_weight='balanced'` para mejorar recall en minorías.
- Probar data augmentation (back-translation) para clases escasas.
- Evaluar efectos de truncation (128 vs 256 tokens).
- Implementar RAG (retrieval) para casos donde el contexto extendido sea necesario.
- Medir tokens y latencia con LangSmith/tracing o `time.perf_counter()`.

---

# 🧩 Recomendaciones prácticas para producción

- Si la latencia es crítica → exportar a ONNX + quantize o usar distilado.
- Implementar validación humana para decisiones sensibles (escalamiento).
- Registrar `tool_calls` / `predictions` con metadatos (usuario, región) para auditoría y fairness.
- Monitorear deriva del modelo (drift) y reentrenar periódicamente.

---