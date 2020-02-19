import React from 'react';

export const headerMenu = [
    {id: 1, name: "Главная", url: "/"},
    {id: 2, name: "Категории", url: "/category"},
    {id: 3, name: "Товары", url: "/items"},
];

export const categoryItems = [
    {id: 1, category: "Steam", comment: "Комменатрий"},
    {id: 2, category: "Origin", comment: "Комменатрий"},
    {id: 3, category: "Epic", comment: "Комменатрий"},
    {id: 4, category: "4Game", comment: "Комменатрий"},
    {id: 5, category: "Steam", comment: "Комменатрий"},
];

export const Items = [
    {id: 2, category: "Steam", status: "free", seller: "#", login: "a@a.ru", password: "123", purchase: "100", sale: "200", buyer: "b@b.ru", comment: "Комменатрий"},
    {id: 1, category: "Origin", status: "saled", seller: "#", login: "a@a.ru", password: "123", purchase: "100", sale: "200", buyer: "b@b.ru", comment: "Комменатрий"},
    {id: 3, category: "Epic", status: "free", seller: "#", login: "a@a.ru", password: "123", purchase: "100", sale: "200", buyer: "b@b.ru", comment: "Комменатрий"},
];


export const GetData = () => {
        const data = 'data';
        const url = "http://qeru.ru/functions/functions.php";

        const response = fetch(url, {
            method: 'POST',
            body: `username=${data}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    return response.text()
};


