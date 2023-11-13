import {createReducer} from "@reduxjs/toolkit"

const initialstate={
    c:0,
}

export const customreducer =createReducer(initialstate, {
    increment: (state,action) => {
        state.c+=1
    },
    decrement:(state, action)=>{
        state.c-=1
    },
    incrementbyvalue:(state, action)=>{
        state.c+=action.payload
    },
    decrementbyvalue:(state,action)=>{
        state.c-=action.payload
    },
    updatestate:(state, action)=>{
        state.c= action.payload
    }
    
})