
import { Link, useLoaderData } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
};



const Phone = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

    const phone = useLoaderData()
    console.log(phone);

    if (phone.length === 0) {
        return (
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className='text-4xl font-bold text-center my-12'>Phone</h2>
                <p className="text-center text-gray-600 text-xl font-semibold mb-4">
                    No products available for this brand.
                </p>
            </div>
        );
    }


    // console.log(phone);
    return (
        <div >
          

          <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://www.startech.com.bd/image/cache/catalog/blog/2023/apple-iphone-15-leak/apple-iphone-15-leak-banner-740x350.jpg"
                        alt="Image 1"
                    />
                </div>
                <div className="max-w-screen-xl mx-auto px-4-12">
                    <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://www.nicepng.com/png/detail/870-8706206_samsung-mobile-banner-1-samsung-galaxy.png"
                        alt="Image 2"
                    />
                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='h-[40vh] object-cover'
                        src="https://telecombyte.com/wp-content/uploads/2022/03/Oppo-K10-Banner.jpg"
                        alt="Image 3"
                    />
                </div>
            </Carousel>
            <h2 className='text-4xl font-bold text-center my-12'></h2>

            <div className=" max-w-screen-xl  mx-auto px-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-12">

                {

                    phone.map(data =>
                        <div   key={data._id} className="">
                            <div  data-aos="flip-left" className="bg-white rounded-lg shadow-md p-4 w-64">
                                <div>
                                    <img src={data.photo} alt='' className="w-full  object-cover mb-2" />
                                    <h2 className=" font-bold mb-2 text">{data.name}</h2>
                                </div>

                                <div className="md:flex justify-between">
                                    <p className="text-gray-600 mb-2">{data.brand}</p>
                                    <p className="text-gray-600 mb-2">{data.type}</p>
                                </div>
                                <div className="md:flex justify-between">
                                    <p className="text-green-600 font-semibold mb-2">{data.price}</p>
                                    <div className="flex items-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-yellow-400 mr-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a.75.75 0 01.683.43l1.822 3.774 4.078.594a.75.75 0 01.416 1.284l-2.94 2.872.694 4.07a.75.75 0 01-1.088.792L10 12.347l-3.623 1.904a.75.75 0 01-1.088-.792l.694-4.07-2.94-2.872a.75.75 0 01.416-1.284l4.078-.594 1.822-3.774A.75.75 0 0110 2z"
                                            />
                                        </svg>
                                        {data.rating}
                                    </div>
                                </div>


                                <div className="md:flex justify-between">
                                <Link to={`/details/${data._id}`}>
                                        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Details</button></Link>
                                    <Link to={`/update/${data._id}`}>
                                        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 ml-2">Update</button>
                                    </Link>
                                </div>

                            </div>
                        </div>)
                }
            </div>
        </div>

        
    );
};

export default Phone;