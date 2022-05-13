async function getEndereco() {
    let cep = document.getElementById('cep').value;
    let erro = document.getElementById('erro');
    let campoResposta = document.getElementById('resposta');
    if (cep.length != 9) {
        erro.style.display = 'block';
        campoResposta.style.display = 'none';
        return;
    }
    erro.style.display = 'none';
    campoResposta.style.display = 'block';
    let url = 'http://viacep.com.br/ws/' + cep + '/json/';
    let resposta = await fetch(url);
    let dados = await resposta.json();
    console.log(dados);
    let campoEndereco = document.getElementById('endereco');

    campoEndereco.innerHTML += dados.logradouro + ' - ';
    campoEndereco.innerHTML += dados.bairro + ', ';
    campoEndereco.innerHTML += dados.localidade + ' - ';
    campoEndereco.innerHTML += dados.uf + ', ';
    campoEndereco.innerHTML += dados.cep;
}

function mascara() {
    let campoCep = document.getElementById('cep');
    let cep = campoCep.value;
    if (cep.length == 5) {
        cep = cep.substring(0,5) + '-';
    }
    campoCep.value = cep
}