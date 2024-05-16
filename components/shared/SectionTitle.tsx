import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

function SectionTitle({ subtitle, title }: SectionTitleProps): JSX.Element {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
