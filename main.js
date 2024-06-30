document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Heclypso')
    .then(function(res){
        if (!res.ok) {
            throw new Error('O sistema não está respondendo adequadamente');
        }
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repositorios.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
    .catch(function(erro){
        alert("Ocorreu um erro.")
    })
    .finally(function() {
        console.log('O fetch foi executado;');
    });
})