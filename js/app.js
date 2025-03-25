function alterarStatus(id){

    let alugar = ['dashboard__item__img', 'dashboard__item__name', 'dashboard__item__button', 'Alugar']
    let devolver = ['dashboard__item__img dashboard__item__img--rented', 'dashboard__item__name', 'dashboard__item__button dashboard__item__button--return', 'Devolver']
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let anteriorAlteracao = jogoEscolhido.children[2].className;

    let onOff = jogoEscolhido.children[2].textContent  = 'Alugar' ? devolver : alugar;
    //alugar e devolver

    console.log(onOff);

    jogoEscolhido.children[0].className = onOff[0];
    jogoEscolhido.children[2].className = onOff[2];
    jogoEscolhido.children[2].textContent = onOff[3];

    //status

    console.log(`o valor da classe anteriormente era de ${anteriorAlteracao},
     se tornando: ${jogoEscolhido.children[2].className}`);
}

//primeiro filho 0: imagem m
//segundo filho 1: nome nm
//terceiro filho 2: botao m