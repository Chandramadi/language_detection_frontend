import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';

// initial state for the language detection slice
// This state will be used to manage the loading state, data, and error for the language detection feature
const initialState = {
    isLoading: false,
    data: null,
    error: null,
};

// Async thunk for uploading a PDF
export const uploadPdf = createAsyncThunk(
    'languageDetection/uploadPdf',
    async (pdfFile, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('file', pdfFile);

            const response = await axiosInstance.post('/upload_and_detect', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            console.log('Response:', response); // Log the response data for debugging
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

const languageDetectionSlice = createSlice({
    name: 'languageDetection',
    initialState,
    reducers: {
        resetState: (state) => {
            state.isLoading = false;
            state.data = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadPdf.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(uploadPdf.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(uploadPdf.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { resetState } = languageDetectionSlice.actions;
export default languageDetectionSlice.reducer;