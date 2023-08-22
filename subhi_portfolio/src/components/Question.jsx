import {useState, useEffect} from "react";
import './Question.css'

export default function Question() {
    
    const [projName1, setprojName1] = useState("");
    const [projImg1, setprojImg1] = useState("");
    const [projDesc1, setprojDesc1] = useState("");
    const [skillSet1, setskillSet1] = useState("");
    const [projName2, setprojName2] = useState("");
    const [projImg2, setprojImg2] = useState("");
    const [projDesc2, setprojDesc2] = useState("");
    const [skillSet2, setskillSet2] = useState("");
    const [projName3, setprojName3] = useState("");
    const [projImg3, setprojImg3] = useState("");
    const [projDesc3, setprojDesc3] = useState("");
    const [skillSet3, setskillSet3] = useState("");
    useEffect(() => {
        const getQuestion = async () => {
            let response = await fetch(
                //"https://opentdb.com/api.php?amount=1&type=boolean",
                "./subhiProj.JSON",
                {
                    method: "get"
                }
                );
                let data = await response.json();
                
               for (let i=0;i<3;i++) {
                let projData = data.results[i];
                
               switch(i) {
                case 0:
                setprojName1(projData.projName);
                setprojImg1(projData.image);
                setprojDesc1(projData.projDesc);
                setskillSet1(projData.skillSet);
                break;
                case 1:
                setprojName2(projData.projName);
                setprojImg2(projData.image);
                setprojDesc2(projData.projDesc);
                setskillSet2(projData.skillSet);
                break;
                case 2:
                setprojName3(projData.projName);
                setprojImg3(projData.image);
                setprojDesc3(projData.projDesc);
                setskillSet3(projData.skillSet);
                break;
               }

                
               }
             }
            getQuestion();
        }, []);

        /*
        return (
        <div id="border">
            <div id="categorylabel">{category}</div>
            <h3>{question}</h3>
            {revealed && <div id="answerdiv">{answer}</div>}
            <button type="button" onClick={setRevealAnswer}>
        Reveal answer
        </button>
        </div>
    ) */
    return (
            <div id="border">
                <div id="projectlabel1">{projName1}</div>
                <h3>{projDesc1}</h3>
                <div id="answerdiv">{skillSet1}</div>
                <img src={projImg1} alt="project1" width="200" height="150"></img>
                
                <div id="projectlabel2">{projName2}</div>
                <h3>{projDesc2}</h3>
                <div id="answerdiv">{skillSet2}</div>
                <img src={projImg2} alt="project2" width="200" height="150"></img>

                <div id="projectlabel3">{projName3}</div>
                <h3>{projDesc3}</h3>
                <div id="answerdiv">{skillSet3}</div>
                <img src={projImg3} alt="project3" width="200" height="150"></img>
            </div>
    
    )
}