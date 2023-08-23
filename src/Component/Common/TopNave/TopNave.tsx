import { useContext, type FC, useState } from 'react';
import { TbGridDots } from 'react-icons/tb'
import { VscSearch } from 'react-icons/vsc'
import { LuSettings } from 'react-icons/lu'
import { BiBell, BiQuestionMark } from 'react-icons/bi'
import { MyContext } from '../../../Contaxt/Contaxt';
import avatar from '../../../Assets/avatar.png'
import LogOut from '../../../Auth/LogOut/LogOut';

interface TopNaveProps { }
//FMPC2904354774
const TopNave: FC<TopNaveProps> = () => {
    const { darkMode,profileToggle,setProfileToggle }: any = useContext(MyContext)
    
    return (
        <>
            <div className={`w-full h-[52px] ${darkMode ? 'bg-[#180a0a]' : 'bg-[#2564cf] '}  text-white font-bold flex justify-between`}>
                <div className='h-full flex items-center'>
                    <span className='px-[14px] py-[18px] hover:bg-[#204b96] cursor-pointer'><TbGridDots className='text-xl font-extrabold' /></span>
                    <span className='px-2 py-[18px] hover:underline cursor-pointer'>To Do</span>
                </div>
                <div className='flex items-center relative max-md:hidden'>
                    <input type="input" className='w-[25rem] bg-gray-300 focus:outline-none h-8 rounded-md cursor-pointer  text-gray-600 font-normal px-10' />
                    <span className='absolute left-2'><VscSearch className='text-[#2564cf]' /></span>
                </div>
                <div className='flex items-center'>
                    <span className='max-md:hidden px-[14px] py-[18px] cursor-pointer hover:bg-[#204b96]'><LuSettings className='text-xl' /></span>
                    <span className='max-md:hidden px-[14px] py-[18px] cursor-pointer hover:bg-[#204b96]'><BiQuestionMark className='text-xl' /></span>
                    <span className='max-md:hidden px-[14px] py-[18px] cursor-pointer hover:bg-[#204b96]'><BiBell className='text-xl' /></span>
                    <span className='px-[10px] py-[18px] cursor-pointer hover:bg-[#204b96]'>
                        <div onClick={()=>setProfileToggle(!profileToggle)} className='w-[35px] h-[35px] font-sm font-normal border border-white flex items-center justify-center rounded-full p-1'><img className='w-full h-full' src={avatar} alt="" />
                        </div></span>
                <LogOut/>

                </div>
            </div>
         
        </>
    );
}

export default TopNave;
