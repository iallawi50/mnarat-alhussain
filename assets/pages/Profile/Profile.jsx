import { useEffect, useState } from "react";
import useAuthContext from "../../context/AuthContext";
import defaultAvatar from "../../imgs/default.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Profile = () => {
  const { username } = useParams();
  const [section, setSection] = useState(0);
  const { user, getUser, getProfile, profile } = useAuthContext(); 
  useEffect(() => {
     
      getUser();
        getProfile(username);

      
  }, [username]);

  const comingSoon = () => {
Swal.fire({
  icon: "error",
  title: "هذه الميزة غير مفعلة حالياً",
  text: "نحن نعمل لتفعيل هذه الميزة",
  footer: '<a href="https://wa.me/966565595718 " class="text-bold">يمكنك التواصل معنا من هنا</a>',
  confirmButtonText: "حسناً",
  confirmButtonColor: "#407d57",
});
  }
              
  return (
    <>
      {profile && (
        <>
          <div className="max-w-7xl mx-auto px-4 my-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <div className="avatar-border relative ml-3">
                  <div className="img-holder relative rounded-full w-16 h-16 overflow-hidden flex justify-center items-center">
                    <img src={defaultAvatar} alt={"poem.user.name"} />
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h3 className="font-bold text-[#D0C8A6]"> {profile.name} </h3>
                  <h4 className="font-bold text-[13px] text-[#AEA88A]">
                    {" "}
                    {profile.username}
                    {"@"}
                  </h4>
                </div>
              </div>
              <h3 className="text-[#D0C8A6] text-bold rounded-md border-2 p-2 border-[#D0C8A6]">
                {profile.type ? "شاعر" : "رادود"}
              </h3>
            </div>
            <div className="flex justify-around text-white  text-2xl text-center mt-10">
              <div
                onClick={() => {
                  setSection(0);
                }}
                className={
                  section == 0
                    ? "border-[#4A7058] border-b-2 text-green-200 px-10 pb-3"
                    : "px-10 pb-3 cursor-pointer"
                }
              >
                {profile.type ? "اشعاري" : "الاعدادات"}
              </div>

              <div
                onClick={() => {
                  setSection(1);
                }}
                className={
                  section == 1
                    ? "border-[#4A7058] border-b-2 text-green-200 px-10 pb-3"
                    : "px-10 pb-3 cursor-pointer"
                }
              >
     
              </div>
            </div>

            {/* Poems */}

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 px-5 my-10">
              {profile.poems &&
                profile.poems.map((el, i) => {
                 return (
                   <div className="bg-white min-h-[450px] rounded-2xl p-5">
                     <header className="flex justify-between items-center">
                       <Link to={`/p/${el.user.username}`}>
                         <div className="flex items-center justify-between items-center">
                           <div className="avatar-border relative ml-3">
                             <div className="img-holder relative rounded-full w-16 h-16 overflow-hidden flex justify-center items-center">
                               <img src={defaultAvatar} alt={el.user.name} />
                             </div>
                           </div>
                           <h3 className="font-bold">{el.user.name}</h3>
                         </div>
                       </Link>

                       <span className="poem-type items-center rounded-2xl px-2 text-[15px]">
                         {el.type_phase}
                       </span>
                     </header>

                     <article className="pre-line font-bold text-xl text-center my-3">
                       <h1 className="text-green-700">{el.title}</h1>
                       {el.body}
                     </article>

                     <footer className="flex flex-col">
                       <ul className="flex flex-row flex-wrap gap-2 mb-7">
                         {el.categories &&
                           el.categories.map((el) => {
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
                         <Link to={`/poem/s/${el.slug}`}>
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
                         {user && user.id == el.user_id && (
                           <>
                             <div
                               className="flex flex-col items-center"
                               onClick={comingSoon}
                             >
                               <div className="btn-bg-light-poem p-3 opacity-[30%] w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
                                 <svg
                                   width="34"
                                   height="34"
                                   viewBox="0 0 34 34"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                                 >
                                   <path
                                     fill-rule="evenodd"
                                     clip-rule="evenodd"
                                     d="M33.7785 5.66811C33.9486 5.92634 34.0244 6.23537 33.9931 6.54302C33.9618 6.85067 33.8253 7.13808 33.6066 7.35673L17.1464 23.8167C16.978 23.985 16.7679 24.1055 16.5377 24.1658L9.68179 25.9565C9.45516 26.0156 9.21702 26.0145 8.991 25.9531C8.76497 25.8917 8.55893 25.7723 8.39332 25.6066C8.22771 25.441 8.1083 25.235 8.04692 25.0089C7.98555 24.7829 7.98436 24.5447 8.04347 24.3181L9.83398 17.4633C9.88625 17.2576 9.98485 17.0665 10.1223 16.9046L26.6433 0.392768C26.8951 0.141266 27.2364 0 27.5923 0C27.9481 0 28.2895 0.141266 28.5412 0.392768L33.6066 5.45681C33.6709 5.52129 33.7284 5.59208 33.7785 5.66811ZM30.7579 6.40587L27.5923 3.24174L12.3407 18.4948L11.2216 22.7799L15.5063 21.6607L30.7579 6.40587Z"
                                     fill="#D0C8A6"
                                   />
                                   <path
                                     d="M30.7578 26.5029C31.2499 22.4273 31.4071 18.3203 31.2277 14.2206C31.2238 14.1241 31.2405 14.0277 31.2768 13.9377C31.313 13.8476 31.368 13.7658 31.4384 13.6973L33.2101 11.9805C33.2585 11.9334 33.3199 11.9007 33.387 11.8866C33.4541 11.8724 33.524 11.8773 33.5883 11.9007C33.6525 11.9241 33.7085 11.965 33.7493 12.0185C33.7902 12.072 33.8143 12.1357 33.8186 12.2021C34.1521 17.0718 34.0255 21.9608 33.4405 26.8082C33.0156 30.3358 30.0916 33.1011 26.4672 33.4936C20.1751 34.1688 13.8253 34.1688 7.53319 33.4936C3.91059 33.1011 0.984782 30.3358 0.559865 26.8082C-0.186622 20.6242 -0.186622 14.3769 0.559865 8.19294C0.984782 4.66529 3.90879 1.90005 7.53319 1.5075C12.3088 0.994376 17.1203 0.870072 21.9174 1.1359C21.986 1.14067 22.0518 1.16441 22.107 1.20431C22.1621 1.2442 22.2043 1.29857 22.2286 1.36099C22.2528 1.42341 22.2581 1.49125 22.2438 1.55648C22.2295 1.62172 22.1962 1.68161 22.1478 1.72907L20.3599 3.45975C20.2899 3.52735 20.2063 3.58034 20.1144 3.61545C20.0224 3.65055 19.924 3.66703 19.8252 3.66387C15.8222 3.53202 11.8147 3.6807 7.83387 4.10875C6.67064 4.23351 5.58478 4.73459 4.7517 5.53107C3.91861 6.32754 3.38696 7.37289 3.2426 8.49825C2.52069 14.4794 2.52069 20.5217 3.2426 26.5029C3.38696 27.6282 3.91861 28.6736 4.7517 29.4701C5.58478 30.2665 6.67064 30.7676 7.83387 30.8924C13.8745 31.5466 20.1259 31.5466 26.1683 30.8924C27.3315 30.7676 28.4174 30.2665 29.2505 29.4701C30.0836 28.6736 30.6134 27.6282 30.7578 26.5029Z"
                                     fill="white"
                                   />
                                 </svg>
                               </div>
                               <h4>تعديل</h4>
                             </div>
                             <div
                               className="flex flex-col items-center"
                               onClick={comingSoon}
                             >
                               <div className="btn-bg-light-poem opacity-[30%] red p-3 w-14 h-14 mb-2 flex justify-center items-center rounded-full btn-shadow transition cursor-pointer">
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
                               <h4>حذف</h4>
                             </div>
                           </>
                         )}
                       </div>
                     </footer>
                   </div>
                 );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
