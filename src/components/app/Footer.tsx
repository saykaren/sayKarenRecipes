import React from 'react';
import sayKarenLogo from '../assests/sayKaren_logo-white_8.1.2019.png';
import code from '../assests/code.png';

const Footer= ()=> (
    <footer
        id="footer"
        className="footerDetails"
    >
        Website created by:
        <a
            href="http://saykaren.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={sayKarenLogo}
                 className="footerDetails"
                 id="sayKarenLogo"
                 alt="sayKaren.com"
            />
        </a>
        <a
            href="https://github.com/saykaren/sayKarenRecipes"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={code}
                 className="footerDetails"
                 id="code"
                 alt="code"
            />
        </a>
    </footer>


);

export default Footer