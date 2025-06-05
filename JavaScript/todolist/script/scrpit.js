document.querySelector('#add-btn').addEventListener('click', function() {
    const valeur = document.querySelector('#todo-input').value;
    const todoList = document.querySelector('#todo-list');

    const input = document.createElement('input');
    const label = document.createElement('label')
    
    label.textContent = valeur;
    label.setAttribute('for', 'input1')

    input.setAttribute('type', 'checkbox')
    input.setAttribute('name', 'input1' )
    
    todoList.appendChild(input)
    todoList.appendChild(label)
});