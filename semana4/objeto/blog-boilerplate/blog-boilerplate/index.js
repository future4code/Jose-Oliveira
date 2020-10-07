let arrayDePosts = [ ]
function criarPost(){
let post ={
    titulo: document.getElementById("titulo-post").value,
    autor: document.getElementById("autor-post").value,
    conteudo: document.getElementById("conteudo-post").value
}
arrayDePosts.push(post)
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value =""
    document.getElementById("postagens").innerHTML += `<p class="posts">${post.titulo}</p>`;
    document.getElementById("postagens").innerHTML += `<p>${post.autor}</p>`;
    document.getElementById("postagens").innerHTML += `<p>${post.conteudo}</p>`;
}