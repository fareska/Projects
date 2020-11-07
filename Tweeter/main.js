
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPost(tweeter.getPosts())
 
    // return {
    //     getPosts: getPosts,
    //     addPost: addPost,
    //     removePost: removePost,
    //     addComment: addComment,
    //     removeComment: removeComment,
    // }

const addThePost = () => $("#input").val()

const removeTheCommentPId = () => closest(".post").id  
const removeTheCommentCId = () => closest(".comments").data().id




const post = () => {                   ///// there is already onClick attr on the HTML file
    tweeter.addPost("addThePost")
    $("#input").val("")
}



$("#posts").on("click", ".post-text", function(){    // removePost
    tweeter.removePost((this).closest(".post").id) 
})


$("#posts").on("click", ".delete-comment", function(){    // removeComment
    tweeter.removeComment($(this).removeTheCommentPId(), $(this).removeTheCommentCId()).closest(".comments")
})



// $("#input").on("click", function(){
//         tweeter.addPost(addThePost);
//         $("#input").val("")
// })