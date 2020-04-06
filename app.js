width = window.innerWidth
height = window.innerHeight

document.addEventListener('mousemove', function(e) {
    r = normalize(e.pageX, width);
    b = normalize(e.pageY, height);
    document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
})

function normalize(n, bound) {
   return Math.floor((n * 255) / bound);
}