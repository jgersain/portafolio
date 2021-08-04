const $form = document.querySelector('.form');
const $status = document.querySelector('#form-status');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    this.reset();
    $status.innerHTML = '¡Gracias por tu envío!';
  } else {
    $status.innerHTML = '¡Vaya! Hubo un problema al enviar su formulario';
  }
}
