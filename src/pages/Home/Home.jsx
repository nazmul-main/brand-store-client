import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import OurProduct from "../../Components/ourProduct/ourProduct";

const Home = () => {

    const phones = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <OurProduct phones={phones}></OurProduct>
        </div>
    );
};

export default Home;