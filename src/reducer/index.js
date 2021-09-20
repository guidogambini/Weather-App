import Swal from 'sweetalert2'

const initialState = [];


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_CITY":
            if (state.some(item => item.name === action.payload.name)) {
                Swal.fire({
                title: 'The city is already available!',
                text: 'Try with another one',
                icon: 'error',
                confirmButtonText: 'Go!'
              })
            }
            else if (state.length >= 4) {
                Swal.fire({
                title: 'Limit exceeded!',
                text: 'Remove any of the previous countries',
                icon: 'error',
                confirmButtonText: 'Go!'
              })
            }
            else if (!action.payload.name) {
                Swal.fire({
                title: 'Unexpected city!',
                text: 'Try with another one',
                icon: 'error',
                confirmButtonText: 'Go!'
              })
            }
            else {
            return [
                ...state,
                action.payload
            ]}
            

        case "REMOVE_CITY":

            return state.filter(city => city.id !== action.payload)

        default: return state;
    }
}


export default reducer;