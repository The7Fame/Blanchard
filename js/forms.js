new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Поле должно содержать более 3 символов',
      maxLength: 'Поле должно содержать не более 30 символов',
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Поле должно содержать 10 символов',
    },
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Введен некорректный e-mail',
    },
  },

  colorWrong: '#D11616',

  submitHandler: function (thisForm, values, ajax) {
    ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: values,
      async: true,
      callback: function (response) {
        alert('Response from server: ' + response)
      },
      error: function (response) {
        alert('Response from server: ' + response)
      }
    });
  },
});

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);
