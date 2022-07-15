const GuarantorReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.rfc !== action.rfc)
        case 'AGREGAR': return [...state, {
            address: action.address,
            company_works_at: action.company_works_at,
            country_of_birth: action.country_of_birth,
            curp: action.curp,
            dob: action.dob,
            e_signature: action.e_signature,
            email: action.email,
            gender: action.gender,
            identification_number: action.identification_number,
            identification_type: action.identification_type,
            lastname: action.lastname,
            marital_status: action.marital_status,
            name: action.name,
            nationality: action.nationality,
            ocupation: action.ocupation,
            person_resides_in: action.person_resides_in,
            phones: action.phones,
            province_of_birth: action.province_of_birth,
            rfc: action.rfc,
            second_lastname: action.second_lastname,
            sex: action.sex
        }]
        default: return state
    }
}

export {GuarantorReducer as default}