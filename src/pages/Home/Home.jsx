
import Banner from "../../Components/Header/Banner/Banner";
import OurProduct from "../../Components/ourProduct/ourProduct";
import AllBrands from "../../AllBrands/AllBrands";
import DualSim from "../../Components/DualSim/DualSim";

const Home = () => {


   

    return (
        <div>
            <Banner></Banner>
            <AllBrands></AllBrands>
            <DualSim></DualSim>
            <OurProduct ></OurProduct>
        </div>
    );
};

export default Home;