function generador(){
    let problemas=["Hay que fregar....","Que hay que recoger..","Hay que hacer comida...","Que hay que limpiar la casa...","Hay que sacar a la perrita...","Hay que hacer la compra....."];
    
    
    let excusas=["Ahora no puedo...!!","Me siento cansado.....!!","Me duele la barriga....!!","He hecho demasiado hoy...!!","No puedo ocuparme de eso...!!","Ahora tengo hambre....!!","Me duele una muela.....!!"];
    
    let x_problemas=Math.floor(Math.random()*problemas.length);
    
    
    let y_excusas=Math.floor(Math.random()*excusas.length);
    
    
    
    document.getElementById('problemas').innerHTML=problemas[x_problemas];
    document.getElementById('excusas').innerHTML=excusas[y_excusas];
    }
    
    