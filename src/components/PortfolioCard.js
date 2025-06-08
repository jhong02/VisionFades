function PortfolioCard({src, label}){
    return(
        <figure className = "portfolio-card">
            <img src = {src} alt = {label}/> {/*displays hair cut image*/}
            <figcaption>{label}</figcaption> {/*style of the haircut*/}
        </figure>
    )
}

export default PortfolioCard;