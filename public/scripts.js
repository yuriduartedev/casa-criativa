function onOff() {
  document
    .querySelector('#modal')
    .classList
    .toggle("hide");

  document
    .querySelector('body')
    .classList
    .toggle('hideScroll');

  document
    .querySelector('#modal')
    .classList
    .toggle('addScroll');
}

function checkFields(event)  {
  const valuesToChek = [
    "title",
    "category",
    "image",
    "description",
    "link",
  ]

  const isEmpty = valuesToChek.find(function (value) {
    const checkIsString = typeof event.target[value].value === "string"
    const checkIfIsEmpty = !event.target[value].value.trim();
    if (checkIsString && checkIfIsEmpty) {
      return true;
    }
  });

  if(isEmpty) {
    event.preventDefault();
    alert('Por favor preencha todos os campos!')
  }

}