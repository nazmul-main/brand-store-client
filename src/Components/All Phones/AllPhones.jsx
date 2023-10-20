import  { useEffect, useState } from 'react';
import PhoneCard from '../ourProduct/PhoneCard';

const AllPhones = () => {

    const [phonesdata, setPhonesdata] = useState([]);

    useEffect(() => {
        fetch('https://phone-store-eight.vercel.app/phones')
            .then(res => res.json())
            .then(data => {
                setPhonesdata(data); 
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <>
            <div className='max-w-screen-xl px-4 mx-auto '>
                <h1 className='font-bold text-xl md:text-4xl text-center my-12'>All Phones</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center  ">
                    {phonesdata.map(phone => (
                        <PhoneCard key={phone._id} phone={phone} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllPhones;