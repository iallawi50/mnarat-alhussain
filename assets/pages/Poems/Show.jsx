import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import defaultAvatar from "../../imgs/default.png";
import usePoemContext from "../../context/PoemContext";
import Swal from "sweetalert2";

const Show = () => {
  const { getPoem, poem } = usePoemContext();
  const { slug } = useParams();
  const copy = () => {
    navigator.clipboard.writeText(poem.body);
  Swal.fire({ 
    icon: "success",
    title: "تم النسخ",
    showConfirmButton: false,
    timer: 1500,
  });
  };
  useEffect(() => {
    getPoem(slug);
    console.log(poem);
  }, []);

  return (
    <>
      {poem && (
        <div className="bg-white   rounded-2xl p-5 max-w-7xl mx-auto m-10 ">
          <header className="flex justify-between items-center">
            <Link to={`/p/${poem.user.username}`}>
              <div className="flex items-center justify-between items-center">
                <div className="avatar-border relative ml-3">
                  <div className="img-holder relative rounded-full w-16 h-16 overflow-hidden flex justify-center items-center">
                    <img src={defaultAvatar} alt={poem.user.name} />
                  </div>
                </div>
                <h3 className="font-bold">{poem.user.name}</h3>
              </div>
            </Link>

            <span className="poem-type items-center rounded-2xl px-2 text-[15px]">
              {poem.type_phase}
            </span>
          </header>

          <article className="pre-line h-[100%] font-bold text-xl text-center my-3">
            <h1 className="text-green-700">{poem.title}</h1>
            {poem.body}
          </article>

          <footer className="flex flex-col">
            <ul className="flex flex-row flex-wrap gap-2 mb-7">
              {poem.categories &&
                poem.categories.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="bg-gray-900 p-1 font-bold text-sm text-white"
                    >
                      {el.title}
                    </li>
                  );
                })}
              {/* <li className="bg-gray-900 p-1 font-bold text-sm text-white">
                الامام الحسين
              </li> */}
            </ul>
            <div className="flex justify-between">
              {/* <div className="flex flex-col items-center">
                <div className="btn-bg-light-poem w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
                    <svg
                className="text-[32px]"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="0.875em"
                viewBox="0 0 384 512"
              >
                {" "}
                <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
              </svg> 

                   <svg
                    className="text-[32px]"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                  </svg> 
                </div>
                <h4>حفظ</h4>
              </div> */}
              <div className="flex flex-col items-center" onClick={copy}>
                <div className="btn-bg-light-poem p-3 w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="2em" viewBox="0 0 384 512"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                </div>
                <h4>نسخ</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="btn-bg-light-poem red p-3 w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 24.0833C17.4014 24.0833 17.7381 23.9473 18.0101 23.6753C18.2821 23.4033 18.4176 23.0671 18.4167 22.6667C18.4167 22.2653 18.2807 21.9286 18.0087 21.6566C17.7367 21.3846 17.4004 21.2491 17 21.25C16.5986 21.25 16.2619 21.386 15.9899 21.658C15.7179 21.93 15.5824 22.2662 15.5833 22.6667C15.5833 23.0681 15.7193 23.4047 15.9913 23.6767C16.2633 23.9487 16.5996 24.0843 17 24.0833ZM15.5833 18.4167H18.4167V9.91667H15.5833V18.4167ZM11.6875 29.75L4.25 22.3125V11.6875L11.6875 4.25H22.3125L29.75 11.6875V22.3125L22.3125 29.75H11.6875ZM12.8917 26.9167H21.1083L26.9167 21.1083V12.8917L21.1083 7.08333H12.8917L7.08333 12.8917V21.1083L12.8917 26.9167Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>بلاغ</h4>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Show;
