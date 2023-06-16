import { useState } from "react";

const ServicesDetails = ({title, descriptions, Svg}) => {
  console.log(descriptions);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="text-brownLigth ">
        <Svg width={50} heigth={50}/>
      </div>
      <div className="text-brownLigth flex flex-col gap-4">
        <h2 className="text-white">{title}</h2>
        <ul className="flex flex-col gap-1 text-sm leading-6 pl-8 list-outside list-disc">
          {descriptions?.map((des) => {
            return <li key={des}>{des}</li>;
          })}
        </ul>
      </div>
    </div>
  )
}

export default ServicesDetails