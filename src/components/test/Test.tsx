import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hook';
import { commonSelector } from '../../features/common.slice';
import { getEpubFile } from '../../features/common.api';

const Test: React.FunctionComponent = () => {
  const { filePath } = useSelector(commonSelector);
  const dispatch = useAppDispatch();
  console.log("in test")
  dispatch(getEpubFile)
    
  return (
    <>hello</>
  );
}

export default Test