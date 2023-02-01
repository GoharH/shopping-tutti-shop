const initialState = {
    productList: []
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            {
                return {...state, productList: [...action.payload] }
            }


        case 'DEL_PRODUCT':
            {

                return {...state, productList: state.productList.filter((item, i) => i !== action.payload) }
            }


        case 'EDIT_PRODUCT':
            {
                const newUpdatedProduct = state.productList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.productData
                    }
                    return item
                })
                return {...state, productList: newUpdatedProduct }
            }
        default:
            {
                return {...state }
            }
    }
}
export default ProductReducer