import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./homePage.scss";

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

  const onProductCardActionClick = (productId) => {
    fetch(`https://golden-whispering-show.glitch.me/${productId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setProducts((prevState) =>
          prevState.filter((product) => product.id !== productId)
        );
      }
    });
  };

  return (
    <div className="home-page">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ProductList
          products={products}
          title="Ypatingi pasiūlymai"
          productCardActionBtnLabel="Ištrinti produktą"
          onProductCardActionClick={onProductCardActionClick}
        />
      )}
    </div>
  );
};

export default HomePage;
