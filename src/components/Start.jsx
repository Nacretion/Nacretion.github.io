import React from 'react';
import "../styles/Start.scss"

const Start = () => {
    return (
        <main className="container">
            <div id={"start"}>
                <p className={"heading pulseText"}>
                    <span>&lt;</span>
                    <span className={"magenta"}>Hello</span>
                    <span className={"greenyellow"}>World</span>
                    <span className={"sizeAnim"}>/</span>
                    <span>&gt;</span>
                </p>
                <p className={"subheading pulseText"}>
                        <span>
                            <span className={"greenyellow"}>Nacretion</span>
                            <span className={"sizeAnim"}>'</span>
                            <span>s</span>
                        </span>
                    <span className={"magenta"}>portfolio</span>

                </p>
            </div>
            <div>
                <img className={"img700"} src="./img/demencia.png" alt={""}/>
            </div>
        </main>
    );
};

export default Start;