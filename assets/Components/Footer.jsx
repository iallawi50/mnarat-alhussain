import tansees from "../../assets/imgs/tansees.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#315940] h-16 mb-0">
        <a href="https://tansees.click/main/" target="_blank">
          <div className="bg-white w-[50px] h-[50px] mx-auto shadow-lg drop-shadow-lg relative top-[-25px] flex mb-0 justify-center items-center rounded-full">
            <img src={tansees} className="w-8" />
          </div>
        </a>
        <p className="mt-[-20px] text-center text-white">
          جميع الحقوق محفوظة لدى{" "}
          <a
            href="https://tansees.click/main/"
            className="underline"
            target="_blank"
          >
            تنصيص كليك
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
