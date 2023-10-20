import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const [phone, setPhone] = useState({}); // Initialize phone to an empty object
    const { _id } = useParams(); // Use _id instead of params
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

    return (
        <div>
            <h2>Details</h2>
            {phone && (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={phone.photo} alt={phone.name} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{phone.type}</div>
                            <div className="mt-2 text-xl font-semibold">{phone.name}</div>
                            <p className="mt-2 text-gray-500">{phone.brand}</p>
                            <p className="mt-2 text-gray-500">Price: ${phone.price}</p>
                            <p className="mt-2 text-gray-500">Rating: {phone.rating} stars</p>
                            <button className="mt-4 bg-indigo-500 text-white rounded-md p-2 hover:bg-indigo-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
