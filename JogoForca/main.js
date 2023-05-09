let listaPalavras = ["basquete", "advogado", "programador", "mateus"];
let palavra, contadorAcerto = 0, contadorErro = 0;
let traco = [], letraUsadas = [];


function random(max){
    return Math.floor(Math.random()*(max-0+1))+0;
}

function wordsUsed(vetor,letra){
    for(var i = 0; i<vetor.length;i++){
        if(vetor[i] == letra){
            return true;
        }
    }

    return false;
}

document.addEventListener('DOMContentLoaded',function(){
    const btn = document.getElementById('btnAddPalavra');
    const modal = document.querySelector('#divAddNovaPalavra');
    

    btn.addEventListener('click', function(){
       modal.style.display='block';
       

       const btnAdd = document.getElementById("btnAdicionar");

       btnAdd.addEventListener('click', function(){
            const inputNp = document.getElementById('inpNovaPalavra');
            const novaPalavra = inputNp.value;
            novaPalavra.toLowerCase();

            listaPalavras.push(novaPalavra);
            
           modal.style.display='none';
       });
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const btnGerar = document.getElementById('btnGerar');

    btnGerar.addEventListener('click', function(){
       traco =[];
       letraUsadas = [];
    
        const texto = document.getElementById('letras');
        const img = document.getElementById('imgForca');
        const erro = document.getElementById('divErro');

        //const valor = texto.innerHTML;
        //const tamanho = valor.replace(/\s/g,"").length;
        
        palavra = listaPalavras[random(listaPalavras.length-1)]; 
        
        for(var i = 0; i<palavra.length;i++){
                traco.push('-');
        }
        
        texto.innerHTML = traco.join(" ");
        
        contadorAcerto = 0;
        contadorErro = 0;
        img.src = "./imagens/forca (2).png";
        erro.innerHTML = "";
       
    });

});

document.addEventListener('DOMContentLoaded', function(){
    const editar = document.getElementById('btnEnvioLetra');
    
    editar.addEventListener('click',function(){
        let quantTeste = 1;
        

        
        const letraEnv = document.getElementById('inpLetra');
        const letra = letraEnv.value.toLowerCase();

        const texto = document.getElementById('letras');
        const erro = document.getElementById('divErro');
        const img = document.getElementById('imgForca');
    
        
        if(contadorErro == 6){
            alert('----------Você perdeu!---------'+
               '\nAperte para gerar outra palavra.');
        } else if(wordsUsed(letraUsadas,letra)){
            alert('Essa lentra ja foi usada!');
            quantTeste = 2;
        }
        else{
            for(var i = 0; i<palavra.length;i++){
                if(palavra[i] == letra){
                    //palavra[i] = " ";

                    traco[i] = letra.toUpperCase();
                    texto.innerHTML = traco.join(" ");
                    
                    quantTeste = 0;

                    contadorAcerto++;
                    letraUsadas.push(letra);
                }
            }
            
            if(quantTeste == 1){
                contadorErro++;

                erro.innerHTML =  erro.innerHTML + " " +  letra.toUpperCase();
                letraUsadas.push(letra);
            }

            if(contadorAcerto == palavra.length){
                alert('-----------------------Acertou!--------------------- '
                    + '\nAssim que você apertar "OK" a palavra será completada');
            }

            if(contadorErro == 1){
                img.src = "./imagens/cabeca.png";
            }else if(contadorErro == 2){
                img.src = "./imagens/corpo.png";
            }else if(contadorErro == 3){
                img.src = "./imagens/perna1.png";
            }else if(contadorErro == 4){
                img.src = "./imagens/perna2.png";
            }else if(contadorErro == 5){
                img.src = "./imagens/braco1.png";
            }else if(contadorErro == 6){
                img.src = "./imagens/braco2.png";
            }
        }
        
        
    });
        
});


