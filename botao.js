// Quando o visitante estiver descido 20px na página o botão deve aparecer
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbtn").style.display = "block";
  } else {
    document.getElementById("topbtn").style.display = "none";
  }
}

// Quando o visitante clicar no botão deve voltar para o topo da página
function topFunction() {
  	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
} 