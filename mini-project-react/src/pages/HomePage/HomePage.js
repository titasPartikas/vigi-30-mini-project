import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Prekės</h1>
      {isLoading && <p>Loading...</p>}
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default HomePage;
