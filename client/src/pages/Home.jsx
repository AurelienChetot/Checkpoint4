import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const { images, produits } = useLoaderData();

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
          pour vendre vos produits
        </p>
      </div>
      <div className="text-home-container-end">
        <p>
          Personnalisez votre site en ajoutant les images de votre choix sur la
          page d’accueil.
        </p>
      </div>
      <div className="products-container">
        <h2>Nos Produits</h2>
        <Carousel
          className="carousel-custom"
          autoPlay
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
          interval={7000}
        >
          {produits.map((produit) => (
            <div key={produit.id} className="product-item">
              <img src={produit.image_url} alt={produit.nom} />
              <h3>{produit.nom}</h3>
              <p>{produit.description}</p>
              <p>Prix: {produit.prix} €</p>
              <p>Quantité: {produit.quantite}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
