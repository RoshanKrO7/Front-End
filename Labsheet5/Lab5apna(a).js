

    function printFibonacci() {
        const number = parseInt(document.getElementById("number").value);
        let fibSeries = [0, 1];

        for (let i = 2; i < number; i++) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        }

        console.log(fibSeries);

        
        document.getElementById("fibonacciResult").innerHTML = fibSeries.join(", ");
    }
    

