"""from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random
import pickle
import spacy
from gensim.models import Word2Vec
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# Load product data from pickle file
with open('product_data.pkl', 'rb') as f:
    product_data = pickle.load(f)

# Load spaCy model for Turkish
nlp = spacy.load("xx_ent_wiki_sm")

# Preprocess product data and train Word2Vec model
processed_product_data = [product.lower().split() for product in product_data]
word2vec_model = Word2Vec(processed_product_data, vector_size=100, window=5, min_count=1, sg=1)  # Train Word2Vec model

class UserInput(BaseModel):
    purchases: list[str]

@app.post("/recommend/")
def recommend_products(user_input: UserInput):
    try:
        user_purchases = user_input.purchases

        # Preprocess user purchases
        processed_purchases = [purchase.lower() for purchase in user_purchases]

        # Calculate average vector for user purchases using Word2Vec model
        user_vector = get_average_vector(processed_purchases, word2vec_model)

        # Calculate cosine similarity between user vector and product vectors
        similarities = []
        for product in processed_product_data:
            product_vector = get_average_vector(product, word2vec_model)
            similarity = cosine_similarity([user_vector], [product_vector])[0][0]
            similarities.append(similarity)

        # Get indices of top recommended products (excluding already purchased)
        recommended_indices = sorted(range(len(similarities)), key=lambda i: similarities[i], reverse=True)
        recommended_products = []

        for idx in recommended_indices:
            if product_data[idx] not in user_purchases:
                recommended_products.append(product_data[idx])
            if len(recommended_products) >= 5:  # Limit recommendations to top 5
                break

        return {"recommendations": recommended_products[:5]}  # Return up to 5 recommendations

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def get_average_vector(tokens, model):
    
    vectors = [model.wv[token] for token in tokens if token in model.wv]
    if vectors:
        return sum(vectors) / len(vectors)
    else:
        return [0] * model.vector_size  # Return zero vector if no valid tokens

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)"""