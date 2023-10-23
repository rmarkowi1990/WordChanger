

chrome.runtime.onMessage.addListener(function (output) {

    let before = output.before;
    let after = output.after;

    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes(before)) {
            text[i].innerHTML = text[i].innerHTML.replace(before, after)
        }
    }
})
