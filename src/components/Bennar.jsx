
import { motion } from "motion/react"
import img1 from "../assets/man.png"
import img2 from "../assets/img2.jpg"


const Bennar = () => {
    return (
        <div className="mt-5">
            <div className="hero bg-base-200 max-h-full">
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                    <div className='flex-1 '>
                        <img

                            src={img1}
                            className="max-w-64 w-full   mx-auto" />

                    </div>
                    <div className='flex-1'>

                        <h1
                           
                            className="md:text-5xl text-3xl font-bold">Search Between More Then <span className=" text-green-600 m-2">5,000</span> Open Jobs.  </h1>
                        <p className="py-6">
                            Trending Jobs Keywords: <span className="bg-green-100 p-0.5 rounded-lg text-green-500"> Web Designer</span> <span className="bg-green-100 p-0.5 rounded-lg text-green-500">  Web Developer</span> <span className="bg-green-100 p-0.5 rounded-lg text-green-500"> IOS Developer</span> <span className="bg-green-100 p-0.5 rounded-lg text-green-500">Android Developer</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bennar;