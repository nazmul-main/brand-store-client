/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




const PhoneCard = ({ phone }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

    const { _id, name, type, price, photo, brand, rating, } = phone
    return (
    
            <div data-aos="zoom-in-up" className="  bg-white rounded-lg shadow-md p-4 w-64">
                <div>
                    <img src={photo} alt='' className="w-full h-56  object-cover mb-2" />
                    <h2 className=" font-bold mb-2 text">{name}</h2>
                </div>

                <div className="md:flex justify-between">
                    <p className="text-gray-600 mb-2">{brand}</p>
                    <p className="text-gray-600 mb-2">{type}</p>
                </div>
                <div className="md:flex justify-between">
                    <p className="text-green-600 font-semibold mb-2">{price}</p>
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
                        {rating}
                    </div>
                </div>


                <div className="">
                    <Link to={`/details/${_id}`}>
                        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Details</button>
                    </Link>

                    

                </div>

            </div>
    
    );
};

export default PhoneCard;