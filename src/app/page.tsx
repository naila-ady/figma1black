
    import Image from "next/image";
    import img from "../../public/images/img.png";
    
    
    export default function Home() {
      return (
    
    
       <div className=" max-w-[1920px] bg-[#FFFFF] mx-auto flex md:flex-row flex-col items-center justify-evenly"> 
        <div className="max-w-1/2 flex flex-col py-6 mx-auto">
        <h1 className=" font-extrabold sm:text-[50px] text-7xl text-[#000000] py-6">Welcome To Our Website</h1>
        <p className="font-extralight sm:text-[30px] text-5xl py-6">Lorem Ipsum is simply dummy text of
             the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard</p>
             <button className="bg-[#121212] max-w-[118px] h-14 text-[14px] text-[#FFFFFF] mt-12">Contact US</button>
        </div>
         <div className=" md:w-1/2 w-full mx-auto flex justify-end py-6 "> 
        <Image src={img}  alt="image" width={465} height={402}></Image>
      </div>
      </div>
    );
    }
     

