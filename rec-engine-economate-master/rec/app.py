import random
import pickle
import torch
from transformers import BertTokenizer, BertModel
from sklearn.metrics.pairwise import cosine_similarity
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # allow_origins=['*'],
    allow_origins=["http://localhost","http://127.0.0.1:3000", 'http://localhost:8080', "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_name = "bert-base-multilingual-cased"
tokenizer = BertTokenizer.from_pretrained(model_name)
bert_model = BertModel.from_pretrained(model_name)

with open('product_data.pkl', 'rb') as f:
    product_data = pickle.load(f)

class UserInput(BaseModel):
    purchases: list[str]

@app.post("/recommend/")
def recommend_products(user_input: UserInput):
    try:
        user_purchases = user_input.purchases

        # Tokenize and encode user purchases using BERT tokenizer
        encoded_inputs = tokenizer(user_purchases, padding=True, truncation=True, return_tensors="pt")

        with torch.no_grad():
            # Forward pass through BERT model to obtain embeddings
            outputs = bert_model(**encoded_inputs)

        user_embeddings = outputs.last_hidden_state.mean(dim=1).squeeze()  # Compute mean pooled embeddings

        # Encode product descriptions using BERT tokenizer
        encoded_products = tokenizer(product_data, padding=True, truncation=True, return_tensors="pt")

        with torch.no_grad():
            # Forward pass through BERT model to obtain embeddings
            outputs = bert_model(**encoded_products)

        product_embeddings = outputs.last_hidden_state.mean(dim=1)  # Compute mean pooled embeddings

        # Calculate cosine similarity between user embeddings and product embeddings
        similarities = cosine_similarity(user_embeddings, product_embeddings)

        # Get indices of top recommended products (excluding already purchased)
        recommended_indices = similarities.argsort()[0][::-1]
        recommended_products = []

        # Track recommended products to avoid duplicates
        seen_products = set()

        for idx in recommended_indices:
            product_name = product_data[idx]
            if product_name not in user_purchases and product_name not in seen_products:
                recommended_products.append(product_name)
                seen_products.add(product_name)
            if len(recommended_products) >= 10:  # Limit recommendations to top 5 unique products
                break

        return {"recommendations": recommended_products}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)