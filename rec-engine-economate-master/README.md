# Product Recommendation System with BERT Embeddings

This project implements a product recommendation system using BERT (Bidirectional Encoder Representations from Transformers) embeddings. The system takes user input (purchases) and recommends relevant products based on semantic similarity calculated using BERT embeddings.

## Overview

The recommendation system consists of two main components:

1. **Data Generation (`generate_data.py`)**:
   - Generates synthetic product data from the list of 100 manually written products (product descriptions).
   - Saves the product data (`product_data.pkl`) as pickle files.

2. **Recommendation Engine (`app.py`)**:
   - Uses a pre-trained BERT model (`bert-base-multilingual-cased`) and the Hugging Face Transformers library for encoding text.
   - Tokenizes user purchases and product descriptions using the BERT tokenizer.
   - Computes BERT embeddings for user purchases and product descriptions.
   - Calculates cosine similarity between user embeddings and product embeddings.
   - Recommends top products based on similarity scores.
3. **Cosine Similarity**

    Cosine similarity is a measure of similarity between two non-zero vectors of an inner product space. In the context of our recommendation system, we use cosine similarity to quantify the similarity between user embeddings and product embeddings derived from BERT.

    ##### Formula

   The cosine similarity between two vectors \( \mathbf{u} \) and \( \mathbf{v} \) is calculated as:

   \[ \text{cosine\_similarity}(\mathbf{u}, \mathbf{v}) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|} \]

   Here:
   - \( \mathbf{u} \cdot \mathbf{v} \) represents the dot product of vectors \( \mathbf{u} \) and \( \mathbf{v} \).
   - \( \|\mathbf{u}\| \) and \( \|\mathbf{v}\| \) denote the Euclidean norms (lengths) of vectors \( \mathbf{u} \) and \( \mathbf{v} \), respectively.

   ##### Example

   Consider two vectors:
   \[ \mathbf{u} = [3, 4] \]
   \[ \mathbf{v} = [1, 2] \]

   To calculate the cosine similarity:
   \[ \mathbf{u} \cdot \mathbf{v} = (3 \times 1) + (4 \times 2) = 3 + 8 = 11 \]
   \[ \|\mathbf{u}\| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \]
   \[ \|\mathbf{v}\| = \sqrt{1^2 + 2^2} = \sqrt{1 + 4} = \sqrt {5} \]

   \[ \text{cosine\_similarity}(\mathbf{u}, \mathbf{v}) = \frac{11}{5 \times \sqrt{5}} \approx 0.776 \]

   The cosine similarity value ranges between -1 (perfect dissimilarity) and 1 (perfect similarity). Higher values indicate greater similarity between the vectors.

   - **If \( \text{cosine\_similarity}(\mathbf{u}, \mathbf{v}) = 1 \)**:
  This indicates that the cosine of the angle between vectors \( \mathbf{u} \) and \( \mathbf{v} \) is 1, which means the vectors are identical and point in the same direction within the n-dimensional space. In other words, \( \mathbf{u} \) is a scalar multiple of \( \mathbf{v} \) (either in the same or opposite direction), and they have the maximum possible similarity.

   - **If \( \text{cosine\_similarity}(\mathbf{u}, \mathbf{v}) = -1 \)**:
  This indicates that the cosine of the angle between vectors \( \mathbf{u} \) and \( \mathbf{v} \) is -1, which means the vectors are exactly opposite and point in opposite directions within the n-dimensional space. In geometric terms, \( \mathbf{u} \) and \( \mathbf{v} \) are anti-parallel (180 degrees apart), and they have the maximum possible dissimilarity.



## Overview

The recommendation system utilizes cosine similarity to measure the similarity between user embeddings (derived from user purchases) and product embeddings (derived from product descriptions). This similarity score is then used to recommend top products that are most similar to the user's preferences.

## Dependencies

- Python 3.x
- PyTorch
- Transformers (Hugging Face)
- FastAPI
- scikit-learn

## Usage

1. **Setup**:
   - Install required Python packages: `pip install -r requirements.txt`

2. **Run the Recommendation Engine**:
   - Start the FastAPI server: `uvicorn app:app --host 127.0.0.1 --port 8000`

3. **API Endpoint**:
   - Use the `/recommend/` endpoint with a POST request containing user purchases.

   Example:
   ```bash
   curl -X 'POST' \
     'http://127.0.0.1:8000/recommend/' \
     -H 'Content-Type: application/json' \
     -d '{
       "purchases": ["Ülker Kakolu Gofret", "Danone Muzlu Yoğurt"]
     }'

    Response:
    ``` {
        "recommendations": [
            "Fanta Şişe Gazlı İçecek",
            "Ülker Metro Bisküvi",
            "Pınar Kavurma",
            "Tadım Karışık Kuruyemiş",
            "Eti Popkek"
        ]
    }
    ```
    
