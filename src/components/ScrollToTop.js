import React from "react"
export default function ScrollToTop() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return(
        <div className="scrolltotop">
            <button className="button-btn" onClick={goToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    )
}