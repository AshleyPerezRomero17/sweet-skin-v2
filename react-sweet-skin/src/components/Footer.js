import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer>
            <div className="flex-container">
                <div className="list-container">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/src/components/AboutUs">About us</a></li>
                        <li><a href="/src/components/Contact">Contact us</a></li>
                        <li><a href="/src/components/Products">Products</a></li>

                    </ul>
                </div>

                <div className="list-container">
                    <h3>Get help</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>SHIPPING</li>
                        <li>Returns</li>
                        <li>Order Status</li>
                        <li>Payment Options</li>
                    </ul>
                </div>

                <div className="list-container">
                    <h3>Online shop</h3>
                    <ul>
                        <li><a href="/src/components/Products">Creams</a></li>
                        <li><a href="/src/components/Products">Serums</a></li>
                        <li><a href="/src/components/Products">Scrubs</a></li>
                        <li><a href="/src/components/Products">Face Milk</a></li>
                    </ul>
                </div>

                <div id="socials">
                    <h3>Connect with us</h3>
                    <ul>
                        <li><a href="https://www.tiktok.com/en/" target="_blank"><img src="/assets/img/ticTok.jpg" alt="Tik-Tok" /></a>
                        </li>
                        <li><a href="https://www.instagram.com" target="_blank"><img src="/assets/img/instagram.jpg" alt="Instagram" /></a>
                        </li>
                        <li><a href="https://www.facebook.com" target="_blank"><img src="/assets/img/facebook.jpg" alt="Facebook" /></a>
                        </li>
                        <li><a href="https://twitter.com" target="_blank"><img src="/assets/img/twitter.jpg" alt="Twitter" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

