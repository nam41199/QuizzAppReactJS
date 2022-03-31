import { useContext, createContext } from "react";


const CreateGlobalContext = createContext({
    numberQuestion: 1,
    setNumberQuestion: () => {},
    // filler:'all',
    // setFiller:()=> {},
});

const useGlobalContext = () => useContext(CreateGlobalContext);

export { CreateGlobalContext, useGlobalContext };
