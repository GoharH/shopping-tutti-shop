const initialState = {
    userList: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            {
                return {...state, userList: [...state.userList, action.payload] }
            }


        case 'DEL_USER':
            {

                return {...state, userList: state.userList.filter((item, i) => i !== action.payload) }
            }


        case 'EDIT_USER':
            {
                const newUpdatedUser = state.userList.map((item, i) => {
                    if (action.payload.index === i) {
                        item = action.payload.userData
                    }
                    return item
                })
                return {...state, userList: newUpdatedUser }
            }
        default:
            {
                return {...state }
            }
    }
}
export default UserReducer