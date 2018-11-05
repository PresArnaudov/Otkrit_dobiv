function ctg(x) { return 1 / Math.tan(x); }

function Calculate() {
    var h, alpha, omega, d, c1, c2, D, A;
    h = document.getElementById("h").value;
    alpha = document.getElementById("alpha").value;
    omega = document.getElementById("omega").value;
    d = document.getElementById("d").value;
    c1 = document.getElementById("C1").value;
    c2 = document.getElementById("C2").value;
    D = document.getElementById("D").value;
    A = document.getElementById("A").value;
    var Bp = h * (ctg(alpha) - ctg(omega)) + A + d + c1 + c2 + D;
    console.log(Bp);


}