import { useState } from 'react';

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            answer: "Harper Lee"
        },
        {
            question: "Which language is used for web apps?",
            options: ["Python", "JavaScript", "ALL", "Java"],
            answer: "ALL",
        },
        {
            question: "What does JSX stand for?",
            options: ["JavaScript XML",
                        "Java Source Xchange",
                        "JSON Syntax eXtension",
                        "JavaScript eXtension"
                    ],
            answer: "JavaScript XML"
        },
    ];

    const [optionSelected, setOptionSelected] = useState("None");

    function handleSelectOption(option) {
        setOptionSelected(option);
    }

    return (
        <div>
            <h2>Question 1</h2>
            <p className="question"> {questionBank[0].question}</p>

            {questionBank[0].options.map((option) => (
                <button className="option" onClick ={() => handleSelectOption(option)}>
                    {" "}
                    {option}
                    {" "}
                </button>
            ))}
            <p> Selected option: {optionSelected} </p>

            <div className="nav-buttons">
                <button>previous</button>
                <button>next</button>
            </div>
        </div>
    )
}

export default Quiz;





//  Alternative with state to track current question

/*
import { useState } from 'react';

function Quiz() {
    // বর্তমানে কোন প্রশ্নে আছি সেটা ট্র্যাক করার জন্য state
    const [currentIndex, setCurrentIndex] = useState(0);

const questionBank = [ ];

    return (
        <div>
            <h2>Question {currentIndex + 1}</h2>
            <p>{questionBank[currentIndex].question}</p>
            
            { }
            {questionBank[currentIndex].options.map((opt, index) => (
                <button key={index}>{opt}</button>
            ))}

            <br />
            <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next Question</button>
        </div>
    );
}

*/
