import React from 'react';
import ThreeImageGallery, { ImageInfo } from "../ui/groupImages/threeImageGallery";

export default function FavouriteTags() {
  const accessories: ImageInfo[] = [
    {
      imageUrl: "/Images/flores.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Flores",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/animales.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Animales",
      imageDescription: "",
    },
    {
      imageUrl: "/Images/personajes.png",
      backround: "/Images/backround/verdeazul.png",
      imageTitle: "Personajes",
      imageDescription: "",
    },
  ];

  return (
    
    <section className="pt-16 pb-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Etiquetas favoritas</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: 'full' }}>
        <ThreeImageGallery imageInfoArray={accessories} textColor="text-white" />
      </div>
      
    </section>
  );
}
