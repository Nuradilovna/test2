///1
const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6"));


///2
function fibonacci(n, a = 0, b = 1) {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => {
        fibonacci(n + 1, b, a + b);
    }, 1000);
}
fibonacci(0);


///3

const fetchProductTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};
fetchProductTitles();


///4
const btn = document.querySelector('#for');
btn.onclick =()=>{
    document.body.style.backgroundColor=btn.innerHTML
}


//5
const toggleButton = document.querySelector('#toggleButton');
const box = document.querySelector('#box');

toggleButton.onclick=()=>{
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
};


//6
const counterElement = document.querySelector('#counter');
let counter = 0;

const intervalId = setInterval(() => {
    counter += 1;
    counterElement.textContent = counter;
    if (counter >= 100) {
        clearInterval(intervalId);
    }
}, 1);


//7
async function fetchData() {
    try {
        const response = await fetch('seven.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}
const button = document.querySelector('#fetchButton');

button.onclick=()=>{
    fetchData();
}
