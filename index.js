import "bootstrap/dist/css/bootstrap.min"
import "font-awesome/css/font-awesome.min"
import "./style/style.default"
import "./style"
import FontFaceObserver from 'fontfaceobserver'

const font = new FontFaceObserver('Open Sans', {weight: [300, 700]})
font.load().then(() => document ? document.documentElement.className += " fonts-loaded" : null )

import App from './components/App'

export default () => <App />;
