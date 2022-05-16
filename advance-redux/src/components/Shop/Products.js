import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Iphone Charger"
          price={80}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="Mac Book Pro Charger"
          price={100}
          description="This is official charger from apple - amazing charger"
        />
      </ul>
    </section>
  );
};

export default Products;
