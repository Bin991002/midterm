var ans = "";
var sum = 0;
for (var i = 1; i <= 100; i++ ) {
    if (i % 6 == 0) {
        ans += i + "+";
        sum += i;
    }
    
}

console.log(ans + " = " + sum);
