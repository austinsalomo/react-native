import React, { useState, useEffect } from "react";
import "./contentDispensables.css";
import Prism from "prismjs";
import 'prismjs/themes/prism.css';

const CodeSnippet = ({ code }) => {
    const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    
    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    );
};

function Accordion({ title, content,contents }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion__section">
            <button className={`accordion ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <p className="accordion__title">{title}</p>
                <span className="accordion__icon">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="accordion__content">
                    <CodeSnippet code={content} />
                    <div className="accordion__text">{contents}</div>
                </div>
            )}
        </div>
    );
}

export default Accordion;