const ClientPhoneReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.phone !== action.phone)
        case 'AGREGAR': return [...state, {phone:action.phone, phone_type:action.phone_type, phone_propierty:action.phone_propierty}]
        default: return state
    }
}

export {ClientPhoneReducer as default}