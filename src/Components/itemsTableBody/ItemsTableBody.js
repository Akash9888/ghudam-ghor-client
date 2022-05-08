import React from "react";

const ItemsTableBody = (props) => {
    const {
        _id,
        productName,
        description,
        photo,
        supplier,
        quantity,
        price,
        email,
    } = props.item;

    return (
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-slate-200 even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {_id}
            </th>
            <td className="px-6 py-4"> {productName}</td>
            <td className="px-6 py-4">{description}</td>
            <td className="px-6 py-4">{supplier}</td>
            <td className="px-6 py-4">{quantity}</td>
            <td className="px-6 py-4"> ৳{price}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">
                <button
                    className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    onClick={() => {
                        props.deleteProduct(_id);
                    }}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Delete
                    </span>
                </button>
            </td>
        </tr>
    );
};

export default ItemsTableBody;
