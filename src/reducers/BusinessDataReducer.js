const BusinessDataReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.business_name !== action.business_name)
        case 'AGREGAR': return [...state, {
            address: action.address,
            business_name: action.business_name,
            business_since: action.business_since,
            economic_activity: action.economic_activity,
            phones: action.phones,
            previous_business_activity: action.previous_business_activity,
            sector: action.sector,
            store_type: action.store_type
        }]
        default: return state
    }
}

export {BusinessDataReducer as default}