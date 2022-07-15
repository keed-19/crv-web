const AddressReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.address_line !== action.address_line)
        case 'AGREGAR': return [...state, {address_line: action.address_line, city: action.city, municipality: action.municipality, province: action.province, country: action.country, address_type: action.address_type, ownership_type: action.ownership_type, residence_since: action.residence_since, street_reference: action.street_reference, default: action.default}]
        default: return state
    }
}

export {AddressReducer as default}