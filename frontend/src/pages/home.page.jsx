import { Button } from "@/components/ui/button";
import bodybuilding from '../assets/bodybuilding.png'; 
import rescheduling from '../assets/rescheduling.png';
import graph from '../assets/graph.png';
import trophy from '../assets/trophy.png';
import { Link } from "react-router";

function Homepage() {
  return (
    <>
      <div className="min-h-[100px] bg-gray-100 text-gray-800 flex flex-col ">
        <header className="bg-green-500 text-white py-12">
          <h1 className="text-4xl font-bold ml-3">Welcome to Gym Guru.....</h1>
          <p className="mt-4 text-xl mt-1 ml-7">( Your personal coach... )</p>
          <p className="mt-2 text-lg text-gray-200 ml-5">
            Gym Guru is your all-in-one fitness companion, offering personalized workout plans, progress tracking tools, and expert guidance to help you reach your fitness goals. Whether you're new to fitness or aiming to elevate your workouts, it supports muscle building, fat loss, and a healthier lifestyle with nutrition advice, recovery tips, and mental wellness strategies. Get ready to achieve your best self with Gym Guru!
          </p>
          <center>
            <p className="mt-6 font-bold text-2xl text-black">
              To get started, please sign up first! 
              <Link to="/sign-in">
              <Button className="bg-black text-white font-bold py-2 px-4 text-xl ml-3">
               Click here
              </Button>
              </Link>
            </p>
          </center>
        </header>

        <section className="flex-1 px-6 py-12 text-center">
          <h2 className="text-4xl font-semibold text-gray-700">Discover Our Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore everything we offer, from useful tools to the latest news and trends!
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-5">
          {/* Card 1 */}
          <div className="relative bg-gray-300 border-2 border-gray-400 h-[400px] flex flex-col items-center justify-center group p-4">
            <h1 className="font-bold text-4xl text-center mb-5">Building Body</h1>
            <img src={bodybuilding} alt="Building Body" width="100" height="100" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Building Body</h2>
              <p>Improve your fitness with structured workouts.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-300 border-2 border-gray-400 h-[400px] flex flex-col items-center justify-center group p-4">
            <h1 className="font-bold text-4xl text-center mb-5">Manage Time</h1>
            <img src={rescheduling} alt="Manage Time" width="100" height="100" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Manage Time</h2>
              <p>Plan your workouts effectively.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-300 border-2 border-gray-400 h-[400px] flex flex-col items-center justify-center group p-4">
            <h1 className="font-bold text-4xl text-center mb-5">Analyze Calories</h1>
            <img src={graph} alt="Analyze Calories" width="100" height="100" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Analyze Calories</h2>
              <p>Track your diet and stay healthy.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-gray-300 border-2 border-gray-400 h-[400px] flex flex-col items-center justify-center group p-4">
            <h1 className="font-bold text-4xl text-center mb-5">Challenge & Win</h1>
            <img src={trophy} alt="Challenge & Win" width="100" height="100" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Challenge & Win</h2>
              <p>Compete and achieve your fitness goals.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
