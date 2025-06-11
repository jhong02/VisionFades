import PortfolioCard from "../components/PortfolioCard";
import '../styles/Portfolio.css';
import designCut    from "../images/design-cut.png";
import dropFade     from "../images/drop-fade-blowout-fringe.png";
import flowTaper    from "../images/flow-taper.png";
import layeredMid   from "../images/layered-middle-part.png";
import mulletImg    from "../images/mullet.png";
import texturedPerm from "../images/textured-perm-quarter-part.png";

function Portfolio(){
    const cutStyle = [
        { src: designCut,    label: "Design Cut" },
        { src: dropFade,     label: "Drop Fade Blowout Fringe" },
        { src: flowTaper,    label: "Flow Taper" },
        { src: layeredMid,   label: "Layered Middle Part" },
        { src: mulletImg,    label: "Mullet" },
        { src: texturedPerm, label: "Textured Perm Quarter Part" },
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