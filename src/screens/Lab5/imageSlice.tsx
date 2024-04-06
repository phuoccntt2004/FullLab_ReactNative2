import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  imageUrl: string | null; // Thêm kiểu null để tránh lỗi Cannot read property 'imageUrl' of null
}

const initialState: ImageState = {
  imageUrl: null, // Thiết lập giá trị ban đầu cho imageUrl là null
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    clearImage: (state) => {
      state.imageUrl = null;
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;