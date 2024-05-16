import "./App.css";
import React, { Component, Suspense, useEffect, useState } from "react";
import Page1 from "./Day1/pages/Page1";
import Page2 from "./Day2/Pages/Page2";
import Children from "./D3Children/Children";
import ChildToParent from "./D3ChildToParent/ChildToParent";
import DefaultExport, { NamedExportDemo } from "./D3Exports/ExportDemo";
import SpreadOperatorNestedObj from "./D3SpreadOpNestedObj/SpreadOperatorNestedObj";
import StateAsProps from "./D3StateAsProps/StateAsProps";
import UseStateDemo from "./D3UseState/UseStateDemo";
import BrokenSrcNConsole from "./D4BrokenSrc&Console/BrokenSrcNConsole";
import Counter from "./D4CounterApp/Counter";
import StateArray from "./D4StateArray/StateArray";
import NestedComponent from "./D4NestedComponent/NestedComponent";
import UseEffectDemo from "./D5useEffect/UseEffectDemo";
import Form from "./D7Events/InputTypesNEvents";
import InputTypesNEvents from "./D7Events/InputTypesNEvents";
import ExtraEvents from "./D7Events/ExtraEvents";
import Loops from "./D9Loops/Loops";
import MapFilterReducs from "./D9Loops/MapFilterReducs";
import IterateObj from "./D10Filters/IterateObj";
import Scrap from "./D10Filters/Scrap";
import FiltersInCard from "./D10Filters/FiltersInCard";
import Todo from "./D11Todo/Todo";
import FormValidation from "./D12FormValidation/FormValidation";
import { FormContextProvider } from "./D12FormValidation/FormContext";
import CallbackHook from "./D15Hooks/CallbackHook";
import Demo from "./D15Hooks/Demo";
import RefHook from "./D16RefHook/RefHook";
import AllHooks from "./D16RefHook/AllHooks";
import Parent from "./D18PracticeHooks/Parent";
import Home from "./D17MiniProject/pages/Home";
import Callback from "./D19Callback/Callback";
import { ProductContextProvider } from "./D17MiniProject/context/ProductContext";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Menu from "./Menu/Menu";
import EditProduct from "./D17MiniProject/pages/ProductForm";
import ProductForm from "./D17MiniProject/pages/ProductForm";
import ProjectLayout from "./D17MiniProject/pages/ProjectLayout";
import Cart from "./D17MiniProject/pages/Cart";
import Details from "./D17MiniProject/pages/Details";
import AuthPage from "./D17MiniProject/pages/AuthPage";
import Login from "./D17MiniProject/components/Login";
import Signup from "./D17MiniProject/components/Signup";
import ForgotPassword from "./D17MiniProject/components/ForgorPassword";
import ProtectedRoute from "./D17MiniProject/components/ProtectedRoute";
import { useAuthContext } from "./D17MiniProject/context/AuthContext";
import Checkout from "./D17MiniProject/pages/Checkout";
import Redux from "./D26Redux/Redux";
import Orders from "./D17MiniProject/pages/Orders";
import AllOrders from "./D17MiniProject/pages/AllOrders";
import MyOrder from "./D17MiniProject/pages/MyOrder";
import RtkHome from "./D27Redux/components/RtkHome";
import RtkLogin from "./D27Redux/components/Login";
import RtkSignup from "./D27Redux/components/Signup";
import RtkOutlet from "./D27Redux/components/RtkOutlet";
import AdminOrders from "./D17MiniProject/pages/AdminOrders";
const Main = React.lazy(() => import("./D30LazyLoading/Main"));

