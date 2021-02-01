document.addEventListener("DOMContentLoaded", () => {
  let field = document.getElementById('new-task-description');
  let taskList = document.getElementById('tasks');

  document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault()
    taskList.innerHTML += `<li>${field.value}<button>X</button></li>`
    
    let buttons = document.querySelectorAll('li button')
    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', (event) => {
        buttons[i].parentNode.remove()
      })
    }
    document.querySelector("form").reset()
  });
});
