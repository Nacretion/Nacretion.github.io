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
import {getContainerOffset, setActiveButton} from "./func/activeContainer.func";
import {scrollToY} from "./func/animation.func";
import Stack from "./components/Stack";
import About from "./components/About";
import Start from "./components/Start";

const phoneSpeed = 2000,
    speed = 1400

const buttonsArray = [
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
]

function App() {
    const [activeButtons, setActiveButtons] = useState(buttonsArray)

    const copyText = (text) => {
        window.prompt("Копировать в буфер обменв: Ctrl+C, Enter", text);
    }


    useEffect(() => {
        setActiveButton(activeButtons, setActiveButtons)
        document.addEventListener("scroll", () => {
            setActiveButton(activeButtons, setActiveButtons)
            let activeButton = document.getElementById("activeButton"),
                nav = document.getElementById("nav")

            nav.scrollLeft = activeButton ?
                activeButton.offsetLeft - (activeButton.clientWidth) / 2 : nav.scrollLeft

        })
    }, [setActiveButtons, activeButtons])


    return (
        <div className={"App"}>
            <nav id={"nav"}>
                {activeButtons.map((button) => <Button func={button.func} ico={button.ico} key={button.label}
                                                       active={button.active}
                                                       id={button.active ? "activeButton" : ""}>{button.label}</Button>)}
            </nav>

            <Start/>
            <About/>
            <Stack/>
            <SoftSkills/>
            <Projects/>
            <Contacts copyText={copyText}/>

        </div>
    );
}

export default App;
