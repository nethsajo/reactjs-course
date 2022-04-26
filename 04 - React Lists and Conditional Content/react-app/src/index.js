import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

/*** 
  import ReactDOM from "react-dom/client"; 

 * We are importing ReactDOM from react-dom, which in the end means we're importing something, some ReactDOM object from the react-dom third-party library

  ReactDOM.createRoot(document.getElementById("root"))

  * createRoot - creates basically the main entry point, the main hook of the overall user interface that about to build with React. 
  * That's the idea behind the createRoot.

  root.render(<App />);

  * What does in the end is it tells React where this React application (this user interface) which you build with React in the end. 
  *It should be placed in the web page that is loaded and that leads us to one other file and that is the index.html file in the public folder

  public folder/index.html

  * The public folder is a folder in which we will rarely work but it holds one important file (index.html). 
  * The index.html file which is in the end loaded by the browser here. 
  * The index.html file is being used by this overall React application. 
  * The index.html is the entry point, the place where the React-driven user interface should be rendered into so to say. 
  * There's a div with an id of root which actually doesn't hold any content but that's the div where we want to attach or render our React-driven user interface. 

  root.render(<App />);

  * The <App/> is a syntax called JSX. App is a component which we, in the end, render in the place of that element with an id of root
*/
