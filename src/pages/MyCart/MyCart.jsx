import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const cart = useLoaderData()
    console.log(cart);


    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://phone-store-eight.vercel.app/mycart/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })

    };


    return (
        <div className="max-w-screen-xl mx-auto px-4">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    cart.map(item => (
                        <div key={item._id}>
                            <div>
                                <div className="bg-white rounded-lg shadow-md p-4 w-64">
                                    <div>
                                        <img src={item.photo} alt='' className="w-full  object-cover mb-2" />
                                        <h2 className=" font-bold mb-2 text">{item.name}</h2>
                                    </div>

                                    <div className="md:flex justify-between">
                                        <p className="text-gray-600 mb-2">{item.brand}</p>
                                        <p className="text-gray-600 mb-2">{item.type}</p>
                                    </div>
                                    <div className="md:flex justify-between">
                                        <p className="text-green-600 font-semibold mb-2">{item.price}</p>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-yellow-400 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 2a.75.75 0 01.683.43l1.822 3.774 4.078.594a.75.75 0 01.416 1.284l-2.94 2.872.694 4.07a.75.75 0 01-1.088.792L10 12.347l-3.623 1.904a.75.75 0 01-1.088-.792l.694-4.07-2.94-2.872a.75.75 0 01.416-1.284l4.078-.594 1.822-3.774A.75.75 0 0110 2z"
                                                />
                                            </svg>
                                            {item.rating}
                                        </div>
                                    </div>
                                    <div className="md:flex justify-between">

                                        <button onClick={() => handleDelete(item._id)} className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Delete from cart</button>




                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MyCart;