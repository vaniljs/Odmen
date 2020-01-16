const enterForm = document.querySelector('.enter'),
    regForm = document.querySelector('.reg'),
    exitBtn = document.querySelector('.logout'),
    addAccountForm = document.querySelector('.add-account'),
    addAccountBtn = document.querySelector('.save'),
    clearTdBtn = document.querySelector('.clear'),
    inputPriceOld = document.querySelector('input[name="priceold"]'),
    inputPriceNew = document.querySelector('input[name="pricenew"]'),
    profit = document.querySelector('.profit-add');

let object = {};

enterForm ? enterForm.addEventListener('submit', sender) : false;
regForm ? regForm.addEventListener('submit', sender) : false;
exitBtn ? exitBtn.addEventListener('click', exitAccount) : false;
addAccountForm ? addAccountForm.addEventListener('submit', sender) : false;
clearTdBtn ? clearTdBtn.addEventListener('click', clearTdFunc) : false;
addAccountBtn ? addAccountBtn.addEventListener('click', sender.bind(addAccountForm)) : false;
inputPriceOld ? inputPriceOld.addEventListener('input', profitFunc) : false;
inputPriceNew ? inputPriceNew.addEventListener('input', profitFunc) : false;

window.addEventListener('load', () => {
    generateListAcc()
});

// Вывод выгоды
function profitFunc() {
    profit ? profit.innerHTML = inputPriceNew.value - inputPriceOld.value + ' руб' : false;
}

// Очистка input в строке
function clearTdFunc() {
    this.parentNode.querySelectorAll('input').forEach(n => n.value = '');
    profitFunc();
}

// Удаление строки
function delRow() {
    object = {delId: this.parentNode.querySelector('.number').getAttribute('title')};
    sender();
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
    setTimeout(() => alertDiv.remove(), 2000);
}

// Генерация списка аккаунтов
function generateListAcc(e) {
        let indexAccount = 0;
        xhr = new XMLHttpRequest();
        xhr.open('POST', './func/functions.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('param=getaccounts');
        xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelectorAll('.account').forEach(n => n.remove());

            let arrAccounts = JSON.parse(xhr.response);

            arrAccounts.map(n => {
                ++indexAccount;
                let tr = document.createElement('tr');
                tr.classList = 'account';

                let tdIndex = document.createElement('td');
                tdIndex.classList = 'number';
                tdIndex.setAttribute('title', n.id);
                tdIndex.innerHTML = indexAccount;
                tr.append(tdIndex);

                let tdOrder = document.createElement('td');
                tdOrder.classList = 'order';
                tdOrder.innerHTML = n.selorder;
                tr.append(tdOrder);

                let tdSeller = document.createElement('td');
                tdSeller.classList = 'seller';
                let tdSellerLink = document.createElement('a');
                tdSellerLink.setAttribute('href', n.seller);
                tdSellerLink.setAttribute('target', '_blank');
                tdSellerLink.innerHTML = 'Link';
                tdSeller.append(tdSellerLink);
                tr.append(tdSeller);

                let tdLogin = document.createElement('td');
                tdLogin.classList = 'login';
                tdLogin.innerHTML = n.dodologin;
                tr.append(tdLogin);

                let tdPassword = document.createElement('td');
                tdPassword.classList = 'password';
                tdPassword.innerHTML = n.dodopassword;
                tr.append(tdPassword);

                let tdPriceOld = document.createElement('td');
                tdPriceOld.classList = 'priceold';
                tdPriceOld.innerHTML = n.priceold + ' руб';
                tr.append(tdPriceOld);

                let tdPriceNew = document.createElement('td');
                tdPriceNew.classList = 'pricenew';
                tdPriceNew.innerHTML = n.pricenew + ' руб';;
                tr.append(tdPriceNew);

                let tdProfit = document.createElement('td');
                tdProfit.classList = 'profit';
                tdProfit.innerHTML = n.pricenew - n.priceold + ' руб';;
                tr.append(tdProfit);

                let tdBuyer = document.createElement('td');
                tdBuyer.classList = 'buyer';
                tdBuyer.innerHTML = n.buyer;
                tr.append(tdBuyer);

                let tdInfo = document.createElement('td');
                tdInfo.classList = 'info-icon';
                let tdInfoIcon = document.createElement('img');
                tdInfoIcon.setAttribute('src', 'img/question.svg');
                tdInfo.append(tdInfoIcon);
                tr.append(tdInfo);

                let tdDel = document.createElement('td');
                tdDel.classList = 'del';
                let tdDelIcon = document.createElement('img');
                tdDelIcon.setAttribute('src', 'img/delete-button.svg');
                tdDel.append(tdDelIcon);
                tr.append(tdDel);

                document.querySelector('.add-account').parentNode.before(tr);
                let allDel = document.querySelectorAll('.del');
                allDel ? allDel.forEach(n => n.addEventListener('click', delRow)) : false;
            })
        }
    });
}


function sender(e) {
    if (this.tagName === 'FORM') {
        e.preventDefault();
        var formData = new FormData(this);
        formData.forEach(function (value, key) {
            object[key] = value;
        });
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', './func/functions.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('param=' + JSON.stringify(object));
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
            if (xhr.response === 'error') {
                this.querySelector('button').style.background = 'red';
                setTimeout(() => this.querySelector('button').style.background = 'inherit', 500);
            }
            if (xhr.response === 'have') {
                this.querySelector('button').style.background = 'red';
                setTimeout(() => this.querySelector('button').style.background = 'inherit', 500);
            }
            xhr.response === 'authorized' ? location = "./lk.php" : false;
            xhr.response === 'exit' ? location = "./index.php" : false;
            if (xhr.response.slice(' ').includes('added')) {
                notify('success', 'Добавлено!');
                generateListAcc();
            }
            if (xhr.response.slice(' ').includes('del')) {
                notify('error', 'Удалено');
                generateListAcc();
            }
        }
    });
}

function log(e) {
    console.log(e)
}

