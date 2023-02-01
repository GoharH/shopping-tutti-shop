import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/open-modal";
import ProductForm from './product-fill';

const ProductInAdmin = ({ title, btnTitle }) => {
    const productList = useSelector(state => state.ProductReducer.productList)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const dispatch = useDispatch()

    const handleAddClick = () => {
        setIsOpen(true)
    }
    const handleEdit = (product) => {
        setSelectedProduct(product)
        setIsOpen(true)
    }
    const handleDelete = async (id) => {
        const result = await axios.delete(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList/${id}`)
        getProductList()
    }

    const handleCloseModal = () => {
        setIsOpen(false)
        setSelectedProduct(null)
        // null , vor mi prod avelacneluc heto 2-rd avelacneluc forman lini datark
    }
    const getProductList = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList')
        if (result.data) {
            //  console.log(result);
            dispatch({ type: 'ADD_PRODUCT', payload: result.data })
        }
    }
    useEffect(() => {
        //console.log(productList + 'list')
        getProductList()
        //console.log(productList + 'LL')
    }, [])
    return <div className="G-page-section">
        <div className='G-page-header'>
            <h3 className="G-header-title">{title}</h3>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                <button className="page-btn" onClick={handleAddClick}>Add a {btnTitle}</button>
            </div>
            <div className="G-page-creating">
                {
                    productList.length ? productList.map((product, index) => {
                        return <div className="added-box G-center" key={product._id}>
                            <div className="changing-icons " >
                                <span className="edit-icon icon-pencil2" onClick={() => handleEdit(product)}></span>
                                <span className="del-icon icon-cancel-circle" onClick={() => handleDelete(product._id)}></span>
                            </div>
                            <div className="category-main G-center">
                                <span className="category-img" style={{ backgroundImage: `url('${product.image}')` }}></span>
                                <h3>{product.prodName}</h3>
                                <p>Price: ${product.price}</p>
                                <p>{product.description}</p>
                                <p>Size: {product.size}</p>
                                <p>Color: {product.color}</p>
                            </div>
                        </div>
                    }) : <div>
                        <p className="arr-is-empty">There are no products here</p>
                    </div>
                }

                {isOpen ? <Modal onClose={handleCloseModal}>
                    <ProductForm handleCloseModal={handleCloseModal} updateList={getProductList} selected={selectedProduct} />
                </Modal> : null}
            </div>
        </div>

    </div>
}
export default ProductInAdmin