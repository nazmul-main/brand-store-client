import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero -h-[40vh] md:h-[80vh] bg-[url('https://phonehouse.netlify.app/image.jpg')] bg-no-repeat bg-cover h-full"  >
            <div className="hero-overlay bg-black bg-opacity-30"></div>
            <div className="hero-content text-start text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-xl md:text-2xl lg:text-5xl font-bold">TECH HAVEN  <br /> <span className=" text-[#e54040]">YOUR ULTIMATE</span></h1>
                    <p className=" text-sm md:static mb-5">At Tech Haven, we bring you the latest and greatest in the world of smartphones. <br />Explore a vast selection of cutting-edge devices from top brands, including Apple, Samsung, Google, and more. <br /> Our knowledgeable staff is here to assist you in finding the ideal phone to meet your needs and budget. <br /> Discover innovation, style, and unbeatable deals at Tech Haven, your ultimate smartphone </p>
                    {/* <Link to='/blog'  className=" px-5 py-2 rounded-md bg-[#e54040] text-[#2C3659] font-bold ">BLOG</Link> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;