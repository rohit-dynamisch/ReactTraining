
import axios from "axios"

export const inc='account/increment'
export const dec='account/decrement'
export const incByAmt='account/incrementByAmount'
export const getAccUserPending='account/getUser/pending'
export const getAccUserFulFilled='account/getUser.fulfilled'
export const getAccUserRejected='account/getUser/rejected'
export const incBonus='bonus/increment'

//export function getUserAccount(id){
//     return async(dispatch,getState)=>{
//         try{
//             dispatch(getAccountUserPending());
//             const {data}=await axios.get();
//             dispatch(getAccUserFulFilled(data.amount));
//         }
//         catch(err){
//             dispatch(getAccUserRejected(err.message));
//         }
//     }


// }


export function incrementBonus(value) {
    return {type:incBonus}
}

export function incrementByAmount(value) {
    return {type:incByAmt,payload:value};
}

export function decrement() {
    return {type:dec}
}

export function increment() {
    return {type:inc}
}

export function getAccountUserPending() {
    return {type:getAccUserPending};
}

export function getAccountUserRejected(error) {
    return {type:getAccUserRejected,error:error}
}


export function getAccountUserFulFilled(value) {
    return {type:getAccUserFulFilled,payload:value}
}