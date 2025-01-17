import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import EditProductMain from "./../components/products/EditproductMain";
import products from "./../data/Products";

const ProductEditScreen = ({ match }) => {
  const productId = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
