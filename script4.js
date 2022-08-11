function generate (min, max) {
    return Math.ceil(Math.random ()*(max - min + 1) + min); //max and min includes
  }
  function generateArray () {
    let array = [];
    for (let i= 0; i<10; i++) {
      let number = generate (-10, 10);
      array.push (number);
    }
    //функция для рассчета суммы
    let sum = 0;
    for (let i=0; i< array.length; i++)
    sum += array [i];
    average = sum/array.length;
    
    // функция для расчета произведения
    // let times = 1;
    // for (let i= 0; i< array.length; i++);
    // times *= array [i];
    
      //вывод на экран
    document.querySelector (".array").textContent = "Сненерированный массив" + " " + array;
    document.querySelector (".min").textContent = "Минимальное значение в массиве" + " " +  Math.min (...array);
    document.querySelector (".max").textContent = "Максимальное значение в массиве" + " " + Math.max (...array);
    // console.log (array.length);
    document.querySelector (".sum").textContent = "Сумма значений элементов в массиве" + " " + sum;
    document.querySelector (".average").textContent = "Среднее арифметическое значение элементов массива" + " " + average;
    // console.log (times);
    
    }
  
      
  //     
  //   
  
  generateArray();
   // getAverage ();
  
