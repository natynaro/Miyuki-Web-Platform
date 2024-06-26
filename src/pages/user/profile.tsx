import React, { useEffect, useState } from "react";
import UserProfile from "../../components/user/UserProfile";
import Wishlist from "../../components/user/Wishlist";
import Footer from "@/components/ui/navbar/footer";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import { ProductIdNameImage } from "@/types/productType";
import { useProduct } from "@/hooks/useProduct";

export default function Profile() {
  const { getFavoriteProducts } = useProduct();
  const [product, setProduct] = useState<ProductIdNameImage[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!product) {
      setLoading(true);
      setError(null);
      getFavoriteProducts()
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch product:", err);
          setError(err.message || "Failed to load product");
          setLoading(false);
        });
    }
  }, [getFavoriteProducts, product]);

  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error: {error}</div>;
  } else if (product) {
    content = <Wishlist products={product} />;
  } else {
    content = <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <NavbarHome />
      <main className="mt-24">
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <UserProfile />
          </div>
          <div className="col-span-2">{content}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
