import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productlist() {
    const [products, setProducts] = useState([])
    useEffect(async () => {
        try {
            let productDetail = await fetch("https://61d19a13da87830017e592a4.mockapi.io/products")
            let productData = await productDetail.json()
            setProducts(productData)

        } catch (error) {
            console.log(error)
        }

    }, [])
    var deleteProduct = (async (id) => {
        let result = await fetch(`https://61d19a13da87830017e592a4.mockapi.io/products/${id}`, {
            method: "DELETE",
        });
        let productDetail = await fetch("https://61d19a13da87830017e592a4.mockapi.io/products")
        let productData = await productDetail.json()
        setProducts(productData)
    })
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 id="head" class="h3 mb-0 text-gray-800">Products</h1>
                <Link to='/create-product' class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-plus fa-lg text-white-50"></i>Create Product</Link>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Mobile Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col" colSpan="2">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <tr key={index}>
                                <th>{product.id}</th>
                                <td>{product.mobilebrand}</td>
                                <td>{product.model}</td>
                                <td>{product.price}</td>
                                <td><Link to={`/edit-product/${product.id}`} class="btn btn-info">Edit Product</Link></td>
                                <td><button onClick={() => deleteProduct(product.id)} class="btn btn-danger">Delete Product</button></td>

                            </tr>
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default Productlist