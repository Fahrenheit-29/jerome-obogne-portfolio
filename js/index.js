let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");



function tab(tabName) {


    for (let tablink of tablinks) {

        tablink.classList.remove("active-link");



    }
    for (let tabcontent of tabcontents) {

        tabcontent.classList.remove("active-tab");


    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}