import React from 'react';
import ReactDom from 'react-dom';

//stateless functional component or dumb component 
//always return JSX (HTML )

// function Greeting(){
//   return (<div>
//     <h1>
//       hello world
//     </h1>
//   </div>
//   );
// } 

// const Greeting = () => {
//   return React.createElement(
//     'div',
//      {},
//      React.createElement('h1', {}, 'hello world') 
//     );
// };

//JSX always returns a single element: div, section, fragment
//use camelCase for html attribute
// classname instead of class
//close every element (even image)
//formatting

function Greeting(){
  return (
    <div>
      <article>hello world</article> 
      <ul>
        <li>
          <a href='#'>hello world</a>
        </li>
        <img src='' alt=''></img>
        <input type='text' name='' id=''></input>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
