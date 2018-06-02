


function Pre() {
    sessionStorage.order = parseInt(sessionStorage.order) - 1;
    location.reload();
    console.log(sessionStorage.order);
    
}
function Next() {

    sessionStorage.order = parseInt(sessionStorage.order) + 1;
    location.reload();
    console.log(sessionStorage.order);
}
