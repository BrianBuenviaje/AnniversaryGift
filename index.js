var password = "2202301496997";
function passcheck() {

    if (document.getElementById('code').value != password) {
    alert('Wrong Password');
    return false;
    }

    if (document.getElementById('code').value == password) {
        alert('Correct');
        }
    }
