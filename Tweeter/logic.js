
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
        const newPost = { text, id: `p${postIdCounter++}`, comments: [] }
        _posts.push(newPost)
    }

    const removePost = function (postId) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id == postId) {
                _posts.splice(i, 1)
                break
            }
        }
    }

    const addComment = function (text, postId) {
        for (let post of _posts) {
            if (postId == post.id) {
                const newComment = { id: `c${++commentIdCounter}`, text }
                post.comments.push(newComment)
            }
        }
    }

    const removeComment = function (postId, commentId) {
        for (let post of _posts) {
            if (postId == post.id) {
                for (let i in post.comments) {
                    if (commentId == post.comments[i].id) {
                        post.comments.splice(i, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }

}