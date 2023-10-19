
import PhoneCard from "./PhoneCard";


const OurProduct = ({phones}) => {

    const phonesdata = phones;
    console.log(phonesdata)

    return ( 
        <>
            <div className='max-w-screen-xl px-4 mx-auto '>
                <h1 className='font-bold text-xl md:text-4xl text-center mt-12'>Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  ">
                {
                    phonesdata.map(phone => {
                        return (
                            <PhoneCard key={phone._id} phone={phone}/>
                        )
                        
                    })
                }
                </div>
            </div>
        </>
    );
};

export default OurProduct;