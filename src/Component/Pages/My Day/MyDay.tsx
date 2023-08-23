import { useContext, type FC } from 'react';
import PageHeader from '../../Common/PageHeader/PageHeader';
import Form from '../../Common/Form/Form';
import Data from '../../Common/Data/Data'
import { BiSun } from 'react-icons/bi';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MyContext } from '../../../Contaxt/Contaxt';
import CompletedData from '../../Common/CompletedData/CompletedData';

interface MyDayProps {}

const MyDay: FC<MyDayProps> = () => {
    const { LeftNaveBar}: any = useContext(MyContext)
    return (
        <>
        <div className=' w-full h-[92vh]'>
                <div className='w-full min-h-[24vh] h-auto  flex flex-col items-center'>
                <PageHeader heading={'My Day'} icon={LeftNaveBar ? <  BiSun /> :<IoReorderThreeOutline className='text-2xl bg-gray-100'/>} />

                <div className='w-full h-full'>
                    <Form title='MyDay'/>
                </div>
                <div className='w-full h-[59vh] flex flex-col items-center overflow-y-auto mt-2'>
                    <Data getdata={"MyDay"}/>
                    <CompletedData  myData='MyDay'/>
                </div>
            </div>
            </div>
            </>
    );
}

export default MyDay;
