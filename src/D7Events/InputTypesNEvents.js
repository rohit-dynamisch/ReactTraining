import React, { useState } from "react";

function InputTypesNEvents() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [dob, setDob] = useState();
  // const [skills, setSkills] = useState([]);
  const [skills, setSkills] = useState({
    HTML: false,
    CSS: false,
    JavaScript: false,
    REACT: false,
    Python: false,
  });
  const [domain, setDomain] = useState();
  const [mode, setMode] = useState();
  const [salary, setSalary] = useState();
  const [curDate,setCurDate]=useState(new Date())
  const [color,setColor]=useState()
  const [dateTime,setDateTime]=useState()
  const [month,setMonth]=useState();
  const [range,setRange]=useState();
  const [week,setWeek]=useState()
  const [time,setTime]=useState();
  const [reset,setReset]=useState();
  const [search,setSearch]=useState();
  const [image,setImage]=useState();
  const [file,setFile]=useState();
  const [url,setUrl]=useState();

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState();
  const [salaryError, setSalaryError] = useState();
  const [focus, setFocus] = useState();

  const [showData, setShowData] = useState(false);

  function handleCheckBox(e) {
    // if (e.target.checked) setSkills([...skills, e.target.value]);
    // else setSkills([skills.filter((item) => item != e.target.value)]);
    setSkills({
      ...skills,
      [e.target.value]: e.target.checked,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // alert(
    //   `Name: ${name}\n Number: ${number}\n DOB: ${dob}\n Skills: ${skills.join(
    //     ", "
    //   )} \n Domain: ${domain}\n Mode: ${mode}\n Salary: ${salary} `
    // );
    alert("Data Submitted Successfully!");
  }

  function handleNameBlur() {
    if (name) setNameError("");
    else setNameError("*Name is required");
    setFocus("");
  }

  function handleNumberBlur() {
    if (number) setNumberError("");
    else setNumberError("*Number is required");
    setFocus("");
  }

  function handleSalaryBlur() {
    if (salary && parseInt(salary) > 0) setSalaryError("");
    else if (parseInt(salary) < 0) setSalaryError("*Salary cant be Negative!");
    else setSalaryError("*Salary is required");
    setFocus("");
  }

  function handleFocus(e) {
    setFocus(e.target.id);
  }

  function handleScroll(e) {
    const bottom =
      Math.floor(e.target.scrollHeight - e.target.scrollTop) ===
      e.target.clientHeight;
    console.log(
      Math.floor(e.target.scrollHeight - e.target.scrollTop),
      e.target.clientHeight
    );
    // if (bottom) {
    //   alert("You have reached bottom of form");
    // }
  }
  
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       console.log(event.target.result)
  //       setFile(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <div className="events">
        <form
          onSubmit={handleSubmit}
          className="eventsForm"
          onScroll={handleScroll}
        >
          <center>
            <h2>Form Events and Inputs</h2>
          </center>
          <div>
            {focus ? <p>{`Typing ${focus} field...`}</p> : <p>&nbsp;</p>}
          </div>

          {/* NAME */}
          <div>
            <h3 for="name">Full Name - </h3>
            <br />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleNameBlur}
              onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Text</p>
            <i>{nameError}</i>
          </div>

          {/* Number */}
          <div>
            <h3 for="number">Phone No. </h3>
            <br />
            <input
              id="number"
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onBlur={handleNumberBlur}
              onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Tel</p>
            <i>{numberError}</i>
          </div>

          {/* DOB */}
          <div>
            <h3 htmlFor="dob">Date of Birth -</h3>
            <br />
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <p>Events used : onChange - Input type Date</p>
          </div>

          {/* SKILLS */}
          <div>
            <h3>Choose your Skills-</h3>
            <input
              type="checkbox"
              id="html"
              value="HTML"
              onChange={handleCheckBox}
            />
            <label for="html">HTML</label>
            <br />
            <input
              type="checkbox"
              id="css"
              value="CSS"
              onChange={handleCheckBox}
            />
            <label for="css">CSS</label>
            <br />
            <input
              onChange={handleCheckBox}
              type="checkbox"
              id="javascript"
              name="skills"
              value="JavaScript"
            />
            <label for="javascript">JavaScript</label>
            <br />
            <input
              type="checkbox"
              id="react"
              value="REACT"
              onChange={handleCheckBox}
            />
            <label for="react">REACT</label>
            <br />
            <input
              type="checkbox"
              id="python"
              value="Python"
              onChange={handleCheckBox}
            />
            <label for="python">PYTHON</label>
            <br />
            <input
              type="checkbox"
              id="java"
              value="JAVA"
              onChange={handleCheckBox}
            />
            <label for="java">JAVA</label>
            <br />
            <input
              type="checkbox"
              id="php"
              value="PHP"
              onChange={handleCheckBox}
            />
            <label for="php">PHP</label>
            <br />
            <p>Events used : onChange - Input type Checkbox</p>
          </div>

          {/* Domain */}
          <div>
            <p>Interested in - </p>
            <input
              type="radio"
              id="web_dev"
              name="domain"
              value="WEB_DEV"
              onChange={(e) => setDomain(e.target.value)}
            />
            <label for="web_dev">WEB_DEV</label>
            <br />
            <input
              type="radio"
              id="android"
              name="domain"
              value="ANDROID"
              onChange={(e) => setDomain(e.target.value)}
            />
            <label for="android">Android</label>
            <br />
            <input
              type="radio"
              id="ml"
              name="domain"
              value="ML"
              onChange={(e) => setDomain(e.target.value)}
            />
            <label for="ml">ML</label>
            <p>Events used : onChange - Input type radio</p>
          </div>

          {/* WorkMode */}
          <div>
            <h3 htmlFor="mode">Preferred Work mode -</h3>
            <br />
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="wfh">WFH</option>
              <option value="wfo">WFO</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <p>Events used : onChange- Input type Select statement</p>
          </div>

          {/* Salary */}
          <div>
            <h3 htmlFor="salary">Expected Salary (LPA)- </h3>
            <input
              id="salary"
              type="number"
              placeholder="eg. 3"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              onBlur={handleSalaryBlur}
              onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Number</p>
            <i>{salaryError}</i>
          </div>

          {/* TextArea */}
          <div>
            <h3>Tell us about Yourself!</h3>
            <br />
            <textarea
              onCopy={() => alert("Copied Successfully!")}
              onPaste={() => alert("Pasted Successfully!")}
              onCut={() => alert("Cut Successfull!")}
              id="description"
              rows={5}
            />
            <p>
              Events used : onChange/onCopy/onCut/onPaste - Input type Textarea
            </p>
          </div>

          {/* Color */}
          <div style={{backgroundColor:color}}>
            <h3 for="color">Select color - </h3>
            <br />
            <input
              id="color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Text</p>
            {/* <i>{nameError}</i> */}
          </div>

          {/* Date Time */}
          <div>
            <h3 for="dateTime">Select Date and Time - </h3>
            <br />
            <input
              id="dateTime"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Text</p>
            {/* <i>{nameError}</i> */}
          </div>

          {/* month */}
          <div>
            <h3 for="month">Select Month - </h3>
            <br />
            <input
              id="month"
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Text</p>
            {/* <i>{nameError}</i> */}
          </div>

          {/* week */}
          <div>
            <h3 for="week">Select Week - </h3>
            <br />
            <input
              id="week"
              type="week"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            <p>Events used : onChange/onFocus/onBlur - Input type Text</p>
            {/* <i>{nameError}</i> */}
          </div>

          {/* range */}
          <div>
            <h3 for="range">Select Range - </h3>
            <br />
            <input
              id="range"
              type="range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              min="0"
              max="10"
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            <p>Value : {Math.ceil(range)}</p>
            {/* <i>{nameError}</i> */}
          </div>
          
          {/* time */}
          <div>
            <h3 for="time">Select Time - </h3>
            <br />
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              // onBlur={handleNameBlur}
              // onFocus={handleFocus}
            />
            <br />
            {/* <i>{nameError}</i> */}
          </div>

          {/* files */}
          <div>
            <h3 for="file">Select File - </h3>
            <br />
            <input
              id="file"
              type="file"
              onChange={e=>setFile(URL.createObjectURL(e.target.files[0]))}
            />
            <br />
            <img height="100px" width="100px" src={file}></img>
          </div>

          {/* {file && <iframe src={file} id="preview" width="1000px" height="1000px"></iframe>} */}

          <div>
            <h3 for="utl">Fill URL - </h3>
            <br />
            <input
              id="url"
              type="url"
              value={url}
              onChange={e=>setUrl(e.target.value)}
            />
            <br />
          </div>

          {/* Buttons and Data */}
          <div>
            <input type="submit" value="SUBMIT" />
            <button
              onClick={(e) => e.preventDefault()}
              onDoubleClick={() => setShowData(!showData)}
            >
              Double Click to view data!
            </button>
            {showData && (
              <div>
                <h2>Your Data!</h2>
                <p>Name : {name}</p>
                <p>Number : {number}</p>
                <p>DOB : {dob}</p>
                {/* <p>Age from Date : {
                  curDate
                   new Date(dob)?.getYear()+1900 
               }</p> */}
                <p>Skills : {Object.keys(skills).filter(item=> skills[item])}</p>
                <p>Domain : {domain}</p>
                <p>Work Mode : {mode}</p>
                <p>Exprected Salary : {salary}</p>

                <p>Selected Colour : <input type="color" value={color} readOnly/></p>
                <p>DateTime : {dateTime}</p>
                <p>Selected Month: {month}</p>
                <p>Selected Week : {week}</p>
                <p>Selected Range : {range}</p>
                <p>Selected Time : {time}</p>
                <p>URL : {url}</p>
              </div>
            )}
          </div>

          
        </form>
      </div>

      <hr />
    </>
  );
}

export default InputTypesNEvents;
