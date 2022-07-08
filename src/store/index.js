import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/user.name.slice'

export default configureStore({
    reducer: {
        userName,
    }
})

