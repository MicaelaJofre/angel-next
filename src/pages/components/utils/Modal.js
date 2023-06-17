import Image from "next/image"
//import droneVideoAbout from "../../../../public/video/droneVideoAbout.mp4"
import close from "../../../../public/img/close.png"

const Modal = ({ handleModal, img }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="modal fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/70 cursor-pointer z-10"
      onClick={handleModal}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div
          className="items-center shadow-2xl max-h-[95%] sm:h-5/6 w-11/12 md:w-8/12 2xl:w-6/12 p-1 flex flex-col bg-white-bg relative overflow-y-auto bg-black"
          onClick={stopPropagation}
        >
          <Image
            id="img-modal"
            width={30}
            height={30}
            src={close}
            alt="close"
            onClick={handleModal}
            className="img-lazy absolute z-10 right-4 top-2 flex justify-end cursor-pointer font-extrabold text-yellow-select text-2xl"
          />
          {/* <video
            width={400}
            height={400}
            className="w-full h-72 rounded-tl-lg rounded-tr-lg object-cover aspect-video"
          >
            <source src={droneVideoAbout} type="video/mp4" />
          </video> */}
          <Image className="w-full h-full object-cover" width={500} height={500} alt="prueba" src={img}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
