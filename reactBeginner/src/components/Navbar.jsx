

const Navbar = ({isNavbarClosed}) => {
    return (
        <div
            style={{backgroundColor:isNavbarClosed?"black":"blue", width:"800px"}}>
           <h1 style={{color:isNavbarClosed?"white":"black"}}>Navbar</h1>
            
        </div>
    );
}

export default Navbar;
