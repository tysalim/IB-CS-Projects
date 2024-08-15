combos = [["joe", "hi"], ["tyler", "bye"], ["lance", "cs"], ["david", "chicken"]];


function combo() {
    let x = document.getElementById("user").value.trim();
    let y = document.getElementById("pwd").value.trim();

    for (let i = 0; i < combos.length; i++) {
        if (combos[i][0] == x) {
            if (combos[i][1] == y) {
                alert("Correct password! You have successfully logged in!");
                document.myform.reset();
                return 0;
            }
            else {
                alert("Incorrect password!");
                document.myform.reset();
                return 0;
            }
        }
    }
    alert("Username doesn't exist!");
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