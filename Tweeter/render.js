


const Renderer = function () {

    const renderPost = function (posts) {

        $("#posts").empty()

        let postText = ""
        let postId = ""

        for (let post of posts) {
            postText = post.text
            postId = post.id

            postDiv = $(`
        <div class="post" id = "${postId}">
        <br> 
        <h5 class="post-text">${postText}</h5>       
        <input type="text" placeholder="Got something to say?" class="cInput"></input>
        <button class="cButton">Comment</button>
        <button class="delete" >Delete Post</button>
        </div> `)
            $("#posts").append(postDiv)

            for (let comment of post.comments) {
                const commentDive = $(`<div class="comments" data-id="${comment.id}">
                                 <button class="delete-comment">X</button> ${comment.text}
                                 </div> `)
                $(`#${postId}`).find(".post-text").append(commentDive)
            }
        }
    }
    return { renderPost: renderPost }
}
