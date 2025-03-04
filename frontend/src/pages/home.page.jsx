import Navigation from "@/components/Navigation";

function Homepage() {
  return (
    <>
      <Navigation />
      <div>
        <div className="grid grid-cols-3 gap-6 p-4 w-full max-w-h-screen-xxl">
          {/* Row 1 */}
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200"></div>  
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200"></div>  
          <div className="bg-gray-300 border-2 border-gray-400 h-64 w-200"></div>  
           
          {/* Row 2 */}
          <div className="bg-gray-300 border-2 border-gray-400 h-92 w-200"></div>  
          <div className="bg-gray-300 border-2 border-gray-400 h-96 w-200"></div>  
          <div className="bg-gray-300 border-2 border-gray-400 h-96 w-200"></div> 
        </div>
      </div>
    </>
  );
}

export default Homepage;
