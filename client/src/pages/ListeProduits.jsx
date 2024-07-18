import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ListeProduits() {
  const { id } = useParams();
  const [produits, setProduits] = useState([]);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get(`http://localhost:3310/api/produits`, {
          params: { sous_categorie_id: id },
        });
        const filteredProduits = response.data.filter(
          (produit) => produit.sous_categorie_id === parseInt(id, 10)
        );

        setProduits(filteredProduits);
      } catch (error) {
        console.error("Error fetching produits:", error);
      }
    };

    fetchProduits();
  }, [id]);

  const openLightbox = (imageUrl) => {
    setLightboxImageUrl(imageUrl);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setLightboxImageUrl("");
  };

  return (
    <div>
      <h1>Liste des Produits</h1>
      <div className="list-product-container">
        {produits.map((produit) => (
          <p key={produit.id}>
            <div className="text-product-container">
              <button
                className="style-button-display"
                type="button"
                onClick={() => openLightbox(produit.image_url)}
              >
                <div className="text-indication-container">
                  <img src={produit.image_url} alt={produit.nom} />
                  <p className="text-indication">
                    Cliquez pour agrandir <br /> l'image
                  </p>
                </div>
              </button>

              <div className="text-container">
                <p className="product-name-style">{produit.nom}</p>
                <p>
                  <span className="text-style-span">Description</span>:{" "}
                  {produit.description}
                </p>
                <p>
                  <span className="text-style-span">Quantité disponible</span>:{" "}
                  {produit.quantite}
                </p>
                <div className="price-button-container">
                  <p className="background-price">{produit.prix}€</p>
                  <button className="button-style" type="button">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </p>
        ))}
      </div>
      {lightboxVisible && (
        <button type="button" className="lightbox" onClick={closeLightbox}>
          <img
            className="lightbox-image"
            src={lightboxImageUrl}
            alt="Agrandie"
          />
        </button>
      )}
    </div>
  );
}

export default ListeProduits;
