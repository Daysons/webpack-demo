'use strict';

import _ from 'lodash';
import './style.css'
import icon from './img-repay.png'
import Data from './data.xml'

function component(){
    var element = document.createElement('div');

    // Lodash,  now import bt this script
    element.innerHTML = _.join(['hello','webpack'],' ');
    element.classList.add('icon-footer-home');

    // add the image to our existing div
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    console.log(Data);
    return element;
}

document.body.appendChild(component());