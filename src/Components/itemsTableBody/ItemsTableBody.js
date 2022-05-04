import React from "react";
import useDelete from "../../CustomHooks/useDelete";

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
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-slate-200 even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {_id}
            </th>
            <td class="px-6 py-4"> {productName}</td>
            <td class="px-6 py-4">{description}</td>
            <td class="px-6 py-4">{supplier}</td>
            <td class="px-6 py-4">{quantity}</td>
            <td class="px-6 py-4"> ৳{price}</td>
            <td class="px-6 py-4">{email}</td>
            <td class="px-6 py-4">
                <button
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                        props.deleteProduct(_id);
                    }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ItemsTableBody;
