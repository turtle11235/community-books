import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hook';
import { commonSelector } from '../../features/common.slice';
import { getEpubFile } from '../../features/common.api';

const Test: React.FunctionComponent = () => {
  const { filePath, text } = useSelector(commonSelector);
  const dispatch = useAppDispatch();
  console.log("in test")
  dispatch(getEpubFile())
    
  return (
    <div dangerouslySetInnerHTML={{ __html: text }}>
    </div>
  );
}

export default Test