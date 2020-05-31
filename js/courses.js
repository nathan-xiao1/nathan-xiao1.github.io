var current = [
    "COMP3121 Algorithms and Programming Techniques",
    "COMP3141 Software System Design and Implementation",
    "COMP6771 Advanced C++ Programming"
]

var completed = [
    "COMP1511 Introduction to Programming",
    "COMP1521 Computer Systems Fundamentals",
    "COMP1531 Software Eng Fundamentals",
    "COMP2041 Software Construction",
    "COMP2111 System Modelling and Design",
    "COMP2511 O-O Design & Programming",
    "COMP2521 Data Structures and Algorithms",
    "COMP3231 Operating Systems",
    "COMP3311 Database Systems",
    "COMP3411 Artificial Intelligence",
    "COMP6441 Security Engineering"
]

var future = [
    "COMP3331 Computer Networks and Applications"
]

function createDDTag(item) {
    var tag = document.createElement("dd");
    tag.innerText = item;
    return tag;
}


document.addEventListener("DOMContentLoaded", function () {
    for (const course of current) {
        document.getElementById("current-course").appendChild(createDDTag(course));
    }
    for (const course of completed) {
        document.getElementById("completed-course").appendChild(createDDTag(course));
    }
    for (const course of future) {
        document.getElementById("future-course").appendChild(createDDTag(course));
    }
});