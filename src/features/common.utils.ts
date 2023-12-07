// import { ImageItem, TagItem } from "../app/common/common.types";

/** Shuffles a list. */
export const shuffleList = (list: any[]) => {
  var newList = list.slice();

  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var tmp = newList[i];
    newList[i] = newList[j];
    newList[j] = tmp;
  }

  return newList;
}