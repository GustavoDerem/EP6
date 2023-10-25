


function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function aviso(){
    alert("e o pix?!! Nada ainda??")
}


function funcaoResposta(){
    
    var resp1 = document.querySelector('input[name="resposta1"]:checked');
    var resp2 = document.querySelector('input[name="resposta2"]:checked');
    var resp3 = document.querySelector('input[name="resposta3"]:checked');
    var resp4 = document.querySelector('input[name="resposta4"]:checked');
    var resp5 = document.querySelector('input[name="resposta5"]:checked');
    var resp6 = document.querySelector('input[name="resposta6"]:checked');
    var resp7 = document.querySelector('input[name="resposta7"]:checked');
    var resp8 = document.querySelector('input[name="resposta8"]:checked');
    var resp9 = document.querySelector('input[name="resposta9"]:checked');
    var resp10 = document.querySelector('input[name="resposta10"]:checked');
    
    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
           
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, Alternativa correta (D)!"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada,  Alternativa correta (B)!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
           
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada,  Alternativa correta (C)!"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada,  Alternativa correta (D)!"

        }
       

        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada,  Alternativa correta (B)!"

        }
       

        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada,  Alternativa correta (C)!"

        }
       

        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada,  Alternativa correta (D)!"

        }
        

        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada,  Alternativa correta (B)!"

        }
        

        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada,  Alternativa correta (D)!"

        }
        

        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
            
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada,  Alternativa correta (C)!"
           
        }
       
            
            document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";

        
    }
    else{
        alert("não deixe questões em branco!")
    }
}








        
        





    
