
/* Adicicionando $ ao escopo global */
let $ = document.querySelector.bind(document);




/* Utilização de Regex para mascara do telefone */
$('#phone').addEventListener('input', (e) => {
    let tel = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !tel[2] ? tel[1] : '(' + tel[1] + ') ' + tel[2] + (tel[3] ? '-' + tel[3] : '');
  });