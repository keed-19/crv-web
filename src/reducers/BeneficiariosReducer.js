const BeneficiariosReducer = (state, action) => {
    // console.log(state)
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.dob !== action.dob)
        case 'AGREGAR': return [...state, {
            name: action.name,
            lastname: action.lastname,
            second_lastname: action.second_lastname,
            dob: action.dob,
            address: action.address,
            percentage: action.percentage,
            phones: action.phones,
            relationship:action.relationship
        }]
        default: return state
    }
}

export {BeneficiariosReducer as default}