const requestBtn = document.getElementById('requestBtn');


requestBtn.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = "none";
}) 