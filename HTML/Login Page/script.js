combos = [["joe", "hi"], ["tyler", "bye"], ["lance", "cs"], ["david", "chicken"]];


function combo() {
    let x = document.getElementById("user").value.trim();
    let y = document.getElementById("pwd").value.trim();
    let a = document.getElementById("title");
    let b = document.getElementById("alert");
    let btnClass = document.getElementById("close-button").className;

    for (let i = 0; i < combos.length; i++) {
        if (combos[i][0] == x) {
            if (combos[i][1] == y) {
                a.innerHTML = "Success!";
                b.innerHTML = "You have successfully logged in!";
                btnClass += 'success-button';
                document.myform.reset();
                return 0;
            }
            else {
                a.innerHTML = "Failure!";
                b.innerHTML = "Incorrect password!";
                btnClass += 'failure_button';
                document.myform.reset();
                return 0;
            }
        }
    }
    a.innerHTML = "Failure!";
    b.innerHTML = "Username doesn't exist!";
    btnClass += "failure-button";
    document.myform.reset();
}

function toggle() {
    let pwd = document.getElementById("pwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}