import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero -h-[40vh] md:h-[80vh] bg-[url('https://phonehouse.netlify.app/image.jpg')] bg-no-repeat bg-cover h-full"  >
            <div className="hero-overlay bg-black bg-opacity-30"></div>
            <div className="hero-content text-start text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">EDUCATION IS POWER <br /> <span className="text-[#e54040]">OF SUCCESS</span></h1>
                    <p className="mb-5">Education powers a better world by serving society and allowing people to become better citizens. <br />As we all know, “education is a key to success”. Education allows society to gain knowledge and gives waybr <br /> to more professional career options like teaching, engineering, and accounting.</p>
                    <Link to='/blog'  className=" px-5 py-2 rounded-md bg-[#e54040] text-[#2C3659] font-bold ">BLOG</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;