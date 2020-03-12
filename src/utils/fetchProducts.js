import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../actions/action';

function fetchProducts() {
   
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;