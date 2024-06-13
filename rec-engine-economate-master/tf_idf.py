"""from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import spacy
import pickle

app = FastAPI()

# Load product data and TF-IDF model from pickle files
with open('product_data.pkl', 'rb') as f:
    product_data = pickle.load(f)

# Initialize TF-IDF vectorizer
tfidf_vectorizer = TfidfVectorizer()

# Fit TF-IDF vectorizer on product data
tfidf_model = tfidf_vectorizer.fit(product_data)

# Load spaCy model for Turkish
nlp = spacy.load("xx_ent_wiki_sm")

# Custom preprocessing function for Turkish product names
def preprocess_product_name(product_name):
    # Tokenize product name using spaCy with Turkish model
    doc = nlp(product_name.lower())
    # Extract relevant tokens (e.g., nouns)
    tokens = [token.text for token in doc if token.pos_ in ["NOUN", "PROPN"]]
    if not tokens:
        # If no relevant tokens extracted, return original product name
        return product_name.lower()
    return " ".join(tokens)

class UserInput(BaseModel):
    purchases: list[str]

@app.post("/recommend/")
def recommend_products(user_input: UserInput):
    try:
        user_purchases = user_input.purchases

        # Preprocess user purchases
        processed_purchases = [preprocess_product_name(purchase) for purchase in user_purchases]

        # Transform user purchases into TF-IDF vectors using the loaded model
        user_vectors = tfidf_model.transform(processed_purchases)

        # Calculate cosine similarity between user profile and all products
        similarities = cosine_similarity(user_vectors, tfidf_model.transform(product_data))

        # Get indices of top recommended products (excluding already purchased)
        recommended_indices = similarities.argsort()[0][::-1]
        recommended_products = set()  # Use a set to store unique recommended products

        # Iterate through recommended indices
        for idx in recommended_indices:
            # Check if recommended product is not in user's purchases
            if product_data[idx] not in user_purchases:
                recommended_products.add(product_data[idx])  # Add to set to ensure uniqueness
            # Break loop if we have collected 5 unique recommendations
            if len(recommended_products) >= 5:
                break

        # Convert set to list for response (ensures unique recommendations)
        unique_recommendations = list(recommended_products)[:5]

        return {"recommendations": unique_recommendations}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
"""
