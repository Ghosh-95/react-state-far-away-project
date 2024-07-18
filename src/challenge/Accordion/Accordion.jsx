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
    return (
        <ul className="accordion">
            {faqs.map((faq, i) => (
                <AccordionItem data={faq} num={'0' + (i + 1)} key={i + 20} />
            ))}
        </ul>
    )
}

function AccordionItem({ data: { title, text }, num }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <li className={`item ${isOpen && 'open'}`} onClick={handleToggle} >
            <p className="number">{num}</p>

            <p className={`title ${isOpen && 'open'}`}>{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>

            {isOpen && <div className="content-box">{text}</div>}
        </li >
    )
}