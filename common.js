function whichRoutine(num) {
    localStorage.setItem("type", num);
    if (sessionStorage.order != "0") {
        sessionStorage.setItem("order", 0);
    }
}