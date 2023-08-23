import { FC, useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { MyContext } from '../../../Contaxt/Contaxt'
import { BsCheckCircle, BsCircle } from 'react-icons/bs'

interface DataProps { 
    getdata?:string |null ;
    myData?:any;
}

const Data: FC<DataProps> = ({getdata}) => {
    const {darkMode , starToggle, setStarToggle ,handleCheck, circleToggle,editdata,todoData,complete,myData}: any = useContext(MyContext)
    return (
        <>
            {getdata === null 
            ?
            todoData?.map((todo: any) => (
                <div key={todo.id} className='w-[95%]  flex flex-col items-center mt-2 '>
                    <div className={`w-full min-h-[56px] h-auto py-2 rounded-md ${darkMode ? 'bg-[#030608] text-white hover:bg-gray-800' : 'bg-white hover:bg-gray-100 active:bg-[#eff6fc]'} flex items-center justify-between px-[20px]  cursor-pointer shadow-md`}>
                    <span onClick={()=>handleCheck(todo)}>{circleToggle.includes(todo) ? <BsCheckCircle className='text-blue-600'/> : <BsCircle className='text-blue-600'/>}</span>
                        <div  onClick={(e)=>editdata(todo)} className={`w-[80%] px-1 ${circleToggle.includes(todo) ? 'line-through':''}`}>
                            <p className='text-lg font-semibold'>{todo?.title}</p>
                            <p>{todo?.item}</p>
                        </div>
                        {starToggle === true ? <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiOutlineStar onClick={() => setStarToggle(false)} className='cursor-pointer' /></span>
                            : <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiFillStar onClick={() => setStarToggle(true)} className='cursor-pointer' /></span>}
                    </div>
                </div>
            ))
            : myData === 'myData' ?
            complete?.map((todo: any) => (
                <div key={todo.id} className='w-[95%]  flex flex-col items-center mt-2 '>
                    <div className={`w-full min-h-[56px] h-auto py-2 rounded-md ${darkMode ? 'bg-[#030608] text-white hover:bg-gray-800' : 'bg-white hover:bg-gray-100 active:bg-[#eff6fc]'} flex items-center justify-between px-[20px]  cursor-pointer shadow-md`}>
                    <span onClick={()=>handleCheck(todo)}>{circleToggle.includes(todo) ? <BsCheckCircle className='text-blue-600'/> : <BsCircle className='text-blue-600'/>}</span>
                        <div  onClick={(e)=>editdata(todo)} className={`w-[80%] px-1 ${circleToggle.includes(todo) ? 'line-through':''}`}>
                            <p className='text-lg font-semibold'>{todo?.title}</p>
                            <p>{todo?.item}</p>
                        </div>
                        {starToggle === true ? <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiOutlineStar onClick={() => setStarToggle(false)} className='cursor-pointer' /></span>
                            : <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiFillStar onClick={() => setStarToggle(true)} className='cursor-pointer' /></span>}
                    </div>
                </div>
            ))
        : getdata === 'Complete' ?
        complete?.map((todo: any) => (
            <div key={todo.id} className='w-[95%]  flex flex-col items-center mt-2 '>
                <div className={`w-full min-h-[56px] h-auto py-2 rounded-md ${darkMode ? 'bg-[#030608] text-white hover:bg-gray-800' : 'bg-white hover:bg-gray-100 active:bg-[#eff6fc]'} flex items-center justify-between px-[20px]  cursor-pointer shadow-md`}>
                <span onClick={()=>handleCheck(todo)}>{circleToggle.includes(todo) ? <BsCheckCircle className='text-blue-600'/> : <BsCircle className='text-blue-600'/>}</span>
                    <div  onClick={(e)=>editdata(todo)} className={`w-[80%] px-1 ${circleToggle.includes(todo) ? 'line-through':''}`}>
                        <p className='text-lg font-semibold'>{todo?.title}</p>
                        <p>{todo?.item}</p>
                    </div>
                    {starToggle === true ? <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiOutlineStar onClick={() => setStarToggle(false)} className='cursor-pointer' /></span>
                        : <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiFillStar onClick={() => setStarToggle(true)} className='cursor-pointer' /></span>}
                </div>
            </div>
        ))
        :
        todoData?.filter((todo:any)=> todo?.page === getdata)?.map((todo: any) => (
            <div key={todo.id} className='w-[95%]  flex flex-col items-center mt-2 '>
                <div className={`w-full min-h-[56px] h-auto py-2 rounded-md ${darkMode ? 'bg-[#030608] text-white hover:bg-gray-800' : 'bg-white hover:bg-gray-100 active:bg-[#eff6fc]'} flex items-center justify-between px-[20px]  cursor-pointer shadow-md`}>
                <span onClick={()=>handleCheck(todo)}>{circleToggle.includes(todo) ? <BsCheckCircle className='text-blue-600'/> : <BsCircle className='text-blue-600'/>}</span>
                    <div  onClick={(e)=>editdata(todo)} className={`w-[80%] px-1 ${circleToggle.includes(todo) ? 'line-through':''}`}>
                        <p className='text-lg font-semibold'>{todo?.title}</p>
                        <p>{todo?.item}</p>
                    </div>
                    {starToggle === true ? <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiOutlineStar onClick={() => setStarToggle(false)} className='cursor-pointer' /></span>
                        : <span className='flex justify-end w-[10%] text-xl  text-blue-600'><AiFillStar onClick={() => setStarToggle(true)} className='cursor-pointer' /></span>}
                </div>
            </div>
        ))}
        </>
    );
}

export default Data;


