import _ from 'lodash';
import './../stylesheets/style.css';
import TowerOfDreams from './game.js'

function component() {
    const outerDiv = document.createElement('div')
    const canvas = document.createElement('canvas');
    canvas.width = 1200
    canvas.height = 600
    outerDiv.classList.add('outerDiv');
    canvas.classList.add('canvas');
    outerDiv.appendChild(canvas);
    
    return [outerDiv, canvas];
  }
  let arr = component()
  document.body.appendChild(arr[0]);
  new TowerOfDreams(arr[1])
