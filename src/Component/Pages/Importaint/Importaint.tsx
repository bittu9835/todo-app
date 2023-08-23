import { useContext, type FC } from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import PageHeader from '../../Common/PageHeader/PageHeader';
import Form from '../../Common/Form/Form';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { MyContext } from '../../../Contaxt/Contaxt';
import Data from '../../Common/Data/Data';

interface ImportaintProps { }

const Importaint: FC<ImportaintProps> = () => {
    const { LeftNaveBar }: any = useContext(MyContext)
    return (
        <>
            <div className=' w-full h-[92vh]'>
                <div className='w-full min-h-[24vh] h-auto  flex flex-col items-center'>
                    <PageHeader heading={'Importaint'} icon={LeftNaveBar ? < AiOutlineStar /> : <IoReorderThreeOutline className='text-2xl bg-gray-100' />} />

                    <div className='w-full h-full'>
                        <Form title='Importent'/>
                    </div>
                    <div className='w-full h-[59vh] flex flex-col items-center overflow-y-auto mt-2'>
                        <Data getdata={"Importent"} />
                    </div>
                </div>
                </div>
            </>
            );
}
            export default Importaint;
