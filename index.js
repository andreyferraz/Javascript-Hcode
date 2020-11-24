// Para fazer um and se usa && e para fazer um OR se usa || 
let cor = "verde";

if(cor === "verde"){
    console.log('siga');
}else if(cor === 'amarelo'){
    console.log('Atenção')
}
else{
    console.log('pare');
}

// revisando o switch 
var previsao = 'Vazio';
switch(previsao){
    case 'Quente':
    console.log('Não vai chover')
    break;
    case 'Nublado':
        console.log("Pode ser que vá chover");
        break;
    case 'Frio':
        console.log("Está chovendo");
        break;
    default:
        console.log('Não temos uma previsão!')        
}