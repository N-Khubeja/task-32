import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../interfaces/user.interface";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_,thunkapi) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return res.data
        } catch (error) {
            return thunkapi.rejectWithValue('fail to fetch users')
        }
    }
)