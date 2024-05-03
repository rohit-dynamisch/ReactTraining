import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { useFormContext } from "./FormContext";

function DisplayForm() {
  const { tableData, formData}=useFormContext();
  const [dataToShow, setDataToShow] = useState(tableData);
  const [sort, setSort] = useState({ field: "", order: "asc" });
  const [search,setSearch]=useState("")
  //<---------------------------------this useEffect handle sorting------------------------------->
  useEffect(() => {
    if (sort.field) {
      let temp = [...dataToShow].sort((a, b) => {
        if (sort.order == "desc") {
          return a[sort.field] > b[sort.field]
            ? -1
            : a[sort.field] < b[sort.field]
              ? 1
              : 0;
        }
        return a[sort.field] < b[sort.field]
          ? -1
          : a[sort.field] > b[sort.field]
            ? 1
            : 0;
      });
      setDataToShow(temp);
    } else {
      setDataToShow(tableData);
    }
  }, [sort]);

  //<-----------------------------------initializes dataToShow when tabledata changes------------------->
  useEffect(() => {
    setDataToShow(tableData);
  }, [tableData]);

  //<-----------------------------------reset tableData and remove sorting-------------------------------->
  const sortByDefault = () => {
    setSort({ field: "", order: "asc" });
  };

  //<----------------------------------sets sort state-------------------------------------------------->
  const handleSortAsc = (key) => {
    setSort({ field: key, order: "asc" });
  };
  const handleSortDesc = (key) => {
    setSort({ field: key, order: "desc" });
  };

  useEffect(()=>{
    if(!search.trim()){
      setDataToShow(tableData);
    }else {
      setDataToShow(tableData.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())))
    }
  },[search])

  return (
    <div>
    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..."/>
      <table border={1} className="formTable">
      
        <thead>
          <tr>
            {Object.keys(formData).length==11 ? Object.keys(formData).map((key) =>  {if(key!='id') return (
              <th key={key} id={key} >
                <p >{key}</p>
                {!["skills","about","password","confirmPassword","profilePhoto"].includes(key) && <div className="sortIcons">
                <div id={key} onClick={()=>handleSortAsc(key)}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"></path></g></svg>
                </div>
                <div id={key} onClick={()=>handleSortDesc(key)}>
                <svg  width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"></path></g></svg>
                </div>
                </div>}
              </th>
            )}):
            Object.keys(formData).slice(1).map((key) =>  {if(key!='id') return (
              <th key={key} id={key} >
                <p >{key}</p>
                {!["skills","about","password","confirmPassword","profilePhoto"].includes(key) && <div className="sortIcons">
                <div id={key} onClick={()=>handleSortAsc(key)}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"></path></g></svg>
                </div>
                <div id={key} onClick={()=>handleSortDesc(key)}>
                <svg  width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"></path></g></svg>
                </div>
                </div>}
              </th>
            )})
            }
            <th>Edit</th>
            <th>Delete</th>
            <th>
              <button onClick={sortByDefault}>Default</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {dataToShow.length > 0 &&
            dataToShow.map((data) => (
              <TableRow
                data={data}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayForm;
