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
//setup vars

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91F9I22Ha-L._AC_UL906_SR906,600_.jpg',
  title: 'First Grade, Here I Come!',
  author: 'D.J. Steinberg'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      >
        <p>Lorem ipsum.</p>
      </Book>
      <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}/>
    </section>
  );
}

const Book = ({img, title, author, children}) => {
  // const{img, title, author} = props;
  return (
  <article className='book'>
    <img src={img} alt=''></img>
    <h1>{title}</h1>
    <h4>{author}</h4> 
    {children}
    </article>
  );
}


ReactDom.render(<BookList/>, document.getElementById('root'));
