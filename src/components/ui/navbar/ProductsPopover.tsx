import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
} from "@nextui-org/react";

type categoryLink = {
  label: string;
  href: string;
};

type Category = {
  label: string;
  items: categoryLink[];
};

type ProductsPopoverProps = {
  categories: Category[];
};

const ProductsPopover: React.FC<ProductsPopoverProps> = ({ categories }) => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Link className="sm:text-primary-50 text-secondary lg:text-primary-50 hover:text-primary-200 sm-text-lg text-l">Productos</Link>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full max-w-md flex flex-col p-4 bg-background rounded-lg shadow-lg">
          {categories.map((category, index) => (
            <div key={category.label} className="mb-4">
              <h3 className="font-semibold">{category.label}</h3>
              {category.items.map((item) => (
                <Link key={item.href} href={item.href} className="block mt-2 text-secondary hover:text-primary-200">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductsPopover;
export type { Category };
