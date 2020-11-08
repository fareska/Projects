
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

    let postIdCounter = _posts.length;

    let commentIdCounter = 0

    for (i = 0; i < _posts.length; i++) {
        commentIdCounter += _posts[i].comments.length
    }

    const getPosts = () => _posts

    const addPost = function (text) {
        const newPost = { text: text, id: `p${(postIdCounter + 1)}`, comments: [] }
        postIdCounter++;
        _posts.push(newPost)
    }
    const removePost = function (postId) {
        let postIndex = 0
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id == postId) {
                postIndex = i
            }
        }
        _posts.splice(postIndex, 1)
    }
    const addComment = function (text, postId) {
        commentIdCounter++
        let newComment;
        for (let i = 0; i < _posts.length; i++) {
            if (postId == _posts[i].id) {
                newComment = { id: `c${(commentIdCounter)}`, text: text }
                _posts[i].comments.push(newComment)
            }
        }
    }
    const removeComment = function (postId, commentId) {
        for (let i = 0; i < _posts.length; i++) {
            if (postId == _posts[i].id) {
                for (let index in _posts[i].comments) {
                    if (commentId == _posts[i].comments[index].id) {
                        _posts[i].comments.splice(index, 1)
                    }
                }
            }
        }
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
    }

}
