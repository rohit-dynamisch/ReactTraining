import React, { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "./FormContext";

function Form() {
  const {
    skillsOption,
    formData,
    errors,
    handleForm,
    handleSubmit,
    handleValidation,
    handleProfileReset,
    editId,
    handleUpdateSubmit,
    toggleModal,
    handleReset,
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  let focus = useRef(null);
  useEffect(() => focus.current.focus(), []);
  return (
    <div className="modal-content">
    <center><h2>Joining Form</h2></center>
      <form onSubmit={handleSubmit}>
        <div className="formName">
          <label htmlFor="name">
            Name:{" "}
            {errors.name && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.name}
              </span>
            )}
          </label>
          <input
            ref={focus}
            value={formData.name}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="name"
            type="text"
            autoComplete="off"
          />
        </div>

        <div className="formEmail">
          <label htmlFor="email">
            Email:{" "}
            {errors.email && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>{" "}
                {errors.email}
              </span>
            )}
          </label>
          <input
            value={formData.email}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="email"
            type="email"
          />
        </div>

        <div className="formPhone">
          <label htmlFor="phoneNo">
            Phone No:{" "}
            {errors.phoneNo && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.phoneNo}
              </span>
            )}
          </label>
          <input
            value={formData.phoneNo}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="phoneNo"
            type="number"
          />
        </div>

        <div className="formDob">
          <label htmlFor="dob">
            Date of Birth:{" "}
            {errors.dob && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.dob}
              </span>
            )}
          </label>
          <input
            value={formData.dob}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="dob"
            type="date"
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="formPassword">
          <label htmlFor="password">Password: </label>
          <div>
            <input
              value={formData.password}
              onChange={(e) => {
                handleForm(e);
                handleValidation(e);
              }}
              id="password"
              type={!showPassword ? "password" : "text"}
            />
            {!showPassword ? (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
        {errors.password && (
          <span>
            <svg
              fill="#000000"
              width="24px"
              height="15px"
              viewBox="0 0 200 200"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
              </g>
            </svg>
            {errors.password}
          </span>
        )}

        <div className="formConfirmPassword">
          <label htmlFor="confirmPassword">
            Confirm Password:{" "}
            {errors.confirmPassword && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>{" "}
                {errors.confirmPassword}
              </span>
            )}
          </label>
          <input
            value={formData.confirmPassword}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="confirmPassword"
            type="password"
          />
        </div>

        <div className="formPassword">
          <label htmlFor="age">
            Age:{" "}
            {errors.age && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.age}
              </span>
            )}
          </label>
          <input
            value={formData.age}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="age"
            type="Number"
          />
        </div>

        <div className="formGender">
          <label>Gender: </label>
          <div>
            <input
              id="gender"
              type="radio"
              value="male"
              checked={formData.gender == "male"}
              onChange={(e) => {
                handleForm(e);
                handleValidation(e);
              }}
            />
            <label htmlFor="gender">Male:</label>
            <input
              id="gender"
              type="radio"
              value="female"
              checked={formData.gender == "female"}
              onChange={(e) => {
                handleForm(e);
                handleValidation(e);
              }}
            />
            <label htmlFor="gender">Female:</label>
            {errors.gender && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.gender}
              </span>
            )}
          </div>
        </div>

        <div className="formProfile">
          <label>Add Profile Image:</label>
          <input
            id="profilePhoto"
            type="file"
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
          />
          {formData.profilePhoto && (
            <img height="200px" width="200px" src={formData.profilePhoto} />
          )}
          {formData.profilePhoto && (
            <button onClick={handleProfileReset}>Reset</button>
          )}
          {errors.profilePhoto && (
            <span>
              {" "}
              <svg
                fill="#000000"
                width="24px"
                height="15px"
                viewBox="0 0 200 200"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                </g>
              </svg>
              {errors.profilePhoto}
            </span>
          )}
        </div>

        <div className="formSkills">
          <label htmlFor="skills">
            Skills:{" "}
            {errors.skills && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.skills}
              </span>
            )}
          </label>
          {skillsOption.map((skill) => {
            return (
              <div>
                <input
                  name="skills"
                  id={skill}
                  type="checkbox"
                  value={skill}
                  onChange={(e) => {
                    handleForm(e);
                    handleValidation(e);
                  }}
                  checked={formData.skills.includes(skill)}
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            );
          })}
        </div>

        {/* <div>
              <select id="education">
                <option value="school">School</option>
                <option value="highSchool">High School</option>
                <option value="graduation">Graduation</option>
                <span>{errors.education}</span>
              </select>
              <div>
                <div>
                  <label htmlFor="SchoolName">School Name:</label>
                  <input id="schoolName" type="text" />
                </div>
                <div>
                  <label htmlFor="startYear">Start year:</label>
                  <input id="startYear" type="date" />
                  <label htmlFor="endYear">End Year:</label>
                  <input id="endYear" type="text" />
                </div>
              </div>
            </div> */}
        <div className="formAbout">
          <label htmlFor="about">
            Tell us more about Yourself:{" "}
            {errors.about && (
              <span>
                <svg
                  fill="#000000"
                  width="24px"
                  height="15px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"></path>
                  </g>
                </svg>
                {errors.about}
              </span>
            )}
          </label>
          <textarea
            value={formData.about}
            onChange={(e) => {
              handleForm(e);
              handleValidation(e);
            }}
            id="about"
          ></textarea>
        </div>
      </form>
      <div className="formBtns">
      <div>
        {!editId ? (
          <input onClick={handleSubmit} type="submit" value={"SUBMIT"} />
        ) : (
          <button onClick={() => handleUpdateSubmit()}>Update</button>
        )}
      </div>
      <div>
        {!editId ? (
          <button id="formReset" onClick={handleReset}>
            Reset
          </button>
        ) : (
          <button className="cancelUpdate" onClick={handleReset}>
            Cancel Update
          </button>
        )}
        <button
          className="close-modal"
          onClick={(e) => {
            toggleModal(e);
            handleReset(e);
          }}
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                fill="#0F0F0F"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#0F0F0F"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Form;
