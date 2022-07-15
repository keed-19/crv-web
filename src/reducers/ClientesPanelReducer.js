const ClientesPanelReducer = (state, action) => {
    switch(action.type){
        case 'LLENAR': return action.data
        case 'ELIMINAR': return state.filter( ccitem => ccitem !== action.value)
        case 'AGREGAR': return [...state, action.value]
        default: return state
    }
}

export {ClientesPanelReducer as default}