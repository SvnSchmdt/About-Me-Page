
function updateFontSize(value) {
    const sampleText = document.getElementById('sample-text');
    sampleText.style.fontSize = value + 'px';
}

const fontSizeRange = document.getElementById('font-size-range');
fontSizeRange.addEventListener('input', function() {
    const fontSize = this.value;
    updateFontSize(fontSize);
});

// Initialisierung der Schriftgröße
updateFontSize(fontSizeRange.value);

function vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;        
    }
}