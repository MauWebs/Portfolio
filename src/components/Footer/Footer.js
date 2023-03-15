import React from "react";

// ------------------------ styles ------------------------ //

import './styles/footer.css';

// ------------------------ main ------------------------ //

function Footer() {
    return (

        <footer>

            <div class="footer">

                <div class="footer_contenedor">

                    <div class="footer_top">

                        <div class="company_info">

                            <a href="/" rel="noreferrer"><h2 class="company_logo">Mau Webs</h2></a>

                            <div>

                                <ul class="componentes">

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