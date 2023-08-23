import { useContext, type FC,  } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { BsLayoutSidebar } from 'react-icons/bs'
import { MyContext } from '../../../Contaxt/Contaxt';

interface PageHeaderProps {
    heading:string;
    icon:any;
}

const PageHeader: FC<PageHeaderProps> = (props) => {
    const { setLeftNaveBar ,darkMode}: any = useContext(MyContext)

    let date=new Date();
    let day=date.getDate();
    let dayName = date.toLocaleString('default', { weekday: 'long' });
    let monthName = date.toLocaleString('default', { month: 'long' });
    return (
        <>
            <div className='w-[95%] h-auto flex  items-center justify-between py-8 font-semibold text-xl text-[#d25359]'>
                <div className=''>
                    <div className='flex items-center gap-2'>
                    <span onClick={()=>setLeftNaveBar(true)} className={`cursor-pointer ${props.heading === 'Planned' && 'text-sm'}`}>
                        {props.icon}
                        </span>
                    <span>{props.heading}</span>
                    <span className='ml-1'><HiOutlineDotsHorizontal className='cursor-pointer text-gray-600' /></span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-white' : 'text-black'}  font-normal`}>{dayName}, {monthName} {day}</p>
                </div>
                <div className='flex items-center gap-8 text-sm font-normal'>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-white py-2 px-3 rounded-md'>
                        <span><RiArrowUpDownLine /></span>
                        <span>Short</span>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-white py-2 px-3 rounded-md'>
                        <span><BsLayoutSidebar /></span>
                        <span>Group</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageHeader;
