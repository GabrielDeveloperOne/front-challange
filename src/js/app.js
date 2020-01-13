
/* Adicicionando $ ao escopo global */
const $ = document.querySelector.bind(document);


/* Validando formulario */

let firstName = $('.input-name');
let phoneUser = $('.input-phone');
let emailUser = $('.input-email');

let senha = $('.password-User');
let senhaRepeat = $('.password-Repeat');

let erroSenha = $('.error-password');

const validacaoForm = () => {
  $('.password').addEventListener('input', (e) => {
    if(senha.value === senhaRepeat.value){
      erroSenha.style.display = 'block';
    } else {
      erroSenha.style.display = 'none';
    }
  })
  return alert(`Olá seja bem-vindo!
                Seu nome: ${firstName.value}; 
                Telefone: ${phoneUser.value}; 
                E-mail: ${emailUser.value}; 
                Senhas: ${senha.value} e ${senhaRepeat.value}`);
};



/* Utilização de Regex para mascara do telefone */
  $('#phone').addEventListener('input', (e) => {
    let tel = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !tel[2] ? tel[1] : '(' + tel[1] + ') ' + tel[2] + (tel[3] ? '-' + tel[3] : '');
  });