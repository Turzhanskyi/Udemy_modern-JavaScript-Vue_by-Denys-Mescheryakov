const tasks = [{
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function (arrOfTasks) {
  // Дані масиву task перетвоюємо у об'єкт об'єктів
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc
  }, {});



  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group'); // сформовано контейнер для передавання сформованих <li> завдань
  const form = document.forms['addTask']; // шукаємо форму з атрибутом addTask
  const inputTitle = form.elements['title']; // знаходимо елементи введення у форму title
  const inputBody = form.elements['body']; // знаходимо елементи введення у форму body



  // Events
  renderAllTasks(objOfTasks); // викликаємо функцію renderAllTasks для виведення усіх завдань на html сторінку 
  form.addEventListener('submit', onFormsSubmitHandler); // викликаємо функцію onFormsSubmitHandler, яка оброблятиме нашу форм
  listContainer.addEventListener('click', onDeleteHandler); // викликаємо функцію onDeleteHandler, яка видалятиме завдання



  // Функція renderAllTasks, що виводить усі завдання на сторінку
  function renderAllTasks(taskList) {

    if (!taskList) {
      console.error("Передайте список завдань!");
      return;
    }; // перевіряємо чи передано список завдань

    //   
    const fragment = document.createDocumentFragment();
    Object.values(taskList).forEach(task => {
      const li = listItemTemplate(task); // перетворюємо об'єкт завдань у масив і перебераємо кожен елемент завдань для формування <li>
      fragment.appendChild(li); // передаємо до fragment створену у функції listItemTemplate <li>
    });
    listContainer.appendChild(fragment);
  };

  // Функція listItemTemplate, що формує перелік елементів <li> для темплейта завдань
  function listItemTemplate({
    _id,
    title,
    body
  } = {}) {
    const li = document.createElement('li'); // створюємо <li>
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    ); // додаємо класи до <li>
    li.setAttribute('data-task-id', _id); // присвоюємо <li> атрибут з id

    const span = document.createElement('span'); // створюємо <span>
    span.textContent = title; // <span> задаємо title
    span.style.fontWeight = 'bold'; // задаємо жирний текст для <span>

    const deleteBtn = document.createElement('button'); // створюємо кнопку
    deleteBtn.textContent = 'Delete' // додаємо кнопці текстовий зміст
    deleteBtn.classList.add(
      'btn',
      'btn-danger',
      'ml-auto',
      'delete-btn'
    ); // додаємо кнопці класи

    const article = document.createElement('p'); // створюємо <p>
    article.textContent = body; // <p> задаємо body
    article.classList.add(
      'mt-2',
      'w-100'
    ); // додаємо класи для <p>

    // додаємо створені елементи <span>, <deleteBt>, <article> в <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  };

  // Функція onFormsSubmitHandler, що обробляє нашу форму
  function onFormsSubmitHandler(e) {
    e.preventDefault(); // необхідно для того, щоб не перезавантажувалась стрінка при відправлені даних форми
    const titleValue = inputTitle.value; // отримуємо введені дані title
    const bodyValue = inputBody.value; // отримуємо введені дані body

    if (!titleValue || !bodyValue) {
      alert('Будь ласка, введіть title і body !!!');
      return;
    }
    const task = createNewTask(titleValue, bodyValue); // викликаємо функцію створення нового завдання
    const listItem = listItemTemplate(task); // передаємо нове створене завдання з елементами у <li>
    listContainer.insertAdjacentElement('afterbegin', listItem); // додаємо створену <li> із новим завданням у контейнер на початок нових завдань
    form.reset(); // очищуємо поля форми
  };

  // Функція createNewTask, що створює нове завдання
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`
    };
    objOfTasks[newTask._id] = newTask; // додаємо створене завдання до objOfTasks
    return {
      ...newTask
    };
  };

  // Функція deleteTask, що видаляє завдання
  function deleteTask(id) {
    const {
      title
    } = objOfTasks[id]; // визначаємо title за id завданням
    const isConfirm = confirm(`Ви впевнені, що хочете видалити завдання: ${title} ?`);
    if (!isConfirm) return isConfirm; // якщо isConfirm false, то вертаємо isConfirm
    delete objOfTasks[id]; // в іншому випадку видаляємо завдання з переданим id
    return isConfirm;
  };

  // Функція deleteTaskFromHtml, що видаляє завдання з html розмітки 
  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  };

  //Функція onDeleteHandler, що обробляє завдання для видалення
  function onDeleteHandler({
    target
  }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]'); // визначаємо завдання, що необхідно видалити
      const id = parent.dataset.taskId; // визначаємо id завдання, що необхідно видалити
      const confirmed = deleteTask(id); // викликаємо функцію видалення завдання
      deleteTaskFromHtml(confirmed, parent);
    };
  };

})(tasks);