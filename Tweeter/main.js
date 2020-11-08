
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPost(tweeter.getPosts())

/////add post- twit button
const post = () => {
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPost(tweeter.getPosts())
}

//////remove post - delete post button
$("#posts").on("click", ("button.delete"), function () {
    tweeter.removePost($(this).closest(".post").attr("id"))
    renderer.renderPost(tweeter.getPosts())

})

/////add comment - comment button
$("#posts").on("click", "button.cButton", function () {
    let cText = $(this).closest(".post").find(".cInput").val()
    let postId = $(this).closest(".post").attr("id")
    tweeter.addComment(cText, postId)
    renderer.renderPost(tweeter.getPosts())
})

////// remove comment - the X button
$("#posts").on("click", ".delete-comment", function () {
    tweeter.removeComment($(this).closest(".post").attr("id"), $(this).closest(".comments").data("id"))
    renderer.renderPost(tweeter.getPosts())
})




