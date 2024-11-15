let btnPost = document.getElementById("btn-post");
let commentContainer = document.getElementById("comment-container");
let firstComment = document.getElementById("first-comment");

// firstComment.addEventListener('click', (e)=>{
//     console.log(e.target);
//     e.target.parentNode.removeChild(e.target);
// })

// for(comment of commentContainer.children) {
//     comment.addEventListener('click', (e)=>{
//         console.log(e.target);
//         e.target.parentNode.removeChild(e.target);
//     })
// }


firstComment.addEventListener('click', (e) => {
    // console.log(e.target);
    console.log("Here I am");
})

commentContainer.addEventListener('click', (e) => {
    console.log("here i am, tor baap");
    // e.target.parentNode.removeChild(e.target);
    e.stopPropagation();
})

document.getElementById("body").addEventListener('click', () => {
    console.log("here i am, tor baaper baaap");
})


console.log(commentContainer)
btnPost.addEventListener('click', () => {
    let newComment = document.getElementById("newComment").value;
    let newPost = document.createElement("p");
    newPost.innerText = newComment;
    newPost.classList.add("comment")

    commentContainer.appendChild(newPost);

    document.getElementById("newComment").value = "";

})