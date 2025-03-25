function alterarStatus(id){

    let ligado = ['dashboard__item__button dashboard__item__button', 'dashboard__item__img', 'dashboard__item__button']
    let desligado = ['dashboard__item__button dashboard__item__button--return', 'dashboard__item__img', 'dashboard__item__button dashboard__item__button--return']

    let botaoPressionado = document.getElementById(`game-${id}`);

    console.log(botaoPressionado.children.item(0));

    if (botaoPressionado.children[2].className = ligado){
        botaoPressionado.children[2].className = desligado;
    }
}