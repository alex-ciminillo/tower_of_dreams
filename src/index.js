import _ from 'lodash';
import './../stylesheets/style.css';
import Title from './title'

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
  console.log(arr)
  document.body.appendChild(arr[0]);
  new Title(arr[1])
