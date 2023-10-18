import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
    const loadedProducts = useLoaderData()
    const[product, setProduct] = useState(loadedProducts)
    console.log(product);
    // const {_id, name, brand, price, type, rating, img, description}  = loadedProducts || {}
    return (
        <>
        <div className="overflow-x-auto my-20">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    product.map(item=> 
                        <tr key={item._id}>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item?.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{item?.name}</div>
                                </div>
                            </div>
                            </td>
                            <td>${item?.price}</td>
                            <td>{item?.type}</td>
                            <th><AiFillDelete className="text-2xl cursor-pointer hover:text-red-700"/></th>
                        </tr>
                    )
                }
                
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Cart;