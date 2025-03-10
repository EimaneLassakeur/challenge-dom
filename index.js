document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});

let result = document.querySelector("#result");
result.style.fontSize = "1.3rem";

let convert = document.querySelector("#convert");

convert.addEventListener("click", () => {
    let input = document.querySelector("#converter").value;
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    switch(from){
        case "DZD":
            switch(to){
                case "DZD":
                    result.innerHTML = input + 'DA';
                    break;
                case "USD":
                    result.innerHTML = (input / 133).toFixed(2) + '$';
                    break;
                case "EUR":
                    result.innerHTML = (input / 158).toFixed(2) + '€';
                    break;
            }
            break;
        case "EUR":
            switch(to){
                case "DZD":
                    result.innerHTML = (input * 158).toFixed(2) + 'DA';
                    break;
                case "USD":
                    result.innerHTML = (input * 1.19).toFixed(2) + '$';
                    break;
                case "EUR":
                    result.innerHTML = input + '€';
                    break;
            }
            break;
        case "USD":
            switch(to){
                case "DZD":
                    result.innerHTML = (input * 133).toFixed(2) + 'DA';
                    break;
                case "USD":
                    result.innerHTML = input + '$';
                    break;
                case "EUR":
                    result.innerHTML = (input * 0.84).toFixed(2) + '€';
                    break;
            }
            break;
    }
});