
/* Adicionando função que monitora quando o DOM foi carregado */
document.addEventListener('DOMContentLoaded', function(){

    /* Selecionando TODOS os botões das abas pelo elemento data-que adicionamos a eles */
    /* Com isso teremos um retorno de ARRAY com todos os botões */
    const buttons = document.querySelectorAll('[data-tab-button]');

    /* Selecionando(criando um array com todos os elemnetod com o data referente) */
    const quest = document.querySelectorAll('[data-faq-question]');

    /* Selecionando a seção hero */
    const heroSection = document.querySelectorAll('[data-section-hero]');
    /* Apos instanciar a seção hero acessamos sua altura com esse codigo */
    const alturaHero = heroSection.clientHeight;

    /* Adicionando um evento que observa o scroll pelo display */
    /* Com isso toda vez que ouver um scroll essa função é chamada */
    window.addEventListener('scroll', function(){
        /* Acessando a posição Y do scrol como retorno */
        const scrollAtual = window.scrollY;

        /* Se a posiçaõ do scrol for maior que a altura do hero*/
        if(scrollAtual > 800){
            console.log("Debug")

            ocultHeader();
        } 

        else{
            showHeader();
        }
        
    })


    /* Definindo variavel i = 0, enquanto i for menor que o número de elemntos dentro do array button i ganha + 1 */
    for(let i = 0; i < buttons.length; i++){

        /* Adicionando um evento que monitora quando o usuário clica nele */
        /* Mais sobre o addEventListener aqui --> https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener */
        buttons[i].addEventListener('click', function(botao){


            /* O addEventListener recebe um retorno do NOME de qual botao foi clicado(definido bom botao entre as parenteses) */

            /* "Debug no console para testar qual é o botao que foi clicado" */
            /* .target utilizado pois sem ele o console.log da todas as informações sobre o elemento que foi clicado */
            /* Após selecionar o target eu seleciono tambem o atributo que setamos no html o DATA */
            console.log(botao.target.dataset.tabButton);  


            /* Criando uma constante/variacvel om o valor do NOME do atributo que foi pego com EventListener*/
            const abaAlvo = botao.target.dataset.tabButton

            /* Como antes selecionamos apenas o nome do atributo agora temos que seleciona-lo em si, usanso o document.querySelecrtor
            podemos pesquisar o atributo das abas que tenha como valor o mesmo nome da cariavel abaAlvo*/
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);



            /* Execultando a função que remove/esconde a exibição de todas as abas */
            hideAllTabs();

            /* Logo depois de deletar todas as abas eu adiciono a classe que faz ser visivel apenas na constante que 
            foi clicada e selecionada. */
            aba.classList.add('shows__list--is-active');
            

            /* Chamando a função que retira a classe de estar ativo de todos os elementos botão */
            hideAllButtons();

            /* Seleciono o botão que foi clicado e adiciono nele a classe se ativo para que ele crie um border-bottom */
            botao.target.classList.add('shows__tabs__btn--is-active')


        })

    }

    /* Fazendo um for diferente para as perguntas da faq */
    for(let i = 0; i < quest.length; i++){

        /* Adicionando um evento que verifica se a pergunta da faq foi clicada */
        quest[i].addEventListener('click', abreFechaFaq)

    }
})


/* Criando uma função para a função que adiciona ou remove a classe --is-hidden no header */
function ocultHeader(){
    //Instanciano o elemento html header
    const header = document.querySelector('header')

    //Acessando a lista de classes do elemento header e adicionando uma classe
    header.classList.add('header--is-hidden')
}

function showHeader(){
    //Instanciando o elemento html header
    const header = document.querySelector('header')

    //Acessando a lista de classes do header e removendo uma classe
    header.classList.remove('header--is-hidden')
}

/* Criando função para abrir ou fechar pergunta no faq, essa função tem o parametro por padrão o elemento selecionado */
function abreFechaFaq(elemento){

    /* Instanciando a classe que determina se a aba está aberta */
    const classe = 'faq__questions__item--is-open'

    /* Debug no console do elemento selecionado */
    /* Quando clicado retorna a pergunta do faq que foi clicada e precisamos do "pai" dessa pergunta o li */
    /* console.log(elemento.target) */

    /* Para acessarmos o pai da pergunta que clicamos usamos esse atributo */
    const elementoPai = elemento.target.parentNode

    /* Acessando a lista de classes do elemento pai e adicionando/removendo a classe que determina se está aberto ou não */
    /* O toggle verifica se a classe está ativa ou desativa e adiciona ou remove */
    elementoPai.classList.toggle(classe)

}

/* Criando uma função, sem nenhum parametro dentro das parenteses pois não é nescessário */
function hideAllTabs() {
        /* Atribuindo a uma variavel o valor das abas UL, recebendo um retorno em forma de array */
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        /* Definindo variavel i = 0, enquanto i for menor que o número de elemntos dentro do array das abas i ganha + 1 */
        for(let i = 0; i < tabsContainer.length; i++){

            /* Quando a função HideAllTabs fr chamada a classe que adicionamos no html para a aba ser visivel será removida */
            /* SERÁ REMOVIDA DE TODAS AS ABAS */
            tabsContainer[i].classList.remove('shows__list--is-active')
        }
}

/* Criando uma função que remove a aclasse ativa de todos os botões */
function hideAllButtons(){

    /* Instanciando todos os botões presentes no html */
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){   

        /* Acessando a lista de classes de todos os botões e removendo a classe que ativa a borda */
        buttons[i].classList.remove('shows__tabs__btn--is-active')

    }

    


}