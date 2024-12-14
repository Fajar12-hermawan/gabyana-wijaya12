function colokan(params) {
    let lampu1= document.getElementById("lampu1");
    let lampu2= document.getElementById("lampu2");
    let lampu3= document.getElementById("lampu3");
    
    if(params == "on"){
        lampu1.src="assets/images/on.gif";
        lampu2.src="assets/images/on.gif";
        lampu3.src="assets/images/on.gif";
        
    }
    if(params == "off"){
        lampu1.src="assets/images/off.gif";
        lampu2.src="assets/images/off.gif";
        lampu3.src="assets/images/off.gif";
    }
    return lampu1;
}

function saklar(params) {
    let lampu4= document.getElementById("lampu4");
    let lampu5= document.getElementById("lampu5");
    let lampu6= document.getElementById("lampu6");

    if(params == "on"){
        lampu4.src="assets/images/on.gif";
        lampu5.src="assets/images/on.gif";
        lampu6.src="assets/images/on.gif";
        
    }
    if(params == "off"){
        lampu4.src="assets/images/off.gif";
        lampu5.src="assets/images/off.gif";
        lampu6.src="assets/images/off.gif";
    }
    return lampu4;
}

function saklar2(params) {
    let lampu7= document.getElementById("lampu7");
    let lampu8= document.getElementById("lampu8");
    let lampu9= document.getElementById("lampu9");

    if(params == "on"){
        lampu7.src="assets/images/on.gif";
        lampu8.src="assets/images/on.gif";
        lampu9.src="assets/images/on.gif";
        
    }
    if(params == "off"){
        lampu7.src="assets/images/off.gif";
        lampu8.src="assets/images/off.gif";
        lampu9.src="assets/images/off.gif";
    }
    return lampu7;
}

function colokan1() {
    let toggle1= document.getElementById("darkmode-toggle1");
    let toggle2= document.getElementById("darkmode-toggle2");
    let toggle3= document.getElementById("darkmode-toggle3");
    

    if(toggle1.checked) {
            lampu1.src="assets/images/on.gif";
        } else {
            lampu1.src="assets/images/off.gif";
        }
        if(toggle2.checked) {
            lampu2.src="assets/images/on.gif";
        } else {
            lampu2.src="assets/images/off.gif";
        }
        if(toggle3.checked) {
            lampu3.src="assets/images/on.gif";
        } else {
            lampu3.src="assets/images/off.gif";
        }
}

function colokan2() {
    let toggle4= document.getElementById("darkmode-toggle4");
    let toggle5= document.getElementById("darkmode-toggle5");
    let toggle6= document.getElementById("darkmode-toggle6");
    

    if(toggle4.checked) {
            lampu4.src="assets/images/on.gif";
        } else {
            lampu4.src="assets/images/off.gif";
        }
        if(toggle5.checked) {
            lampu5.src="assets/images/on.gif";
        } else {
            lampu5.src="assets/images/off.gif";
        }
        if(toggle6.checked) {
            lampu6.src="assets/images/on.gif";
        } else {
            lampu6.src="assets/images/off.gif";
        }
}

function colokan3() {
    let toggle7= document.getElementById("darkmode-toggle7");
    let toggle8= document.getElementById("darkmode-toggle8");
    let toggle9= document.getElementById("darkmode-toggle9");
    

    if(toggle7.checked) {
            lampu7.src="assets/images/on.gif";
        } else {
            lampu7.src="assets/images/off.gif";
        }
        if(toggle8.checked) {
            lampu8.src="assets/images/on.gif";
        } else {
            lampu8.src="assets/images/off.gif";
        }
        if(toggle9.checked) {
            lampu9.src="assets/images/on.gif";
        } else {
            lampu9.src="assets/images/off.gif";
        }
}


