import Navigation from "@/components/Navigation";
import ex1 from '../assets/ex1.jpg'; 
import backSquart from '../assets/backSquart.png'; 
import LatPullDown from '../assets/LatPullDown.png'; 
import LegSquart from '../assets/LegSquart.png';
import SholderPress from '../assets/SholderPress.png'; 
import Crunchers from '../assets/Crunchers.png';
import { Button } from "@/components/ui/button";
import PopupAnimation from "@/components/popupText";

const exerciseData = [
  {
    title: "Back squat",
    image: backSquart,
    description: `The back squat is one of the most effective and widely used exercises for building strength, particularly in the lower body. It primarily targets the quadriceps, hamstrings, glutes, and lower back, making it a comprehensive lower body workout. The exercise involves placing a barbell across the upper back, usually resting on the traps, while standing with feet shoulder-width apart. From this position, the individual lowers their body by bending their knees and hips, essentially sitting back into a squat. The depth of the squat can vary depending on flexibility, mobility, and personal goals, but a common benchmark is to lower the thighs to parallel with the ground. After reaching the desired depth, the person then drives through their heels to return to the standing position.

    Back squats are highly effective for improving overall leg strength and power, as well as enhancing core stability. This is because, during the squat, the core muscles, including the abdominals and lower back, engage to maintain balance and protect the spine. As a compound exercise, the back squat recruits multiple muscle groups, making it a highly efficient workout for building strength and muscle mass in the lower body. In addition to increasing strength, back squats can improve functional movement patterns, such as bending, lifting, and walking, making them useful for daily activities and athletic performance.`,
  },
  {
    title: "Lat pulldown",
    image: LatPullDown,
    description: `The lat pulldown is a highly effective exercise for developing upper body strength, particularly targeting the latissimus dorsi muscles in the back. It also engages the biceps, shoulders, and upper back muscles, making it a comprehensive upper body workout. The exercise is performed using a cable machine with a wide bar attachment. While seated, the individual grips the bar slightly wider than shoulder-width, with palms facing forward. From this position, they pull the bar down toward their upper chest by engaging their back and arm muscles while keeping their torso upright. After reaching the bottom position, they slowly return the bar to the starting point with controlled movement. The lat pulldown is excellent for improving back strength and posture, as well as enhancing overall upper body stability. Because it mimics the pulling motion used in everyday activities and sports, this exercise also improves functional strength. Additionally, incorporating lat pulldowns into a workout routine can help build a well-defined and powerful back, contributing to better overall athletic performance.`,
  },
  {
    title: "Leg squat",
    image: LegSquart,
    description: `The leg squat is a fundamental lower-body exercise that builds strength and muscle in the quadriceps, hamstrings, glutes, and calves. It is a compound movement that also engages the core muscles for stability. The exercise involves standing with feet shoulder-width apart and lowering the body by bending the knees and hips, similar to sitting back into a chair. The squat depth can vary based on mobility and flexibility, but lowering the thighs to at least parallel with the ground is a common standard. After reaching the lowest position, the individual pushes through their heels to return to a standing position. Leg squats improve lower body strength, enhance mobility, and contribute to better balance and athletic performance. They also support functional movements like lifting, running, and jumping.`,
  },
  {
    title: "Shoulder press",
    image: SholderPress,
    description: `The shoulder press is a powerful upper-body exercise that strengthens the deltoid muscles, triceps, and upper chest while also engaging the core for stability. This exercise can be performed using dumbbells, a barbell, or a machine. The movement starts with weights at shoulder height, palms facing forward, and elbows bent at 90 degrees. The individual then pushes the weights overhead until the arms are fully extended before slowly lowering them back to the starting position. The shoulder press improves overall shoulder strength, enhances posture, and supports upper-body power for various daily and athletic activities. It is a key exercise for building strong and well-defined shoulders.`,
  },
  {
    title: "Crunchers",
    image: Crunchers,
    description: `Crunches are a core-strengthening exercise that primarily targets the abdominal muscles, particularly the rectus abdominis. This movement helps improve core stability, enhances muscle definition, and supports better posture. To perform crunches, the individual lies on their back with knees bent and feet flat on the ground, placing their hands behind their head or crossing them over their chest. By engaging the core, they lift their upper back off the ground while keeping the lower back in contact with the floor. After reaching the top position, they slowly lower themselves back down with control. Crunches are an effective exercise for building a strong core, which is essential for overall body stability and athletic performance.`,
  }
];

function Blog() {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-4xl text-black text-center">Blogs</h1>
      </div>

      {exerciseData.map((exercise, index) => (
        <div key={index} className="mt-5">
          <div className="relative w-700 h-[300px] bg-gray-100 border-2 border-gray-400 mt-3 mb-3 mx-5 flex items-start">
            <img src={exercise.image} alt="Description of the image" width="280" height="300" />
            <div className="flex flex-col justify-start ml-4">
              <h1 className="font-bold text-3xl ml-100 mt-2 text-blue-900 mb-5">{exercise.title}</h1>
              <p className="mr-5 italic">{exercise.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blog;
