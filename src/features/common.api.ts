import { createAsyncThunk } from "@reduxjs/toolkit";

import { request } from "https";
import JSZip from 'jszip'

// import { imageBasePath, ImageItem, tagBasePath, TagItem } from "../app/common/common.types";


export const getEpubFile = createAsyncThunk(
  'books/getOne',
  async () => {
    console.log("in get file")
    // return "done"
    const text =  await fetch(
      "https://s3.amazonaws.com/epubjs/books/alice.epub",
      {
        "method": "GET",

      })       // 1) fetch the url
      .then((res) => {  
          console.log("Got response")                     // 2) filter on 200 OK
          if (res.status === 200 || res.status === 0) {
              return Promise.resolve(res.blob())
          } else {
              console.log("got an error from server")
              return Promise.reject("got an error from the server")
          }
      })
      .then((res) => {
        console.log(res)
        return JSZip.loadAsync(res)
      })
      .then((zip) => {
        console.log(zip)
        return zip.file("OPS/chapter_002.xhtml")?.async("text")
      })
      .then((text) => {
        return text
      })
    return text as string
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

