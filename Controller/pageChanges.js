
const buttons = document.querySelectorAll('.collapse-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});


function closeBanner() {
    document.getElementById("banner").classList.add("hide");
}