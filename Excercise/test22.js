function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);
    setInterval(function (s2) {
        s2++;
    }, 1000);
}



var timer = new Timer();
//What would be printed out to the console?
setTimeout(() => console.log('s1: ', timer.s1), 3100); //your answer: 3
setTimeout(() => console.log('s2: ', timer.s2), 3100); //your answer: 0