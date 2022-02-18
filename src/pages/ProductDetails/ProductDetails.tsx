import { useParams } from "react-router-dom";

import ProductDetailCard from "components/ProductDetailCard/ProductDetailCard";

export default function ProductDetails() {
  const { title } = useParams();

  return <ProductDetailCard title={title} />;
}
