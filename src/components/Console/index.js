import { useRouter } from "next/navigation"

export default function Console(){
  const router = useRouter();
    return(
          <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">

      <div className="flex flex-wrap -m-4 justify-center align-middle">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="relative flex flex-col mt-6 text-black bg-gradient-to-tr from-orange-200 to-red-200 shadow-md bg-clip-border rounded-xl w-full max-w-96">
    <div className="p-6">
   <h1 className="text-6xl text-orange-500 font-bold">0</h1>
      <h5 className="text-orange-500 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Teachers
      </h5>
      <p className="block font-sans text-base antialiased font-lightleading-relaxed text-inherit">
    Seamlessly Organize Teacher Data and Empower Your Educational Institution
      </p>
    </div>
    <div className="p-6 pt-0">
      <a href="#" className="inline-block">
        <button
          className="bg-white flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
          type="button" onClick={()=> router.push("/Dashboard/Teachers")}>
          Add Teacher
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </button>
      </a>
    </div>
  </div> 
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="relative flex flex-col mt-6 text-black bg-gradient-to-tr from-orange-200 to-red-200 shadow-md bg-clip-border rounded-xl w-full max-w-96">
    <div className="p-6">


   <h1 className="text-6xl text-orange-500 font-bold">0</h1>
      <h5 className="text-orange-500 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Students
      </h5>
      <p className="block font-sans text-base antialiased font-lightleading-relaxed text-inherit">
      Empower Your Institution: Streamline Student Data Management for Academic Excellence
      </p>
    </div>
    <div className="p-6 pt-0">
      <a href="#" className="inline-block">
        <button
          className="bg-white flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
          type="button" onClick={()=> router.push("/Dashboard/Students")}>
          Add Students
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </button>
      </a>
    </div>
  </div> 
        </div>
        
        
       
      </div>
    </div>
  </section>
    )
}