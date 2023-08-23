import React, { useState, createContext, FC, useEffect } from 'react';
import { Todos } from '../Component/Common/TodosInterface/TodosInterface';

interface ContextValue {
    titleForm: boolean;
    setTitleForm: React.Dispatch<React.SetStateAction<boolean>>;
    LeftNaveBar: boolean;
    setLeftNaveBar: React.Dispatch<React.SetStateAction<boolean>>;
    items: string;
    setItems: React.Dispatch<React.SetStateAction<string>>;
    itemTitle: string;
    setItemTitle: React.Dispatch<React.SetStateAction<string>>;
    todoData: Todos[];
    setTodoData: React.Dispatch<React.SetStateAction<Todos[]>>;
    editTodoData: Todos[];
    setEditTodoData: React.Dispatch<React.SetStateAction<Todos[]>>
    complete: Todos[];
    starToggle: boolean
    setStarToggle: React.Dispatch<React.SetStateAction<boolean>>;
    circleToggle: any[]
    setCircleToggle: React.Dispatch<React.SetStateAction<any[]>>;
    setComplete: React.Dispatch<React.SetStateAction<any[]>>;
    editDataToggle: boolean;
    setEditDataToggle: React.Dispatch<React.SetStateAction<boolean>>;
    editForm: boolean
    setEditForm: React.Dispatch<React.SetStateAction<boolean>>;
    handleCheck: Function;
    editdata: Function;
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleLogin:boolean;
    setToggleLogin:React.Dispatch<React.SetStateAction<boolean>>;
    togglePassIcon:boolean
    setTogglePassIcon:React.Dispatch<React.SetStateAction<boolean>>;
    toggleRegister:boolean,
    setToggleRegister:React.Dispatch<React.SetStateAction<boolean>>;
    profileToggle:boolean;
    setProfileToggle:React.Dispatch<React.SetStateAction<boolean>>;
}
interface ContextProps {
    children: React.ReactNode;
}
export const MyContext = createContext<ContextValue | null>(null);
const Context: FC<ContextProps> = ({ children }) => {
    const [todoData, setTodoData] = useState<Todos[]>([]);   //all data
    const [complete, setComplete] = useState<any[]>([]);   //all complete data
    const [circleToggle, setCircleToggle] = useState<any[]>([]);    //on click set complete

    // useEffect(() => {
    //     const func1 = () => {
    //         if (todoData?.length !== 0) {
    //             localStorage.setItem('todoData', JSON.stringify(todoData));
    //         } else {
    //             const existingTodoDataJSON = localStorage.getItem('todoData');
    //             const existingTodoData = existingTodoDataJSON ? JSON.parse(existingTodoDataJSON) : [];
    //             setTodoData([...existingTodoData, ...todoData]);
    //         }
    //     }
    //     const func2 = () => {
    //         if (complete?.length !== 0) {
    //             localStorage.setItem('complete', JSON.stringify(complete));
    //         } else {
    //             const existingCompleteJSON = localStorage.getItem('complete');
    //             const existingCompleteData = existingCompleteJSON ? JSON.parse(existingCompleteJSON) : [];
    //             setComplete([...existingCompleteData, ...complete]);
    //         }
    //     }

        
    //     func1();
    //     func2();
    // }, [todoData, complete]);

    const [editTodoData, setEditTodoData] = useState<Todos[]>([]);   //edit data
    const [titleForm, setTitleForm] = useState(false);        //Tittle input bar hide show
    const [LeftNaveBar, setLeftNaveBar] = useState(true);     //leftnave hide show
    const [items, setItems] = useState('');                   //input item value
    const [itemTitle, setItemTitle] = useState('');           //input heading value
    const [starToggle, setStarToggle] = useState(true);    //set on important
    
    const [editDataToggle, setEditDataToggle] = useState(false);    //on click show hid edit component
    const [editForm, setEditForm] = useState(false);       //edit form toggle
    const [darkMode, setDarkMode] = useState(false);  //dark mode
    const[toggleLogin, setToggleLogin]= useState(false);    //login button hide
    const[toggleRegister, setToggleRegister]= useState(false);    //login button hide
    const [togglePassIcon, setTogglePassIcon] = useState(true);  //password hide
    const [profileToggle, setProfileToggle] = useState(false);  //profile hide sho
    const handleCheck = (item: any) => {         //function that check
        if (!circleToggle.includes(item)) {
            setCircleToggle([...circleToggle, item]);
            setComplete([...complete, item]);
            setTodoData(todoData.filter((todo: any) => todo?.id !== item.id));
        } else {
            setCircleToggle(circleToggle.filter((todo: any) => todo?.id !== item?.id));
            setComplete(complete.filter((todo: any) => todo?.id !== item.id));
            setTodoData([...todoData, item])
        }

    };

    const editdata = (todo: any) => {      //function to open edit component
        setEditDataToggle(true)
        let newEditItem: any = todoData.find((item) => {
            return item.id === todo.id;
        })
        setEditTodoData([newEditItem])
    };

    const contextValue: ContextValue = {
        titleForm,
        setTitleForm,
        LeftNaveBar,
        setLeftNaveBar,
        items,
        setItems,
        itemTitle,
        setItemTitle,
        todoData,
        setTodoData,
        starToggle,
        setStarToggle,
        circleToggle,
        setCircleToggle,
        editDataToggle,
        setEditDataToggle,
        editTodoData,
        setEditTodoData,
        handleCheck,
        editdata,
        complete,
        setComplete,
        editForm,
        setEditForm,
        darkMode,
        setDarkMode,
        toggleLogin,
        setToggleLogin,
        togglePassIcon, 
        setTogglePassIcon,
        toggleRegister,
        setToggleRegister,
        profileToggle,
        setProfileToggle
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default Context;