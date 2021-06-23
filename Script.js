function fact() {
    var n = document.getElementById('input').value;
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        ans *= i;
    }
    document.getElementById('output').innerHTML = "Factorial = " + ans;
}