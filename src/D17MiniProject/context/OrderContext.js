import { useContext } from "react";
import { createContext, useState } from "react";

const OrderContext=createContext();

export function OrderContextProvider({children}){
    const [products,setProduct]=useState([]);
    
    return(
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>
    );
    
}

export function useOrderContext(){
    const {}=useContext(OrderContext);
    return {};
}