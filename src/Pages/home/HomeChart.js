import React from "react";
import { useAlert } from "react-alert";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Loader from "../../Components/loader/Loader";
import useFetch from "../../CustomHooks/useFetch";

const HomeChart = () => {
    const alert = useAlert();

    const { data, loading, error } = useFetch(
        `https://fierce-forest-36458.herokuapp.com/api/products/fetch`
    );
    if (error) {
        alert.error(error.message);
    }
    if (loading) {
        return <Loader />;
    }
    return (
        <div style={{ width: "100%" }}>
            <h1 className="text-center text-2xl font-bold m-5">
                Product Stock Graph
            </h1>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="productName" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        connectNulls
                        type="monotone"
                        dataKey="quantity"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
            <h4 className="text-center   m-2">Fig: Product Vs Quantity</h4>
        </div>
    );
};

export default HomeChart;
