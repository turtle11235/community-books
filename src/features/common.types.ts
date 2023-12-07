/** State of the app. */
export interface CommonState {
  // url to epub file
  filePath: string
}

// types 
// export type ImageItem = {
//   _id: string;
//   fileName: string;
//   artist: string;
//   archived: boolean;
//   tagIDs: string[];
//   thumbnailData: ThumbnailData;
// }

const BaseUrl = 'http://localhost:5000';
export const imageBasePath = BaseUrl + '/images';
export const tagBasePath = BaseUrl + '/tags';

export const newTagId = 'newTagId';