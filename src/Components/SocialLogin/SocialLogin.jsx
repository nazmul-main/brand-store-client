import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {


    const {  googleLogin } = useContext(AuthContext)
    

    const handleSocialLogin = (loginFunction) => {
        loginFunction()
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }



    return (
        <>
            <div className='divider'>Countinew With</div>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} type="button" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-200">Sign in with Google</button>
            </div>
        </>
    );
};

export default SocialLogin;