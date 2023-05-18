<h1 align="center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<p align="center">Лабораторная работа №9</p>
<p align="center">"JavaScript"</p>
<br>
<p align="right">Работу выполнила Чёо Эрика Ильинична</p>
<p align="right">Работу проверил Соболев Евгений Игоревич</p>

___

### **Цели и задачи**:
1.	Есть некоторая строка (```var str = 'fgfggg';```), что будет, если мы возьмем str[0]?
2.	 Дана функция, она принимает в качестве аргументов строки ```'*'```, ```'1'```, ```'b'```, ```'1c'```, реализуйте ее так, что бы она вернула строку '1*b*1c'
3.	Дано дерево, надо найти сумму всех вершин.
4.	Нарисовать стилями полукруг.
5.	Есть массив в котором лежат объекты с датами, отсортировать по датам.
6.	Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')
7.	От них же. Числа от 1 до 100 лежат в массиве, они хаотично перемешанные, от туда изъяли одно число, надо найти, что это за число. алгоритм не должен превышать O(n^2) сложности.
8.	Реализовать сортировку пузырьком.
9.	Обратная польская нотация.
10.	Реализовать функцию является ли слово палендром.

___

**Задание 1**
```js
var str = 'fgfggg';
document.getElementById("z1").innerHTML = str[0];
```
**Задание 2**
```js
document.getElementById("z2").innerHTML = `${b}${a}${c}${a}${d}`;
```
**Задание 3**
```js
class Node {
    static count = 0;
    ID;
    value;
    parent;
    children;
    constructor(value, parent) {
        this.ID = Node.count.toString();
        this.value = value;
        this.parent = parent;
        Node.count++;
        }
    }

    const tree = {
        head: new Node(undefined, null),
        Randomise(depth, childrenRange) 
        {
            this.head.value = RNG(0, 10);
            if (depth > 0) 
            {
                this.addChildrenTo(this.head, RNG(1, childrenRange));
                if (depth > 1) 
                {
                    let queue = [...this.head.children];
                    depth--;
                    while (depth > 0) 
                    {
                        let temp = [];
                        for (let i in queue) 
                        {
                            this.addChildrenTo(queue[i], RNG(1, childrenRange));
                            temp.push(queue[i].children);
                        }
                    queue = temp;
                    depth--;
                    }
                }
            }
        },
        addChildrenTo(node, count) 
        {
        node.children = [];
        for (let i = 0; i < count; i++) 
            { node.children.push(new Node(RNG(0, 10), node)); }
        }
    }

function RNG(from, to) 
    { return Math.floor(Math.random() * to) + from; }

tree.Randomise(depth = 2, childrenRange = 3);
document.getElementById("z3_1").innerHTML = "Дерево:" + tree;
document.getElementById("z3_2").innerHTML = "Всего вершин = " + Node.count;

function SumOf(node) 
{
    let sum = node.value;
    if (node.children == undefined) 
    {
        console.log("value", node.ID, "=", node.value);
        return node.value;
    }
    node.children.forEach(child => { sum += SumOf(child); });
    return sum;
}
document.getElementById("z3_3").innerHTML = "Сумма всех вершин дерева = " + SumOf(tree.head);
```
**Задание 4**
```css
width: 150px;
height: 150px;
border-right: 1px solid black;
border-radius: 0 50% 50% 0;
```
**Задание 5**
```js
const arr = [];
for (let i = 0; i < 10; i++)
    { arr[i] = { data: Math.floor(Math.random() * 31) }; }
sortedarr = arr.slice().sort((a, b) => a.data - b.data);
```
**Задание 6**
```js
var arr = ['kot', 'tok', 'okt'];
function sameWords(arr) 
{
    var word1, word2;
    for (var i = 0; i < arr.length - 1; i++) 
    {
        word1 = 0;
        word2 = 0;
        if (arr[i].length !== arr[i + 1].length) 
            { return false;   }
        else 
        {
            for (var j = 0; j < arr[i].length; j++) 
            {
                word1 += arr[i][j].charCodeAt(0);
                word2 += arr[i + 1][j].charCodeAt(0);
            }
            if (word1 !== word2) 
                { return false; }
        }      
    }
    return true;
}
```
**Задание 7**
```js
const array = [];
for (let i = 0; i < 100; i++) 
    { array[i] = i + 1; }
for (let i = array.length - 1; i > 0; i--) 
{
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
let i = Math.floor(Math.random() * (array.length - 1));
array.splice(i, 1);
let seqSum = (1 + 100) / 2 * 100; 
let arrSum = 0
for (i in array) 
    { arrSum += array[i]; }
document.getElementById("z7_2").innerHTML += "В массиве изъяли число: " + (seqSum - arrSum);
```
**Задание 8**
```js
function bubbleSort(array) 
{
    let temp;
    for (let i = 0; i < array.length - 1; i++) 
    {
        for (let j = 0; j < array.length - 1 - i; j++) 
        {
            if (array[j] > array[j + 1]) 
            {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```
**Задание 9**
```js
function func(str) 
{
    var queue = [], tmp, num1, num2;
    for (var i = 0; i < str.length; i++) 
    {
        if (/\d+/.test(str[i]) === true) 
            { queue.push(Number(st[i])); }
        else 
        {
            switch (st[i]) 
            {
                case '+':
                    tmp = queue.pop() + queue.pop();
                    queue.push(tmp);
                    break;
                case '-':
                    num1 = queue.pop();
                    num2 = queue.pop();
                    if (num1 > num2) 
                        { tmp = num1 - num2; }
                    else 
                        { tmp = num2 - num1; }
                    queue.push(tmp);
                    break;
                case '*':
                    tmp = queue.pop() * queue.pop();
                    queue.push(tmp);
                    break;
                case '/':
                    tmp = queue.pop() / queue.pop();
                    queue.push(tmp);
                    break;
            }   
        }
    }
    return queue[0];
}
```
**Задание 10**
```js
function Palindrome(word) 
{
    if (word.length == 0)
        return "";
    if (word.length == 1)
        return "Не палиндром";
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) 
    {
        if (word[i] != word[word.length - 1 - i])
            return "Не палиндром"
    }
    return "Палиндром";
}
```

___

### **Вывод:**
После выполнения данной лабораторной работы я улучшила свои навыки работы с JavaScript.
