import { useContext, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5'
import { BiSun } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCalendar4Event } from 'react-icons/bs'
import { IoInfiniteOutline } from 'react-icons/io5'
import { CiCircleCheck } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'
import { MyContext } from '../../../Contaxt/Contaxt';

interface LeftNaveProps { }

const LeftNave: FC<LeftNaveProps> = () => {
    const { darkMode, setLeftNaveBar, todoData, }: any = useContext(MyContext)
    return (
        <>
            <div className={`w-full h-full flex flex-col text-xl ${darkMode && 'bg-[#303a52] text-white'} text-[#222222]`}>
                <div className='cursor-pointer flex items-center gap-5 pl-6 text-2xl mb-4 mt-7'>
                    <IoReorderThreeOutline onClick={() => setLeftNaveBar(false)} />
                </div>

                <NavLink  to={'/home/myDay'} className={`border-l-2 ${darkMode ? 'hover:bg-gray-800 act' : 'hover:bg-gray-100'} `}>
                    <div className='  pl-6 flex justify-between  py-2.5 '>
                        <div className='flex items-center gap-5'>
                            <span><BiSun /></span>
                            <span className='text-base'>My Day</span></div>
                        <span className='pr-5 text-sm'>
                            {todoData?.filter((todo: any) => todo.page === 'MyDay').length > 0 && todoData?.filter((todo: any) => todo.page === 'MyDay').length}
                        </span>
                    </div>
                </NavLink>

                <NavLink to={'/home/Importaint'} className={`border-l-2 ${darkMode && 'hover:bg-gray-800 act'} hover:bg-gray-100 `}>
                    <div className=' pl-6 flex justify-between  py-2.5'>
                        <div className='flex items-center gap-5'>
                            <span><AiOutlineStar /></span>
                            <span className='text-base'>Importaint</span></div>
                        <span className='pr-5 text-sm'>
                        {todoData?.filter((todo: any) => todo.page === 'Importent').length > 0 && todoData?.filter((todo: any) => todo.page === 'Importent').length}
                        </span>
                    </div>
                </NavLink>

                <NavLink to={'/home/planed'} className={`border-l-2 ${darkMode && 'hover:bg-gray-800 act'} hover:bg-gray-100`}>
                    <div className='  pl-6 flex justify-between  py-2.5'>
                        <div className='flex items-center gap-5'>
                            <span><BsCalendar4Event className='text-sm' /></span>
                            <span className='text-base'>Planned</span></div>
                        <span className='pr-5 text-sm'>
                        {todoData?.filter((todo: any) => todo.page === 'Planned').length > 0 && todoData?.filter((todo: any) => todo.page === 'Planned').length}
                        </span></div>
                </NavLink>

                <NavLink to={'/home/all'} className={`border-l-2 ${darkMode && 'hover:bg-gray-800 act'} hover:bg-gray-100`}>
                    <div className=' flex justify-between gap-5 pl-6 text-xl  py-2.5'>
                        <div className='flex items-center gap-5'>
                            <span className='text-xl'><IoInfiniteOutline /></span>
                            <span className='text-base'>All</span></div>
                        <span className='pr-5 text-sm'>{todoData?.length > 0 && todoData?.length}</span>
                    </div>
                </NavLink>
                <NavLink to={'/home/completed'} className={`border-l-2 ${darkMode && 'hover:bg-gray-800 act'} hover:bg-gray-100`}>
                    <div className=' flex justify-between gap-5 pl-6 text-xl  py-2.5'>
                        <div className='flex items-center gap-5'>
                            <span><CiCircleCheck /></span>
                            <span className='text-base'>Completed</span></div>
                    </div>
                </NavLink>

                <NavLink to={'/home/Tasks'} className={`border-l-2 ${darkMode && 'hover:bg-gray-800 act'} hover:bg-gray-100`}>
                    <div className=' flex justify-between gap-5 pl-6 text-xl  py-2.5'>
                        <div className='flex items-center gap-5'>
                            <span><GoHome /></span>
                            <span className='text-base'>Tasks</span></div>
                        <span className='pr-5 text-sm'>
                            {todoData?.length > 0 && todoData?.length}
                        </span>
                    </div>
                </NavLink>
                {/* <hr className='w-full mt-4 flex items-center' /> */}

            </div>
        </>
    );
}

export default LeftNave;
