import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { HeartIcon } from "../ui/icons/HeartIcon.jsx";
import { useState } from "react";
type ProductData = {
  name: string;
  description: string;
  price: number;
  stock: number;
  mass: number;
  addedDate: Date;
  image: string;
  colors: string[][];
};

export default function ProductComponent({
  product,
}: Readonly<{ product: ProductData }>) {
  const [selectedColorSet, setSelectedColorSet] = useState(product.colors[0]);

  const getPath = (colorIndex: number, colorSetLength: number) => {
    const xCenter = 50;
    const yCenter = 50;
    const radius = 40;
    const angle = (colorIndex / colorSetLength) * 2 * Math.PI;
    const nextAngle = ((colorIndex + 1) / colorSetLength) * 2 * Math.PI;

    const xStart = xCenter + radius * Math.sin(angle);
    const yStart = yCenter - radius * Math.cos(angle);
    const xEnd = xCenter + radius * Math.sin(nextAngle);
    const yEnd = yCenter - radius * Math.cos(nextAngle);

    // If the sector spans more than half the circle, the large-arc-flag should be 1, otherwise 0
    const largeArcFlag = nextAngle - angle > Math.PI ? 1 : 0;

    return `M ${xCenter},${yCenter} L ${xStart},${yStart} A ${radius},${radius} 0 ${largeArcFlag},1 ${xEnd},${yEnd} Z`;
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="flex flex-row justify-center gap-10 flex-wrap-reverse">
            <div>
              <Image
                alt={product.description}
                src={product.image}
                width={300}
                height={250}
              />
            </div>
            <div className="flex flex-col ml-5 w-1/3 mt-6">
              <h1 className="text-2xl font-semibold text-center">
                {product.name}
              </h1>
              <div className="flex flex-row justify-center gap-14 items-center">
                <p>{product.price} $</p>
                <Button isIconOnly color="danger" aria-label="Like">
                  <HeartIcon
                    filled={undefined}
                    size={undefined}
                    height={undefined}
                    width={undefined}
                    label={undefined}
                  />
                </Button>
              </div>

              <div>
                <p>Colores</p>
                <div className="flex justify-center items-center gap-4">
                  {product.colors.map((colorSet, setIdx) => (
                    <Button
                      isIconOnly
                      key={setIdx}
                      className={` h-[60px] w-[60px] p-0 rounded-full   ${
                        selectedColorSet === colorSet
                          ? "ring-2 ring-offset-2 ring-primary-500"
                          : ""
                      }`}
                      onClick={() => setSelectedColorSet(colorSet)}
                    >
                      <svg viewBox="0 0 100 100" width="100%" height="100%">
                        {colorSet.map((color, colorIndex) => (
                          <path
                            key={colorIndex}
                            d={getPath(colorIndex, colorSet.length)}
                            fill={color}
                          />
                        ))}
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>

              <p>Agregado: {product.addedDate.toLocaleDateString()}</p>

              <Button className="btn">Comprar</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export type { ProductData };