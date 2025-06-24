/*JSON*/

const students = '{"name": "John", "age": 25, "city": "New York"}';
const studentObj = JSON.parse(students);
console.log(studentObj.name); // Output: John
console.log(studentObj.age); // Output: 25
console.log(studentObj.city); // Output: New York

console.log(JSON.stringify(studentObj)); // Output: {"name":"John","age":25,"city":"New York"}


/*promises*/

// const promise = new Promise((resolve, reject)=>{

//     const response = fetch('https://jsonplaceholder.typicode.com/todos')
//     .done((response)=>{

//         resolve(response);
//     })
//     .fail((error)=>{
//         reject(error);
//     })
// })

/*
const promise = fetch(`https://jsonplaceholder.typicode.com/todos`)
.then((reponse)=>{

    if(!reponse.ok) {
        throw new Error('Network response was not ok');
    }
    return reponse.json();
})

promise.then((data)=>{
    // const posts = JSON.parse(data);
    data.map((value)=>{
        console.log(`ID: ${value.id}, Title: ${value.title}, Completed: ${value.completed}`);
    })
}).catch((error)=>{
    console.error('Error fetching posts:', error);
});
*/

function f1(num){
    return new Promise((res,rej)=>{
        if(num < 0){
            rej('Number is negative');
        }else{
            res(num * 2);
        }
    });
}

function f2(x){

    console.log(x+7);

}

const n = -5;

f1(n).then((value)=>{
    f2(value);
}).catch((error)=>{
    console.error('Error:', error); 
});

/*
const userData = fetch(`https://jsonplaceholde.typicode.com/users`)
.then((response)=>{
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
userData.then((data)=>{
    data.map((value)=>{
        console.log(`ID: ${value.id}, Name: ${value.name}, Email: ${value.email}`);
    })
}).catch((error)=>{
    console.error('Error fetching user data:', error);
});

*/

