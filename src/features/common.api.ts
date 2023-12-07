import { createAsyncThunk } from "@reduxjs/toolkit";

import JSZip from 'jszip'

// import { imageBasePath, ImageItem, tagBasePath, TagItem } from "../app/common/common.types";


export const getEpubFile = createAsyncThunk(
  'books/getOne',
  async () => {
    console.log("in get file")
    return "done"
    // fetch("/jszip/test/ref/text.zip")       // 1) fetch the url
    //   .then((response) => {                       // 2) filter on 200 OK
    //       if (response.status === 200 || response.status === 0) {
    //           return Promise.resolve(response.blob());
    //       } else {
    //           return Promise.reject(new Error(response.statusText));
    //       }
    //   })
    //   .then(JSZip.loadAsync)                            // 3) chain with the zip promise
    //   .then(function (zip) {
    //       console.log(zip); // 4) chain with the text content promise
    //   });
    // return "done"
  }
)

// EXAMPLE REDUX ASYNC THUNK
//
// export const getAllImages = createAsyncThunk(
//   'images',
//   async () => {
//     const response = await fetch(imageBasePath);
//     return (await response.json()) as ImageItem[];
//   }
// );

