import { useContext, type FC } from 'react';

import PageHeader from '../../Common/PageHeader/PageHeader';
import { IoInfiniteOutline, IoReorderThreeOutline } from 'react-icons/io5'
// import { CiCircleCheck } from 'react-icons/ci';
import { MyContext } from '../../../Contaxt/Contaxt';
import Data from '../../Common/Data/Data';
import Form from '../../Common/Form/Form';


interface AllProps { }

const All: FC<AllProps> = () => {
    const { LeftNaveBar}: any = useContext(MyContext)
    return (
        <>
            <div className=' w-full h-[92vh]'>
                <div className='w-full min-h-[24vh] h-auto  flex flex-col items-center'>
                    <PageHeader heading={'All'} icon={LeftNaveBar ? < IoInfiniteOutline /> : <IoReorderThreeOutline className='text-2xl bg-gray-100' />} />
                    <Form title='All'/>
                </div>
                <div className='w-full h-[59vh] flex flex-col items-center overflow-y-auto mt-2'>
                    <Data getdata={null}/>
                </div>

            </div>

        </>
    );
}

export default All;
