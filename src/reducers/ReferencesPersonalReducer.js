const ReferencesPersonalReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.dob !== action.dob)
        case 'AGREGAR': return [...state, {
            address: action.address,
            dob: action.dob,
            lastname: action.lastname,
            name: action.name,
            phones: action.phones,
            relationship: action.relationship,
            second_lastname: action.second_lastname
        }]
        default: return state
    }
}

export {ReferencesPersonalReducer as default}