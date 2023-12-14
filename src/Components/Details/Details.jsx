import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const [phone, setPhone] = useState({});
    const { _id } = useParams();
    const phones = useLoaderData();


    


    useEffect(() => {
        if (phones) {
            // Filter the phones data based on _id
            const selectedPhone = phones.find(item => item._id === _id);
            if (selectedPhone) {
                setPhone(selectedPhone);
            }
        }
    }, [_id, phones]);




    const handleAdcart = () => {
        const { name, type, price, photo, brand, rating, } = phone
        const sent = { name, type, price, photo, brand, rating }

        fetch('https://phone-store-eight.vercel.app/mycart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sent)
        })
            .then(res => res.json({

            }))
            .then(data => {
                console.log(data);
                toast.success('Product added successfully', {
                    position: 'top-center',
                });

            })



    }

    return (
        <div className='max-w-screen-xl px-4 mx-auto'>




            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center py-4 md:py-10'>Details</h2>

            {phone && (
                <div className=" " >
                    <div className="grid md:grid-cols-5 items-center justify-center">
                        <div className="col-span-2  mx-auto">
                            <img className="  md:w-48" src={phone.photo} alt={phone.name} />
                        </div>
                        <div className="p-8 col-span-3">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 md:text font-bold">{phone.type}</div>
                            <div className="mt-2 text-xl md:text-2xl font-semibold">{phone.name}</div>
                            <p className="text-xl font-semibold mt-2 text-gray-500">{phone.brand}</p>
                            <p className="mt-2 text-gray-500">Price: {phone.description}</p>

                            <p className="text-green-600 font-semibold mb-2">{phone.price}</p>
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
                                {phone.rating}
                            </div>

                            <button onClick={handleAdcart} className="mt-4 bg-indigo-500 text-white rounded-md p-2 hover:bg-indigo-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
