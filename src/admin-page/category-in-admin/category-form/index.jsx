import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CustomInput from '../../../components/custom-input';
import './style.scss';

const CategoryForm = ({ handleCloseModal, updateList, selected }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState({
        image: '',
        catName: '',
    })
    const [errorCategory, setErrorCategory] = useState({
        image: '',
        catName: '',
    })

    useEffect(() => {
        console.log(selected)
        if (selected) {
            setCategory(selected)
        }
    }, [selected])
    const isValidate = () => {
        let isValidate = true
        const newError = {
            image: '',
            catName: '',
        }
        if (!category.image) {
            newError.image = 'Choose an image'
            isValidate = false
        }
        if (!category.catName) {
            newError.catName = 'Fill a name'
            isValidate = false
        }
        setErrorCategory(newError)
        return isValidate
    }
    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    function onImageChange(element) {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setCategory({ ...category, image: reader.result })
        }
        reader.readAsDataURL(file);
    }
    const handleSubmit = () => {
        if (isValidate()) {
            if (category._id) {
                updateCategory()
            } else {
                createCategory()

            }
        }
    }

    const createCategory = async () => {
        setIsLoading(true)
        const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categoryList', category)
        if (result.data) {
            console.log(result)
            setIsLoading(false)
            updateList()
            handleCloseModal()
        }
    }
    const updateCategory = async () => {
        setIsLoading(true)
        const body = { ...category }
        delete body._id
        const result = await axios.put(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categoryList/${category._id}`, body)
        setIsLoading(false)
        updateList()
        handleCloseModal()
    }

    return <section className="fill-form G-center">
        <h2>Create a new category</h2>
        <div className="add-image">
            <label className="G-center">
                <input type="file" onChange={onImageChange} />
                <span className="icon-image"></span>
                <div className="choose-img-text">Choose an image</div>
            </label>
        </div>
        <div className="upload-image" style={{ backgroundImage: `url('${category.image}')` }}></div>
        <CustomInput label='Category Name'
            className='input'
            errorText='Input a Category name'
            name='catName'
            value={category.catName}
            placeholder="Category Name"
            onChange={handleChange} />
        <button className="create-btn" onClick={handleSubmit}>{isLoading ? 'loading...' : category._id ? 'Update' : 'Create'}</button>
    </section>

}
export default CategoryForm