import { FC, useContext } from 'react';
import PageHeader from '../../Common/PageHeader/PageHeader';
import Form from '../../Common/Form/Form';
import { BsCalendar4Event } from 'react-icons/bs';
import { IoReorderThreeOutline } from 'react-icons/io5'
import { MyContext } from '../../../Contaxt/Contaxt';
import Data from '../../Common/Data/Data';

interface PlanedProps { }

const Planed: FC<PlanedProps> = () => {
    const { LeftNaveBar }: any = useContext(MyContext)
    return (
        <>
            <div className=' w-full h-[92vh]'>
                <div className='w-full min-h-[24vh] h-auto  flex flex-col items-center'>
                    <PageHeader heading={'Planned'} icon={LeftNaveBar ? < BsCalendar4Event /> : <IoReorderThreeOutline className='text-2xl bg-gray-100' />} />

                    <div className='w-full h-full'>
                        <Form title='Planned'/>
                    </div>
                    <div className='w-full h-[59vh] flex flex-col items-center overflow-y-auto mt-2'>
                        <Data getdata='Planned' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Planed;


