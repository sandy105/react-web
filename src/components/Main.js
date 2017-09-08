require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imagesDatas = require('../data/imageDatas.json');

imagesDatas = ( function genImageUrl(imagesArr) {
    for (var i = 0; i < imagesArr.length; i++) {
       let image = imagesArr[i];
       	image.imageUrl = require('../images/' + image.fileName);
       	imagesArr[i] = image;
    }
    return imagesArr;
  })(imagesDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
      <div className="img-set"></div>
      <nav className="nav"></nav>
      </div>
    );
  }
   
}

AppComponent.defaultProps = {
};

export default AppComponent;
