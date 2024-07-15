import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  function createPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve();
        } else {
          reject();
        }
      }, delay);
    });
  }

  createPromise()
    .then(() => {
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'bottomLeft',
      });
    })
    .catch(() => {
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'bottomLeft',
      });
    });

  formRef.reset();
}
