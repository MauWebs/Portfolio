import React from "react";
import './styles/footer.css';

function Footer() {
    return (

        <footer>
            <div class="footer">
                <div class="footer__container">
                    <div class="footer__top">
                        <div class="company__info">
                            <a href="/" rel="noreferrer"><h2 class="company__logo">Mau Webs</h2></a>
                            <div>
                                <ul class="components">
                                    <div></div>
                                    <li>
                                        <a href="https://m.facebook.com/profile.php?id=100086829729023" rel="noreferrer" target="_blank">

                                            <span class="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Mau_Webs" rel="noreferrer" target="_blank">

                                            <span class="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/mau_webs/" rel="noreferrer" target="_blank">

                                            <span class="fa fa-instagram"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/mauricio-vidal-webs" rel="noreferrer" target="_blank">

                                            <span class="fa fa-linkedin"></span>
                                        </a>
                                    </li>
                                    <div></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;