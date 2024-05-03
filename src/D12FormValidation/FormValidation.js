import React, { useEffect, useState } from "react";
import Form from "./Form";
import DisplayForm from "./DisplayForm";
import { useFormContext } from "./FormContext";

function FormValidation() {
 const {toggleModal,modal,deleteModal,setDeleteModal,handleDelete,setEditModal,editModal,handleEdit}=useFormContext();
  return (
    <div className={modal ? "active-modal formDiv" : "formDiv"}>
      <button onClick={toggleModal} className="btn-modal">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="add-user-6" transform="translate(-2 -2)">
              {" "}
              <path
                id="secondary"
                fill="#8dea6c"
                d="M10,13h2a7,7,0,0,1,7,7h0a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1H3a7,7,0,0,1,7-7Z"
              ></path>{" "}
              <path
                id="primary"
                d="M15.59,10A5,5,0,1,1,11,3a5.11,5.11,0,0,1,2,.41"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>{" "}
              <path
                id="primary-2"
                data-name="primary"
                d="M21,5H17m2-2V7m-7,6H10a7,7,0,0,0-7,7H3a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1h0a7,7,0,0,0-7-7Z"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <Form/>
        </div>
      )}

      {deleteModal && (
        <div className="modal">
          <div onClick={() => setDeleteModal(false)} className="overlay"></div>
          <div className="modal-content">
            <h4>Are you sure you want to delete this row?</h4>
            <div className="confirmDelete">
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setDeleteModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* {editModal && (
        <div className="modal">
          <div onClick={() => setEditModal(false)} className="overlay"></div>
          <div className="modal-content">
            <h4>Are you sure you want to EDIT this row?</h4>
            <div className="confirmEdit">
              <button
                onClick={() => {
                  handleEdit();
                  setEditModal(false);
                }}
              >
                Yes
              </button>
              <button onClick={() => setEditModal(false)}>No</button>
            </div>
          </div>
        </div>
      )} */}

      <div className="displayFormContainer">
        <DisplayForm />
      </div>
    </div>
  );
}

export default FormValidation;
