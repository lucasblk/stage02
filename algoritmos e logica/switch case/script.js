let option; 
let list = [];

while(option != 3) {
    option = Number(prompt(`Digite uma opcao para iniciar:
    
        1. Adicionar item na lista
        2. Exibir a lista
        3. Sair`));
switch(option) {
    case 1:
        let item = prompt('Adicione o item:');
        list.push(item);
        break
    case 2:
        if(list.length == 0) {
            alert('Lista vazia!')
        } else {
            alert(list)
        };
        
        break
    case 3:
        alert('Tchauzinho!');
        break
    default:
        alert('Opcao Invalida!')

}
}
