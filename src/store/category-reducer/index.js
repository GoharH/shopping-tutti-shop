const initialState = {
    categoryList: []
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            {
                //console.log(action.payload)
                return {...state, categoryList: [...state.categoryList, action.payload] }
            }


        case 'DEL_CATEGORY':
            {

                return {...state, categoryList: state.categoryList.filter((item, i) => i !== action.payload) }
            }


        case 'EDIT_CATEGORY':
            {
                const newUpdatedCategory = state.categoryList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.categoryData
                    }
                    return item
                })
                return {...state, categoryList: newUpdatedCategory }
            }
        default:
            {
                return {...state }
            }
    }
}
export default CategoryReducer