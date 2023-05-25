import React from "react";
import styles from "./Product.module.css";

function Product(props) {
const { name, description, price, src } = props;

return (
<>
<div className={styles.item}>
<h3 className={styles.name}>{name}</h3>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<img
className={styles.img}
src={src}
alt=""
/>
<p className={styles.info}>{description}</p>
</div>
<p className={styles.price}>Цена: {price} $.</p>
</div>
</>
);
}

export default Product;
