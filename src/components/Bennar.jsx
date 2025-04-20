
import { motion } from "motion/react"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"

const Bennar = () => {
    return (
        <div>
            <div className="hero bg-base-200 max-h-full">
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                    <div className='flex-1 '>
                        <motion.img
                        animate={{y:[0,25,0]}}
                        transition={{duration:2,repeat: Infinity}}
                            src={img1}
                            className="max-w-64 rounded-t-[40px] border-blue-700  border-b-4 border-l-4 rounded-br-[40px] shadow-2xl mx-auto" />
                        <motion.img
                        animate={{x:[50,100,50]}}
                        transition={{duration:3,repeat: Infinity}}
                            src={img2}
                            className="max-w-64 rounded-t-[40px] border-blue-700  border-b-4 border-l-4 rounded-br-[40px] shadow-2xl mx-auto" />
                    </div>
                    <div className='flex-1'>
                       
                        <motion.h1
                        animate={{x:[0,20,0]}}
                        transition={{duration:1.5,repeat: Infinity}}
                        translate=""
                        className="text-5xl font-bold">Latest For You  </motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bennar;