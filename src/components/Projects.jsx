import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/Projects.scss"

const Projects = () => {
    return (
        <div className="container flexColumn project">
            <div>
                <p className={'subheading'}>
                    <span>&lt;</span>
                    <span className={"magenta"}>Мои проекты</span>
                    <span>&gt;</span>
                </p>
            </div>

            <Slider dots className={"slider"}>
                <div className={"slide"} id={"ckSlide"}>
                    <div className="slideContent">

                        <a target={"_blank"} href={"https://nacretion.github.io/rim-and-ck/"}
                           className={'subsubheading'}>
                            <span className={"magenta"}>Россия и Мир</span>
                            <span className={"greenyellow"}>(Старьё)</span>
                        </a>
                        <h1>
                            <span className={"greenyellow"}>Курсовая, содержащая экономическое исследование, обернутое в цифровой продукт </span>
                        </h1>
                        <a target={"_blank"} href={"https://github.com/nacretion/rim-and-ck"}
                           className={'subsubheading'}>
                            <span>{"<"}</span>
                            <span className={"magenta"}>код</span>
                            <span>{"/>"}</span>
                        </a>
                    </div>
                </div>
                <div className={"slide"} id={"ikSlide"}>
                    <div className="slideContent">


                        <a target={"_blank"} href={"https://ik-center.ru/"}
                           className={'subsubheading'}>
                            <span className={"magenta"}>ik</span>
                            <span>-</span>
                            <span className={"magenta"}>center</span>
                        </a>
                        <h1>
                            <span className={"greenyellow"}>Лендинг, рекламирующий услуги, предлагаемые компанией InfoKilter</span>
                        </h1>
                    </div>
                </div>
                <div className={"slide"} id={"calcSlide"}>
                    <div className="slideContent">

                        <a target={"_blank"} href={"https://nacretion.github.io/calculator/"}
                           className={'subsubheading'}>
                            <span className={"magenta"}>React Calculator</span>
                        </a>
                        <h1>
                            <span className={"greenyellow"}>Первое приложение написанное мной на react.js</span>
                        </h1>
                        <a target={"_blank"} href={"https://github.com/nacretion/calculator"}
                           className={'subsubheading'}>
                            <span>{"<"}</span>
                            <span className={"magenta"}>код</span>
                            <span>{"/>"}</span>
                        </a>
                    </div>
                </div>
                <div className={"slide"} id={"dacotaSlide"}>
                    <div className="slideContent">

                        <a target={"_blank"} href={"http://nastya-dacota.ru"}
                           className={'subsubheading'}>
                            <span className={"magenta"}>Dacota Tattoo</span>
                        </a>
                        <h1>
                            <span className={"greenyellow"}>Лендинг, рекламирующий услуги, предоставляемые мастером-татуировщиком</span>
                        </h1>
                        <a target={"_blank"} href={"https://github.com/nacretion"}
                           className={'subsubheading'}>
                            <span>{"<"}</span>
                            <span className={"magenta"}>в разработке</span>
                            <span>{"/>"}</span>
                        </a>
                    </div>
                </div>
            </Slider>
            <div>
                <p className={'subsubheading'}>
                    <span>&lt;</span>
                    <span className={"sizeAnim"}>/</span>
                    <span className={"magenta"}>Остальное</span>
                    <span className={"greenyellow"}>в разработке</span>
                    <span>&gt;</span>
                </p>
                <p>
                    Ознакомиться с кодом можно по &nbsp;
                    <a target={"_blank"} href="https://github.com/Nacretion">
                        <span className={"magenta span"}>
                                ссылке
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Projects;