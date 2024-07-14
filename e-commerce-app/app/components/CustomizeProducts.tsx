"use client";

import { products } from "@wix/stores";
import { useState } from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  // console.log(productOptions[0]?.choices)

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionselect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };
  // console.log(variants)

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };
  // console.log(selectedOptions)

  return (
    <div className="flex flex-col gap-6">
      {productOptions?.map((option) => (
        <div className="flex flex-col gap-4" key={option?.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
          {option?.choices?.map((choice) => {
            const disabled = !isVariantInStock({
              ...selectedOptions,
              [option.name!]: choice.description!,
            });
            const selected =
              selectedOptions[option.name!] === choice.description;

            return option.name === "Color" ? (
              <li
                className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                style={{
                  backgroundColor: choice.value,
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
                // onClick={clickHandler}
              >
                {selected && (
                  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                {disabled && (
                  <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </li>
            ) : (
              <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
                {choice.description}
              </li>
            );
          })}
          </ul>
        </div>
      ))}
      {/* Colors */}
      {/* <h4 className="font-medium">Choose a {option.name}</h4>
        <ul className="flex items-center gap-3">
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
        </ul> */}

      {/* others */}
      {/* <h4 className="font-medium">Choose a size</h4>
        <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
        Small
        </li>
        <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
        Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
        Large
        </li>
        </ul> */}
    </div>
  );
};

export default CustomizeProducts;
