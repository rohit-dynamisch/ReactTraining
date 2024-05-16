import React from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import accountReducer from "./reducers/account";
import bonusReducer from "./reducers/bonus";
import { Provider, useSelector } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  composeEnhancers(
    applyMiddleware()
)
);

function Redux() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            {/* <h3>Current Account :{useSelector(state=>state.account.amount)}</h3> */}
            {/* <h3>Total Bonus : {seSelector(state=>state.bonus.points)}</h3> */}
          </div>
          <Account />
          <Bonus />
        </div>
      </div>
    </Provider>
  );
}

export default Redux;
