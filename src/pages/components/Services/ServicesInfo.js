import Image from "next/image"
import drone from "../../../../public/img/services/droneAbout.jpeg"
import { usePercentage } from "./Hook/usePercentage"

const percentage = [
  {
    name : 'RODAJE',
    porc: 85
  },
  {
    name : 'PRODUCCIÓN',
    porc: 90
  },
  {
    name : 'EDICIÓN',
    porc: 85
  },
]

const ServicesInfo = () => {
  const { progressStyles } = usePercentage(percentage)

  return (
    <div className="flex items-center justify-center gap-12">
      <div className="hidden lg:flex">
        <Image
          className="opacity-50  max-w-full max-h-full object-cover"
          width={500}
          height={500}
          alt="drone"
          src={drone}
        />
      </div>
      <div className="progress-circle flex flex-wrap gap-12 lg:gap-20 justify-center items-center">
        {percentage.map((p, index) => {
          const { leftStyle = {}, rightStyle = {} } = progressStyles[index] || {};

          return (
            <div className="relative" key={index}>
              <p className="text-white text-center mb-4">{p.name}</p>
              <div className="progress mx-auto text-white">
                <span className="progress-left">
                  <span
                    className="progress-bar border-primary"
                    style={leftStyle}
                  ></span>
                </span>
                <span className="progress-right">
                  <span
                    className="progress-bar border-primary"
                    style={rightStyle}
                  ></span>
                </span>
                <div className="w-100 h-100 rounded-full flex items-center justify-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  <div>
                    {p.porc}
                    <span>%</span>
                  </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesInfo;
