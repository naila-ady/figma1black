import  Link  from "next/link"

const Header = ()=>{
    return(
        <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#D9D9D9] sm:h-[84px] h-auto mx-auto flex items-center
         justify-between ">
        
            <div className="text-2xl font-bold">
                <Link href="#">MyLogo</Link>
            </div>

            <nav className=" flex sm:flex-row  flex-col  items-center gap-6 px-4"> 
                <Link href="./" className=" text-3xl hover:text-blue-300 transition duration-200">Home</Link>
                <Link href= "./about" className="hover:text-blue-300 text-3xl transition duration-200">About</Link>
                <Link href="./services" className="hover:text-blue-300 text-3xl transition duration-200">
                Services</Link>
                <Link href="./contact" className="hover:text-blue-300 text-3xl transition duration-200">
                Contact</Link>
            </nav>
     </div>
     </div>
    
        
       
    )
};
export default Header