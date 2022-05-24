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
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
  <article className='book'>
    <Image/>
    <Title/>
    <Author/>
    </article>
  );
}

const Image = () => {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg' alt=''></img>
}

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>
}

const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hepworth</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));
