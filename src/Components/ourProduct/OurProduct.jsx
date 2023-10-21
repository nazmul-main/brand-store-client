/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const [phonesdata, setPhonesdata] = useState([]);

  useEffect(() => {
    fetch('https://phone-store-eight.vercel.app/phones')
      .then(res => res.json())
      .then(data => {
        setPhonesdata(data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Use slice to display only the first 4 products
  const displayedPhones = phonesdata.slice(0, 4);

  return (
    <div className='max-w-screen-xl px-4 mx-auto text-center my-12'>
      <h1 className='font-bold text-xl md:text-4xl md:my-10 my-4'>Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        {displayedPhones.map(phone => (
          <PhoneCard key={phone._id} phone={phone} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link to='/allphones'>
          <button className="py-2 px-4 text-white bg-green-500 rounded hover:bg-green-700 my-3 md:my">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default OurProduct;
