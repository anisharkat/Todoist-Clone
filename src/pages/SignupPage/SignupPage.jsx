import { SignupForm } from "../../components/AuthForm/SignupForm";
import { Navbar } from "../../components/Navbar/Navbar";
import { UsingGoogle } from "../../components/UsingGoogle/UsingGoogle";
import image1 from "../../../public/assets/signup_1.jpg"
import image2 from "../../../public/assets/signup_2.jpg"
import image3 from "../../../public/assets/signup_3.jpg"
import image4 from "../../../public/assets/signup_4.jpg"
export const SignupPage = () => {
  return (
    <section className='overflow-hidden'>
      <Navbar />

      <div className='flex flex-col md:flex-row items-center justify-between mt-28 mx-10 md:mx-20 mb-10'>
        {/* Left Section: Form and Google Login */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className='font-bold text-3xl mb-6'>Sign Up</h1>
          <UsingGoogle />
          <SignupForm />
        </div>

        {/* Right Section: Images */}
        <div className="w-96 md:w-1/2 grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={image1} alt="Image 1" />
            <h3 className="font-semibold mt-4">30 million+</h3>
            <p className="text-sm text-gray-500">app downloads</p>
          </div>

          {/* Image 2 */}
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={image2} alt="Image 2" />
            <h3 className="font-semibold mt-4">15 years+</h3>
            <p className="text-sm text-gray-500">in business</p>
          </div>

          {/* Image 3 */}
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={image3} alt="Image 3" />
            <h3 className="font-semibold mt-4">2 billion+</h3>
            <p className="text-sm text-gray-500">task completed</p>
          </div>

          {/* Image 4 */}
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={image4} alt="Image 4" />
            <h3 className="font-semibold mt-4">100,000+</h3>
            <p className="text-sm text-gray-500">team users</p>
          </div>
        </div>
      </div>
    </section>
  );
};
