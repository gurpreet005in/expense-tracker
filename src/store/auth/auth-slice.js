import {createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice ({
   name : 'authSlice',
   initialState: {
       userList : [
        {
         name: "gurpreet singh"
        ,title: "VP"
        },
         {
            name: "harpreet singh"
            ,title: "VP"    
         }
      ]
    }
 })
  
   