var text = document.getElementById('text');
var shadow = "";
for(var i = 0; i < 30; i++) {
    shadow += (shadow? ',' : '') + -i*1 + 'px ' + i*1 + 'px 0 #e03d3d';
}
text.style.textShadow = shadow;