// import before from "popup.js"
// import after from "popup.js"





chrome.runtime.onMessage.addListener(function (output) {

    let before = output.before;
    let after = output.after;

    // if (localStorage.getItem("cache")) {

    //     localStorage.setItem("cache", (localStorage.getItem("cache")).push([before, after]))


    // } else {
    //     localStorage.setItem("cache", [before, after])
    // }

    // console.log("cached: ", localStorage.getItem("cache"))

    console.log("recieved data via output")
    console.log(before)
    console.log(after)

    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

    for (let i = 0; i < text.length; i++) {
        // console.log(text[i])
        if (text[i].innerHTML.includes(before)) {

            text[i].innerHTML = text[i].innerHTML.replace(before, after)
        }
    }



})




// let before = localStorage.getItem("before") ? localStorage.getItem("before") : "Republicans";
// let after = localStorage.getItem("after") ? localStorage.getItem("after") : "Death Eaters";

// console.log("loaded from storage: ", before, after)

// for (let i = 0; i < text.length; i++) {
//     // console.log(text[i])
//     if (text[i].innerHTML.includes(before)) {

//         text[i].innerHTML = text[i].innerHTML.replace(before, after)
//     }
// }














// function submit() {
//     console.log("clicked")
//     before = document.getElementById('inputBefore').value
//     after = document.getElementById('inputAfter').value

//     console.log(before, after)
// }

// const button = document.getElementById('submitButton')
// button.onClick = submit
// button.onClick = submit