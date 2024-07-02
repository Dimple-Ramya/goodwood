import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartinSlice",
    initialState: {
        cartObj: []
    },
    reducers: {
        addItems: (state, action) => {
            const { name, price, images, id } = action.payload.eachItem
            const { itemCount } = action.payload
            const existingItem = state.cartObj.find(item => item.name === name)
            console.log(existingItem)
            // const img_url = images[0].url
            if (existingItem) {
                existingItem.itemCount = itemCount
            }
            else {
                state.cartObj.push({ name, itemCount, price, id, images })
            }
            // console.log("state", state.cartObj)
        },
        removeItems: (state, action) => {
            // console.log(action.payload)
            if (action.payload === "clearall") {
                state.cartObj = []
            } else {
                const delItemIndex = state.cartObj.findIndex(item => item.name === action.payload)
                if (delItemIndex) {
                    state.cartObj.splice(delItemIndex, 1)
                }
            }

        }
    }
})

export const { addItems, removeItems } = cartSlice.actions
export default cartSlice.reducer