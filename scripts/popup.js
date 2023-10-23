



document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById('submitButton')
    const container = document.getElementById("container");
    const body = document.getElementById("body");


    button.addEventListener("click", function () {



        let color = Math.floor(Math.random() * 16777215).toString(16);
        container.style.backgroundColor = color;
        body.style.backgroundColor = color;
        document.querySelector("h1").style.color = Math.floor(Math.random() * 16777215).toString(16);





        let before = document.getElementById('inputBefore').value;
        let after = document.getElementById('inputAfter').value;

        console.log("before: ", before)
        console.log("after: ", after)

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { before: before, after: after }, function (response) {
                console.log("response: ", response)
            })


        })


    })



})




