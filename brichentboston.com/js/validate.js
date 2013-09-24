/* Author: Shakwan Burnett

*/
var input = document.getElementById('name');
input.addEventListener('blur', validate, false);
function validate () {
    var input = document.getElementById('name').value;
    var errorMessage =  'Please a name';
    var errorSpan = document.getElementById('errorMessage');
    if (input === "")
    {

        errorSpan.innerHTML = errorMessage;
        errorSpan.style.display = 'inline';
    }
    else
    {
        errorSpan.innerHTML = "";
    }
}