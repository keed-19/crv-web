const GuaranteeReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.expiration_date !== action.expiration_date)
        case 'AGREGAR': return [...state, {
            description: action.description,
            expiration_date: action.expiration_date,
            guarantee_type: action.guarantee_type,
            percentage: action.percentage,
            value: action.value
        }]
        default: return state
    }
}

export {GuaranteeReducer as default}