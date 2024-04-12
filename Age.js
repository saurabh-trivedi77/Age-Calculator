var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");

//  Inputted Date :-
var dob = document.getElementById("input-date");
dob.max = new Date().toISOString().split("T")[0];
var cal = document.getElementById("calculate").addEventListener("click",Cal_Age);
console.log(date,month,year,dob,cal);
function Cal_Age(){
    //  Date 0f Birth
    let birthDate = new Date(dob.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // Todat's Date
    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let D,M,Y;
    Y = y2-y1;
    if(m2 >= m1){
        M = m2 - m1;
    }
    else{
        Y--;
        M = (12 + m2) - m1;
    }
    if(d2 >= d1){
        D = d2 - d1;
    }
    else{
        M--;
        D = getDays(y1,m1) + d2 - d1;
    }
    date.innerHTML = D;
    month.innerHTML = M;
    year.innerHTML = Y;

    //  Last Statement
    let text = document.getElementById("text");
    text.innerHTML = `Your's Age is ->${Y} Years,  ${M} Month,  ${D} Days`;
}
function getDays(saal,mahina){
    return new Date(saal,mahina,0).getDate();
}
