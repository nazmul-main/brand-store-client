import { useLoaderData } from "react-router-dom";

const Update = () => {

    const updatePhone = useLoaderData()
    console.log(updatePhone);

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const type = form.type.value
        const price = form.price.value
        const photo = form.photo.value
        const brand = form.brand.value
        const rating = form.rating.value
        console.log(name, type, price, photo, brand, rating,);

        fetch(`http://localhost:5001/phones/${updatePhone._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, 
                type,
                price,
                photo,
                brand,
                rating,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">update</h2>
            <form onSubmit={handleUpdate}>
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
                                    defaultValue={updatePhone?.name}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Type
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="type"
                                    type="text"
                                    placeholder="phone"
                                    defaultValue={updatePhone?.type}
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
                                    defaultValue={updatePhone?.price}
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
                                    name="photo"
                                    type="text"
                                    placeholder="image"
                                    defaultValue={updatePhone?.photo}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Brand Name
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="brand"
                                    defaultValue={updatePhone?.brand}
                                >
                                    <option value="Select" >Select</option>
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
                                    defaultValue={updatePhone?.rating}
                                />
                            </div>

                        </div>

                    </div>
                </div>
                <div>

                    <button className="btn w-full my-4">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;