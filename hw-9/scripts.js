window.addEventListener('load', function() {
    
    let tasks = document.querySelector('.tasks');
    
    function showList() {
        tasks.classList.add('show');
    };

    let showListBut = document.querySelector('.task-but'),
        showListBut2 = document.querySelector('.task-but2'),
        showListBut3 = document.querySelector('.task-but3'),
        showListBut4 = document.querySelector('.task-but4');

    showListBut.addEventListener('click', function() {
        showList();
        this.classList.add('hidden');
        showListBut2.classList.add('show');
        showListBut3.classList.add('show');
        showListBut4.classList.add('show');
    });

    showListBut2.addEventListener('click', function() {
        this.classList.remove('show');
        tasks.classList.remove('show');
        showListBut3.classList.remove('show');
        showListBut4.classList.remove('show');
        showListBut.classList.remove('hidden');
    });

    let taskList = document.querySelector('.task-list');

    let taskInput = document.querySelector('.task-input');
    taskInput.addEventListener('keydown', function(event) {
        if(event.key == 'Enter') {
            let taskItem = document.createElement('div'),
                taskCheckBox = document.createElement('span');
                taskNote = document.createElement('p');

            taskItem.classList.add('task-item');
            taskCheckBox.classList.add('task-checkbox');
            taskNote.classList.add('task-note');
                
            taskNote.innerHTML = taskInput.value;
            taskList.appendChild(taskItem);
            taskItem.appendChild(taskCheckBox);
            taskItem.appendChild(taskNote);

            taskInput.value = '';

           /*let checkBoxes = document.querySelectorAll('.task-list span');

            console.log(checkBoxes[2]);*/
            
            
        };
    });

    let checkBoxes = document.querySelectorAll('.task-list span');

    /*checkBoxes.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(this);
            taskCheckBox.classList.add('checkbox-checked');
            taskNote.classList.add('task-note-checked');
        });
    });*/

    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener('click', function() {
            taskCheckBox.classList.add('checkbox-checked');
            taskNote.classList.add('task-note-checked');
            
        });              
    };

    showListBut3.addEventListener('click', function() {
        taskNote.innerHTML = prompt('Edit the task');
    }); 

    showListBut4.addEventListener('click', function() {
        taskList.innerHTML = '';
    }); 


});