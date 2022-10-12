import React from 'react';

const About = () => {
    return (
        <div className="container flexColumn" id={"about"}>
            <div>
                <p className={"subheading pulseText"}>
                    <span className={"magenta"}>Nacretion</span>
                    <span className={"sizeAnim"}>/</span>
                    <span className={"greenyellow"}>Никита</span>
                </p>
                <p className={"heading pulseText"}>
                        <span>
                            <span className={"greenyellow"}>Junior</span>
                            <span>Web</span>
                        </span>
                    <span className={"magenta"}>Developer</span>
                </p>
                <p className={"subsubheading pulseText"}>
                    <span className={"magenta"}>Коммерческий опыт</span>
                    {window.innerWidth < 900 ? "" : <span>~</span>}
                    <span className={"greenyellow"}>с мая 2022 (фриланс)</span>
                </p>
                <h1>
                    <span className={"greenyellow"}>Возраст:</span>
                    <span className={"magenta"}>20</span>
                    <span>лет</span>

                </h1>
            </div>
        </div>
    );
};

export default About;