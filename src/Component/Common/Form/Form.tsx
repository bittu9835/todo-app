import { type FC, useContext, useRef } from 'react';
import { BsCircle } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { MyContext } from '../../../Contaxt/Contaxt';

interface FormProps {
    setdata?: React.Dispatch<React.SetStateAction<{ id: number; item: string; title: string; createdas: Date; isDelete: boolean }[]>>;
    data?: { id: number; item: string; title: string; createdas: Date; isDelete: boolean }[];
    title?: string
    editData?: any

}

const Form: FC<FormProps> = ({ setdata, data, title, editData }) => {
    const { darkMode, items, itemTitle, todoData, setTodoData,setEditTodoData, titleForm, setTitleForm, setItems, setItemTitle, editForm, setEditForm }: any = useContext(MyContext);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let datas = {
            page: title,
            id: Date.now(),
            item: items,
            title: itemTitle,
          
        };
        if (editForm) {
            setTodoData(
                todoData.map((ittem: any) => {
                    datas['page'] = ittem?.page;
                    if (ittem.id === editData.id) {
                        return { ...datas }
                    }
                    return ittem;
                })
            )
            setEditTodoData(todoData.map((ittem: any) => {
                datas['page'] = ittem?.page;
                if (ittem.id === editData.id) {
                    return { ...datas }
                }
                return ittem;
            }))
        } else {


            if (items || itemTitle) {
                setTodoData([...todoData, datas])
            }
        }
        setItemTitle('');
        setItems('');
        formRef?.current?.reset();
        setTitleForm(false);
        setEditForm(false);
// console.log(todoData)
    }
    return (
        <>
            <div className={`w-full ${editForm ? '' : 'mb-4'} flex  flex-col items-center  gap-5`}>
                <div className='w-[95%] rounded-xl  shadow-md bg-[#fff]  relative'>
                    <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className='w-full h-full rounded-xl'>
                        {titleForm === true ? <div className='w-full h-10'>
                            <input
                                defaultValue={editData ? editData?.title : ''}
                                onChange={(e) => setItemTitle(e.target.value)}
                                onBlur={() => setTitleForm(false)} type='text' placeholder='Title' className={`w-full h-full rounded-t-md focus:outline-none ${editForm ? 'pl-1 pr-14' : 'px-14'} placeholder:text-md ${darkMode && 'bg-[#061120d5] text-white placeholder:text-white'} placeholder:text-[#4444] text-md font-semibold text-[#222222]`}>
                            </input>
                        </div>
                            : null}
                        <div className='w-full h-14' onClick={() => setTitleForm(true)}>
                            <input
                                defaultValue={editData ? editData?.item : ''}
                                onChange={(e) => setItems(e.target.value)}
                                type='text' placeholder='Add a task' className={`w-full h-full rounded-md focus:outline-none ${editForm ? 'pl-1 pr-14' : 'px-14'} pr-5 placeholder:text-sm placeholder:text-[#222222] ${darkMode && 'bg-[#061120d5] text-white placeholder:text-white'} text-sm text-[#333333]`}>
                            </input>
                        </div>
                        <button type='submit' className='absolute top-[19px] right-[20px] cursor-pointer'><AiOutlineSend className='text-xl text-green-600 cursor-pointer' /></button>
                        {editForm ? '' : <span className='absolute top-[19px] left-[25px] cursor-pointer'><BsCircle /></span>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;

