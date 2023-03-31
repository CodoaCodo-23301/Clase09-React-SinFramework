import { createRoot } from './node_modules/react-dom/client';

let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hello world";

myApp.innerHTML = myApp.innerHTML + '<div id="reactApp"></div>';

const root = createRoot(document.getElementById("reactApp"));
root.render("<h1>Hello World from React</h1>");
