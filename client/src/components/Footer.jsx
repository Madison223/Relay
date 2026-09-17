import "./Footer.css";

function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="footer-note">&copy; {date} FirstName LastName &bull; Relay</p>
            <p className="footer-note">Portfolio Project &bull; <a href="https://www.linkedin.com/in/madison-marsh-1267b8335/">
            LinkedIn</a> &bull; <a href="https://github.com/Madison223">Github</a></p>
        </div>
    );
}

export default Footer;