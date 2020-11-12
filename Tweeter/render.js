


const Renderer = function () {

    const createPost = (post) => {
        const postText = post.text
        const postId = post.id

        return $(`
                <div class="post" id = "${postId}">
                    <br>
                    <h5 class="post-text">${postText}</h5>
                    <input type="text" placeholder="Got something to say?" class="cInput"></input>
                    <button class="cButton">Comment</button>
                    <button class="delete" >Delete Post</button>
                </div>
        `)
    }

    const createComments = (comments) => {
        const $commentContainer = $('<div></div>')
        for (let comment of comments) {
            const commentDive = $(`
            <div class="comments" data-id="${comment.id}">
            <button class="delete-comment">X</button> ${comment.text}
            </div>
            `)
            $commentContainer.append(commentDive)
        }

        return $commentContainer
    }

    const renderPosts = function (posts) {

        $("#posts").empty()

        for (let post of posts) {
            const $postDiv = createPost(post)
            const $commentContainer = createComments(post.comments)
            $postDiv.find('.text').append($commentContainer)

            $("#posts").append($postDiv)
        }
    }
    return { renderPosts }
}