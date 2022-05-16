import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <div>
      Product Detail Page
      <p> {params.productId} </p>
    </div>
  );
}

export default ProductDetail;
