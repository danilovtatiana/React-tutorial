import React from 'react';
import ReactDom from 'react-dom';

//CSS

import './index.css';

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

// function Greeting(){
//   return (
//     <div>
//       <article>hello world</article> 
//       <ul>
//         <li>
//           <a href='#'>hello world</a>
//         </li>
//         <img src='' alt=''></img>
//         <input type='text' name='' id=''></input>
//       </ul>
//     </div>
//   );
// }

//nested components, React Tools 
// function Greeting(){
//   return (<div>
//     <Person/>
//     <Message/>
//   </div>
//   );
// } 

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

//Mini Book project

function BookList() {
  return (
    <section className='booklist'>
      <Book/>
    </section>
  );
}
const author = 'Amelia Hepworth'
const Book = () => {
   const title = 'I Love You to the Moon and Back'
  return (
  <article className='book'>
    <img src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg' alt=''></img>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
    </article>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));
