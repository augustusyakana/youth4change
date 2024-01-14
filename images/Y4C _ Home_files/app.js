const requestBoxElement = document.getElementById('requestBox');
const requestBtn = document.getElementById('requestBtn');

requestBtn.addEventListener('click', () => {
    console.log('request');

    requestBoxElement.classList('requestBox');

    requestBoxElement.innerHTML = `<form action="">
        <label>Name: </label><input type="text">
        <label>Email: </label><input type="email">
        <label>Message: </label><input type="text">
        <button>Submit</button>
        </form>`
    
   
})

