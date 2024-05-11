onmessage = function (e) {
    let result = 0;
    for (i = 0; i < 10000000; i++){

        result += i;
    }
    this.postMessage(result);
}