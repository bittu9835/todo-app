import { FC, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import TopNave from '../Common/TopNave/TopNave';
import LeftNave from '../Common/LeftNave/LeftNave';
import Edit from '../Common/Edit/Edit';
import { MyContext } from '../../Contaxt/Contaxt';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    const { LeftNaveBar, darkMode, editDataToggle}: any = useContext(MyContext);
    const Navigate = useNavigate();
    let login = localStorage.getItem('token');

    // useEffect(() => {
    //     if (!login) {
    //         Navigate('/')
    //     }
    // }, [login]);

    return (
        <>
            <div className='w-screen h-screen bg-gray-400 transition-all duration-300'>
                <div className='w-full h-auto'>
                    <TopNave />
                </div>

                <div className='h-[92vh] flex w-full relative'>
                    
                    
                    {LeftNaveBar === true ?
                        <div className='min-w-[300px] w-[300px] max-[990px]:max-w-[240px] max-[600px]:min-w-full h-full  bg-[#fff]'>
                            <LeftNave />
                        </div>
                        : null
                    }

                    <div className={`w-full  h-full ${darkMode ? 'bg-[#1e1e2e] text-white shadow-gray-800' : 'bg-[#faf9f8] shadow-gray-300 '}  shadow-inner overflow-y-auto`}>
                        <Outlet />

                    </div>
                            {editDataToggle && <div className='min-w-[360px] w-[360px]  max-[705px]:w-full max-[705px]:absolute max-[705px]:z-20 h-full bg-[#faf9f8]'>
                                <Edit />
                            </div>}
                </div>
            </div>
        </>
    );
}

export default Home;

