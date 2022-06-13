const LoanPurposeReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.external_id !== action.external_id)
        case 'AGREGAR': return [...state, {external_id:action.external_id, description:action.description}]
        default: return state
    }
}

export {LoanPurposeReducer as default}