import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/banner/slider2-3.jpg";
const Banner = () => {
    return (
        <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-2/4 md:w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Jobs Tasks Manager
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Directly messaging the employer gives you a chance to let them know why you're interested in a task, and why you'd be a good fit. Start off with a friendly opening, and tell them a little bit about yourself and where you want your career to go. It helps to say why you're interested in the jobs or company
          </p>

          <div>
            <Link
              to="/dashboard"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Let’s Explore
              <span className="">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl  w-2/4 md:w-full"
          />
        </div>
      </div>
    </div>
    );
};

export default Banner;