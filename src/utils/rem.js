function font() {
    document.documentElement.style.fontSize = document.body.clientWidth/3.75 + 'px'
}
font()
window.onresize = font