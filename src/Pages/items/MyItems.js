import ItemsTableBody from "../../Components/itemsTableBody/ItemsTableBody";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHooks/useFetch";
import { useAlert } from "react-alert";
import useDelete from "../../CustomHooks/useDelete";
import Swal from "sweetalert2";
const MyItems = () => {
    const alert = useAlert();
    const [user] = useAuthState(auth);
    const {
        data: myItems,
        loading,
        error,
        reFetch,
        page,
    } = useFetch(
        `https://fierce-forest-36458.herokuapp.com/api/products/filter/${user?.email}`
    );
    const { deleteRequest } = useDelete();
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

    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }

    return (
        <div className="container mx-auto  w-full  p-6 ">
            <h1 className="text-center text-2xl font-bold mt-2 m-5">
                My Items
            </h1>

            <div className="mx-auto">
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
                                    {/* <span  className="sr-only">Edit</span> */}
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {myItems?.map((item) => {
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
            </div>
        </div>
    );
};

export default MyItems;
