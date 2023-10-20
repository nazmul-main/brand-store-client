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
        const {  name, type, price, photo, brand, rating, } = phone
        const sent = {  name, type, price, photo, brand, rating } 

        fetch('http://localhost:5001/mycart',{
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
        <div>


            

            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center py-4 md:py-10 md:mt-10'>Details</h2>

            {phone && (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="md:h-full h-48 w-full object-cover md:w-48" src={phone.photo} alt={phone.name} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 md:font-bold font-semibold">{phone.type}</div>
                            <div className="mt-2 text-xl font-semibold">{phone.name}</div>
                            <p className="mt-2 text-gray-500">{phone.brand}</p>
                            <p className="mt-2 text-gray-500">Price: ${phone.price}</p>
                            <p className="mt-2 text-gray-500">Rating: {phone.rating} stars</p>
                            <button onClick={handleAdcart} className="mt-4 bg-indigo-500 text-white rounded-md p-2 hover:bg-indigo-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
