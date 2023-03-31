function display() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDay();
    let getDay = ["Sun", "Mon", "Tue", "Wed", 
    "Thu", "Fri", "Sat"];
    //displays date in DD.MM.YY format
    document.getElementById('display-date').innerHTML = date.getDate() + " . "
    + (date.getMonth() + 1) + " . " + year.toString().slice(-2);
    //displays time in HH.MM.SS format
    document.getElementById('display-clock').innerHTML = date.getHours() + " : " 
    + date.getMinutes() + " : " + date.getSeconds();
    //"." used to mark current day on image template
    document.getElementById("display-day").innerHTML = ".";
    //this whole block displays "." on image template for current day
    //********************BLOCK STARTS HERE*************************** */
    if(getDay[day] == "Sun") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "120px";
    }

    else if(getDay[day] == "Mon") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "199px";
    }

    else if(getDay[day] == "Tue") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "289px";
    }

    else if(getDay[day] == "Wed") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "364px";
    }

    else if(getDay[day] == "Thu") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "445px";
    }

    else if(getDay[day] == "Fri") {
        document.querySelector('#display-day').style.top = "158px";
        document.querySelector('#display-day').style.left = "526px";
    }

    else {
        document.querySelector('#display-day').style.top = "203px";
        document.querySelector('#display-day').style.left = "120px";
    }
    //************************BLOCK ENDS HERE*************************** */

}
//calls display() every 1 seconds.
setInterval(display, 1000);