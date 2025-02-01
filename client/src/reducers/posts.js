
const posts = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH':
            return posts;
        default:
            return posts;
    }
};
export default posts;


