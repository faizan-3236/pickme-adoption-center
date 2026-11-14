const dialog = document.getElementById('adoption-dialog');
const petChoice = document.getElementById('pet-choice');
const form = document.getElementById('adoption-form');
const formMessage = document.getElementById('form-message');

function openAdoptionForm(pet = '') {
  form.reset();
  formMessage.textContent = '';
  petChoice.value = pet;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else alert('Your browser does not support the adoption form dialog. Please use a modern browser.');
}

document.querySelectorAll('.open-form').forEach(button => {
  button.addEventListener('click', () => openAdoptionForm());
});

document.querySelectorAll('.adopt-pet').forEach(button => {
  button.addEventListener('click', () => openAdoptionForm(button.dataset.pet));
});

document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.getElementById('applicant-name').value.trim();
  const pet = petChoice.value;
  formMessage.textContent = `Thank you, ${name}! Your enquiry about ${pet} is ready. This demo does not send applications yet.`;
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
