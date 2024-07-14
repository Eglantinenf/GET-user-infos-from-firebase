
// var x = document.getElementById('login');
// var y = document.getElementById('register');
// var z = document.getElementById('btn');

// function register(){
//     x.style.left ="-350px";
//     y.style.right ="25px";
//     z.style.left ="150px";
// }


// // view  password codes

// function myRegPassword(){

//     var d = document.getElementById('regPassword');
//     var b = document.getElementById('eye-2');
//     var c = document.getElementById('eye-slash-2');

//     if(d.type === "password"){
//         d.type = "text"
//         b.style.opacity = "0";
//         c.style.opacity = "1";
//     }
//     else{
//         d.type = "password"
//         b.style.opacity = "1";
//         c.style.opacity = "0";
//     }
// }

const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const password = document.querySelector('#password')

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value
    }

    fetch('https://my-first-ever-project-47cea-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then((res) => {
        console.log(res)
        cleanData()
    })
    .catch((err) => console.log(err))
})
function cleanData () {
    firstname.value = ''
    lastname.value = ''
    password.value = ''
}
