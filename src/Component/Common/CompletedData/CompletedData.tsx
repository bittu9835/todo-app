import { FC, useContext, useState } from 'react'
import { MyContext } from '../../../Contaxt/Contaxt'
import { LiaAngleDownSolid } from 'react-icons/lia'
import { LiaAngleRightSolid } from 'react-icons/lia'
import Data from '../Data/Data'

interface CompletedDataProps {
    myData?:string;
 }

const CompletedData: FC<CompletedDataProps> = ({myData}) => {
    const {complete}:any = useContext(MyContext);
    const [toggleComplet, setToggleComplet] = useState(false);
    return (
        <>
            {complete?.length > 0 ?
                <>
                    <div className='w-[95%] flex items-center gap-4 mt-6' onClick={() => setToggleComplet(!toggleComplet)}>
                        <span>{toggleComplet ? <LiaAngleDownSolid /> : <LiaAngleRightSolid />}</span>
                        <p className='text-md font-semibold'>completed</p>
                        <span>{complete?.length}</span>
                    </div>
                    {toggleComplet ? <div className='w-[95%] h-full flex flex-col'>
                        <Data getdata={'Complete'} myData={myData} />
                    </div>
                        : <hr className='mt-5 w-full' />
                    }

                </>
                : <></>
            }

        </>
    );
}

export default CompletedData;
