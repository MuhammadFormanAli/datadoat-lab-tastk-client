

const Testimonial = () => {
    return (
        <div className=" py-10  flex items-center justify-center">
            <div className="c-container px-3 md:px-6 lg:px-12">
                <div className="w-full md:w-1/2 py-6">
                    <p className="text-yellow-500 text-[12px] py-3 tracking-[4px]">TESTIMONIAl</p>
                    <h1 className="text-[25px] md:text-[30px] font-semibold text-black leading-none">Trusted by Thousand of Students and Tutors</h1>
                </div>

                <div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 p-4 border rounded-md shadow-md ">
                            <img className="rounded-md w-12" src="course-review-1.jpg" alt="" />
                            <p className="leading-[17px] py-4">Life-changing content! The course transformed my skills and career. Grateful for this incredible learning journey.</p>
                            <p>Ema</p>
                        </div>
                        <div className="w-full md:w-1/2 p-4 border rounded-md shadow-md ">
                            <img className="rounded-md w-12" src="course-review-2.jpg" alt="" />
                            <p className="leading-[17px] py-4">“Exceptional courses! Engaging lessons, expert instructors. Boosted my knowledge, confidence, and success in my field. Highly recommended!”</p>
                            <p>Shaif</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <div className="w-full md:w-1/2 p-4 border rounded-md shadow-md ">
                            <img className="rounded-md w-12" src="course-review-3.jpg" alt="" />
                            <p className="leading-[17px] py-4">Life-changing content! The course transformed my skills and career. Grateful for this incredible learning journey.</p>
                            <p>John</p>
                        </div>
                        <div className="w-full md:w-1/2 p-4 border rounded-md shadow-md ">
                            <img className="rounded-md w-12" src="course-review-4.jpg" alt="" />
                            <p className="leading-[17px] py-4">“Exceptional courses! Engaging lessons, expert instructors. Boosted my knowledge, confidence, and success in my field. Highly recommended!”</p>
                            <p>Ali</p>
                        </div>
                        
                    </div>

                  







                </div>

            </div>

        </div>
    );
};

export default Testimonial;