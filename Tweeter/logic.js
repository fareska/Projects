
const Tweeter = function () {

    const _posts = [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]

    // const postIdCounter = () => _posts.length
    let postIdCounter = _posts.length;
    
    let commentIdCounter = 0

    for (i=0; i < _posts.length ; i++){
        commentIdCounter += _posts[i].comments.length
    }

    const getPosts = () => _posts

    const addPost = function (text) {
        const newPost = { text: text, id: `p${(postIdCounter+1)}`, comments: [] }
        postIdCounter++;
        return _posts.push(newPost)
    }

    const removePost = function (postId) {
        let postIndex = 0
        for (let i = o; i < _posts.length ; i++){
            if (_posts[i].id == postId){
                postIndex=i
            }
        }
        return _posts.splice(postIndex, 1)
    }

    const addComment = function (postId, text) {
        let postIndex = 0 
        let newComment = {}
        for (let i=0; i < _posts.length ; i++){
            if (postId == _posts[i].id){
                return postIndex = i
            }
        }
        for( let post of _posts) {
            if (post.id === postId){
                return newComment = { id: `c${(commentIdCounter + 1)}`, text: text }
            }
        }
        commentIdCounter++
        return _posts[postIndex].comments.push(newComment)

    }

    const removeComment = function (postId, commentId) {               // commentIdCounter-- 
        let postIndex = 0
        let commentIndex = 0
        for (let i=0; i < _posts.length ; i++){
            if (postId == _posts[i].id){
                return postIndex = i
            }
        }                   
        for (let i=o; i < _posts[postIndex].comments.length ; i++ ){
            if (commentId == _posts[i].comments.id){
                return commentIndex = i
            }
        }
        return _posts[postIndex].comments.splice(commentIndex, 1)
    }
    
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
    }

}







// const Tweeter = function () {

//     const _posts = [
//     {
//         text: "First post!",
//         id: "p1",
//         comments: [
//             { id: "c1", text: "First comment on first post!" },
//             { id: "c2", text: "Second comment on first post!!" },
//             { id: "c3", text: "Third comment on first post!!!" }
//         ]
//     },
//     {
//         text: "Aw man, I wanted to be first",
//         id: "p2",
//         comments: [
//             { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//             { id: "c5", text: "Yeah, believe in yourself!" },
//             { id: "c6", text: "Haha second place what a joke." }
//         ]
//     }
// ]

//     const postIdCounter = _posts.length

//     let commentIdCounter = 0
//     for (let i in _posts) { commentIdCounter += _posts[i].comments.length }

//     const getPosts = () => _posts

//     const addPost = function (text) {
//         newPost = { text: text, id: `p${(postIdCounter + 1)}`, comments: [] }
//         return _posts.push(newPost)
//     }

//     const removePost = function (postId) {
//         const postNum = postId - postId.slice(0, 1)
//         return _posts.splice((postNum - 1), 1)
//     }

//     const addComment = function (postId, text) {
//         const postNum = postId.substring(1)
//         const commentNum = _posts[postNum - 1].comments.length
//         const newComment = { id: `c${(commentNum + 1)}`, text: text }
//         return _posts[(postNum - 1)].comments.push(newComment)
//     }

//     const removeComment = function (postId, commentId) {
//         const postNum = postId.substring(1)
//         const commentNum = commentId.substring(1)
//         return _posts[(postNum - 1)].comments.splice((commentId - 1), 1)
//     }

//     return {
//         getPosts: getPosts,
//         addPost: addPost,
//         removePost: removePost,
//         addComment: addComment,
//         removeComment: removeComment,
//     }

// }