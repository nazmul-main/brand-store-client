import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="flex items-center justify-center max-w-screen-xl mx-auto">
    <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Sign Up</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="you@example.com" required />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="text" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="********" required />
            </div>
            <div className="mb-4">
                <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:ring focus:ring-indigo-200">Sign Up</button>
            </div>
        </form>
        <p className="text-center text-gray-600">Already have an account? <Link to={'/signin'}>Sign In</Link></p>
        <div className="mt-4">
            <button type="button" className="w-full bg-red-500 text-white py-2 rounded-lg hover-bg-red-600 focus:ring focus:ring-red-200">Sign up with Google</button>
        </div>
    </div>
</div>

        </div>
    );
};

export default SignUp;