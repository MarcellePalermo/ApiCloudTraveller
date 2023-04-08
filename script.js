const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
});

function showPosition(position) {
    alert(`Sua localização é: ${position.coords.latitude}, ${position.coords.longitude}`);
}