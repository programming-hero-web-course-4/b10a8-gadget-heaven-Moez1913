

const Footer = () => {
    return (
        <footer className="flex flex-col item-center">
            <div>
                <h1 className="text-center text-2xl font-bold p-5">Gadget Heaven</h1>
                <p className="text-center text-base ">Leading the way in cutting-edge tecnology and innovation</p> 

            </div>
            <hr/><hr />
            <div className="flex flex-row justify-center gap-32 p-10 ">
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col gap-2">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
           
        </footer>
    );
};

export default Footer;