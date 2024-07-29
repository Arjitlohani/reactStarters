

const Sidebar = ({setIsNavbarClosed}) => {
    return (
        <div>
           <button onClick={()=>setIsNavbarClosed((jiden)=>!jiden)}>Close Nav</button> 
        </div>
    );
}

export default Sidebar;
