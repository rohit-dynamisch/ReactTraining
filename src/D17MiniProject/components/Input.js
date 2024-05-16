import React from "react";

function MyInput({ type, id, formik, children }) {
  if (type == "select") {
    return (
      <select
        id={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
      >
        {children}
      </select>
    );
  }
  return (
    <input
      type={type}
      id={id}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[id]}
    />
  );
}

export default MyInput;
