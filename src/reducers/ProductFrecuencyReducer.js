
const ProductFrecuencyReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem.identifier !== action.identifier)
        case 'AGREGAR': return [...state, {identifier:action.identifier, value:action.value, year_periods: action.year_periods}]
        default: return state
    }
}

export {ProductFrecuencyReducer as default}