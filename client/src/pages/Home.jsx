import { useLoaderData } from "react-router-dom";

function Home() {
  const images = useLoaderData();

  return (
    <div className="home-container">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.image_url} alt="img-accueil" />
        </div>
      ))}
    </div>
  );
}

export default Home;
