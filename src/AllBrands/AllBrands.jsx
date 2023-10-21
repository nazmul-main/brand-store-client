import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const AllBrands = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);
    const brands = useLoaderData();
    return (
        <div className='my-12 max-w-screen-xl mx-auto'>
            <div className='border-4 p-12'>
                <h2 className='text-xl md:text-4xl font-bold text-center'>ALL Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mx-auto gap-5 md:gap-8 lg:12 py-12">
                    {brands.map((brand) => (
                        <Link  data-aos="flip-right" to={`/phone/${brand.brand}`} key={brand._id}>
                            <div className="bg-white rounded-lg shadow-lg p-5 h-60 flex flex-col items-center justify-center">
                                <img src={brand.photo} alt={brand.brand} className="w-72 object-cover mx-auto" />
                                <div className="text-center">
                                    <h3 className="text-xl font-bold">{brand.brand}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBrands;
