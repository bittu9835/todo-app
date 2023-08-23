import { useContext, type FC, useState } from 'react';
import { HiPlus } from 'react-icons/hi2'
import { CiBellOn } from 'react-icons/ci'
import { PiRepeatLight } from 'react-icons/pi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { AiOutlineTag } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsCircle, BsCheckCircle } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCalendar4Event } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { GoSidebarCollapse } from 'react-icons/go'
import { MyContext } from '../../../Contaxt/Contaxt';
import Form from '../Form/Form';




interface EditProps { }

const Edit: FC<EditProps> = () => {
    const {darkMode, todoData, starToggle, setStarToggle, setEditDataToggle, editTodoData,handleCheck, circleToggle, editForm, setEditForm }: any = useContext(MyContext)
    const [editData,setEditData] = useState([]);
    
    const handleEdit = (item:any) => {
        setEditForm(true)
        setEditData(item)
    }

    const handleDelete=(item:any,i:number)=>{
        const index = todoData.findIndex((items:any) => items.id === item.id);
        todoData.splice(index,1);
        setEditDataToggle(false);
    }
    return (
        <>
            <div className={`w-full h-full flex flex-col ${darkMode ? 'bg-[#303a52] text-white' : 'bg-white text-black'} px-6 pt-5`}>
                {editTodoData.map((item: any, i:number) => (

                    <div key={item.id} className='overflow-y-auto'><div className={`p-3.5 ${darkMode ? 'bg-[#222a3b] text-white' : 'bg-white text-black hover:bg-gray-100'} rounded-t-md  flex justify-between items-center`}>
                        {editForm ? '':
                        <span onClick={() => handleCheck(item)} className='w-[10%] flex justify-start text-[#2564cf] cursor-pointer'>{circleToggle.includes(item) ? <BsCheckCircle /> : <BsCircle />}</span>}
                        <span onClick={() => handleEdit(item)} className={`${editForm ?'w-[100%]' : 'w-[75%]' } flex flex-col ${circleToggle.includes(item) ? 'line-through' : ''}`}>
                            {editForm ? <Form editData={editData} /> : <>
                                <span className='font-semibold text-lg'>{item.title}</span>
                                <span className='text-base'>{item.item}</span>
                            </>}
                        </span>
                        {editForm ? '':<>
                        {starToggle ? <span onClick={() => setStarToggle(false)} className='w-[10%] flex justify-end text-xl text-[#2564cf]'><AiOutlineStar className='cursor-pointer' /></span>
                            :
                            <span onClick={() => setStarToggle(true)} className='w-[10%] flex justify-end text-xl text-[#2564cf]'><AiFillStar className='cursor-pointer' /></span>}</>}
                    </div>
                        <div className='w-full h-[72vh]  flex gap-2 flex-col overflow-y-auto'>
                            <div className='  flex flex-col  rounded-b-md'>
                                <div className={` p-3.5 ${darkMode ? 'bg-[#222a3b] text-white' : 'hover:bg-gray-100 bg-[#ffff]'} flex justify-between`}>
                                    <span className='w-[10%] text-2xl text-[#2564cf]'><HiPlus className='cursor-pointer' /></span>
                                    <span className='w-[90%] text-sm text-[#2564cf] pl-2'>Add step</span>
                                </div>
                            </div>

                            <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                <span className='w-[10%] text-xl '><BiSun /></span>
                                <span className='w-[90%] text-sm pl-2 '>Add to My Day</span>
                            </div>

                            <div className='flex flex-col rounded-md'>

                                <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                    <span className='w-[10%] text-xl'><CiBellOn /></span>
                                    <span className='w-[90%] text-sm pl-2'>Remind me</span>
                                </div>

                                <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                    <span className='w-[10%] text-sm'><BsCalendar4Event /></span>
                                    <span className='w-[90%] text-sm pl-2'>Add due date</span>
                                </div>

                                <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                    <span className='w-[10%] text-xl'><PiRepeatLight /></span>
                                    <span className='w-[90%] text-sm pl-2'>Repeat</span>
                                </div>
                            </div>

                            <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                <span className='w-[10%] text-xl'><AiOutlineTag /></span>
                                <span className='w-[90%] text-sm pl-2'>Pick a category</span>
                            </div>

                            <div className={`flex justify-center ${darkMode ? 'bg-[#222a3b] text-white hover:bg-gray-800' : 'bg-[#ffff] hover:bg-gray-100 hover:text-gray-900 text-gray-600'}  rounded-md p-3.5  `}>
                                <span className='w-[10%] text-xl'><AiOutlinePaperClip /></span>
                                <span className='w-[90%] text-sm pl-2'>Add file</span>
                            </div>

                            <div className='flex justify-between '>
                                <textarea name="text" id="text" placeholder='Add note' className={`row-span-4 resize-none text-sm  rounded-md  p-3.5  w-full h-full border ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} border-white hover:border hover:border-gray-300 focus:outline-none`}></textarea>
                            </div>
                        </div>
                        <div className='w-full h-[9vh] border-t flex justify-between items-center px-1 '>
                            <div><GoSidebarCollapse 
                            onClick={() =>{ 
                                setEditDataToggle(false)
                                setEditForm(false);
                            
                                  }} className='cursor-pointer' /></div>
                                 
                            <div className='text-xs'>{item.createdas.toLocaleString()}</div>
                            <div><RiDeleteBinLine onClick={()=>handleDelete(item,i)} className='text-lg cursor-pointer' /></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Edit;

