import { useState } from "react";
import { useAlert } from "react-alert";
import ItemsTableBody from "../../Components/itemsTableBody/ItemsTableBody";
import Loader from "../../Components/loader/Loader";
import Pagination from "../../Components/pagination/Pagination";
import useCount from "../../CustomHooks/useCount";
import useDelete from "../../CustomHooks/useDelete";
import useFetch from "../../CustomHooks/useFetch";

const ManageItems = () => {
    const alert = useAlert();

    const [size, setSize] = useState(10);
    const [curPage, setCurPage] = useState(1);

    const {
        data: items,
        loading,
        error,
        reFetch,
    } = useFetch(
        `http://localhost:5000/api/products/fetch?page=${curPage}&size=${size}`
    );

    const handlePageClick = (data) => {
        let cur = data.selected + 1;
        setCurPage(cur);
        console.log(cur);
    };
    const { deleteRequest } = useDelete();
    const deleteProduct = async (_id) => {
        const conf = window.confirm("Are you sure you want to delete?");
        if (conf) {
            console.log("deleteProduct");
            await deleteRequest(
                `http://localhost:5000/api/products/delete/${_id}`
            );
            await reFetch();
        }
    };

    if (loading) {
        return <Loader />;
    }
    if (error) {
        alert.error(error.message);
    }
    return (
        <div className="container mx-auto  w-full  p-6 ">
            <h1 className="text-center p-5">Manage items</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>

                            <th scope="col" class="px-6 py-3">
                                description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price (unit)
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {/* <span class="sr-only">Edit</span> */}
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
            <div className="p-6">
                <Pagination handlePageClick={handlePageClick} />
            </div>
        </div>
    );
};

export default ManageItems;
