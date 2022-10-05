import "./productCard.scss";
import Button from "../Button/Button";

const ProductCard = ({ product, actionButtonLabel, onClick }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-img" src={product.image} alt="product image" />
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{`€${product.price}`}</p>
      </div>
      <Button label={actionButtonLabel} onClick={() => onClick(product.id)} />
    </div>
  );
};

export default ProductCard;
