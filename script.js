document.addEventListener('DOMContentLoaded', (event) => {
    let nameInput = document.getElementById("name");
    let yearInput = document.getElementById("year");
    let head = document.getElementById("url");
    let urlString = "https://localhost:8080/";

    document.getElementById("button").addEventListener("click", function() {
        let tempUrl = urlString;
        let params = new URLSearchParams();

        if (nameInput.value) {
            params.append("name", nameInput.value);
        }
        if (yearInput.value) {
            params.append("year", yearInput.value);
        }

        if (params.toString()) {
            tempUrl += "?" + params.toString();
        }

        head.innerText = tempUrl;
    });
});
