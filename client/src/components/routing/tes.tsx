import React from 'react';

interface Props {
  text: any;
}

function Test({ text }: Props) {
  console.log(text);

  return <>dziala</>;
}

export default Test;
