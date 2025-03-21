// A carregar a página executar as funções de buscar os dados
document.addEventLidtener("DOMContentloaded", async () => {
    setTimeout(() => {
      toggleLoading();
    }, 2000) ;

    let trendingContainer = document.querySelector("#trensdingMovies");
    trendingContainer. innerHTML = "";
    for ( let i = 1; i <= 20; i ++){
        trendingContainer.innerHTML += '<a herf='detalhes.html?id=${i}'>
                    <img src="img/posters/${i}.jpg" alt="${i}">
                        </a>;
    }
});
//trending movies scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollintervalTrendingMovies; // controlador para o intervalo de scrool
let scrollDirectionTrendingMovies = 0; // Direção do scroll (0= parado,1= esquerda)

containerTrendingMovies.addEventLidtener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; // Distancia das bordas para ativar o scroll

    if (mouseX < boundingRect.left + threshold){
        scrollDirectionTrendingMovies= -1; // Scroll para a esquerda 
        containerTrendingMovies.style.cursor = "url('/iml/arrow-lesf.png'); auto"; // Cursor para a esquerda 
    }  else if (mouseX > boundingRect.right-threshold) {
        scrollDirectionTrendingMovies= 1; //scroll para a direita 
        containerTrendingMovies.style.cursor= "url(' /img/arrow-right.png') , auto"; // Cursor para a direita 
    }  else {
        scrollDirectionTrendingMovies =0; // parar scroll
        containerTrendingMovies.cursor= " pointer"; //cursor padrão
    }
  });

  containerTrendingMovies.addEventListener("mouseleave", () =>{
    scrollDirectionTrendingMovies = 0; // parar scroll quando o mouse sai do elemento 
    containerTrendingMovies.style.cursor ="default"; // resetar cursor 
  });

  //Função para scroll continuo
  function autoScrollTrendingMovies () {
    if ( scrollDirectionTrendingMovies !== 0) {
        containerTrendingMovies.scrollLeft =+ scrollDirectionTrendingMovies * 6; // ajuste a velocidade (5 = rápido)
    }

    
  } 

   scrollDirectionTrendingMovies = setInterval(autoScrollTrendingMovies, 16) //~60 FPS

 
    
