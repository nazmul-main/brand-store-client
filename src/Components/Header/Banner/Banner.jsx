import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
    };

    return (
        <div>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://fdn.gsmarena.com/imgroot/static/headers/makers/zte-2023-1.jpg"
                        alt="Image 1"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Your Ultimate Phone Destination</h1>
                        <p className="text-[8px] md:text-sm">Explore the latest and greatest smartphones at our online phone store. Find the perfect device to suit your needs, from top brands to budget-friendly options.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4-12">
                    <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://cdn.thewirecutter.com/wp-content/media/2023/09/budgetandroidphones-2048px-6939-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
                        alt="Image 2"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Unleash the Power of Technology</h1>
                        <p className="text-[8px] md:text-sm">Discover a world of innovation with our collection of cutting-edge smartphones. Stay connected, capture memories, and experience the future of mobile technology.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://fdn.gsmarena.com/imgroot/static/headers/makers/nokia-2023-1.jpg"
                        alt="Image 3"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Smartphones for Every Lifestyle</h1>
                        <p className="text-[8px] md:text-sm">From sleek and stylish to rugged and durable, our phone store offers a diverse range of smartphones for every lifestyle. Find the perfect match for your daily adventures.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div>
                <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://cdn.thewirecutter.com/wp-content/media/2023/10/androidphones-2048px-4856-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
                        alt="Image 4"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Your One-Stop Phone Shop</h1>
                        <p className="text-[8px] md:text-sm">: We are your go-to destination for all things mobile. Browse our extensive selection of smartphones, accessories, and gadgets to enhance your mobile experience.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                    
                </div>
                <div>
                <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Samsung-Galaxy-S20-Family-CC?wid=834&hei=470&fit=crop"
                        alt="Image 5"
                    />
                    
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Stay Connected with the Best Phones</h1>
                        <p className="text-[8px] md:text-sm"> Stay connected with the latest phones from top brands. Shop for top-notch performance, stunning displays, and outstanding camera capabilities.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                 
                </div>
                <div>
                <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://fdn.gsmarena.com/imgroot/static/headers/makers/huawei-2023-2.jpg"
                        alt="Image 6"
                    />
                   
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl md:text-4xl font-bold">Affordable Phones, Premium Quality</h1>
                        <p className="text-[8px] md:text-sm"> Do not compromise on quality when shopping for a budget-friendly phone. Explore our selection of affordable smartphones that offer high performance without breaking the bank.</p>
                        <Link to="/allphones">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
