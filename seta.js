    	var canvas;//o elemento canvas sobre o qual desenharemos
		var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
		var dx = 5;//a tava de variação (velocidade) horizontal do objeto
		var dy = 5;//a tava de variação (velocidade) vertical do objeto
		var x = 500;//posição horizontal do objeto (com valor inicial)
		var y = 200;//posição vertical do objeto (com valor inicial)
		var WIDTH = 1000;//largura da área retangular
		var HEIGHT = 400;//altura da área retangular

		function Desenhar() {
		    ctx.beginPath();
			ctx.fillStyle = "black";
			ctx.arc(x, y, 10, 0, Math.PI, true);
		    ctx.fill();
		    Desenhar2();
		}

		function Desenhar2() {
		    ctx.beginPath();
			ctx.fillStyle = "red";
			ctx.arc(x, y, 10, 0, Math.PI, false);
		    ctx.fill();
		}


		function LimparTela() {
		    ctx.fillStyle = "white";
		    ctx.strokeStyle = "black";
		    ctx.beginPath();
		    ctx.rect(0, 0, WIDTH, HEIGHT);
		    ctx.closePath();
		    ctx.fill();
		    ctx.stroke();
		}

		function KeyDown(evt){
		    switch (evt.keyCode) {
		        case 38:  /*seta para cima */
		            if (y - dy > 0){
		                y -= dy;
		            }
		            break;
		        case 40:  /*set para baixo*/
		            if (y + dy < HEIGHT){
		                y += dy;
		            }
		            break;
		        case 37:  /*set para esquerda*/
		            if (x - dx > 0){
		                x -= dx;
		            }
		            break;
		        case 39:  /*seta para direita*/
		            if (x + dx < WIDTH){
		                x += dx;
		            }
		            break;
		    }
		}

		function Atualizar() {
		    LimparTela();    
		    Desenhar();
		}

		function Iniciar() {
		    canvas = document.getElementById("canvas");
		    ctx = canvas.getContext("2d");
		    return setInterval(Atualizar, 10);
		}

		window.addEventListener('keydown',KeyDown,true);
		Iniciar();