import React from 'react';

const Stack = () => {
    return (
        <div className="container">
            <div className={"grid"}>
                <p className={"subsubheading pulseText"}>
                    <span className={"greenyellow"}>Stack</span>
                    <span>Разработки</span>
                </p>
                <p>
                    <span className={"magenta"}>Node</span>
                    <span className={"greenyellow"}>JS</span>
                </p>
                <p>
                    <span className={"magenta"}>React</span>
                    <span className={"greenyellow"}>JS</span>
                </p>
                <p id={"col2"}>
                    <span className={"sizeAnim magenta"}>SCSS</span>
                </p>
                <p>
                    <span className={"magenta"}>Postgre</span>
                    <span className={"greenyellow"}>SQL</span>
                </p>
                <p>
                    <span className={"magenta"}>Mongo</span>
                    <span className={"greenyellow"}>DB</span>
                </p>
            </div>
            <img className={"img400"} src="./img/demencia3.png" alt={""}/>
        </div>
    );
};

export default Stack;