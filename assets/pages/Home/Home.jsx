import useAuthContext from "../../context/AuthContext";
import landing from "../../imgs/landing.png";
 
import "../../css/Home.css";
import "../../css/master.css";
import { Link } from "react-router-dom";
import Poem from "../../Components/Poem";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
const Home = () => {
  const { user } = useAuthContext();
  const [poems, setPoems] = useState([]);
  const getLastPoems = async () => {
    try {
      const response = await axios.get("/api/poem/getSomePoems");
      setPoems(response.data.data);
      console.log(poems);
    } catch (error) {}
  };

  useEffect(() => {
    getLastPoems();
  }, []);

  return (
    <>
      {/* START SECTION ONE */}
      <div className="mx-auto  flex flex-col w-full items-center justify-around min-h-[calc(100vh-64px)] ">
        <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto justify-around items-center ">
          <img src={landing} alt="" />

          <div className="text-center">
            <h1 className="text-5xl text-landing text-landing font-bold my-10">
              منارات الحسين
            </h1>
            <p className="text-white text-lg sm:text-xl">
              فمذ كنت طفلاً رأيت الحسين مناراً إلى ضوئهِ أنتمـي
            </p>
          </div>
        </div>
        {(user && user.type == 0) && (
          <div className="bg-[#315940] text-white text-center p-4">
            تم تسجيلك في الموقع .. سوف يتم التواصل معك لتفعيل حسابك كـ شاعر
          </div>
        )}
        <a
          href="#more"
          className="btn-bg-light p-5 w-16 h-16 flex justify-center items-center rounded-full btn-shadow transition"
        >
          <svg
            width="38"
            height="50"
            viewBox="0 0 38 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2322 48.7678C18.2085 49.7441 19.7915 49.7441 20.7678 48.7678L36.6777 32.8579C37.654 31.8816 37.654 30.2986 36.6777 29.3223C35.7014 28.346 34.1184 28.346 33.1421 29.3223L19 43.4645L4.85786 29.3223C3.88155 28.346 2.29864 28.346 1.32233 29.3223C0.34602 30.2986 0.34602 31.8816 1.32233 32.8579L17.2322 48.7678ZM16.5 0L16.5 47H21.5L21.5 0L16.5 0Z"
              fill="white"
            />
            <path
              d="M17.2322 48.7678C18.2085 49.7441 19.7915 49.7441 20.7678 48.7678L36.6777 32.8579C37.654 31.8816 37.654 30.2986 36.6777 29.3223C35.7014 28.346 34.1184 28.346 33.1421 29.3223L19 43.4645L4.85786 29.3223C3.88155 28.346 2.29864 28.346 1.32233 29.3223C0.34602 30.2986 0.34602 31.8816 1.32233 32.8579L17.2322 48.7678ZM16.5 0L16.5 47H21.5L21.5 0L16.5 0Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      {/* END SECTION ONE */}

      {/* START SECION TWO */}

      <div id="more" className="w-full bg-section min-h-screen relative">
        <div className="absolute w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            width="100%"
            className="md:h-[400px]"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
          >
            <g mask='url("#SvgjsMask1104")' fill="none">
              <path
                d="M -510.2569961244195,219 C -414.26,264.2 -222.26,453.4 -30.25699612441951,445 C 161.74,436.6 257.74,168.4 449.7430038755805,177 C 641.74,185.6 737.74,516.4 929.7430038755805,488 C 1121.74,459.6 1307.69,76.2 1409.7430038755806,35 C 1511.79,-6.2 1433.95,232.6 1440,282"
                stroke="rgba(49, 89, 64, 1)"
                strokeWidth="2"
              ></path>
              <path
                d="M -89.452881893077,143 C 6.55,171.4 198.55,293.2 390.547118106923,285 C 582.55,276.8 678.55,102 870.547118106923,102 C 1062.55,102 1158.55,277.4 1350.5471181069229,285 C 1542.55,292.6 1812.66,140.4 1830.5471181069229,140 C 1848.44,139.6 1518.11,254.4 1440,283"
                stroke="rgba(49, 89, 64, 1)"
                strokeWidth="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1104">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* {!user && (
            <div className="w-full text-center">
              <button className="btn-show-poems green mt-10 sm:mt-[10rem] p-2 rounded-lg text-4xl transition">
                <Link to="/poems">عرض القصائد</Link>
              </button>
            </div>
          )} */}

          {!user && (
            <>
              <div className="sm:mt-[14rem] pt-14  flex justify-around flex-col sm:flex-row items-center">
                <div className="flex flex-col items-center mb-14">
                  <h1 className="text-4xl text-white font-bold  mb-3">
                    هل أنت <span className=" text-[#86dda6]">شاعر</span>
                  </h1>
                  <p className="text-white text-xl">سجل لتتمكن من نشر قصائدك</p>

                  <button className="btn-show-poems gold mt-10 p-2 rounded-lg text-4xl transition ">
                    <Link to="/register/poet">سجل من هنا</Link>
                  </button>
                </div>

                <div className="h-96 border-[1px] border-gray-100 hidden sm:block"></div>

                <div className="flex flex-col items-center mb-14">
                  <h1 className="text-4xl text-white font-bold mb-3">
                    هل أنت <span className="text-[#86dda6]">رادود</span>
                  </h1>
                  <p className="text-white text-xl">
                    سجل للاستفادة من مميزات الموقع
                  </p>

                  <button className="btn-show-poems green mt-10 p-2 rounded-lg text-4xl transition ">
                    <Link to="/register/poet">سجل من هنا</Link>
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="w-full text-center">
            <button className="text-white text-4xl my-10">
              <Link to="/poems">احدث القصائد</Link>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-2">
            {poems &&
              poems.map((el, id) => {
                return <Poem key={id} data={el} />;
              })}
          </div>
          <div className="w-full text-center">
            <button className="btn-show-poems green mt-10 mb-14 p-2 rounded-lg text-4xl transition">
              <Link to="/poems">عرض جميع القصائد</Link>
            </button>
          </div>
        </div>
      </div>

      {/* END SECION TWO */}
    </>
  );
};

export default Home;
