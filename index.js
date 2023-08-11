function addingEventListener() {
  const buttonElement = document.getElementById('button');
  const inputElement = document.getElementById('main');
  const divElementWithNumber3 = document.querySelector('div > div > div');

  function clickAlert() {
    alert('Element clicked!');
  }

  buttonElement.addEventListener('click', clickAlert);
  inputElement.addEventListener('click', clickAlert);
  divElementWithNumber3.addEventListener('click', clickAlert);
    
}
addingEventListener();