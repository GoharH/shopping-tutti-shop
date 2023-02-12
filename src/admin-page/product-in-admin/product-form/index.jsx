import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomInput from "../../../components/custom-input";
import './style.scss';

const ProductForm = ({ handleCloseModal, updateList, selected }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState({
        image: '',
        prodName: '',
        price: '',
        description: '',
        size: '',
        color: '',
        category: ''
    })
    const [errorProduct, setErrorProduct] = useState({
        image: '',
        prodName: '',
        price: '',
        description: '',
        size: '',
        color: '',
        category: ''
    })
    const onImageChange = (element) => {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setProduct({ ...product, image: reader.result })
        }
        reader.readAsDataURL(file);
    }
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const isValidate = () => {
        let isValidate = true
        const newError = {
            image: '',
            prodName: '',
            price: '',
            description: '',
            size: '',
            color: '',
            category: ''
        }
        if (!product.image) {
            newError.image = 'Choose an image'
            isValidate = false
        }
        if (!product.prodName) {
            newError.prodName = 'Fill a name'
            isValidate = false
        }
        if (!product.price) {
            newError.price = 'Fill a price'
            isValidate = false
        }
        if (!product.description) {
            newError.description = 'fill about the product'
            isValidate = false
        }
        if (!product.size) {
            newError.size = 'Fill a size of the product'
            isValidate = false
        }
        if (!product.color) {
            newError.color = 'Fill a color of the product'
            isValidate = false
        }
        setErrorProduct(newError)
        return isValidate
    }

    const handleSubmit = () => {
        if (isValidate()) {
            if (product._id) {
                updateProduct()
            } else {
                createProduct()
            }
        }
    }
    const createProduct = async () => {
        setIsLoading(true)
        const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList', product)
        // console.log(result + '1111')
        if (result.data) {
            setIsLoading(false)
            updateList()
            handleCloseModal()
        }
    }

    const updateProduct = async () => {
        setIsLoading(true)
        const body = { ...product }
        delete body._id
        const result = await axios.put(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList/${product._id}`, body)
        setIsLoading(false)
        updateList()
        handleCloseModal()
    }
    useEffect(() => {
        if (selected) {
            setProduct(selected)
        }
    }, [selected])
    return <section className="fill-form G-center">
        <h2>Create a new product</h2>
        <div className="add-image">
            <label className="G-center">
                <input type="file" onChange={onImageChange} />
                <span className="icon-image"></span>
                <div className="choose-img-text">Choose an image</div>
            </label>
        </div>
        <div className="G-flex">
            <div className="upload-image" style={{ backgroundImage: `url('${product.image}')` }}></div>
        </div>
        <CustomInput label='Product Name'
            className='input'
            errorText='Enter a name of the product'
            name='prodName'
            value={product.prodName}
            // placeholder="Product Name"
            onChange={handleChange} />
        <CustomInput label='Price of the product'
            type='number'
            className='input'
            errorText='Enter a price of the product'
            name='price'
            value={product.price}
            onChange={handleChange} />
        <CustomInput name="description" className="input product-main"
            label='Description of the product'
            value={product.description}
            errorText='What about the product?'
            onChange={handleChange} />
        <CustomInput label='Product Size'
            className='input'
            errorText='Enter a size of the product'
            name='size'
            value={product.size}
            // placeholder="Product Size"
            onChange={handleChange} />
        <CustomInput label='Product Color'
            className='input'
            errorText='Enter a color of the product'
            name='color'
            value={product.color}
            //placeholder="Product Color"
            onChange={handleChange} />
        <CustomInput label='Product Category'
            className='input'
            errorText='Enter a category of the product'
            name='category'
            value={product.category}
            onChange={handleChange} />
        <button className="create-btn" onClick={handleSubmit}>{isLoading ? 'loading...' : product._id ? 'Update' : 'Create'}</button>
    </section>
}
export default ProductForm
