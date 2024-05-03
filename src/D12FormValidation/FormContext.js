import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormContext = createContext();

export function FormContextProvider({ children }) {
  const patterns = {
    name: /^[a-z ,.'-]+$/i,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNo: /[7-9]{1}[0-9]{9}/,
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  };
  const skillsOption = ["html", "css", "js", "react", "java", "python"];
  //-------------------------- form inputs----------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    dob: "",
    age: "",
    gender: "male",
    profilePhoto: "",
    skills: [],
    about: "",
    password: "",
    confirmPassword: "",
  });
  //---------------------------errors state--------------------------
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNo: false,
    dob: false,
    age: false,
    gender: "",
    skills: false,
    about: false,
    profilePhoto: false,
    password: false,
    confirmPassword: false,
  });
  const [modal, setModal] = useState(false);
  //--------------------------data state for table---------------------
  const [tableData, setTableData] = useState([
    {
      id: "21898755-5e71-4436-ab54-3c0e4a0e67c3",
      name: "rohit",
      email: "rohitbadhai.scoe.it@gmail.com",
      phoneNo: "7447576853",
      dob: "2024-04-16",
      age: 17,
      gender: "male",
      profilePhoto:
        "http://localhost:3000/0e7b2f72-c64c-4db7-9113-4428fa336f3f",
      skills: ["html", "css", "js"],
      about: "hello",
      password: "Rohit@1213",
      confirmPassword: "Rohit@1213",
    },
    {
      id: "4280bd70-844c-462a-81e1-441593b4a9b9",
      name: "saurabh",
      email: "blockchain2405@gmail.com",
      phoneNo: "9899989898",
      dob: "2022-01-12",
      age: 24,
      gender: "male",
      profilePhoto:
        "blob:http://localhost:3000/d1257cd5-9b54-4a11-8d7a-3730dc2ffd23",
      skills: ["python", "java"],
      about: "Learning react",
      password: "Rohit@1213",
      confirmPassword: "Rohit@1213",
    },
    {
      id: "9f7cb6cf-cd87-45e8-bed9-34d0801da6f5",
      name: "Shweta",
      email: "Shweta@gmail.com",
      phoneNo: "8226253645",
      dob: "2007-01-08",
      age: 17,
      gender: "female",
      profilePhoto:
        "blob:http://localhost:3000/92c8dc29-28c8-4100-ab69-66dea4e206ff",
      skills: ["css", "js"],
      about: "Hello world",
      password: "Rohit@1213",
      confirmPassword: "Rohit@1213",
    },
    {
      id: "3c2091b5-a8ff-4a0a-add8-23f7b69fef72",
      name: "Raj",
      email: "raj@gmail.com",
      phoneNo: "7873617273",
      dob: "2001-01-01",
      age: 21,
      gender: "male",
      profilePhoto:
        "blob:http://localhost:3000/d1ecc788-48c4-4d7d-836a-c5bc8b4e9735",
      skills: ["js", "react"],
      about: "Hi this is raj",
      password: "Rohit@1213",
      confirmPassword: "Rohit@1213",
    },
  ]);
  //--------------------------delete edit confirmation modal------------
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState();

  const [editData, setEditData] = useState();
  const [editId, setEditId] = useState(false);
  const [editModal, setEditModal] = useState(false);
  //<----------------------handle edit state----------------------------------------------->
  const handleEdit = (data) => {
    toggleModal();
    setEditId(data.id);
    // delete data.id;
    setFormData(data);
    setErrors({
      name: "",
      email: "",
      phoneNo: "",
      dob: "",
      age: "",
      gender: "",
      skills: "",
      about: "",
      profilePhoto: "",
      password: "",
      confirmPassword: "",
    });
  };

  // <-------------------------toogles Modal--------------------------------------------------->
  const toggleModal = () => {
    setModal(!modal);
  };

  //<-----------------------------update function---------------------------------------------->
  const handleUpdateSubmit = () => {
    let update = true;
    Object.keys(errors).map((key, i) => {
      if (errors[key] === false || errors[key].trim()) {
        setErrors((prev) => {
          return { ...prev, [key]: `${key} can't be empty!` };
        });
        update = false;
      }
    });

    if (update) {
      setTableData(
        tableData.map((item) => {
          if (item.id == editId) return formData;
          return item;
        })
      );
      setEditId(false);
      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        dob: "",
        age: "",
        gender: "male",
        profilePhoto: "",
        skills: [],
        about: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        name: false,
        email: false,
        phoneNo: false,
        dob: false,
        age: false,
        gender: "",
        skills: false,
        about: false,
        profilePhoto: false,
        password: false,
        confirmPassword: false,
      });
      toggleModal();
    }
  };

  //<---------------------handle form Data on change----------------------------------------->
  const handleForm = (e) => {
    if (e.target.id == "age" || e.target.id == "phoneNo") {
      setFormData({ ...formData, [e.target.id]: parseInt(e.target.value) });
      return;
    }
    if (e.target.id == "profilePhoto") {
      setFormData({
        ...formData,
        [e.target.id]: URL.createObjectURL(e.target.files[0]),
      });
      return;
    }

    if (e.target.name == "skills") {
      if (e.target.checked) {
        setFormData({ ...formData, skills: [...formData.skills, e.target.id] });
      } else {
        setFormData({
          ...formData,
          skills: formData.skills.filter((item) => item != e.target.id),
        });
      }
      return;
    }

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //<----------------------handles form submit------------------------------------------------>
  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    e.stopPropagation();
    let submit = true;
    Object.keys(errors).map((key, i) => {
      if (errors[key] === false || errors[key].trim()) {
        if (errors[key] == false) {
          if (key == "skills") {
            setErrors((prev) => {
              return { ...prev, [key]: `Please select atleast 1 skill` };
            });
            return;
          }
          if (key == "profilePhoto") {
            setErrors((prev) => {
              return { ...prev, [key]: `Please choose a file!` };
            });
            return;
          }
          setErrors((prev) => {
            return { ...prev, [key]: `${key} can't be empty!` };
          });
        }
        submit = false;
      }
    });

    if (submit) {
      setTableData([...tableData, { id: uuidv4(), ...formData }]);
      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        dob: "",
        age: "",
        gender: "male",
        profilePhoto: "",
        skills: [],
        about: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        name: false,
        email: false,
        phoneNo: false,
        dob: false,
        age: false,
        gender: "",
        skills: false,
        about: false,
        profilePhoto: false,
        password: false,
        confirmPassword: false,
      });
      toggleModal();
    }
  };

  useEffect(() => console.log(errors), [errors]);

  //<-----------------------handles form validation-------------------------------------------->
  const handleValidation = (e) => {
    if (e.target.name != "skills" && !e.target.value.trim()) {
      setErrors({ ...errors, [e.target.id]: `${e.target.id} cant be empty` });
      return;
    }

    if (e.target.id == "name" && !patterns.name.test(e.target.value)) {
      setErrors({
        ...errors,
        [e.target.id]: `${e.target.id} can contain only letters`,
      });
      return;
    }

    if (e.target.id == "email" && !patterns.email.test(e.target.value)) {
      setErrors({ ...errors, [e.target.id]: `Invalid Email!` });
      return;
    }

    if (
      e.target.id == "email" &&
      !tableData.findIndex((item) => item.email == e.target.value)
    ) {
      setErrors({ ...errors, [e.target.id]: `email already exits!` });
      return;
    }

    if (e.target.id == "password" && formData.confirmPassword) {
      if (formData.confirmPassword === e.target.value) {
        console.log(e.target.value === formData.confirmPassword);
        setErrors((prev) => {
          return {
            ...prev,
            confirmPassword: "",
          };
        });
      }

      // else  setErrors({
      //   ...errors,
      //   confirmPassword: "Confirm Password must match with Password"
      // });
    }

    if (e.target.id == "password" && !patterns.password.test(e.target.value)) {
      setErrors((prev) => {
        return {
          ...prev,
          [e.target
            .id]: `Password must contain atleast one uppercase,lowercase ,1 special charachter and one number`,
        };
      });
      return;
    }

    if (
      e.target.id == "confirmPassword" &&
      formData.password != e.target.value
    ) {
      setErrors({
        ...errors,
        [e.target.id]: `Confirm Password must match with Password`,
      });
      return;
    }

    if (e.target.id == "phoneNo" && !patterns.phoneNo.test(e.target.value)) {
      setErrors({ ...errors, [e.target.id]: `Please Enter Valid Phone No.` });
      return;
    }

    if (e.target.id == "age" && (e.target.value < 1 || e.target.value > 100)) {
      setErrors({
        ...errors,
        [e.target.id]: `Please enter age between 0 to 100!`,
      });
      return;
    }

    if (e.target.id == "dob") {
      if (new Date(e.target.value) > new Date()) {
        setErrors({ ...errors, [e.target.id]: `Please enter valid Date.` });
        return;
      }
    }

    if (e.target.name == "skills") {
      if (formData.skills.length == 1 && !e.target.checked) {
        setErrors({
          ...errors,
          [e.target.name]: `Please select atleast one Skill.`,
        });
        return;
      } else {
        setErrors({ ...errors, [e.target.name]: `` });
        return;
      }
    }
    if (
      e.target.id == "profilePhoto" &&
      !["image/jpeg", "image/jpg"].includes(e.target.files[0].type)
    ) {
      setErrors({
        ...errors,
        [e.target.id]: `Please upload image only in jpg/jpeg format! `,
      });
      return;
    }
    if (e.target.id == "profilePhoto" && e.target.files[0].size / 1024 > 300) {
      setErrors({
        ...errors,
        [e.target.id]: `Image size cannot exceed 500kb current size ${Math.ceil(
          e.target.files[0].size / 1024
        )}kb `,
      });
      return;
    }
    setErrors(prev=>{return{ ...prev, [e.target.id]: "" }});
  };

  //<--------------------------resets img file------------------------------------------------->
  const handleProfileReset = () => {
    setErrors({ ...errors, profilePhoto: "profilePhoto cant be empty" });
    setFormData({ ...formData, profilePhoto: "" });
  };

  //<---------------------------handles delete functionality----------------------------------->
  const handleDelete = () => {
    console.log(deleteItemId);
    setTableData(tableData.filter((item) => item.id != deleteItemId));
    setDeleteModal(false);
  };

  //<------------------------------handles reset----------------------------------------------->
  const handleReset = (e) => {
    e.stopPropagation();
    setEditId(false);
    setFormData({
      name: "",
      email: "",
      phoneNo: "",
      dob: "",
      age: "",
      gender: "male",
      profilePhoto: "",
      skills: [],
      about: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      name: false,
      email: false,
      phoneNo: false,
      dob: false,
      age: false,
      gender: "",
      skills: false,
      about: false,
      profilePhoto: false,
      password: false,
      confirmPassword: false,
    });
    if (e.target.id != "formReset") toggleModal();
  };
  return (
    <FormContext.Provider
      value={{
        handleDelete,
        handleEdit,
        handleForm,
        handleProfileReset,
        handleSubmit,
        handleUpdateSubmit,
        handleValidation,
        toggleModal,
        handleReset,
        skillsOption,
        formData,
        errors,
        modal,
        tableData,
        deleteModal,
        setDeleteModal,
        deleteItemId,
        setDeleteItemId,
        editData,
        editId,
        editModal,
        setEditData,
        setEditModal,
        setEditId,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const {
    handleDelete,
    handleEdit,
    handleForm,
    handleProfileReset,
    handleSubmit,
    handleUpdateSubmit,
    handleValidation,
    toggleModal,
    handleReset,
    skillsOption,
    formData,
    errors,
    modal,
    tableData,
    deleteModal,
    setDeleteModal,
    deleteItemId,
    setDeleteItemId,
    editData,
    editId,
    editModal,
    setEditData,
    setEditModal,
    setEditId,
  } = useContext(FormContext);
  return {
    handleDelete,
    handleEdit,
    handleForm,
    handleProfileReset,
    handleSubmit,
    handleUpdateSubmit,
    handleValidation,
    toggleModal,
    handleReset,
    skillsOption,
    formData,
    errors,
    modal,
    tableData,
    deleteModal,
    setDeleteModal,
    deleteItemId,
    setDeleteItemId,
    editData,
    editId,
    editModal,
    setEditData,
    setEditModal,
    setEditId,
  };
}
