async function request(url){
    try{
        const resp = await fetch(url).then(response => response.json())
        return resp
    }catch(err){
        console.log(err)
    }
}

async function getInfo(){
    return await request(`https://jsonplaceholder.typicode.com/posts`);
}

function getPosts(){
    getInfo().then(resp => console.log(resp));
}

const btn = document.querySelector("#getPosts")
btn.addEventListener("click",getPosts)