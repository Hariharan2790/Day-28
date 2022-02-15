import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Productedit() {
    let params = useParams();
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            mobilebrand: '',
            model: '',
            price: ''
        },
        onSubmit : async values =>{
            try {
                await fetch(`https://61d19a13da87830017e592a4.mockapi.io/products/${params.id}`,{
                    method : "PUT",
                    body : JSON.stringify(values),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                alert("Data Update Successfully")
                navigate("/products")

            } catch (error) {
                console.log(error)
            }
        }
     } )
    return (
        <div>
            <h3 className='header'>Edit Product</h3>
            <form className='productForm' onSubmit={formik.handleSubmit}>

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
                    <input type="text" class="form-control" name="price" aria-describedby="emailHelp" placeholder="Enter Price"
                        onChange={formik.handleChange} value={formik.values.price} />
                </div>

                <button type="submit" class="btn btn-primary">Edit Product</button>
            </form>
        </div>
    )
}

export default Productedit