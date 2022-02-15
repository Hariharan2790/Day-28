import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Productcreate() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            mobilebrand: "",
            model: "",
            price: ""
        },
        onSubmit: async values => {
            try {
                await fetch(`https://61d19a13da87830017e592a4.mockapi.io/products`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                alert('Data Saved Successfully')
                navigate('/products')
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <>
            <h3 className='header'>Create New Products</h3>
            <form className='productform' onSubmit={formik.handleSubmit}>
                <div class="form-group">
                    <label>Mobile Brand</label>
                    <input type="text" class="form-control" name="mobilebrand" placeholder="Enter Mobile Brand"
                        onChange={formik.handleChange} value={formik.values.mobilebrand} />

                </div>
                <div class="form-group">
                    <label>Model</label>
                    <input type="text" class="form-control" name="model" placeholder="Enter Model"
                        onChange={formik.handleChange} value={formik.values.model} />

                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" name="price" aria-describedby="emailHelp" placeholder="Enter Price"
                        onChange={formik.handleChange} value={formik.values.price} />
                </div>

                <button type="submit" class="btn btn-primary">Create New Product</button>

            </form>
        </>
    )
}

export default Productcreate