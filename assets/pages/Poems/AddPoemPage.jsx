import { useEffect, useState } from "react";
 
import usePoemContext, { PoemProvider } from "../../context/PoemContext";

const AddPoemPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [type_phase, setType] = useState("");
  const { create, errors, status, categories } = usePoemContext();

  const [type_poem, setType_poem] = useState("");

  const toggle = (category) => {


    if (tags.includes(category)) {
      // إزالة الرقم إذا كان موجودًا
      const updatedNumbers = tags.filter((n) => n !== category);
      setTags(updatedNumbers);
    } else {
      // إضافة الرقم إذا لم يكن موجودًا
      const updatedNumbers = [...tags, category];
      setTags(updatedNumbers);

      console.log(tags)
    }





    //  console.log(category) 
    //     tags.map((tag, id) => {
    //       if(tag === category) {
    //         console.log(tags)
    //         // console.log(tags);
            
    //     } else {
    //         console.log(false)
    //       } 
        // }
        // );
  };
 
  const handleCreatePoem = async (event) => {
    event.preventDefault();
    await create(title, body, type_phase, type_poem, tags);
  };
  useEffect(() => {
    if (status == 201) {
      setTitle("");
      setBody("");
      setType("");
    }
  }, [status]);

  return (
    <>
      <form
        onSubmit={handleCreatePoem}
        className="max-w-7xl min-h-[calc(100vh-128px)] mx-auto pt-10"
      >
        <div className="grid grid-cols-1   gap-8 mx-3">
          {/* title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-white text-lg mb-2">
              عنوان القصيدة :
            </label>
            <input
              id="title"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title &&
              errors.title.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>
          {/* type */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-lg mb-2">
              الطور :
            </label>
            <input
              id="name"
              className="bg-transparent p-3 border-[1px] rounded-md mb-2 text-white"
              type="text"
              placeholder="اساسية , نزلة , ميمر ..."
              value={type_phase}
              onChange={(e) => setType(e.target.value)}
            />
            {errors.type_phase &&
              errors.type_phase.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col">
            <div className="group">
              <input
                id="azaa"
                name="type_poem"
                className="bg-transparent p-3 border-[1px] rounded-md mb-2 ml-2 text-white"
                type="radio"
                onClick={() => setType_poem("2")}
              />
              <label
                htmlFor="azaa"
                className="text-white text-lg mb-2"
                onClick={() => setType_poem("2")}
              >
                عزاء
              </label>
            </div>
            <div className="group">
              <input
                id="pharah"
                name="type_poem"
                className="bg-transparent p-3 border-[1px] rounded-md mb-2 ml-2 text-white"
                type="radio"
                placeholder="اساسية , نزلة , ميمر ..."
                value="فرح"
                onClick={() => setType_poem("1")}
              />
              <label
                htmlFor="pharah"
                className="text-white text-lg mb-2"
                onClick={() => setType_poem("1")}
              >
                فرح
              </label>
            </div>
            {errors.type_poem &&
              errors.type_poem.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="name" className="text-white text-lg mb-2">
              القصيدة كاملة :
            </label>
            <textarea
              id="name"
              className="bg-transparent p-3 border-[1px] h-64 rounded-md mb-2 text-white"
              type="text"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            {errors.body &&
              errors.body.map((el, i) => {
                return (
                  <p key={i} className="text-red-500">
                    {el}
                  </p>
                );
              })}
          </div>
          <div className="flex flex-col items-start">
            <ul className="flex flex-row flex-wrap gap-2 mb-7">
           
            {categories.map((el) => {
              return (
                <li onClick={() => {toggle(el.id)}}
                  class={`p-1 font-bold text-sm 
              
              ${
                tags.includes(el.id)
                  ? "text-white bg-green-600"
                  : "text-white border-white-900 border-2"
              }
              `}
                >
                  {el.title}
                </li>
              );
        })}
        </ul>
          </div>
        </div>

        {/* Account Type */}
        <div className="flex flex-col sm:items-center  mx-3 my-10  ">
          <button className="btn-submit text-white px-2 sm:text-2xl sm:px-10 py-1 rounded-3xl mb-10	transition">
            نشر
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPoemPage;
