import { useContext, createContext } from "react";


const CreateGlobalContext = createContext({
    todosList: [],
    setTodosList: () => {},
    filler:'all',
    setFiller:()=> {},
});

const useGlobalContext = () => useContext(CreateGlobalContext);

export { CreateGlobalContext, useGlobalContext };
