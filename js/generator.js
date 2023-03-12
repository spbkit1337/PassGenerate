//массивы для генерации (можно еще добавить)
var arr2 = [1,2,3,4,5,6,7,8,9,0]; //массив чекбокс цифры
var arr3 = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r','s','t','u','v','w','x','y','z']; //массивы чекбокс строчные буквы
var arr4 = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G','F' , 'G' , 'H' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z']; //массивы чекбокс ПРОПИСНЫЕ буквы 
var arr5 = ['!' , '@' , '#' , '$' , '&' , '?' , '%']; //массивы чекбокс спецсимволы 

//oninput - событие

//генерация ползунка (длина пароля)
//функция которая будет срабатывать при изменении данного элемента
document.getElementById('param-1').oninput = function(){
    //console.log(this.value); //простой пример. Глянь в консоли , когда таскаешь ползунок в консоли появляются числа
    document.getElementById('password-length').innerHTML = this.value; //изменяем число в скобках (тэг span в html).Длина строки
}

generatePass(); //запуск генерации паролей при открытии или перезагрузки страницы (необязательно)


//кнопка генерировать
// по нажатию кнопки вызываем функцию "generatePass"
document.getElementById('generator').onclick = generatePass;

function generatePass() {
    var result = []; //массив  в который добавляются те массивы для генерации у которых стоит галочка у чекбоксов
    if (document.getElementById('param-2').checked){
        //включены лли цифры
        result = result.concat(arr2);
    } 
    if (document.getElementById('param-3').checked){
        //включены ли строчные символы
        result = result.concat(arr3);
    } 
    if (document.getElementById('param-4').checked){
        //включены ли прописные символы
        result = result.concat(arr4);
    } 
    if (document.getElementById('param-5').checked){
        //включены ли спецмиволы
        result = result.concat(arr5);
    } 
    
    //перемешиваем массивы
    //функция "sort" позволяет перемешивать , а как именно указана другая функция  "compareRandom"
    result.sort(compareRandom);
    document.getElementById('out').innerHTML = '';
    //цикл который выводит n-ое количество паролей
    for (var k = 0; k<6; k++){
        var pass = ''; //будущий пароль
        var passLength =  document.getElementById('param-1').value; //длина пароля
    
        for (var i = 0; i<passLength; i++){
            //цикл по длине пароля
            //выбираю случаное значение из массива result
            pass+=result[randomInteger(0,result.length - 1)];
        }
        document.getElementById('out').innerHTML+='<p>'+pass+'</p>'; //вывод пароля в html
    
    }


    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }

    //вспомогательная функция которая случайным образом меняет положение элементов
    function compareRandom(a,b){
        return Math.random() - 0.5;
    }

}