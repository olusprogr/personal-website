// Functionality for the about me container
function changeText(section) {
    aboutMe = [
        ["My Journey",
        "In the beginning, it was a challenge – the code looked like a complicated mix of letters and symbols. I remember spending hours watching programming tutorials to learn the basics. One day, I stumbled upon the fascinating of GUI programming with the Tkinter library. It was a breakthrough! Suddenly, I could create my own user interfaces and bring my creative ideas to life. One of my early projects was crafting a food ordering menu like that one at my school. With Tkinter, I could design interactive menus and implement ordering processes.<br><br> Since then, I've steadily expanded my knowledge and worked on various projects. Programming, for me, is a constant journey of discovery, and I look forward to realizing many exciting projects ahead.",
        "Currently diving deep into <span style='text-decoration: underline 2px;''>Web Development</span> and <span style='text-decoration: underline 2px;'>Machine Learning</span>.",
        "Now, let me take you through some of these projects :)"],

        ["",
        "",
        "",
        ""],

        ["My Experience",
        "I bring 2.5 years of experience to the table, particularly in the realm of Python. My expertise lies in GUI development and Object-Oriented Programming (OOP). While I am still in the early stages of my web development journey, I am already proficient in coding entire pages using Bootstrap. Additionally, I have a foundational understanding of C++ from my school days, where I learned at a basic level. I approach my work with dedication and a commitment to continuous learning, always striving to enhance my skills and explore new horizons in programming.",
        "Writing code since i was 13 years old.",
        ""]
    ]

    let dynamicText = document.getElementById('dynamicText-about-me-h2');
    let dynamicText2 = document.getElementById('dynamicText-about-me-p');
    let dynamicText3 = document.getElementById('dynamicText-about-me-h3');
    let dynamicText4 = document.getElementById('dynamicText-about-me-p-2');

    if (section === 'aboutMe') {
        dynamicText.innerText = aboutMe[0][0];
        dynamicText2.innerHTML = aboutMe[0][1];
        dynamicText3.innerHTML = aboutMe[0][2];
        dynamicText4.innerHTML = aboutMe[0][3]
    } else if (section === 'skills') {
        dynamicText.innerText = aboutMe[1][0];
        dynamicText2.innerHTML = aboutMe[1][1];
        dynamicText3.innerHTML = aboutMe[1][2];
        dynamicText4.innerHTML = aboutMe[1][3]
    } else if (section === 'experience') {
        dynamicText.innerText = aboutMe[2][0];
        dynamicText2.innerHTML = aboutMe[2][1];
        dynamicText3.innerHTML = aboutMe[2][2];
        dynamicText4.innerHTML = aboutMe[2][3]
    }
}
