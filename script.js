const enterForm = document.querySelector('.enter'),
           regForm = document.querySelector('.reg'), 
           exitBtn = document.querySelector('.logout'),
           addAccountForm = document.querySelector('.add-account'),
           addAccountBtn = document.querySelector('.save'),
           clearTdBtn = document.querySelector('.clear'),
           inputPriceOld = document.querySelector('input[name="priceold"]'),
           inputPriceNew = document.querySelector('input[name="pricenew"]'),
           profit =  document.querySelector('.profit-add'),
           notifyBlock =  document.querySelector('.alert'),
           allDel =  document.querySelectorAll('.del');

let object = {};

enterForm ? enterForm.addEventListener('submit', sender) : false;
regForm ? regForm.addEventListener('submit', sender) : false;
exitBtn ? exitBtn.addEventListener('click', exitAccount) : false;
addAccountForm ? addAccountForm.addEventListener('submit', sender) : false;
clearTdBtn ? clearTdBtn.addEventListener('click', clearTdFunc) : false;
addAccountBtn ? addAccountBtn.addEventListener('click', sender.bind(addAccountForm)) : false;
profit ? window.onload = profitFunc : false;
inputPriceOld ? inputPriceOld.addEventListener('input', profitFunc) : false;
inputPriceNew ? inputPriceNew.addEventListener('input', profitFunc) : false;
allDel ? allDel.forEach( n => n.addEventListener('click', delRow)) : false;

// Вывод выгоды
function profitFunc() {
    profit.innerHTML = inputPriceNew.value - inputPriceOld.value + ' руб';
}

// Очистка input в строке
function clearTdFunc() {
    this.parentNode.querySelectorAll('input').forEach( n => n.value ='');
    profitFunc();
}

// Удаление строки
function delRow(e) {
    object = {delId: this.parentNode.querySelector('td').getAttribute('title').replace('id: ', '')};
    sender();
    log(delRow);
}

// Выход из аккаунта
function exitAccount() {
    object = {exit: 'exit'};
    sender();
}

// Уведомления
function notify(clases, text) {
    let alertDiv = document.createElement('div');
    alertDiv.classList = clases;
    alertDiv.innerHTML = text;
    document.querySelector('.noti').append(alertDiv);
    setTimeout( () => alertDiv.remove(), 1000);
}


function sender(e) {
    if (this.tagName == 'FORM') {
        e.preventDefault();
        var formData = new FormData(this);
        formData.forEach(function (value, key) {
           object[key] = value;
       });
   }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './func/functions.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('param=' + JSON.stringify(object));
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            log(xhr.response);
            if (xhr.response == 'error') {
                this.querySelector('button').style.background = 'red';
                setTimeout( () => this.querySelector('button').style.background = 'inherit', 500);
            };
            if (xhr.response == 'have') {
                this.querySelector('button').style.background = 'red';
                setTimeout( () => this.querySelector('button').style.background = 'inherit', 500);
            };
            xhr.response == 'authorized' ? location="./lk.php" : false;
            xhr.response == 'exit' ? location="./index.php" : false;
            if (xhr.response == 'added') {
                notify('success', 'Добавлено!')
                location.reload()
            };
            if (xhr.response == 'del') {
                notify('error', 'Удалено');
                location.reload()
            };
        }
    });
}

function log(e) {
    console.log(e)
}

