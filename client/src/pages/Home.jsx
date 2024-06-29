import { useLoaderData } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const images = useLoaderData();

  return (
    <div className="home-container">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.image_url} alt="img-accueil" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
