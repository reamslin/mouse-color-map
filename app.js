width = window.innerWidth
height = window.innerHeight

document.addEventListener('mousemove', function(e) {
    b = normalize(e.pageX, width);
    g = normalize(e.pageY, height);
    document.body.style.backgroundColor = `rgb(0, ${g}, ${b})`;
})

function normalize(n, bound) {
   return Math.floor((n * 255) / bound);
}