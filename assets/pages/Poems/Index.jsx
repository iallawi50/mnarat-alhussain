import "../../css/Poem.css";
import Categories from "./Categories";
import  { PoemProvider } from "../../context/PoemContext";
import Poems from "./Poems";
const Index = () => { 

  return (
    <>
      <PoemProvider>
        <Categories />   
        <Poems /> 
      </PoemProvider>
    </>
  );
};

export default Index;
