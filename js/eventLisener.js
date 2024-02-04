
document.addEventListener('DOMContentLoaded', function() {
    let text = 'Olivier Chodura';
    let h1Element = document.getElementById('my-name');

    function typeWriter(text, i, interval) {
      if (i < text.length) {
        h1Element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(text, i, interval);
        }, interval);
    } else {
        setTimeout(function() {
          h1Element.innerHTML = '';
          typeWriter(text, 0, interval);
        }, 7000);
    }};

    typeWriter(text, 0, 100);
})
