import React, { useState } from 'react';

import JSZip from 'jszip';

const Test: React.FunctionComponent = () => {

  const [tmp, setTMp] = useState<>();

  const get_file = async () => {
    const response = await fetch("C:\\Users\\Emrys Shevek\\Desktop\\projects\\community_books\\books\\pg23428-images-3.epub")       // 1) fetch the url
    // .then((response) => {                       // 2) filter on 200 OK
        if (response.status === 200 || response.status === 0) {
          return <div>success</div>
          // return <Promise.resolve(response.blob());>
        } else {
          // return Promise.reject(new Error(response.statusText));
          return <div>failure</div>
        }
    // })
    // console.log(result)
    // return result
    // .then(JSZip.loadAsync)                            // 3) chain with the zip promise
    // .then(function (zip) {
    //     return zip.file("Hello.txt").async("string"); // 4) chain with the text content promise
    // })
    // .then(function success(text) {                    // 5) display the result
    //     $("#fetch").append($("<p>", {
    //         "class": "alert alert-success",
    //         text: "loaded, content = " + text
    //     }));
    // }, function error(e) {
    //     $("#fetch").append($("<p>", {
    //         "class": "alert alert-danger",
    //         text: e
    //     }));
    // });
  }
    
  return (
    <div>
    </div>
  );
}

export default Test