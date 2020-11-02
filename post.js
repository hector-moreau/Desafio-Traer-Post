async function getPosts(url){
    try{
        return await fetch ('http://jsonplaceholder.typicode.com/posts').then(response => response.json())
    }catch(err){
        return err
    }
}

let btn = document.getElementsByTagName('button')[0]

btn.addEventListener('click', (event) =>{
    event.preventDefault();
    getPosts().then(resp => {
        renderPosts(resp)
    });
})

function renderPosts(postsArray) {
    let resultSection = document.getElementById('result')
    let postsUl = document.createElement('ul')
    postsArray.forEach(post => {
        let postLi = createLiFromPost(post)
        postsUl.appendChild(postLi)
    })
    resultSection.appendChild(postsUl)
}

function createLiFromPost(post){
    let postLi = document.createElement('li')
    let title = document.createElement ('strong')
    let titleText = document.createTextNode(post.title)
    let contentText = document.createTextNode(post.body)
    title.appendChild(titleText)
    postLi.appendChild(title)
    postLi.appendChild(contentText)
    return postLi
}