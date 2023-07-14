const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name : 'expenseSlice',
    initialState: {
           expenseList : [],
           income: 1000
    },
   reducers: {
     addExpenseAction: (currentSlice,action) => {
        currentSlice.expenseList.push(action.payload);
     //   console.log(action.payload);
     },
     updateIncome : (currentSlice,action) => {
        currentSlice.income = action.payload;
     }
   } 
})

export const {addExpenseAction,updateIncome} = expenseSlice.actions;