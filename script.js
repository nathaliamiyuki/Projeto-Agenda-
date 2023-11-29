var buttonNovoAgendamento = document.getElementById('buttonNovoAgendamento');
var buttonCancelarAgendamento = document.getElementById('buttonCancelarAgendamento');
var novoAgendamento = document.getElementById('novoAgendamento');
var formNovoAgendamento = document.getElementById('formNovoAgendamento');
function mostrarNovoAgendamento(){ //mostrar formulario com o botão de novo agendamento
    novoAgendamento.classList.remove('d-none');
}

function ocultarNovoAgendamento(){ //ocultar o formulario com o botão cancelar
    novoAgendamento.classList.add('d-none');
}

function salvarNovoAgendamento(event){
    event.preventDefault();
    console.log('salvar novo evento');
}

buttonNovoAgendamento.addEventListener('click', mostrarNovoAgendamento);
buttonCancelarAgendamento.addEventListener('click', ocultarNovoAgendamento);
formNovoAgendamento.addEventListener('submit', salvarNovoAgendamento);