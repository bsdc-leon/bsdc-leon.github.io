console.log("^-^")

const clickable = document.getElementById("button");
const holyflip = function () {
    console.log("holy flip");
};

clickable.addEventListener("click", holyflip);


const clickable2 = document.getElementById("button2")
const holyflip2 = function () {
    location.replace("https://www.legislation.gov.uk/ukpga/1971/38/crossheading/the-advisory-council-on-the-misuse-of-drugs")
}

clickable2.addEventListener("click",holyflip2)