import React from "react"

function About(){
    return(
        <div className="about-container" id="about">
            <div className="abt-img-container">
                <div className="abt-overlay"></div>
                <div className="abt-img"></div>
                <div className="abt-img-text">
                    <h1 className="abt-head">We're committed to our :</h1>
                    <div className="commitments">
                        <i class="far fa-building">
                            <p className="commit">Community</p>
                        </i>
                        <i class="fas fa-cog">
                            <p className="commit">Work</p>
                        </i>
                        <i class="fas fa-car-side">
                            <p className="commit">Reliability</p>
                        </i>
                    </div>
                </div>
            </div>
            <div clas="abt-text-container">
                <p className="abt-text">
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                 making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more
                   obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                   and going through the cites of the word in classical literature, 
                   discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular 
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem 
                    ipsum dolor sit amet..", comes from a line in section 1.10.32.

                </p>
            </div>
        </div>
    )
}

export default About