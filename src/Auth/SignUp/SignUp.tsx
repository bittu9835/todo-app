import { useContext, type FC } from 'react';
import logo from '../../Assets/todo img.jpg'
import { MyContext } from '../../Contaxt/Contaxt';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import google from '../../Assets/google.png'
import github from '../../Assets/github.png'
import sos from '../../Assets/SOS.png';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'



interface SignUpProps { };
interface IFormValue {
    email: string,
    password: string,
    fname: string,
    lname: string,
    gender: string
};

const SignUp: FC<SignUpProps> = () => {
    const navigate = useNavigate();
    const { toggleRegister, setToggleRegister, togglePassIcon, setTogglePassIcon }: any = useContext(MyContext);
    const url = `http://localhost:4000/api/auth/register`

    const initialValues: IFormValue = {
        email: '',
        password: '',
        fname: '',
        lname: '',
        gender: ''
    };

    const validationSchema = Yup.object().shape({
        fname: Yup.string().required('Name is required'),
        lname: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol'),
        gender: Yup.string()
            .required('Gender is required')
            .oneOf(['male', 'female', 'other'], 'Invalid gender'),
    });

    const handleLogin = (values: IFormValue) => {
        axios.post(url, values)
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((error) => {
                console.log("Error occurred:", error);
            });

    };
    return (
        <>

            <div className='w-screen h-screen bg-[#9c27b0] relative flex justify-center items-center p-10'>
                <div className='w-[80%] max-w-[70rem] max-sm:w-full max-sm:h-full max-[900px]:flex-col absolute rounded-md bg-white shado flex overflow-y-auto'>
                    <div className='absolute right-2'>
                        <span className='text-black text-sm'>Already Have An Account ?</span>
                        <Link to={'/'} className='text-blue-600 cursor-pointer'> SignIn</Link>
                    </div>
                    <div className=' w-[40%] max-[900px]:w-full px-16 max-sm:py-5 py-10  max-sm:h-auto border-r'><img className='w-full h-full' src={logo} alt="" /></div>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleLogin}
                        validationSchema={validationSchema}
                    >


                        <Form className=' w-[60%] max-[900px]:w-full p-8 flex  flex-col items-center  max-sm:h-auto'>
                            <div className='text-gray-600 text-3xl font-bold mb-5'>Register</div>

                            <div className='w-full justify-center text-gray-700 max-sm:flex-col flex mb-5 gap-10'>
                                <div className='w-full flex flex-col gap-8 '>
                                    <div className='w-full'>
                                        <Field className='w-full border-b outline-none font-medium pb-2' type="text" placeholder='First Name' name='fname' id='fname' />
                                        <span className="text-red-500 text-sm"><ErrorMessage name="fname" /></span>
                                    </div>
                                    <div className='w-full relative'>
                                        <Field className='w-full border-b outline-none font-medium pb-2' type="text" placeholder='Last Name' name='lname' id='lname' />
                                    </div>
                                </div>

                                <div className='w-full flex flex-col gap-8 '>
                                    <div className='w-full'>
                                        <Field className='w-full border-b outline-none font-medium pb-2' type="email" placeholder='Email' name='email' id='email' />
                                        <span className="text-red-500 text-sm"><ErrorMessage name="email" /></span>
                                    </div>
                                    <div className='w-full relative'>
                                        <Field className='w-full border-b outline-none font-medium pb-2' type={`${togglePassIcon ? 'password' : 'text'}`} name='password' id='password' placeholder='Password' />
                                        <span onClick={() => setTogglePassIcon(!togglePassIcon)} className='absolute text-xl text-gray-600 right-2 cursor-pointer'>{togglePassIcon ? <FaEye /> : <FaEyeSlash />}</span>
                                        <span className="text-red-500 text-sm"><ErrorMessage name="password" /></span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full text-gray-700 flex flex-col gap-2'>
                                <div className='mb-7 w-full'>
                                    <label htmlFor="gender" className="font-medium block">
                                        Gender
                                    </label>

                                    <Field
                                        className="py-2 text-gray-700 font-medium border-b outline-none w-full"
                                        id="gender"
                                        name="gender"
                                        as="select">

                                        <option value="chooche your gender">Chooche your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <span className="text-red-500 text-sm"><ErrorMessage name="gender" /></span>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex items-center gap-5'>
                                        <span><input className='cursor-pointer' type="checkbox" onClick={() => setToggleRegister(!toggleRegister)} name="check" id="check" /></span>
                                        <span>I accept Terms of Use and Privacy Policy of the Website.</span>
                                    </div>
                                    <div className='w-full h-[2.25rem] rounded-md shadow-md border'><button type='submit' disabled={!toggleRegister} className={`${toggleRegister ? 'bg-green-600 text-white' : 'cursor-not-allowed'} rounded-md  w-full h-full font-medium`}>SignUp</button></div>
                                </div>
                            </div>

                            <div className='w-full mt-5'>
                                <div className="w-full relative border-b-2 flex justify-center">
                                    <p className="absolute -top-3.5  bg-white px-2 text-sm font-medium">
                                        or login using
                                    </p>
                                </div>
                                <div className='w-full flex justify-center mt-3 gap-2'>
                                    <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer rounded-full">
                                        <img src={google} alt="" />
                                    </div>
                                    <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer rounded-full">
                                        <img src={github} alt="" />
                                    </div>
                                    <div className="w-10 h-10 border flex justify-center items-center p-2 cursor-pointer rounded-full">
                                        <img src={sos} alt="" />
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>

        </>
    );
}

export default SignUp;
