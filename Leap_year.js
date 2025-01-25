function Leap_Year(year) {

    if (year % 4 == 0) {
        console.log("Leap Year");
    }
    else 
    {
        if (year % 400 == 0 && year % 100 == 0) {
            console.log("Leap Year");
        }
        else {
            console.log("Not Leap Year");
        }
    }
}

Leap_Year(2024);