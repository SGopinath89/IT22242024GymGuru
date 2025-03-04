import Navigation from "@/components/Navigation";
import ex1 from '../assets/ex1.jpg'; 
import Button from "@/Button";
import PopupAnimation from "@/components/popupText";


function Tutorial() {
  return (
    <>
      <Navigation />
      <div className="mt-6">
        <h1 className="text-4xl text-black text-center">Tutorials</h1>
      </div>
      <div className="mt-5">
        <div className="relative w-700 h-[300px] bg-gray-100 border-2 border-gray-400 mt-3 mb-3 mx-5 flex items-start"> 
          <img src={ex1} alt="Description of the image" width="280" height="300" />
          
          <div className="flex flex-col justify-start ml-4"> {/* Aligning text after vertical line */}
            <h1 className="font-bold text-3xl ml-100 mt-5">Back squat</h1>
            <ol className="list-decimal ml-6 mt-2"> {/* Proper alignment for list */}
              <li>Stand with feet shoulder-width apart: Position your feet evenly on the ground, with the barbell placed on your upper back.</li>
              <li>Brace your core and keep your chest up: Tighten your core to protect your back and maintain a proud chest posture.</li>
              <li>Lower your body by bending knees and hips: Push your hips back and bend your knees, lowering yourself down.</li>
              <li>Go down until your thighs are parallel to the ground: Continue lowering your body until your thighs are parallel to the floor.</li>
              <li>Push through your heels to stand up: Drive your heels into the floor as you rise back up to a standing position.</li>
              <li>Breathe properly: Exhale as you stand and inhale as you lower yourself.</li>
              <li>Engage your core throughout: Keep your core tight to stabilize your body.</li>
              <li>Start light, increase weight gradually: Begin with lighter weights and increase them as you gain strength.</li>
              <li>Practice consistently: Regular practice will improve your form and strength.</li>
            </ol>
          </div>

          {/* Button Positioned to Right Middle Corner */}
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 mr-10 flex flex-col items-center">
         <PopupAnimation />
         <Button>Click here</Button>
        </div>

        </div>
      </div>
    </>
  );
}

export default Tutorial;
