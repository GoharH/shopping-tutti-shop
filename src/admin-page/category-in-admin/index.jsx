import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from '../components/open-modal';
import CategoryForm from "./category-form";
import './style.scss';

const CategoryInAdmin = ({ title, btnTitle }) => {
    const categoryList = useSelector(state => state.CategoryReducer.categoryList)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const handleAddClick = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
        setSelectedCategory(null)
    }
    const handleEdit = (category,) => {
        setSelectedCategory(category)
        setIsOpen(true)
    }

    const handleDelete = async (id) => {
        // console.log(id)
        const result = await axios.delete(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categoryList/${id}`)
        getCategoryList()
    }

    //console.log(categoryList)

    const getCategoryList = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categoryList')
        if (result.data) {
            //console.log(result.data);
            dispatch({ type: 'ADD_CATEGORY', payload: result.data })
        }
    }

    useEffect(() => {
        console.log(categoryList)
        getCategoryList()
    }, [])
    useEffect(() => {
        const user = localStorage.getItem('token-user')
        if (user) {
            setToken(user)
            navigate('/category-admin')
        }
    }, [])
    const handleLogOut = () => {
        //console.log(token)
        setToken('')
        console.log(token)
        // navigate('/home')
    }
    return <div className="G-page-section">
        <div className='G-page-header'>
            <h3 className="G-header-title">{title}</h3>
            <button className="login-btn" onClick={handleLogOut}>Log out</button>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                <button className="page-btn" onClick={handleAddClick}>Add a {btnTitle}</button>
            </div>
            <div className="G-page-creating">
                {categoryList.length ? categoryList.map((category, index) => {
                    return <div className="added-box G-center" key={category._id}>
                        <div className="changing-icons " >
                            <span className="edit-icon icon-pencil2" onClick={() => handleEdit(category)}></span>
                            <span className="del-icon icon-cancel-circle" onClick={() => handleDelete(category._id)}></span>
                        </div>
                        <div className="category-main G-center">
                            <span className="category-img" style={{ backgroundImage: `url('${category.image}')` }}></span>
                            <h3>{category.catName}</h3>
                        </div>
                    </div>
                }) : <div >
                    <p className="arr-is-empty">There are no categories here</p>
                </div>}


                {isOpen ? <Modal onClose={handleCloseModal} >
                    <CategoryForm handleCloseModal={handleCloseModal} updateList={getCategoryList} selected={selectedCategory} />
                </Modal> : null}
            </div>
        </div>

    </div>
}
export default CategoryInAdmin