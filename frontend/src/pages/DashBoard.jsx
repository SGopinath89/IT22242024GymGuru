function DashBoard(){
    return(
        <>
        <div className="mt-6 mb-6">
        <h1 className="text-4xl text-black text-center">DashBoard</h1>
      </div>
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
export default DashBoard