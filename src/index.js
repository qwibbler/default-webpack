import _ from 'lodash';
import './style.css';
// import Icon from './more.png';

function component() {
  const element = document.createElement('div');

   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  return element;
}

document.body.appendChild(component());