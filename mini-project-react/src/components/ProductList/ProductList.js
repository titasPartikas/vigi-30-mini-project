import ProductCard from "../ProductCard/ProductCard";
import "./productList.scss";

const ProductList = ({
  products,
  title,
  productCardActionBtnLabel,
  onProductCardActionClick,
}) => {
  return (
    <div className="product-list-container">
      <h6 className="title">{title}</h6>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            actionButtonLabel={productCardActionBtnLabel}
            onClick={onProductCardActionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
