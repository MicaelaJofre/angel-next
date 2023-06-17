import { useState } from "react";
import Image from "next/image";
import Play from "../icons/Play";
import Modal from "../utils/Modal";

const WorkDetails = ({ title, sub, img }) => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  return (
    <article className="relative">
      <Image
        className="object-cover h-screen"
        width={1000}
        height={1000}
        alt={title}
        src={img}
      />
      <div>
        <div
          onClick={handleModal}
          className="text-white bg-gray3/30 rounded-full p-7 absolute top-2/4 left-20 -translate-x-2/4 -translate-y-2/4 cursor-pointer"
        >
          <Play width={30} height={30} />
        </div>
        <div className="text-white absolute top-2/4 left-60 -translate-x-2/4 -translate-y-2/4">
          <h3>{title}</h3>
          <p className="text-xl">{sub}</p>
        </div>
      </div>
      {show ? <Modal handleModal={handleModal} img={img} /> : null}
    </article>
  );
};

export default WorkDetails;
