function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var maxX = window.innerWidth - button.offsetWidth - 80; // 80px margin from right edge
    var maxY = window.innerHeight - button.offsetHeight - 80; // 80px margin from bottom edge
    var minX = 80; // 80px margin from left edge
    var minY = 80; // 80px margin from top edge
    
    var x = Math.random() * (maxX - minX) + minX;
    var y = Math.random() * (maxY - minY) + minY;
    
    button.style.position = 'absolute';
    button.style.left = '0px';
    button.style.top = '0px';
    button.style.marginLeft = '0px';
    button.style.marginTop = '0px';
    button.style.transform = `translate(${x}px, ${y}px)`;
}