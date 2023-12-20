

const Banner = () => {
    return (
        <div className=" lg:h-[100vh] bg-purple-900 py-10 flex items-center justify-center">
            <div className="c-container flex flex-col md:flex-row  items-center justify-center px-2 md:p-8 lg:p-12 gap-20">
                <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <div className="flex gap-2 items-center text-white text-[12px] tracking-widest">
                        <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                        <p>ON-DEMAND COURSE</p>
                    </div>
                    <h1 className="text-[25px] md:text-[30px] font-bold text-white leading-none">Get better with our Get Better at Photography With Our Courses.</h1>
                    <p className="font-semibold text-white text-sm">Learn how to create amazing content that captivates the audience and make them watch more.</p>
                    <div className="flex gap-3 items-center">
                        <button className="text-black bg-white py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300">Start course</button>
                        <button className="text-white   hover:text-yellow-500 transition-all duration-300 font-semibold"> All courses &gt; </button>

                    </div>
                </div>
                <div className="w-full md:w-1/2">
                <img className="rounded-3xl w-full object-contain" src="banner.png" alt="banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;