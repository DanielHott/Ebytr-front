import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();


export default function MyContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    return <MyContext.Provider value={{ 
        tasks,
        setTasks,
    }}>{ children }</MyContext.Provider>
}

export function useTasks() {
    const context = useContext(MyContext)
    const { tasks, setTasks } = context;
    return { tasks, setTasks };
}