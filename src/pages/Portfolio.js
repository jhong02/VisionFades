import PortfolioCard from "../components/PortfolioCard";
import '../styles/Portfolio.css';

function Portfolio(){
    const cutStyle = [
    {src: './images/design-cut.png', label: "Design Cut"},
    {src: './images/drop-fade-blowout-fringe.png', label: "Drop Fade Blowout Fringe"},
    {src: './images/flow-taper.png', label: "Flow Taper"},
    {src: './images/layered-middle-part.png', label: "Layered Middle Part"},
    {src: './images/mullet.png', label: "Mullet"},
    {src: './images/textured-perm-quarter-part.png', label: "Textured Perm Quarter Part"},
    {src: './images/unknown-cut1.png', label: "Unkown Cut 1"}
];
    return(
        <section className = "portfolio">
            <header className = 'portfolio-header'>
                <h1 className="title-font">STYLE OFFERINGS</h1>
                <p className="subtitle-font">For Any Special Requests Let Me Know In Your Booking</p>
            </header>
            
            <div className = "portfolio-grid">
                {/*using destructuring to unpack properties from object cutStyles src and label*/}
                {cutStyle.map(({src, label}, index) => (
                    //uses the Portfoliocard component to let it show in the information
                    <PortfolioCard key = {index} src = {src} label = {label} />
                ))}
            </div>
        </section>
        
    )
}
export default Portfolio