const BeneficiariosReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.addressLine !== action.addressLine)
        case 'AGREGAR': return [...state, {
            name: action.name,
            lastname: action.lastname,
            second_lastname: action.second_lastname,
            dob: action.dob,
            address: action.address,
            // address:[{
            //     address_line: action.address_line,
            //     city: action.city,
            //     municipality: action.municipality,
            //     province: action.province,
            //     country: action.country,
            //     address_type: action.address_type,
            //     ownership_type: action.ownership_type,
            //     residence_since: action.residence_since,
            //     street_reference: action.street_reference,
            //     default: action.default
            // }],
            percentage: action.percentage,
            phones: action.phones,
            // phones: [{
            //     phone:action.phone,
            //     phone_type:action.phone_type,
            //     phone_propierty:action.phone_propierty,
            // }],
            relationship:action.relationship
        }]
        default: return state
    }
}

export {BeneficiariosReducer as default}