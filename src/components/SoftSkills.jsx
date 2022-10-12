import React from 'react';

const SoftSkills = () => {
    return (
        <div className="container revert">
            <img className={"img400"} src="./img/demencia2.png" alt={""}/>
            <div className={"grid"}>
                <p className={"subsubheading pulseText"}>
                    <span className={"magenta"}>Soft</span>
                    <span className={"sizeAnim"}>-</span>
                    <span className={"greenyellow"}>Skills</span>
                </p>
                <p>
                    <span className={"greenyellow"}>Коммуникабельность</span>
                </p>
                <p>
                    <span>Инициативность</span>
                </p>
                <p id={"col2"}>
                    <span className={"magenta"}>Работа в команде</span>
                </p>
                <p>
                    <span className={"magenta"}>Обучаемость</span>
                </p>
                <p>
                    <span>~</span>
                    <span className={"magenta"}>Чувство стиля</span>
                    <span>~</span>
                </p>
                <p id={"col22"}>
                    <span className={"magenta"}>Серьезность!</span>
                </p>
                <p>
                    <span>Изобретательность</span>
                </p>
                <p>
                    <span className={"greenyellow"}>Гибкость</span>
                </p>
            </div>
        </div>
    );
};

export default SoftSkills;