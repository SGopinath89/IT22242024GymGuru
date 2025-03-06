import ex1 from '../assets/ex1.jpg'; 
import { Button } from "@/components/ui/button";
import PopupAnimation from "@/components/popupText";
import backSquart from '../assets/backSquart.png'; 
import LatPullDown from '../assets/LatPullDown.png'; 
import LegSquart from '../assets/LegSquart.png';
import SholderPress from '../assets/SholderPress.png'; 
import Crunchers from '../assets/Crunchers.png';

const exercises = [
  {
    name: "Back squat",
    image: backSquart,
    description: [
      "Stand with feet shoulder-width apart: Position your feet evenly on the ground with the barbell placed on your upper back.",
      "Brace your core and keep your chest up: Tighten your core to protect your back and maintain a proud chest posture.",
      "Lower your body by bending knees and hips: Push your hips back and bend your knees, lowering yourself down.",
      "Go down until your thighs are parallel to the ground: Continue lowering your body until your thighs are parallel to the floor.",
      "Push through your heels to stand up: Drive your heels into the floor as you rise back up to a standing position."
    ]
  },
  {
    name: "Lat pulldown",
    image: LatPullDown,
    description: [
      "Sit with knees secured under the pad: Position your legs properly and grip the bar with hands wider than shoulder-width.",
      "Brace your core and keep your chest up: Engage your core and maintain an upright posture.",
      "Pull the bar towards your chest: Squeeze your shoulder blades together while pulling the bar down.",
      "Lower the bar with control: Slowly return the bar to the starting position.",
      "Engage your back muscles throughout: Keep your back muscles tight for proper form and effectiveness."
    ]
  },
  {
    name: "Leg squat",
    image: LegSquart,
    description: [
      "Stand with feet shoulder-width apart: Position your feet evenly on the ground with the barbell placed on your upper back.",
      "Brace your core and keep your chest up: Engage your core to protect your back.",
      "Lower your body by bending knees and hips: Push your hips back and bend your knees, lowering your body.",
      "Go down until your thighs are parallel to the ground: Continue lowering your body until your thighs are parallel to the floor.",
      "Push through your heels to stand up: Drive your heels into the floor as you return to standing."
    ]
  },
  {
    name: "Shoulder press",
    image: SholderPress,
    description: [
      "Stand with feet shoulder-width apart: Position your feet evenly on the ground, gripping the barbell at shoulder height.",
      "Brace your core and maintain an upright posture: Engage your core to avoid arching your back.",
      "Press the barbell overhead: Extend your arms fully while keeping the barbell aligned with your shoulders.",
      "Lower the barbell with control: Slowly return the barbell back to shoulder height.",
      "Maintain strong posture throughout: Keep your chest lifted and core engaged for stability."
    ]
  },
  {
    name: "Crunchers",
    image: Crunchers,
    description: [
      "Lie flat on your back with knees bent: Position your feet flat on the floor and your hands behind your head or crossed over your chest.",
      "Engage your core: Tighten your abs before initiating the movement.",
      "Lift your upper body off the ground: Curl your torso towards your knees, keeping your lower back pressed into the floor.",
      "Pause and squeeze at the top: Contract your abs at the peak of the movement.",
      "Lower back down with control: Slowly return to the starting position while maintaining core engagement."
    ]
  }
];

function Tutorial() {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-4xl text-black text-center">Tutorials</h1>
      </div>

      {exercises.map((exercise, index) => (
        <div className="mt-5" key={index}>
          <div className="relative w-700 h-[300px] bg-gray-100 border-2 border-gray-400 mt-3 mb-3 mx-5 flex items-start">
            <img src={exercise.image} alt="Description of the image" width="280" height="300" />
            <div className="flex flex-col justify-start ml-4">
              <h1 className="font-bold text-3xl ml-100 mt-5 mb-5">{exercise.name}</h1>
              <ol className="list-decimal ml-6 mt-2 font-serif text-lg text-gray-700">
                {exercise.description.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 mr-10 flex flex-col items-center">
              <PopupAnimation />
              <div className="mt-4"> {/* Adding margin top for space */}
                <Button>Click here</Button>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

export default Tutorial;
