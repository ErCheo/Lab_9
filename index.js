function z1() 
{
    var str = 'fgfggg';
    document.getElementById("z1").innerHTML = str[0];
}

function z2(a, b, c, d) 
{
    document.getElementById("z2").innerHTML = `${b}${a}${c}${a}${d}`;
}

function z3()
{
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
}

function z5()
{
    const arr = [];
    for (let i = 0; i < 10; i++)
        { arr[i] = { data: Math.floor(Math.random() * 31) }; }
    document.getElementById("z5_1").innerHTML = "Массив:" + arr;
    sortedarr = arr.slice().sort((a, b) => a.data - b.data);
    document.getElementById("z5_2").innerHTML = "Отсортированный массив" + sortedarr;
}

function z6()
{
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
                for (var j = 0; j < arr[i].length; j++) {
                    word1 += arr[i][j].charCodeAt(0);
                    word2 += arr[i + 1][j].charCodeAt(0);
                }
                if (word1 !== word2) 
                { return false; }
            }      
        }
    return true;
    }
    document.getElementById("z6").innerHTML = sameWords(arr);
}

function z7()
{
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

    document.getElementById("z7_1").innerHTML += "Перемешанный массив без одного элемента: " + array;

    let seqSum = (1 + 100) / 2 * 100; 
    let arrSum = 0
    for (i in array) 
        { arrSum += array[i]; }
    document.getElementById("z7_2").innerHTML += "В массиве изъяли число: " + (seqSum - arrSum);
}

function z8()
{
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
    const mas = [];
    for (let i = 0; i < 10; i++) 
    { mas[i] = Math.floor(Math.random() * 20) - 10; }
    document.getElementById("z8_1").innerHTML = "Массив до сортировки: " + mas;
    bubbleSort(mas);
    document.getElementById("z8_2").innerHTML = "Масссив после сортировки:" + mas;
}

function z9()
{
    var str = '23+1-';
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
document.getElementById("z9").innerHTML += str + " = " + func(str);
}

function z10()
{
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
let word = "Шалаш";
document.getElementById("z10").innerHTML = "Слово " + word + " - " + Palindrome(word);
}