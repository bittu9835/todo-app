import type { FC } from 'react';
import{Routes,Route} from 'react-router-dom';
import Home from '../Home/Home';
import Planed from '../Pages/Planned/Planed';
import MyDay from '../Pages/My Day/MyDay';
import Importaint from '../Pages/Importaint/Importaint';
import All from '../Pages/All/All';
import Completed from '../Pages/Completed/Completed';
import Tasks from '../Pages/Tasks/Tasks';
import SignIn from '../../Auth/SignIn/SignIn';
import SignUp from '../../Auth/SignUp/SignUp';

interface RouterProps {}

const Router: FC<RouterProps> = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='*' element={<>Page Note Found!</>}/>
            <Route path='/home' element={<Home/>}>
             <Route index element={<Planed/>}/>  
             <Route path='/home/myDay' element={<MyDay/>}/>  
             <Route path='/home/Importaint' element={<Importaint/>}/>  
             <Route path='/home/planed' element={<Planed/>}/>  
             <Route path='/home/all' element={<All/>}/> 
             <Route path='/home/completed' element={<Completed/>}/> 
             <Route path='/home/Tasks' element={<Tasks/>}/> 
            </Route>
        </Routes>
        </>
    );
}

export default Router;
