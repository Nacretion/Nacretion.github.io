import './styles/App.scss';
import Button from "./components/Button/Button";
import {useEffect, useState} from "react";
import {FaAngleDoubleUp} from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillProject} from "react-icons/ai";
import {GiStack, GiStarsStack} from "react-icons/gi";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import SoftSkills from "./components/SoftSkills";

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function scrollToY(scrollTargetY = 0, speed = 12000, easing = 'easeOutSine') {
    let scrollY = window.scrollY,
        currentTime = 0;

    let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    let easingEquations = {
        easeOutSine: function (pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: function (pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
    };

    function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimationFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    tick();
}

function App() {
    let phoneSpeed = 200000,
        speed = 140000
    const [activeButtons, setActiveButtons] = useState([
        {
            ico: <FaAngleDoubleUp/>, label: "В начало", active: false,
            func: () => {
                scrollToY(0, window.innerWidth < 900 ? phoneSpeed : speed)
            }
        },
        {
            ico: <BsFillPersonFill/>, label: "Обо мне", active: false,
            func: () => {
                scrollToY(getContainerOffset(1), window.innerWidth < 900 ? phoneSpeed : speed)
            }
        },
        {
            ico: <GiStack/>, label: "Мой Stack", active: false,
            func: () => {
                scrollToY(getContainerOffset(2), window.innerWidth < 900 ? phoneSpeed : speed)
            }
        },
        {
            ico: <GiStarsStack/>, label: "Soft Skills", active: false,
            func: () => {
                scrollToY(getContainerOffset(3), window.innerWidth < 900 ? phoneSpeed : speed)
            }
        },
        {
            ico: <AiFillProject/>, label: "Проекты", active: false,
            func: () => {
                scrollToY(getContainerOffset(4), window.innerWidth < 900 ? phoneSpeed : speed)
            }
        },
        {
            ico: <HiExternalLink/>, label: "Контакты", active: false,
            func: () => {
                scrollToY(getContainerOffset(5), window.innerWidth < 900 ? phoneSpeed : speed)
            }
        }
    ])

    const getContainerOffset = (index) => {
        return getOffset(getContainerByIndex(index))
    }

    const getContainerByIndex = (index) => {
        return document.getElementsByClassName("container")[index]
    }

    const getOffset = (elem) => {
        return elem.getBoundingClientRect().top + window.scrollY
    }

    const clearActiveButton = () => {
        return activeButtons.map((button) => {
            return {ico: button.ico, label: button.label, func: button.func, active: false}
        })
    }

    const getActiveContainerIndex = (arrayOffsets) => {
        return Math.min(...arrayOffsets)
    }
    const getArrayOfOffsets = (className) => {
        return [...document.getElementsByClassName(className)].map((element) => Math.abs(element.getBoundingClientRect().top))
    }


    function setActiveButton() {
        let clearedButtons = clearActiveButton(),
            arrayOffsets = getArrayOfOffsets("container"),
            activeContainer = getActiveContainerIndex(arrayOffsets),
            index = arrayOffsets.indexOf(activeContainer)


        clearedButtons[index].active = true

        setActiveButtons(clearedButtons)
    }

    const copyText = (text) => {
        window.prompt("Копировать в буфер обменв: Ctrl+C, Enter", text);
    }


    useEffect(() => {
        setActiveButton()
        document.addEventListener("scroll", () => {
            setActiveButton()
            let activeButton = document.getElementById("activeButton"),
                nav = document.getElementById("nav")

            nav.scrollLeft = activeButton ?
                activeButton.offsetLeft - (activeButton.clientWidth) / 2 : nav.scrollLeft

        })
    })


    return (
        <div className={"App"}>
            <nav id={"nav"}>
                {activeButtons.map((button) => <Button func={button.func} ico={button.ico} key={button.label}
                                                       active={button.active}
                                                       id={button.active ? "activeButton" : ""}>{button.label}</Button>)}
            </nav>
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
                    <img className={"img700"} src="./components/img/demencia.png" alt={""}/>
                </div>
            </main>
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
                <img className={"img400"} src="./components/img/demencia3.png" alt={""}/>
            </div>


            <SoftSkills/>
            <Projects/>
            <Contacts copyText={copyText}/>

        </div>
    );
}

export default App;
