import _ from 'lodash';
import './../stylesheets/style.css';
import TowerOfDreams from './game.js'



function component() {
    const outerDiv = document.createElement('div');
    const canvas = document.createElement('canvas');
    const canvas2 = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 600;
    canvas2.height = 600;
    canvas2.width = 100;
    outerDiv.classList.add('outerDiv');
    canvas.classList.add('canvas');
    canvas2.classList.add('canvas3');
    outerDiv.appendChild(canvas2);
    outerDiv.appendChild(canvas);
    
    
    return [outerDiv, canvas, canvas2];
  }
  let arr = component()
  document.body.appendChild(arr[0]);
  const game = new TowerOfDreams(arr[1], arr[2])
