import * as api from '../api/index.js';



export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPoste();
        dispatch({ type: 'FETCH_ALL', Payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
