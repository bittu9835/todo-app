import { useContext, type FC } from 'react';
import PageHeader from '../../Common/PageHeader/PageHeader';
import Form from '../../Common/Form/Form';
import { GoHome } from 'react-icons/go';
import Data from '../../Common/Data/Data';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MyContext } from '../../../Contaxt/Contaxt';
import CompletedData from '../../Common/CompletedData/CompletedData';

interface TasksProps { }

const Tasks: FC<TasksProps> = () => {
    const { LeftNaveBar }: any = useContext(MyContext)
    return (
        <>
            <div className=' w-full h-[92vh]'>
                <div className='w-full min-h-[24vh] h-auto  flex flex-col items-center'>
                    <PageHeader heading={'Tasks'} icon={LeftNaveBar ? <  GoHome /> :<IoReorderThreeOutline className='text-2xl bg-gray-100'/>} />
                    <Form title='Task'/>
                </div>
                <div className='w-full h-[59vh] flex flex-col items-center overflow-y-auto mt-2'>
                    <Data getdata={null}/>
                    <CompletedData />
                </div>
            </div>
        </>
    );
}

export default Tasks;
