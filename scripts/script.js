document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    //evento para chamar o alert
    //alert("A página foi totalmente carregada e o JS foi implementado!");

    document.querySelector('form').addEventListener('submit', loadUserData);

    //chamando a função para carregar os usuários
    loadUserDataList();
});

function loadUserData (event){
    event.preventDefault();

    //Array
    let listUser = []; 

    //capturando os valores e colocando eles dentro de um objeto (userData)
    const userData = {
        //capturando os valores e colocando eles dentro das propriedades ou também atributos
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }

    if (localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'));       
    }

    listUser.push(userData);
    localStorage.setItem('users', JSON.stringify(listUser));


    // console.log(userData);
    window.location.reload();
}

const loadUserDataList = () => {
    const tableData = document.getElementById('tableBodyList');

    if (localStorage.getItem('users')) {
        const listUsers = JSON.parse(localStorage.getItem('users'));
        let template = "";

        listUsers.forEach(user => {
            template += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.idade}</td>
                </tr>    
            `
        });
        
        tableData.innerHTML = template;

    } else {
        alert("Nenhum usuário cadastrado");
    }
}