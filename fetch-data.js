// Define an asynchronous function named fetchUserData.
async function fetchUserData() {

    // API Endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Data Container Element
    const dataContainer = document.getElementById('api-data');

     // Fetch Data Using try-catch
     try{
        const response = await fetch (apiUrl);
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';

        //Create a <ul> element
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
     } catch(error){
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.';
     }
};

document.addEventListener('DOMContentLoaded', fetchUserData);