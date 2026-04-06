import Title from "@/components/common/Title";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 - $200", value: "100-200" },
  { title: "$200 - $300", value: "200-300" },
  { title: "$300 - $500", value: "300-500" },
  { title: "Over $500", value: "500-1000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full p-5">
      <Title className="text-base font-black">Price</Title>
      <RadioGroup value={selectedPrice || ""} className="mt-2 space-y-1">
        {priceArray?.map((price, index) => (
          <div
            key={index}
            onClick={() => setSelectedPrice(price?.value)}
            className="flex items-center space-x-2 hover:cursor-pointer "
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded-sm border-black/50 "
            />
            <Label
              htmlFor={price?.title}
              className={`${selectedPrice === price?.value ? "font-semibold text-tech_bg_orange" : "font-normal"} hover:cursor-pointer`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px hover:text-tech_bg_dark-red hoverEffect]"
        >
          Reset selection
        </button>
      )}
    </div>
  );
};

export default PriceList;
