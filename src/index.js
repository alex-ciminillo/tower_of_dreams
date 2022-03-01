import _ from 'lodash';
import './../stylesheets/style.css';
import TowerOfDreams from './game.js'
import Git from './../images/github_icon.png'
import LinkIn from './../images/linkedinicon.png'
import Fav from './../images/favicon.ico'

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

  const span3 = document.createElement('span')
  span3.classList.add('git')
  const a2 = document.createElement('a')
  a2.setAttribute('target', '_blank')
  a2.setAttribute('href', 'https://www.linkedin.com/in/alexzander-ciminillo/')
  const img2 = document.createElement('img')
  img2.setAttribute('src', LinkIn)
  a2.appendChild(img2)
  span3.appendChild(a2)
  footer.appendChild(span3)


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

    const head = document.getElementsByTagName("head")[0]
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon')
    link.setAttribute('type', 'image/x-icon')
    link.setAttribute('href', Fav)
    head.appendChild(link)
    
    return [outerDiv, canvas, canvas2];
  }
  console.warn = () => {};
  let arr = component()
  let foot = createFooter()
  document.body.appendChild(arr[0]);
  document.body.appendChild(foot)
  const game = new TowerOfDreams(arr[1], arr[2])
