import { FaBehanceSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 py-10 bg-[#10151c] text-white  rounded">
            
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-4xl" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/suronjoyroy/"><FaLinkedin /></a>
                    <a className="text-4xl" target="_blank" rel="noreferrer" href="https://twitter.com/suronjoyroy"><FaTwitterSquare /> </a>
                    <a className="text-4xl" target="_blank" rel="noreferrer" href="https://www.instagram.com/suronjoyroy/"><FaInstagram /> </a>
                    <a className="text-4xl" target="_blank" rel="noreferrer" href="https://www.behance.net/suronjoyroy"><FaBehanceSquare /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Suronjoy Roy</p>
            </aside>
        </footer>
    );
};

export default Footer;