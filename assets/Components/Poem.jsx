import { useEffect, useState } from "react";
import defaultAvatar from "../imgs/default.png";
import axios from "../../api/axios";
import "../css/Poem.css";
import { Link } from "react-router-dom";
const Poem = (props) => {
  const { data } = props;
  const [poem, setPoem] = useState(data);
  useEffect(() => {
    setPoem(data);
  }, [data]);

  return (
    <>
      {poem && (
        <div className="bg-white min-h-[450px] rounded-2xl p-5">
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

          <article className="pre-line font-bold text-xl text-center my-3">
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
              <Link to={`/poem/s/${poem.slug}`}>
                <div className="flex flex-col items-center">
                  <div className="btn-bg-light-poem p-3 w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.66667 12.75C5.26528 12.75 4.92859 12.614 4.65659 12.342C4.38459 12.07 4.24906 11.7338 4.25 11.3333V5.66667C4.25 5.26528 4.38601 4.92859 4.65801 4.65659C4.93001 4.38459 5.26623 4.24906 5.66667 4.25H11.3333C11.7347 4.25 12.0714 4.38601 12.3434 4.65801C12.6154 4.93001 12.7509 5.26623 12.75 5.66667C12.75 6.06806 12.614 6.40475 12.342 6.67675C12.07 6.94875 11.7338 7.08428 11.3333 7.08334H9.06667L12.5021 10.5188C12.7618 10.7785 12.8917 11.0972 12.8917 11.475C12.8917 11.8528 12.75 12.1833 12.4667 12.4667C12.2069 12.7264 11.8764 12.8563 11.475 12.8563C11.0736 12.8563 10.7431 12.7264 10.4833 12.4667L7.08334 9.06667V11.3333C7.08334 11.7347 6.94781 12.0714 6.67675 12.3434C6.4057 12.6154 6.069 12.7509 5.66667 12.75ZM21.5333 12.4667C21.2736 12.2069 21.1438 11.8764 21.1438 11.475C21.1438 11.0736 21.2736 10.7431 21.5333 10.4833L24.9333 7.08334H22.6667C22.2653 7.08334 21.9286 6.94781 21.6566 6.67675C21.3846 6.4057 21.2491 6.069 21.25 5.66667C21.25 5.26528 21.386 4.92859 21.658 4.65659C21.93 4.38459 22.2662 4.24906 22.6667 4.25H28.3333C28.7347 4.25 29.0714 4.38601 29.3434 4.65801C29.6154 4.93001 29.7509 5.26623 29.75 5.66667V11.3333C29.75 11.7347 29.614 12.0714 29.342 12.3434C29.07 12.6154 28.7338 12.7509 28.3333 12.75C27.9319 12.75 27.5953 12.614 27.3233 12.342C27.0513 12.07 26.9157 11.7338 26.9167 11.3333V9.06667L23.4813 12.5021C23.2215 12.7618 22.9028 12.8917 22.525 12.8917C22.1472 12.8917 21.8167 12.75 21.5333 12.4667ZM22.6667 29.75C22.2653 29.75 21.9286 29.614 21.6566 29.342C21.3846 29.07 21.2491 28.7338 21.25 28.3333C21.25 27.9319 21.386 27.5953 21.658 27.3233C21.93 27.0513 22.2662 26.9157 22.6667 26.9167H24.9333L21.4979 23.4813C21.2382 23.2215 21.1083 22.9028 21.1083 22.525C21.1083 22.1472 21.25 21.8167 21.5333 21.5333C21.7931 21.2736 22.1236 21.1438 22.525 21.1438C22.9264 21.1438 23.257 21.2736 23.5167 21.5333L26.9167 24.9333V22.6667C26.9167 22.2653 27.0527 21.9286 27.3247 21.6566C27.5967 21.3846 27.9329 21.2491 28.3333 21.25C28.7347 21.25 29.0714 21.386 29.3434 21.658C29.6154 21.93 29.7509 22.2662 29.75 22.6667V28.3333C29.75 28.7347 29.614 29.0714 29.342 29.3434C29.07 29.6154 28.7338 29.7509 28.3333 29.75H22.6667ZM5.66667 29.75C5.26528 29.75 4.92859 29.614 4.65659 29.342C4.38459 29.07 4.24906 28.7338 4.25 28.3333V22.6667C4.25 22.2653 4.38601 21.9286 4.65801 21.6566C4.93001 21.3846 5.26623 21.2491 5.66667 21.25C6.06806 21.25 6.40475 21.386 6.67675 21.658C6.94875 21.93 7.08428 22.2662 7.08334 22.6667V24.9333L10.5188 21.4979C10.7785 21.2382 11.0972 21.1083 11.475 21.1083C11.8528 21.1083 12.1833 21.25 12.4667 21.5333C12.7264 21.7931 12.8563 22.1236 12.8563 22.525C12.8563 22.9264 12.7264 23.257 12.4667 23.5167L9.06667 26.9167H11.3333C11.7347 26.9167 12.0714 27.0527 12.3434 27.3247C12.6154 27.5967 12.7509 27.9329 12.75 28.3333C12.75 28.7347 12.614 29.0714 12.342 29.3434C12.07 29.6154 11.7338 29.7509 11.3333 29.75H5.66667Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4>عرض</h4>
                </div>
              </Link>
              {/* <div className="flex flex-col items-center">
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
              </div> */}
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Poem;
