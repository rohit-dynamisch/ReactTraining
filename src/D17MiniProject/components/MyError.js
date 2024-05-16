import React from 'react'

function MyError({formik,fieldName}) {
  return (
    <>  
    {
    formik?.touched[fieldName] && formik?.errors[fieldName] ? <span>{formik?.errors[fieldName]}</span>:<span>{" "}</span>
    }
  </>

  )
}

export default MyError
