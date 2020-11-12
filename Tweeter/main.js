
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPost(tweeter.getPosts())

const post = () => {
    const inputValue = $("#input").val()
    tweeter.addPost(inputValue)

    $("#input").val("")
    renderer.renderPost(tweeter.getPosts())
}

//////remove post - delete post button
$("#posts").on("click", "button.delete", function () {
    const postId = $(this).closest(".post").attr("id")

    tweeter.removePost(postId)
    renderer.renderPost(tweeter.getPosts())

})

/////add comment - comment button
$("#posts").on("click", "button.cButton", function () {
    const commentText = $(this).closest(".post").find(".cInput").val()
    const postId = $(this).closest(".post").attr("id")

    tweeter.addComment(commentText, postId)
    renderer.renderPost(tweeter.getPosts())
})

////// remove comment - the X button
$("#posts").on("click", ".delete-comment", function () {
    const postId = $(this).closest(".post").attr("id")
    const commentId = $(this).closest(".comments").data("id")

    tweeter.removeComment(postId, commentId)
    renderer.renderPost(tweeter.getPosts())
})




