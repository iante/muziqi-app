import React, { createContext, useContext, useReducer } from "react";


export const DataLayerContext = createContext(); //preparing the data layer

//passing initialState and reducer since they are the parameters datalayer takes in our index.js
export const DataLayer = ({initialState, reducer, children
}) =>(
    <DataLayerContext.Provider  value={useReducer(reducer, initialState)}>
       {children}
    </DataLayerContext.Provider>
) 

export const useDataLayerValue = () => useContext(DataLayerContext);
