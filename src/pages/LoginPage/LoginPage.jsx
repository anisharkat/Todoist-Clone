import { Navbar } from '../../components/Navbar/Navbar';
import { LoginForm } from '../../components/AuthForm/LoginForm';
import { UsingGoogle } from '../../components/UsingGoogle/UsingGoogle';
import login_image from '../../../public/assets/login_image.png';



export const LoginPage = () => {


 
  return (
    <section className='overflow-hidden'>
      <Navbar />

      <div className='flex flex-col md:flex-row items-center justify-between mt-28 mx-10 md:mx-20 mb-10'>
        {/* Left Section: Form and Google Login */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className='font-bold text-3xl mb-6'>Log In</h1>
          <UsingGoogle />
          <LoginForm />
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img className='w-80 md:w-96 h-auto' src={login_image} alt="Login Image" />
        </div>
      </div>

      
    </section>
  );
};
