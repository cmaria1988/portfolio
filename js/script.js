var helloElement = document.querySelector(".hello");
var iamElement = document.querySelector(".iam");
var mariaElement = document.querySelector(".maria");

const experienceElement = document.querySelector(".experience");
const experienceList = document.querySelector(".experience-list");
const experienceText = document.querySelector(".experience-text");

const skillElement = document.querySelector(".skill");
const skillList = document.querySelector(".skill-list");
const skillText = document.querySelector(".skill-text");

const experienceArray =["Bachelor degree in Information Technology",
                        "Master degree in Information System Development",
                        "Bootcamp in Front-End Developer",
                        "Wordpress Developer Volunteer",
                        "System Administrator Volunteer",
                        "Programming Tutor",
                        "Three years as web developer",
                        "Five years as IT lecturer"];
const skillsArray = ["HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "PHP",
                    "C#",
                    "REST API",
                    "MySQL",
                    "Git",
                    "Wordpress",
                    "Laravel",
                    "CodeIgniter"];

/***** HOME *****/
/** Hello/About*/
if(helloElement){
    helloElement.addEventListener("mouseover", function(){
        helloElement.innerText = "About";
    });


    helloElement.addEventListener("mouseout", function(){
        helloElement.innerText = "Hello,";
    });
}

/**I am / Project */
if(iamElement){
    iamElement.addEventListener("mouseover", function(){
        iamElement.innerText = "Projects";
        iamElement.style.color = "#000";
    });

    iamElement.addEventListener("mouseout", function(){
        iamElement.innerText = "I am";
        iamElement.style.color = "#6f1d1b";
    });
}


/** Maria / Contact */
if(mariaElement){
    mariaElement.addEventListener("mouseover", function(){
        mariaElement.innerText = "Contact";
        mariaElement.style.color = "#000";
    });

    mariaElement.addEventListener("mouseout", function(){
        mariaElement.innerText = "Maria";
        mariaElement.style.color = "#6f1d1b";
    });
}

/*****ABOUT *****/
/**EXPERIENCE */
if(experienceElement){
    experienceElement.addEventListener("mouseenter", function(){
        for(const experience of experienceArray){
            const li = document.createElement("li");
            li.innerText = experience;
            experienceList.append(li);
        }
        experienceText.innerText="Experience";
        experienceElement.remove();
    });
    
    experienceElement.addEventListener("mouseleave", function(){
        experienceList.innerHTML = "";
    });
}

/**SKILLS */
if(skillElement){
    skillElement.addEventListener("mouseenter", function(){
        for(const skill of skillsArray){
            const li = document.createElement("li");
            li.innerText = skill;
            skillList.append(li);
        }
        skillText.innerText="Skills";
        skillElement.remove();
    });
        
    skillElement.addEventListener("mouseleave", function(){
        skillList.innerHTML = "";
    });
}



