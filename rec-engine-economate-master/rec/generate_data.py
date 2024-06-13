import pickle
import random
#from sklearn.feature_extraction.text import TfidfVectorizer

# List of synthetic product descriptions
products = [
    "Ülker Kakolu Gofret",
    "Fanta Şişe Gazlı İçecek",
    "Doğuş Ihlamur Çayı",
    "Sütaş Lor Peyniri",
    "Tadım Karışık Kuruyemiş",
    "Lav Fırın Makarna",
    "Pınar Light Yoğurt",
    "Filiz Bulgur İnce",
    "Eti Popkek Kakaolu",
    "Lays Klasik Patates Cipsi",
    "Erikli Maden Suyu",
    "Danone Muzlu Yoğurt",
    "Keskinoğlu Yumurta",
    "Hayat Su",
    "Pınar Dana Kangal Sucuk",
    "Uludağ Limonata",
    "Pınar Beyaz Peynir",
    "Sütaş İçim Kaymak",
    "Sarelle Fındık Kreması",
    "Yıldız Çikolata",
    "Biscolata Stix Bisküvi",
    "Knorr Mercimek Çorbası",
    "Eti Lifalif Bisküvi",
    "Ülker Halley Dondurma",
    "Milka Çikolata",
    "Dardanel Sardalya",
    "Tamek Vişne Nektarı",
    "Sana Sıvıyağ",
    "Sütaş Burgu Makarna",
    "Mevsim Karışık Turşu",
    "Pinar Kavurma",
    "Komili Sızma Zeytinyağı",
    "Eti Puf Çilekli",
    "Ülker Kido",
    "Yonca Tereyağı",
    "Fındıkzade Fıstık Ezmesi",
    "Torku Hazır Çorba",
    "İçim Doğal Yoğurt",
    "Kutlutaş Kuru Kayısı",
    "Ülker Petibör Bisküvi",
    "Tat Kırmızı Mercimek",
    "Fanta Portakal Gazlı İçecek",
    "Pınar Karışık Salata",
    "Sütaş Beyaz Peynir",
    "Dardanel Ton Balıklı Pizza",
    "Bingo Puf Çikolata Kaplı",
    "Lipton Iced Tea Şeftali",
    "Albeni Çikolata",
    "Doritos Çips",
    "Pınar Süzme Peynir",
    "Ülker Metro Bisküvi",
    "Cappy Portakal Suyu",
    "Eti Burçak Bisküvi",
    "Danone Yoğurt",
    "Tadım Antep Fıstığı",
    "Sarelle Fındık Kreması",
    "Ülker Çikolatalı Gofret",
    "Pınar Dilimlenmiş Sucuk",
    "Filiz Makarna",
    "Lays Patates Cipsi",
    "Kemal Kükrer Çay",
    "Sütaş Ayran",
    "İçim UHT Süt",
    "Doğuş Karadeniz Çayı",
    "Yedigün Zeytin Ezmesi",
    "Dardanel Ton Balığı",
    "Komili Zeytinyağı",
    "Eti Cin Cici Bisküvi",
    "Coca-Cola Şişe Gazlı İçecek",
    "Sütaş Kaymak",
    "Tamek Domates Salçası",
    "Lavazza Filtre Kahve",
    "Şölen Çikolata",
    "Pınar Kırmızı Mercimek",
    "Filiz Bulgur Pilavlık",
    "Ülker Metro Gofret",
    "Tadım Çiğ Badem",
    "Knorr Çorba",
    "Dardanel Ton Balığı Salatası",
    "Eti Puf Kakaolu Bar",
    "Nestlé Damak Çikolata",
    "Marmarabirlik Siyah Zeytin",
    "Pınar Hazır Çorba",
    "Tamek Şeftali Nektarı",
    "Eti Popkek",
    "Yörük Köy Tereyağı",
    "Köfteci Yusuf Sucuk",
    "Lays Yoğurtlu Patates Cipsi",
    "İçim Kaşar Peynir",
    "Bingo Karışık Kuruyemiş",
    "Lipton Limonlu Soğuk Çay",
    "Pınar Tam Yağlı Yoğurt",
    "Sütaş Labne Peyniri",
    "Eti Form Kepekli Kraker",
    "Sana Margarin",
    "Cappy Elma Suyu",
    "Pınar Piliç Eti"
]


# Generate synthetic product data (repeat product descriptions)
product_data = [random.choice(products) for _ in range(100)]

# Save product data as a pickle file
with open('product_data.pkl', 'wb') as f:
    pickle.dump(product_data, f)

"""
# Initialize TF-IDF vectorizer
tfidf_vectorizer = TfidfVectorizer()

# Fit TF-IDF vectorizer on product data
tfidf_model = tfidf_vectorizer.fit(product_data)

# Save TF-IDF model as a pickle file
with open('tfidf_model.pkl', 'wb') as f:
    pickle.dump(tfidf_model, f)
"""
