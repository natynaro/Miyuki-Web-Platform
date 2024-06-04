import EmblaCarousel from "@/components/ui/imageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import NavbarHome from "@/components/ui/navbar/navbarHome";
import FeaturedProduct from "@/components/featured/featuredProduct";
import FeaturedAccessories from "@/components/featured/featuredAccessories";
import FavouriteTags from "@/components/featured/favouriteTags";
import FeaturedSocialMedia from "@/components/featured/featuredSocialMedia";
import Footer from "@/components/ui/navbar/footer";

export default function Page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const favouriteClients = [
    {
      image: "/Images/9ecbdfdd-9246-4260-a4d9-8af3efe3d777.png",
      background: "/Images/backround/verde.png",
      text: "",
    },
    {
      image: "/Images/64624cab-73c2-4b11-9c90-596bac82d032.png",
      background: "/Images/backround/verde.png",
      text: "",
    },
    {
      image: "/Images/aad606ec-20a1-41e4-97fa-5b0c32e411e1.png",
      background: "/Images/backround/verde.png",
      text: "",
    },
  ];

  return (
    <div className="flex flex-col w-full m-0 p-0">
      <NavbarHome />

      <section className="flex flex-col items-center w-full">
        <div className="w-full mx-auto">
          <div className="mb-8 mt-8">
            <FeaturedProduct />
          </div>
          <div className="bg-focus py-8">
            <FeaturedAccessories />
          </div>
          <article className="mt-5 py-16">
            <h1 className="text-4xl font-bold text-center mb-10">
              Favoritos de nuestros clientes
            </h1>
            <div className="flex flex-col justify-center items-center">
              <EmblaCarousel slides={favouriteClients} options={OPTIONS} />
            </div>
          </article>
          <div className="bg-focus">
            <FavouriteTags />
          </div>
          <div className="mb-24 mt-32">
            <FeaturedSocialMedia />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
