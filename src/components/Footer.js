import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';


const Navreactstrap = () => {

  return (


    <div className="footer">
      <Container>
        <Row>
          <Col md="12" xs="12" className="logo-box centerbox">
            <span>
              <span className="page">
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/87fb5c4e76b5bf174d86149b410d405156acf1b7/70d74/static/assets/icons/facebook.png" alt="Facebook" />
                </a>
              </span>
              <span className="page">
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/264572bffc6a1ec7181f9c327dfed3f22d95a648/a63d8/static/assets/icons/instagram.png" alt="Instagram" />
                </a>
              </span>
              <span className="page">
                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/5130d257403c789e690c6e2413e4a4d070c89e70/4d510/static/assets/icons/linkedin.png" alt="LinkedIn" />
                </a>
              </span>
              <span className="github">
                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/22b06d223b1db5accada10b61c3d7ca751102ec7/1cd03/static/assets/icons/github.png" alt="GitHub" />
                </a>
              </span>
              <span className="page">
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/b2407043dc50cdd630c0486f32101c1b35150ed6/3012f/static/assets/icons/twitter.png" alt="Twitter" />
                </a>
              </span>
              <span className="page">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/ec6a961f470ef0e42e6ae70b4f29bbaaba6bdfa5/28f8c/static/assets/icons/googleplus.png" alt="Google+" />
                </a>
              </span>
              <span className="page">
                <a href="http://coursereport.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/2b7e43f97c55aa0897ec4c984253e86da3eeaf9b/2c875/static/assets/icons/coursereport.png" alt="Course Report" />
                </a>
              </span>
              <span className="page">
                <a href="http://switchup.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://d33wubrfki0l68.cloudfront.net/805fa087b65f9ccc889416e3d939e3e7487205a0/57859/static/assets/icons/switchup.png" alt="SwitchUp" />
                </a>
              </span>
            </span>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md="6" sm="12" xs="12">
            <div className="box-footer">
              <div className="copy">&copy; DATABASE Inc, 2017–2020</div></div>
          </Col>
          <Col md="6" sm="12" xs="12">
            <div className="box-footer">
              <p className="mb-0" data-reactid="195">
                <small>Dibangun dari awal menggunakan : <br />
                  <span className="item"><a href="http://www.linuxfoundation.org" target="_blank" rel="noopener noreferrer">Linux</a></span>
                  <span className="item"><a href="https://www.ubuntu.com" target="_blank" rel="noopener noreferrer">Ubuntu</a></span>
                  <span className="item" data-reactid="203"><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                  <span className="item"><a href="https://www.w3.org/html" target="_blank" rel="noopener noreferrer">HTML5</a></span>
                  <span className="item"><a href="https://www.w3.org/css" target="_blank" rel="noopener noreferrer">CSS3</a></span>
                  <span className="item"><a href="http://javascript.com" target="_blank" rel="noopener noreferrer">JavaScript ES6+</a></span>
                  <span className="item"><a href="https://facebook.github.io/react" target="_blank" rel="noopener noreferrer">React.js</a></span>
                  <span className="item"><a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a></span>
                  <span className="item"><a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></span>
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navreactstrap;