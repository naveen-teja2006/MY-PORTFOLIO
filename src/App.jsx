import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { projectsData } from "./data/projectsData.js";
import Footer from "./components/Footer.jsx";
let root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    // -----------------------------------------------------------------------------------------------------
    let [formData, setFormData] = React.useState({
        name: "",
        email: "",
        description: ""
    })
    let navigate = (url) =>{
        window.open(url,"_blank");
    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value }); // The Bracket Is For when We Update The Values
        // Then Javascript Updates It Dynamically Without Brackets It Creates A Property Not Value Inside It
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            return alert(data.message);
        }
        catch (err) {
            return alert("Something Went Wrong!");
        }
    }
    // -----------------------------------------------------------------------------------------------------
    // Skills 
    let skills = ["DSA", "HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS", "EXPRESS.JS", "SQL",
        "API", "GIT", "GITHUB", "POSTMAN", "THUNDER CLIENT"];
    //  Typing Animation
    let [Text, setText] = React.useState("");
    React.useEffect(() => {
        const roles = ["Web Developer", "React Developer", "Problem Solver", "Frontend Developer", "Backend Developer"];
        let roleIndex = 0;
        let charIndex = 0;
        const id = setInterval(() => {
            const currentSkill = roles[roleIndex]; // To Know The Current Skill Index
            setText(currentSkill.slice(0, charIndex + 1)); // Rendering By Characters One By One
            charIndex++; // Incrementing The Characters
            if (charIndex > currentSkill.length) { // If Character Index Is More Than The Current Skill Length 
                charIndex = 0; // Then Set The Character Index To The Zero For Next Skill Starting from The Next Skill
                roleIndex = (roleIndex + 1) % roles.length; // Next Role Index If Final Role Then Wrap Around To Starting
            }
        }, 150);
        return () => clearInterval(id);
    }, []);
    // ------------------------------------------------------------------------------------------------- //
    // Rendering On The UI
    return (
        <>
            {/* Navbar Section */}
            <Navbar />
            {/* Home Section */}
            <div id="Home">
                <div className="name-role">
                    <div className="profile-name">
                        Hello! Iam <span className="my-name">Naveen Teja Singu</span><br />
                        <span className="roles-text">{Text}</span>
                    </div>
                    <p>Iam Currently Doing Frontend Development And Iam A Btech Computer Sceince
                        Student Passionate About Web Development And Still Learning
                        The New Technologies And Getting Knowledge Through Them.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/naveen-teja-singu-99327639a/" target="_blank" className="social-Icon"><FaLinkedin /></a>&nbsp;
                        <a href="https://github.com/naveen-teja2006" target="_blank" className="social-Icon"><FaGithub /></a>&nbsp;
                        <a href="https://leetcode.com/u/2bnRDepBZk/" target="_blank" className="social-Icon"><SiLeetcode /></a>&nbsp;
                        <a href="https://www.youtube.com/@NaveenTeja2006" target="_blank" className="social-Icon"><FaYoutube /></a><br /><br />
                    </div>
                    <div className="call-to-action-btn">
                        <a download="/Naveen_Teja_Singu_Resume.pdf" href="Colored Shapes.svg">
                            <button>Download CV <FontAwesomeIcon icon={faArrowDown} /></button></a>&nbsp;&nbsp;
                        <a href="#Projects"><button>View Projects</button></a>
                    </div>
                </div>
                <img src="/profile_img.png" className="image" />
            </div>
            {/* About Section */}
            <div id="About">
                <h1>About Me</h1>
                <div className="image-and-about-me">
                    <img src="profile_img.png" className="image" />
                    <p className="about-me">HI GUYS WELCOME TO MY PORTFOLIO IAM FROM KHAMMAM AND IAM PURSUING
                        THE BTECH IN SBIT COLLEGE KHAMMAM AND IAM PASSIONATE ABOUT THE COMPUTER SCEINCE AND
                        I LIKE PROBLEM SOLVING AND I LIKE THE FRONTEND DEVELOPMENT WHERE I CREATE THE SCALABLE
                        AND FEASIBLE APPLICATIONS THROUGH DIFFERENT TECHNOLOGIES I LIKE TO ENTER INTO THIS FIELD
                    </p>
                </div>
            </div>
            {/* Education Section */}
            <div id="education">
                <h1 className="education-title">Education</h1>
                <div className="timeline">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-item">B.TECH</h3>
                    <div className="timeline-card">
                        <span>2024-2028</span>
                        <h3>B.Tech - Computer Science & Engineering </h3>
                        <h4>SBIT College,Khammam</h4>
                        <p>Currently Pursuing My Bachelors Degree In Computer Science & Engineering</p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-item">INTERMEDIATE</h3>
                    <div className="timeline-card">
                        <span>2022-2024</span>
                        <h3>Intermediate - Mathematics,Physics & Chemistry </h3>
                        <h4>Madhu Junior College,Wyra</h4>
                        <h4>Completed My Higher Secondary Education</h4>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-dot"></div>
                    <h3 className="timeline-item">SSC</h3>
                    <div className="timeline-card">
                        <span>2021-2022</span>
                        <h3>SSC</h3>
                        <h4>GHS,Wyra</h4>
                        <h4>Completed My Schooling Education</h4>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div id="Skills">
                <h1 className="skills-heading">Skills</h1>
                <div className="skills-container">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="each-skill">
                                <p className="skill">{skill}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Projects Section */}
            <div id="Projects">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-container">
                    {projectsData.map((project, index) => {
                        return (
                            <div className="each-project-card" key={index}>
                                <img src={project.img} className="project-image" />
                                <p className="project-title">{project.name}</p>
                                <div key={index} className="project-skillsUsed-container">
                                    {project.skillsUsed.map((skillUsed, index) => {
                                        return (
                                            <p className="project-skillUsed" key={index}>{skillUsed}</p>
                                        )
                                    })}
                                </div>
                                <button onClick={() => navigate(project.link)}>Visit Project</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Contact Section */}
            <div id="Contact">
                <h1>Contact Me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="name">Name : </label>
                        <input type="text" onChange={handleChange} name="name" id="name" placeholder="Enter Your Name " required /><br />
                        <label htmlFor="email">Email : </label>
                        <input type="email" onChange={handleChange} name="email" id="email" placeholder="Ex :- abc@gmail.com" required /><br />
                        <label htmlFor="description">Description : </label>
                        <textarea rows="6" onChange={handleChange} name="description" cols="30" placeholder="Enter Message Here"></textarea><br />
                        <button>Send Mail</button>
                    </fieldset>
                </form>
            </div>
            {/* Footer Section */}
            <Footer />
        </>
    )
}
root.render(<App />);