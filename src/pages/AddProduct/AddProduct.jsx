
const AddProduct = () => {
    return (
        <div className=" max-w-screen-xl mx-auto px-4 ">
            <h2 className="py-7 text-xl md:text-4xl font-bold text-center border-4">Add product</h2>

            <form>
                <div>
                    <div className="md:flex justify-center gap-7 py-3 mt-5 mb-5">
                        <div className="md:w-2/4 space-y-3">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Brand Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="brand"
                                    type="text"
                                    placeholder="brand"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Price
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="price"
                                    type="text"
                                    placeholder="Price"
                                />
                            </div>

                        </div>
                        <div className="md:w-2/4 space-y-3">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Image
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="image"
                                    type="text"
                                    placeholder="image"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Choose a brand:
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="brand"
                                >
                                    <option value="Select" selected>Select</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Samsung" >Samsung</option>
                                    <option value="Oppo">Oppo</option>
                                    <option value="Realme">Realme</option>
                                    <option value="Intel">Intel</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Rating
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="rating"
                                    type="text"
                                    placeholder="Rating"
                                />
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Short description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                            type="text"
                            placeholder="description"
                        />
                    </div>
                    <button className="btn w-full my-4">ADD</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;