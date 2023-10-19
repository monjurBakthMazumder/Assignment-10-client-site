import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";
const Cart = () => {
    const loadedProducts = useLoaderData()
    const[product, setProduct] = useState(loadedProducts)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-site-45slczu5o-md-monjur-bakth-mazumders-projects.vercel.app/orders/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Product has been deleted.',
                            'success'
                          )
                    }
                    const remaining = product?.filter(item=> item._id !== id)
                    setProduct(remaining)
                })
              
            }
          })
    }
    return (
        <>
        <div className="overflow-x-auto my-10 px-[5%] sm:px-[10%]">
            <h1 className="text-xl md:text-2xl lg:text-3xl underline font-bold text-center my-5">Total Product: {product?.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-secondary text-xl"> 
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
                    product?.map(item=> 
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
                            <th><AiFillDelete onClick={()=>handleDelete(item?._id)} className="text-2xl cursor-pointer hover:text-red-700"/></th>
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