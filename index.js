var password = "081504";
function passcheck() {

    if (document.getElementById('code').value != password) {
    alert('Wrong Password');
    return false;
    }

    if (document.getElementById('code').value == password) {
        alert('Correct');
        }
    }