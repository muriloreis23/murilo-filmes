let perfil=[];
let emEdicao= false;
let perfilEdicao= null;

function inicializarDados() {
    let dados=JSON.perse(localStorage.ge.getItem("murilofilmes-users"));
    if (dados === null) {
        dados = [
            {
                nome: "Murilo",
                avatar:"img/users/avatar.png",
                crianca: false
            },
            {
                nome: "Capitão",
                avatar: "img/users/avatar4.png",
                crianca: false
            },
            {
                nome:"Trizóio",
                avatar: "img/users/avatar5.png",
                crianca: false
            }
        ];
        localStorage.setItem("murilofilmes-users", JSON.stringify(dados));
    }
    perfis= dados;
}

// Ao carregar a página executada as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    carregarPerfis();
    tooggleLoading();
    let nome = document.getElementById('Nome');
    nome.addEventListener("Keydown",function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector('.btn-light').click();
        }
    });
    let icons = document. querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.style.display = "none";
    })
});

function carregarPerfis() {
    inicializarDados();
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
    perfis.forEach(perfil=> {
        
        cards.innerHTML +=
        '<div class="card rounded-4">
            <a href="#" class="text-decoration-none" onclick="redirecionarPagina('${perfil.nome}')">
                <div id="profile-image" class="position-relative rounded-4">
                    <img src="${perfil.avatar}" alt="Avatar" class="img-fluid rounded-4">
                    <i class="icon bi bi-pencil-fill"></i>
                </div>
                <p class="text-secondary text-center mt-2 fs-5 mb-0">${perfil.nome}</p>


            
