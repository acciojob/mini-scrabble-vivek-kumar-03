//your code here
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('evaluatedText');
    const letterCount = document.getElementById('letterCount');
    
    textInput.addEventListener('input', function() {
        const text = this.value;
        letterCount.textContent = text.length;
    });
});