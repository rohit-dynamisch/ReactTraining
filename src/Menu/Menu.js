import React, { useState } from "react";
import { NavLink,  Outlet } from "react-router-dom";

function Menu() {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <div>
      <div className="mainMenu">
        <div
          className="menuItems"
          style={{ display: menuFlag ? "block" : "none" }}
          onClick={() => setMenuFlag(false)}
        >
          <div>
            <h3>Day 1</h3>
            <p>
              <NavLink
                to=""
                style={{textDecoration:"none",color:"black"}}
              >
                Class Component
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 2</h3>
            <p>
              <NavLink
                to="/day2"
                style={{ textDecoration: "none",color:"black" }}
              >
                Class Component Life Cycle
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 3</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day3/ChildrenHTML"
              >
                <>ChildrenHTML</>
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none" ,color:"black"}}
                to="day3/ChildrenObject"
              >
                ChildrenObject
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day3/ChildrenNumber"
              >
                ChildrenNumber
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day3/ChildrenArray"
              >
                ChildrenArray
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day3/ChildrenFunction"
              >
                ChildrenFunction
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day3/ChildToParent"
              >
                ChildToParent
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day3/StateAsProps"
              >
                StateAsProps
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day3/UseStateDemo"
              >
                UseStateDemo
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 4</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day4/brokenSrc"
              >
                BrokenSrc
              </NavLink>
            </p>
            <p>
              <NavLink
                to="day4/counter"
                style={{ textDecoration: "none",color:"black" }}
              >
                Counter
              </NavLink>
            </p>
            <p>
              {" "}
              <NavLink
                to="day4/stateArray"
                style={{ textDecoration: "none",color:"black" }}
              >
                StateArray
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 5</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day5/UseEffectDemo"
              >
                useEffect
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 7</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day7/InputTypesNEvents"
              >
                InputTypesNEvents
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day7/ExtraEvents"
              >
                ExtraEvents
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 9</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day9/loops"
              >
                loops
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day9/MapFilterReduce"
              >
                MapFilterReduce
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 10</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day10/IterateObj"
              >
                IterateObj
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day10/FiltersInCard"
              >
                FiltersInCard
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 11</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day11/Todo"
              >
                Todo
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 12</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day12/FormValidation"
              >
                FormValidation
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 15</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none" ,color:"black"}}
                to="day13/callbackhook"
              >
                Callbackhook
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none" }}
                to="day13/memoVScallback"
              >
                memo vs Callback
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 16</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black"}}
                to="day16/refhook"
              >
                useRefHook
              </NavLink>
            </p>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day16/allhooks"
              >
                AllHooks
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Day 19</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="day19/callbackExample"
              >
                Callback Revise
              </NavLink>
            </p>
          </div>

          <div>
            <h3>Project</h3>
            <p>
              <NavLink
                style={{ textDecoration: "none",color:"black" }}
                to="project"
              >
                Ecom Project
              </NavLink>
            </p>
          </div>
        </div>
        <div
          className="closeMenu"
          onClick={(e) => {
            setMenuFlag(!menuFlag);
            e.stopPropagation();
          }}
        >
          {!menuFlag ? (
            <svg
              fill="#000000"
              width="12px"
              height="12px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
              </g>
            </svg>
          ) : (
            <svg
              width="12px"
              height="12px"
              viewBox="-0.5 0 25 25"
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
                  d="M3 21.32L21 3.32001"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M3 3.32001L21 21.32"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Menu;
