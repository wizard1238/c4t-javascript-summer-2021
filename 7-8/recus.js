let fib = function(n) {
    if (n == 0 || n == 1) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

console.log(fib(4))



let fibo = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }

    return fibo(n - 1) + fibo(n - 2)
}