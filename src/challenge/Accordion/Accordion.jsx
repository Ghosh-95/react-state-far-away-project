import { useState } from "react";
import "./styles.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function Accordion() {
    const [isCurrentOpen, setIsCurrentOpen] = useState(null);
    return (
        <ul className="accordion">
            {faqs.map((faq, i) => (
                <AccordionItem onOpen={setIsCurrentOpen} isCurrentOpen={isCurrentOpen} title={faq.title} num={i} key={faq.title}>{faq.text}</AccordionItem>
            ))}
            <AccordionItem onOpen={setIsCurrentOpen} isCurrentOpen={isCurrentOpen} title="Why should we learn React?" num={12} key={"Testing"}>
                <p>Allows React Developers to:</p>
                <ul>
                    <li>Break up UI into componenets</li>
                    <li>Make componenets re-usuable</li>
                    <li>Place state efficiently</li>
                </ul>
            </AccordionItem>
        </ul>
    )
}

function AccordionItem({ title, num, isCurrentOpen, onOpen, children }) {
    const isOpen = num === isCurrentOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <li className={`item ${isOpen && 'open'}`} onClick={handleToggle} >
            <p className="number">{num < 10 ? "0" + num : num}</p>

            <p className={`title ${isOpen && 'open'}`}>{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>

            {isOpen && <div className="content-box">{children}</div>}
        </li >
    )
}