function App() {
  const [temp, setTemp] = useState("");

  function ParentMethod(data) {
    alert("Inside Parent - " + data);
  }
  const [num, setNum] = useState(0);

  function check(i) {
    if (i & 1) setTemp("Odd");
    else setTemp("Even");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "",
          element: <Page1 />,
        },
        {
          path: "day2",
          element: <Page2 />,
        },
        {
          path: "day3",
          children: [
            {
              path: "ChildrenHTML",
              element: (
                <Children>
                  <p>This is the Data from Children</p>
                </Children>
              ),
            },
            {
              path: "ChildrenObject",
              element: <Children>{{ name: "rohit" }}</Children>,
            },
            {
              path: "ChildrenNumber",
              element: <Children>{100}</Children>,
            },
            {
              path: "ChildrenArray",
              element: <Children>{[1, 2, 3, 4, 5]}</Children>,
            },
            {
              path: "ChildrenFunction",
              element: (
                <Children>
                  {(handleClick) => (
                    <button onClick={handleClick}>Button from Parent</button>
                  )}
                </Children>
              ),
            },
            {
              path: "ChildToParent",
              element: <ChildToParent ParentMethod={ParentMethod} />,
            },
            {
              path: "DefaultExport",
              element: <DefaultExport />,
            },
            {
              path: "NamedExportDemo",
              element: <NamedExportDemo />,
            },
            {
              path: "SpreadOperatorNestedObj",
              element: <SpreadOperatorNestedObj />,
            },
            {
              path: "StateAsProps",
              element: (
                <StateAsProps num={num} setNum={setNum} check={check}>
                  {temp}
                </StateAsProps>
              ),
            },
            {
              path: "UseStateDemo",
              element: <UseStateDemo />,
            },
          ],
        },
        {
          path: "day4",
          children: [
            {
              path: "brokenSrc",
              element: <BrokenSrcNConsole />,
            },
            {
              path: "counter",
              element: <Counter />,
            },
            {
              path: "stateArray",
              element: <StateArray />,
            },
            {
              path: "NestedComponent",
              element: <NestedComponent />,
            },
          ],
        },
        {
          path: "day5/UseEffectDemo",
          element: <UseEffectDemo />,
        },
        {
          path: "day7",
          children: [
            {
              path: "InputTypesNEvents",
              element: <InputTypesNEvents />,
            },
            {
              path: "ExtraEvents",
              element: <ExtraEvents />,
            },
          ],
        },
        {
          path: "day9",
          children: [
            {
              path: "loops",
              element: <Loops />,
            },
            {
              path: "MapFilterReduce",
              element: <MapFilterReducs />,
            },
          ],
        },
        {
          path: "day10",
          children: [
            {
              path: "IterateObj",
              element: <IterateObj />,
            },
            {
              path: "FiltersInCard",
              element: <FiltersInCard />,
            },
          ],
        },
        {
          path: "day11/Todo",
          element: <Todo />,
        },
        {
          path: "day12/FormValidation",
          element: (
            <FormContextProvider>
              <FormValidation />
            </FormContextProvider>
          ),
        },
        {
          path: "day13",
          children: [
            {
              path: "callbackhook",
              element: <CallbackHook />,
            },
            {
              path: "memoVScallback",
              element: <Demo />,
            },
          ],
        },
        {
          path: "day16",
          children: [
            {
              path: "refhook",
              element: <RefHook />,
            },
            {
              path: "allhooks",
              element: <AllHooks />,
            },
          ],
        },
        {
          path: "day19/callbackExample",
          element: <Callback />,
        },
        {
          path: "project",
          element: <ProjectLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "editProduct",
              element: <ProductForm />,
            },
            {
              path: "addProduct",
              element: <ProductForm />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "profile",
            },
            {
              path: "addressForm",
            },
            {
              path: "productDetails/:id",
              element: <Details />,
            },
          ],
        },
        {
          path: "*",
          element: <Navigate to="/project" replace />,
        },
      ],
    },
  ]);

  const { userAuth } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index path="" element={<Page1 />} />

            <Route path="day2" element={<Page2 />} />

            <Route path="day3">
              <Route
                path="ChildrenHTML"
                element={
                  <Children>
                    <p>This is the Data from Children</p>
                  </Children>
                }
              />
              <Route
                path="ChildrenObject"
                element={<Children>{{ name: "rohit" }}</Children>}
              />
              <Route
                path="ChildrenNumber"
                element={<Children>{100}</Children>}
              />
              <Route
                path="ChildrenArray"
                element={<Children>{[1, 2, 3, 4, 5]}</Children>}
              />
              <Route
                path="ChildrenFunction"
                element={
                  <Children>
                    {(handleClick) => (
                      <button onClick={handleClick}>Button from Parent</button>
                    )}
                  </Children>
                }
              />
              <Route
                path="ChildToParent"
                element={<ChildToParent ParentMethod={ParentMethod} />}
              />
              <Route path="DefaultExport" element={<DefaultExport />} />
              <Route path="NamedExportDemo" element={<NamedExportDemo />} />
              <Route
                path="SpreadOperatorNestedObj"
                element={<SpreadOperatorNestedObj />}
              />
              <Route
                path="StateAsProps"
                element={
                  <StateAsProps num={num} setNum={setNum} check={check}>
                    {temp}
                  </StateAsProps>
                }
              />
              <Route path="UseStateDemo" element={<UseStateDemo />} />
            </Route>

            <Route exact path="day4">
              <Route path="brokenSrc" element={<BrokenSrcNConsole />} />
              <Route path="counter" element={<Counter />} />
              <Route path="stateArray" element={<StateArray />} />
              <Route path="NestedComponent" element={<NestedComponent />} />
            </Route>

            <Route path="day5/UseEffectDemo" element={<UseEffectDemo />} />

            <Route path="day7">
              <Route path="InputTypesNEvents" element={<InputTypesNEvents />} />
              <Route path="ExtraEvents" element={<ExtraEvents />} />
            </Route>

            <Route path="day9">
              <Route path="loops" element={<Loops />} />
              <Route path="MapFilterReduce" element={<MapFilterReducs />} />
            </Route>

            <Route path="day10">
              <Route path="IterateObj" element={<IterateObj />} />
              <Route path="FiltersInCard" element={<FiltersInCard />} />
            </Route>

            <Route path="day11/Todo" element={<Todo />} />

            <Route
              path="day12/FormValidation"
              element={
                <FormContextProvider>
                  <FormValidation />
                </FormContextProvider>
              }
            />
            <Route path="day13">
              <Route path="callbackhook" element={<CallbackHook />} />
              <Route path="memoVScallback" element={<Demo />} />
            </Route>

            <Route path="day16">
              <Route path="refhook" element={<RefHook />} />
              <Route path="allhooks" element={<AllHooks />} />
            </Route>

            <Route path="project" element={<ProjectLayout />}>
              <Route
                index
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="editProduct"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <ProductForm />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="addProduct"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <ProductForm />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route path="profile" />
              <Route path="addressForm" />
              <Route
                path="productDetails/:id?"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <Details />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="checkout"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="orders/:id"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="allorders"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <AdminOrders />
                  </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path="myorders"
                element={
                  <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <ProtectedRoute>
                    <MyOrder />
                  </ProtectedRoute>
                  </Suspense>
                }
              />

              <Route path="auth" element={<AuthPage />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
              </Route>
            </Route>

            <Route path="day19/callbackExample" element={<Callback />} />

            <Route path="day26/redux" element={<Redux />} />

            <Route path="day27/reduxToolKit" element={<RtkOutlet />}>
              <Route path="" element={<RtkHome />} />
              <Route path="login" element={<RtkLogin />} />
              <Route path="signup" element={<RtkSignup />} />
            </Route>

            <Route
              path="day30/lazyLoading"
              element={
                <Suspense
                  fallback={
                    <center>
                      <h2>Loading....</h2>
                    </center>
                  }
                >
                  <Main />
                </Suspense>
              }
            />

            <Route path="*" element={<Navigate to="/project" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
