//                              Тема 30. Введение в DOM


{
  /* <html>
  <head></head>
  <body>
      <div>
          <p>Text</p>
          <p>Other</p>
          <p>Next</p>
          <p>Last</p>
      </div>
      <div></div>
      <div></div>
  </body>
  </html> */
}


// 30.1. Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы




{
  /* <div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
    </article>
  </div>
  <ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>
  <a href="#">Some link</a> */
}

// 30.2. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

// 30.3. Получить список всех ссылок, которые не находятся внутри списка ul
// 30.4. Найти элемент, который находится перед и после списка ul