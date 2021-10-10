export const initialState = {
    content: {}
}

const reducer = (state, action) => {
    console.log('action', action)

    switch (action.type) {
        case 'ADD_TO_MODAL_CONTENT':
            return {
                ...state,
                content: [{...state.content}, action.item]
            }
            default:
                return state
    }
}

export default reducer