import { useEffect } from "react";
import Poem from "../../Components/Poem";
import usePoemContext from "../../context/PoemContext";

const Poems = () => {
  const { poems, getAllPoems } = usePoemContext();

  useEffect(() => {
    getAllPoems();
 
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 px-5 my-10">
        {poems &&
          poems.map((el, i) => {
            return <Poem key={i} data={el} />;
          })}
      </div>
    </>
  );
};

export default Poems;
