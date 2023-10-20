/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

const OurProduct = () => {
  const [phonesdata, setPhonesdata] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/phones')
      .then(res => res.json())
      .then(data => {
        setPhonesdata(data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className='max-w-screen-xl px-4 mx-auto '>
        <h1 className='font-bold text-xl md:text-4xl text-center mt-12'>Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center  ">
          {phonesdata.map(phone => (
            <PhoneCard key={phone._id} phone={phone} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProduct;
