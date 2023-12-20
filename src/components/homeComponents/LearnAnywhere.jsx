

const LearnAnywhere = () => {
    return (
        <div className=" lg:h-[100vh]  py-10 flex items-center justify-center">
            <div className="c-container flex flex-col md:flex-row  items-center justify-center px-2 md:p-8 lg:p-12 gap-20">
                
            <div className="w-full md:w-1/2">
                <img className="rounded-3xl w-full object-contain" src="learn-anywhere.jpg" alt="banner image" />
                </div>
                
                
                <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <div className="flex gap-2 items-center text-black text-[12px] tracking-widest">
                        <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                        <p>LEARNING COURSES</p>
                    </div>
                    <h1 className="text-[25px] md:text-[30px] font-bold text-black leading-none">Learn From Anywhere.</h1>
                    <p className=" text-black text-sm">Take classes on the go with the CodeConnect app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                    <ul>
                        <li>Short Course</li>
                        <li>ExpertTracks</li>
                        <li>Online degrees</li>
                    </ul>
                    <div className="flex gap-3 items-center">
                        <button className="text-white bg-blue-900 py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300">Start course</button>
                       

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default LearnAnywhere;