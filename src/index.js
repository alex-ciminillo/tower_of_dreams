import _ from 'lodash';
import './../stylesheets/style.css';
import TowerOfDreams from './game.js'
import Git from './../images/github_icon.png'

function createFooter() {
  const footer = document.createElement('footer')
  footer.classList.add('footer');
  const span1 = document.createElement('span')
  span1.classList.add('span1')
  span1.innerText = "Alex Ciminillo © 2022"
  footer.appendChild(span1)
  const span2 = document.createElement('span')
  span2.classList.add('git')
  const a1 = document.createElement('a')
  a1.setAttribute('target', '_blank')
  a1.setAttribute('href', 'https://github.com/alex-ciminillo/tower_of_dreams')
  const img1 = document.createElement('img')
  img1.setAttribute('src', Git)

  a1.appendChild(img1)
  span2.appendChild(a1)
  footer.appendChild(span2)
  return footer

}

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
  let foot = createFooter()
  document.body.appendChild(arr[0]);
  document.body.appendChild(foot)
  const game = new TowerOfDreams(arr[1], arr[2])
