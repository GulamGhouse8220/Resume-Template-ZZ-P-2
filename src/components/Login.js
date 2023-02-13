// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useNavigate } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom";


function Login({ setUserData, userData }) {
    const setData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    // const [email, setEmail] = useState("");
    // const [Phone, setPhone] = useState("");
    // const [Location, setLocation] = useState("");
    // const [Education, setEducation] = useState("");


    // const navigation = useNavigate()


    // const handleSubmit = event => {
    //     console.log();
    //     event.preventDefault();
    //     // do something with the form data
    //     navigation("/form")
    //     alert("You submitted");
    //     console.log(name,);
    // };


    return (
        <>
            <form className='mt-5'>
                {/* {handleSubmit} */}
                <label>name:
                    <input type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>email:
                    <input type="text"
                        placeholder="@gmail.com"
                        name="email"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Phone:
                    <input type="number"
                        placeholder="+91"
                        name="phone"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Location:
                    <input type="text"
                        placeholder="city"
                        name="location"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Education:
                    <input type="text"
                        placeholder="Education"
                        name="education"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Position Of Responsiblity:
                    <input type="text"
                        placeholder="Position of Responsiblity"
                        name="positionOfResponsiblity"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Trainings:
                    <input type="text"
                        placeholder="Trainings"
                        name="trainings"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Projects:
                    <input type="text"
                        placeholder="Projects"
                        name="projects"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Skills:
                    <input type="text"
                        placeholder="Skills"
                        name="skills"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Work Sample:
                    <input type="text"
                        placeholder="Work Sample"
                        name="worksample"
                        onChange={setData} />
                </label>
                <br></br><br></br>
                <label>Additional Details:
                    <input type="text"
                        placeholder="Additional Details"
                        name="additionaldetails"
                        onChange={setData} />
                </label>
                <br></br><br></br>

                <Link to="/form">
                    <button>Submit</button>
                </Link>
                {/* <button type="submit">Submit</button> */}
            </form>
        </>
    );
}

export default Login;

