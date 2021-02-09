import React from 'react';

type headingSize = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';

const Title = (props:{head: headingSize, children: string}) => 
  <props.head>{props.children}</props.head>
;

export default Title;