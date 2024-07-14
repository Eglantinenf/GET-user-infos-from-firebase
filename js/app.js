const usersContainer = document.querySelector('#wrap-users')
const deleteModal = document.querySelector('#delete-modal')
const editModal = document.querySelector('#edit-modal')

const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const password = document.querySelector('.password')

let userID = null

window.addEventListener('load', () => {
    getAllUsers()
})

//---------------------------- GET -----------------------
function getAllUsers () {
     
    fetch(`https://my-first-ever-project-47cea-default-rtdb.firebaseio.com/users.json`)
        .then(res => res.json())
        .then(data => {
            let usersData = Object.entries(data)
            
            usersContainer.innerHTML = ''

            usersData.forEach(user => {

                console.log(user);

                usersContainer.insertAdjacentHTML('beforeend', `
                
                    <div class="user">
                    <div class="user-profile-wrap">
                        <img class="user-profile" src="img/unknownUser.png" alt="default-image">
                        <div class="user-profile-description">
                            <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}</h1>
                            <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn" onclick="openDeleteModal('${user[0]}')">delete</button>
                        <button class="edit-user-btn" onclick="openEditModal('${user[0]}')">edit</button>
                    </div>
                </div>
    
                `)

            })
        })
}

//---------------------- DELETE ------------------------

function openDeleteModal (id) {

    userID = id

    deleteModal.classList.add('visible')
}

function closeDeleteModal () {
    deleteModal.classList.remove('visible')
}

function deleteUser () {

    fetch(`https://my-first-ever-project-47cea-default-rtdb.firebaseio.com/users/${userID}.json`, {
        method: 'DELETE'
    }).then(res => {

        console.log(res);

        getAllUsers()
        closeDeleteModal()
    })
}

//--------------------------- PUT -----------------------

function openEditModal (id) {
    userID = id

    editModal.classList.add('visible')

} 

function closeEditModal () {
    editModal.classList.remove('visible')
}

function updateUser () {

    // Update User

    const userNewData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    }

    fetch(`https://my-first-ever-project-47cea-default-rtdb.firebaseio.com/users/${userID}.json`, {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userNewData)
    })
        .then(res => {
            console.log(res)
            getAllUsers()
            closeEditModal()
        })

}