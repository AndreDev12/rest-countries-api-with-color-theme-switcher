function reducer(state, action){
    switch (action.type) {
        case 'search_country': {
            // console.log('Búsqueda de país');
            console.log([{country: "aNDORRA"}])
        }

        default:
            return state
    }
}

export default reducer;