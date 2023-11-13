import {configureStore} from "@reduxjs/toolkit"
import { customreducer } from "./Reducers"

const store =configureStore({
    reducer:{  
        custom:customreducer
    }
})

export default store