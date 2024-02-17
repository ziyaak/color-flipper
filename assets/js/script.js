const colorDiv = document.getElementById('color');
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDiv.textContent = randomColor;
});

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
