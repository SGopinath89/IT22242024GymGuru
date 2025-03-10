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
import { Input } from "@/components/ui/input"; // fixed import
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Hotel name is required" }),
  email: z.string().min(1, { message: "Email is required" }), 
  message: z.string().min(1, { message: "Message is required" }),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (values) => {
    const { name, email, message } = values;
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 px-2" >
      <h1 className="text-4xl text-black text-center mb-5">Contact Us</h1>
      <Form {...form}>
        <form className="w-3/4 md:w-1/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg space-y-2" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" className="h-36" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-10 text-center">
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
