import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

function Homepage() {
  return (
    <>
     <div className="min-[100px] bg-gray-100 text-gray-800 flex flex-col ">
      <header className="bg-green-500 text-white py-12">
      <h1 className="text-4xl font-bold ml-3">Welcome to Gym Guru.....</h1>
      <p className="mt-4 text-xl mt-1 ml-7">( Your personal coach... )</p>
      <p className="mt-4 text-lg text-gray-200 ml-5">
      Gym Guru is your all-in-one fitness companion, offering personalized workout plans, progress tracking tools, and expert guidance to help you reach your fitness goals. Whether you're new to fitness or aiming to elevate your workouts, it supports muscle building, fat loss, and a healthier lifestyle with nutrition advice, recovery tips, and mental wellness strategies. Get ready to achieve your best self with Gym Guru!<br></br>
      </p>
      <center>
       <p className="mt-6 font-bold text-3xl text-black mr-30">
        To get started, please sign up first! 
        <Button className="bg-green-500 text-white font-bold py-2 px-4 text-xl">
         Click here
        </Button>
        </p>
      </center>
      </header>

      <section className="flex-1 px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Discover Our Features</h2>
        <p className="mt-4 text-lg text-gray-600 ">
          Explore everything we offer, from useful tools to the latest news and trends!
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] p-[10px] mb-5">
  {/* Card 1 */}
  <div className="bg-gray-300 border-2 border-gray-400 h-[400px] w-full flex items-center justify-center">
    {/* Card content */}
  </div>  
  {/* Card 2 */}
  <div className="bg-gray-300 border-2 border-gray-400 h-[400px] w-full flex items-center justify-center">
    {/* Card content */}
  </div>  
  {/* Card 3 */}
  <div className="bg-gray-300 border-2 border-gray-400 h-[400px] w-full flex items-center justify-center">
    {/* Card content */}
  </div>  
  {/* Card 4 */}
  <div className="bg-gray-300 border-2 border-gray-400 h-[400px] w-full flex items-center justify-center">
    {/* Card content */}
  </div>  
</div>

    </div>
    </>
  );
}

export default Homepage;
