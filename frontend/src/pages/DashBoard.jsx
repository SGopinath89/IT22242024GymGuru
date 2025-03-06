import { Link } from "react-router";
import { Button } from "@/components/ui/button";
function DashBoard(){
    return(
        <>
        <div className="mt-6 mb-6 flex items-center justify-between">
        <h1 className="text-4xl text-black text-center flex-1">DashBoard</h1>
        <Link to="/workout" className="mr-4">
        <Button>Lets parctise</Button>
        </Link>
        </div>
         <div>
        <div className="grid grid-cols-3 gap-6 p-4 w-full max-w-h-screen-xxl">
          {/* Row 1 */}
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200 flex items-center justify-center text-center">
          <div>
             <h2 className="text-1xl text-blue-600 font-bold mb-5" >Calories Burned</h2>
              <h1 className="text-5xl text-black font-bold mb-5">120.00 kcal</h1>
              <h3 className="text-1xl text-black font-normal">Total calories burned today</h3>
           </div>
          </div>
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200 flex items-center justify-center text-center">
          <div>
             <h2 className="text-1xl text-blue-600 font-bold mb-5" >Workouts</h2>
              <h1 className="text-5xl text-black font-bold mb-5">5</h1>
              <h3 className="text-1xl text-black font-normal">Total number of workout today</h3>
           </div>
          </div>
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200 flex items-center justify-center text-center">
          <div>
             <h2 className="text-1xl text-blue-600 font-bold mb-5" >Average Calaries burend</h2>
              <h1 className="text-5xl text-black font-bold mb-5">5400.0kcal</h1>
              <h3 className="text-1xl text-black font-normal">Average Calaries burn week</h3>
           </div>
          </div>
           
          {/* Row 2 */}
          <div className="bg-gray-300 border-2 border-gray-400 h-92 w-200 flex justify-center items-start">
           <h2 className="text-2xl text-blue-600 font-bold mt-5">Weekly Calaries burend</h2>
          </div>

          <div className="bg-gray-300 border-2 border-gray-400 h-96 w-200 flex justify-center items-start">
            <h2 className="text-2xl text-blue-600 font-bold mt-5">Workout categoeries</h2>
          </div>

          <div className="bg-gray-300 border-2 border-gray-400 h-96 w-200 flex justify-center items-start">
          <h2 className="text-2xl text-blue-600 font-bold mt-5">Today workout</h2>
          </div>
        </div>
      </div>
        </>
    );
}
export default DashBoard