let lista_questoes = []
let lista_gabarito = []

var quantidade_questoes = 1;
var quantidade_gabarito = 1;

var quantidade_questoes_2 = 0;
var quantidade_gabarito_2 = 0;

function questoes_resp() {
    var qtde_questoes = document.getElementById("quest_resp")
    quantidade_questoes_2++
    qtde_questoes.innerHTML = quantidade_questoes++ 
}
function questoes_gab() {
    var qtde_gab = document.getElementById("resp_gab")
    quantidade_gabarito_2++
    qtde_gab.innerHTML = quantidade_gabarito++
}


//Questoes
function btn_questoes(alternativa) {
    lista_questoes.push("A")
    questoes_resp()
    console.log(lista_questoes, lista_gabarito)
}

//Gabarito
 function btn_gabarito_A() {
    lista_gabarito.push("A")
    questoes_gab()
    console.log(lista_questoes, lista_gabarito)
}
function btn_gabarito_B() {
    lista_gabarito.push("B")
    questoes_gab()
    console.log(lista_questoes, lista_gabarito)
}
function btn_gabarito_C() {
    lista_gabarito.push("C")
    questoes_gab()
    console.log(lista_questoes, lista_gabarito)
}
function btn_gabarito_D() {
    lista_gabarito.push("D")
    questoes_gab()
    console.log(lista_questoes, lista_gabarito)
}
function btn_gabarito_E() {
    lista_gabarito.push("E")
    questoes_gab()
    console.log(lista_questoes, lista_gabarito)
}


function verificar_respostas() {
    var a = 0
    var b = 0
    var quantidade_acertos = 0

    for (var cond_for = 0; cond_for < quantidade_questoes; cond_for++) {
        if (lista_questoes[a] == lista_gabarito[b]) {
            quantidade_acertos++
        }
        var quantidade_acertos_2 = quantidade_acertos - 1
        a++
        b++
        console.log(a, b , cond_for)
        console.log(quantidade_questoes, quantidade_acertos)

        var acertos = document.getElementById("acertos")
        var questoes = document.getElementById("questoes")

        acertos.innerHTML = quantidade_acertos_2
        questoes.innerHTML = quantidade_questoes_2
    }
}
