const posts = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'FETCH':
            return posts;
        default:
            return posts;
    }
};
export default posts;

// eslint-disable-next-line import/no-anonymous-default-export
// export default (posts = [], action) => {
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return posts;
//         case 'FETCH':
//             return posts;
//         default:
//             return posts;
//     }
// };

