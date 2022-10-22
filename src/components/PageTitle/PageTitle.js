import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import './_PageTitle.scss';
const PageTitle = ({ maniTitle, subTitle }) => {
  return (
    <div className='page-title'>
      <div className='page-title__text'>{maniTitle}</div>
      <div className='page-title__icon'>
        <MdPlayArrow />
      </div>
      <div className='page-title__text'>{subTitle}</div>
    </div>
  );
};

export default PageTitle;
