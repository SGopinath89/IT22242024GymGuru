import React from 'react';
import backSquart from '../assets/backSquart.png'; 
import LatPullDown from '../assets/LatPullDown.png'; 
import LegSquart from '../assets/LegSquart.png';
import SholderPress from '../assets/SholderPress.png'; 
import Crunchers from '../assets/Crunchers.png';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  count: z.number().min(1, "Count is required"),
  time: z.number().min(1, "Time is required"),
});

function Workout() {
  // Array of workout data
  const workouts = [
    { name: "Back Squat", image: backSquart },
    { name: "Lat Pulldown", image: LatPullDown },
    { name: "Leg Squat", image: LegSquart },
    { name: "Shoulder Press", image: SholderPress },
    { name: "Crunchers", image: Crunchers },
  ];

  return (
    <>
      <div className="mt-6 mb-6">
        <h1 className="text-4xl text-black text-center">WorkOut</h1>
      </div>
      <div className="container mx-auto mt-5 px-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workouts.map((workout, index) => {
            // Create a separate form state for each workout
            const form = useForm({
              resolver: zodResolver(formSchema),
              defaultValues: { count: "", time: "" }, // Ensure fields are independent
            });

            const handleSubmit = (values) => {
              console.log("Form submitted:", { id: index, name: workout.name, ...values });
            };

            return (
              <div 
                key={index}
                className="w-full h-[300px] bg-gray-100 border-2 border-gray-400 flex items-start"
              >
                <img 
                  src={workout.image} 
                  alt={workout.name} 
                  width="280" 
                  height="300" 
                  className="object-cover"
                />
                <div className="flex flex-col justify-start ml-4 w-full">
                  <h1 className="font-bold text-3xl mt-2 mb-5">{workout.name}</h1>
                  <Form {...form}>
                    <form 
                      className="w-full max-w-[400px] bg-white p-2 rounded-lg shadow-lg space-y-2"
                      onSubmit={form.handleSubmit(handleSubmit)}
                    >
                      <div className="space-y-1">
                        <FormField
                          control={form.control}
                          name="count"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Count</FormLabel> {/* Reduced size */}
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Count" 
                                  className="w-full text-xs h-6"  // Reduced height
                                  value={field.value}
                                  onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Time</FormLabel> {/* Reduced size */}
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Enter the minute" 
                                  className="w-full text-xs h-6"  // Reduced height
                                  value={field.value}
                                  onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="text-center">
                        <Button type="submit" size="sm" className="mt-2">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Workout;
