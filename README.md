# week17

1. Сделайте интерфейс преобразования ФИО на три поля (input). Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр. Результат должен получиться идеальным. Например, было введено пользователем *"   Цветкова алиса АлександровНА  "*, а стало три поля: 
    
    Имя: *Алиса*, Фамилия: *Цветкова*, Отчество: *Александровна*
    
    
   2. Сделайте интерфейс для анонимных комментариев со спамфильтром. 
   
   Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***`

Функция должна быть нечувствительна к регистру

3. Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
    - Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
    - В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
    - В противном случае, если меньше часа, вывести `"m мин. назад"`.
    - В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

4. Сделайте генератор 10 случайных чисел (по нажатию на кнопку) в диапазоне от -10 до 10 и найдите среди них минимальное, максимальное и среднее арифметическое, а также сумму и произведение всех этих чисел. В этой задаче вам понадобятся массивы и циклы.
