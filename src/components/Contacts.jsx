import React from 'react';

const Contacts = ({copyText}) => {
    return (
        <div className="container">
            <div className={"grid"} id={"contacts"}>
                <p className={"subheading pulseText"}>
                    <span>Контакты</span>
                </p>
                <a target={"_blank"} rel="noreferrer" href="https://vk.com/nacretion">
                    <span className={"magenta"}>В</span>
                    <span className={"greenyellow"}>Контакте</span>
                </a>
                <a target={"_blank"} rel="noreferrer" href="https://t.me/nacretion">
                    <span className={"magenta"}>Теле</span>
                    <span className={"greenyellow"}>грамм</span>
                </a>
                <p  className={"copyText"} id={"col2"} onClick={() => {
                    copyText("+79088554760")
                }}>
                    <span className={"magenta"}>What</span>
                    <span className={"pulseText"}>'</span>
                    <span className={"magenta"}>s</span>
                    <span className={"greenyellow"}>Up</span>
                </p>
                <p className={"copyText"} onClick={() => {
                    copyText("+79088554760")
                }}>
                    <span className={"magenta"}>Viber</span>
                </p>
                <p className={"copyText"} onClick={() => {
                    copyText("+79088554760")
                }}>
                    <span className={"magenta"}>Мобильный</span>
                </p>
                <a href="mailto:ananjev.nikita2017@yandex.ru" id={"col22"}>
                    <span className={"greenyellow"}>Почта</span>
                </a>
            </div>
            <img className={"img300"} src="./img/demencia4.png" alt={""}/>
        </div>
    );
};

export default Contacts;