import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import ItemsTableBody from "../../Components/itemsTableBody/ItemsTableBody";
import Loader from "../../Components/loader/Loader";

import useDelete from "../../CustomHooks/useDelete";
import useFetch from "../../CustomHooks/useFetch";
import Swal from "sweetalert2";
const ManageItems = () => {
    const alert = useAlert();

    const {
        data: items,
        loading,
        error,
        reFetch,
    } = useFetch(
        `https://fierce-forest-36458.herokuapp.com/api/products/fetch`
    );

    const { deleteRequest, loading: loading2, error: error2 } = useDelete();
    const deleteProduct = async (_id) => {
        Swal.fire({
            title: "Are you sure delete this product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRequest(
                    `https://fierce-forest-36458.herokuapp.com/api/products/delete/${_id}`
                );
                Swal.fire(
                    "Deleted!",
                    "Your product has been deleted.",
                    "success"
                );
                reFetch(
                    `https://fierce-forest-36458.herokuapp.com/api/products/fetch`
                );
            }
        });
    };

    if (loading || loading2) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    if (error2) {
        alert.error(error2.message);
    }
    return (
        <div className="container mx-auto  w-full  p-6 ">
            <h1 className="text-center text-2xl font-bold m-5 mt-2">
                Manage items
            </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-700 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price (unit)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {/* <span className="sr-only">Edit</span> */}
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item) => {
                            return (
                                <ItemsTableBody
                                    key={item._id}
                                    item={item}
                                    deleteProduct={deleteProduct}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="text-center mt-5">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <Link to="/add-item"> Add Item</Link>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ManageItems;
