import { Button } from "./ui/button";

function Navigation(){
    return(
        <nav className="z-10 bg-gray-800 flex item-center jusify-between px-8 text-white py-4">
            <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold italic font-serif">
                    Gym Guru
                </a>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    DashBoard
                </a>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    WorkOut
                </a>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    Tutorials
                </a>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    Blog
                </a>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    Challenge
                </a>
            </div>
            <div className="hidden md:flex space-x-6">
                <a href={`/`} className="transition-colors">
                    Contact
                </a>
            </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
                <Button varient="ghost" asChild>
                    <a href="/sign-in">Login</a>
                </Button>
        
                <Button varient="ghost" asChild>
                    <a href="/sign-up">Sign up</a>
                </Button>
                <div>
                    <p>sharada</p>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;