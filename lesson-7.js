// Получение GET запроса 

// const getUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("Error ", error));





// const getUsers = fetch("https://jsonplaceholder.typicode.com/userss")
// .then(response => {
//     if(!response.ok) {
//         throw new Error("response was not ok")
//     }
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(e => console.log(e));






// Отправка запроса на сервер методом POST

// const myPosts = {
//     "userId": 99,
//     "id": 2,
//     "title": "it`s my first post",
//     "body": "My method is POST"
// }


// const postFetch = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(myPosts)
// }).then(response => {
//     if(!response.ok) {
//         throw new Error("response was not ok")
//     }
//     return response.json()
// }).then(data => console.log(data))
// .catch (error => console.log(error))







// Получение запроса из сервера и выявление его на страницу 


// const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(items => {
//     const listElements = document.getElementById("listElements")
//     items.forEach(element => {
//         const listItemElement = document.createElement("li")
//         listItemElement.textContent = element.title
//         listElements.append(listItemElement)
//     });
// })
// .catch(e => console.log(e))







// Для добавления данных по клику мыши

const addPost = () => {
    const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(items => {
    const listElements = document.getElementById("listElements")
    items.forEach(element => {
        const listItemElement = document.createElement("li")
        listItemElement.textContent = element.title
        listElements.append(listItemElement)
    });
})
.catch(e => console.log(e))
}







/* 
1. Создайте HTML-файл с элементами для отображения имени пользователя и его электронной почты.
    
2. Создайте файл JavaScript (app.js) и напишите функцию для отправки 
GET-запроса на сервер (например, https://jsonplaceholder.typicode.com/users/1)

3. Добавьте обработчик событий для кнопки "Load User"

*/


const getUser = () => {
    const getName = fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(names => {
    const listOne = document.getElementById("listOne")
        const listItemName = document.createElement("li")
        listItemName.textContent = names.name
        listOne.append(listItemName)
})
.catch(e => console.log(e));

const getEmail = fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response1 => response1.json())
.then(emails => {
    const listTwo = document.getElementById("listTwo")
    const listItemEmail = document.createElement("li")
    listItemEmail.textContent = emails.email
    listTwo.append(listItemEmail)
})
.catch(error => console.log(error))
};






/* 2 Задание */


const getPersonData = () => {
    const getPersons = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(user => {
    const listThree = document.getElementById("listThree")
    user.forEach(person => {
    const listThreeElement = document.createElement("li")
    listThreeElement.textContent = person.username
    listThree.append(listThreeElement)
    })
})
.catch(error => console.log(error))

const getPersons2 = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(user => {
    const listFour = document.getElementById("listFour")
    user.forEach(person => {
    const listfourElement = document.createElement("li")
    listfourElement.textContent = person.phone
    listFour.append(listfourElement)
    })
})
.catch(error => console.log(error))

}




// Задание 3 создание POST ajax



const myPosts = {
    "userId": 06,
    "region": 95,
    "city": "Grozny",
    "name": "Ahmad Khan"
}

const getPost = () => {
    const postFetch = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myPosts),
    }).then(response => {
        if(!response.ok) {
            throw new Error("response was not ok")
        }
        return response.json()
    }).then(data => console.log(data))
    .catch (error => console.log(error))
}

