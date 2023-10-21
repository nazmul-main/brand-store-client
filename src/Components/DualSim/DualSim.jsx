

const DualSim = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 md:py-12">
            <div className="flex flex-col lg:flex-row  md:px-12 justify-center items-center gap-2 md:gap-12">
                <div className="flex gap-4 w-2/5">
                    <div data-aos="fade-up ">
                        <img className="w-72 md:w-full" src="https://i.ibb.co/4RWSjmG/dualsim-prev-ui.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-down-right" className="space-y-4 w-3/5">
                    <div data-aos="fade-up-right" className="border-2 w-1/6  border-yellow-300"></div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold"> 4G + 2G <br /> dual-Sim Dual Standby</h2>
                    <p className="text-gray-500">It seems like you are looking for information about a dual SIM card setup with two different mobile carriers, each providing 4G and 2G services. Dual SIM phones are designed to allow you to use two SIM cards simultaneously.
                    </p>
                    <ul data-aos="fade-up-left" className="list-disc ml-7 text-gray-500 space-y-2">
                        <li><strong>Phone Compatibility:</strong> Not all phones support 4G on both SIM cards simultaneously. Make sure your phone is compatible with using 4G on one SIM and 2G on the other. Check your phone is specifications or consult the manufacturer is website.</li>
                        <li><strong>SIM Card Types:</strong> You ll need two SIM cards, one for 4G and another for 2G. Ensure that both SIM cards are compatible with your phone and the networks you plan to use.</li>
                        <li>Find the right instructor for you</li>
                    </ul>


                </div>
            </div>
        </div>
        </div>
    );
};

export default DualSim;