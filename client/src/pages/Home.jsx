import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const { images, produits } = useLoaderData();

  // Diviser les produits par sous-catégorie
  const produitsParSousCategorie = produits.reduce((acc, produit) => {
    const sousCategorie = produit.sous_categorie_nom || "Autres";
    if (!acc[sousCategorie]) {
      acc[sousCategorie] = [];
    }
    acc[sousCategorie].push(produit);
    return acc;
  }, {});

  return (
    <div className="home-container">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.image_url} alt="img-accueil" />
          </div>
        ))}
      </Carousel>
      <div className="text-home-container">
        <p>
          Ajoutez vos articles, vos catégories ainsi que vos sous-catégories
          pour vendre vos produits.
        </p>
      </div>
      <div className="text-home-container-end">
        <p>
          Personnalisez votre site en ajoutant les images de votre choix sur la
          page d’accueil.
        </p>
      </div>
      <div className="products-container">
        {Object.keys(produitsParSousCategorie).map((sousCategorie) => (
          <div key={sousCategorie}>
            <h2 className="title-souscategorie">{sousCategorie}</h2>
            <Carousel
              className="carousel-custom"
              autoPlay
              infiniteLoop
              showArrows
              showStatus={false}
              showIndicators={false}
              // showThumbs={false}
              interval={7000}
            >
              {produitsParSousCategorie[sousCategorie].map((produit) => (
                <div key={produit.id} className="product-item">
                  <img src={produit.image_url} alt={produit.nom} />
                  <div className="text-data-container">
                    <h3>{produit.nom}</h3>
                    <p className="text-data">{produit.description}</p>
                    <p className="text-data">
                      {" "}
                      <span className="span-style">Prix:</span> {produit.prix} €
                    </p>
                    <p className="text-data">
                      {" "}
                      <span className="span-style">Quantité:</span>{" "}
                      {produit.quantite}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
