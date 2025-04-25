import React, { useState, useEffect, useRef } from 'react';
import './Edit.css';

const Edit = () => {
    const [docContent, setDocContent] = useState('');
    const [fontSize, setFontSize] = useState(16);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [textColor, setTextColor] = useState('#000000');
    const [isUpdated, setIsUpdated] = useState(false);

    const editorRef = useRef(null);

    useEffect(() => {
        const savedDoc = localStorage.getItem('document');
        if (savedDoc) {
            setDocContent(savedDoc);
        }
    }, []);

    useEffect(() => {
        if (docContent) {
            localStorage.setItem('document', docContent);
        }
    }, [docContent]);

    const handleTextChange = (e) => {
        setDocContent(e.target.innerHTML);
    };

    const toggleBold = () => {
        document.execCommand('bold');
        setIsBold(!isBold);
    };

    const toggleItalic = () => {
        document.execCommand('italic');
        setIsItalic(!isItalic);
    };

    const toggleUpperCase = () => {
        const text = editorRef.current.innerText;
        const newText = isUpperCase ? text.toLowerCase() : text.toUpperCase();
        editorRef.current.innerText = newText;
        setDocContent(newText);
        setIsUpperCase(!isUpperCase);
    };

    const changeFontSize = (size) => {
        setFontSize(size);

    };

    const handleTextColorChange = (e) => {
        const color = e.target.value;
        setTextColor(color);
        document.execCommand('foreColor', false, color);
    };

    const insertUnorderedList = () => {
        document.execCommand('insertUnorderedList');
    };

    const insertOrderedList = () => {
        document.execCommand('insertOrderedList');
    };

    const saveDocument = () => {
        localStorage.setItem('document', docContent);
        alert('Document saved!');
    };

    const loadDocument = () => {
        const savedDoc = localStorage.getItem('document');
        if (savedDoc) {
            setDocContent(savedDoc);
        } else {
            alert('No saved document found!');
        }
    };

    const createNewDocument = () => {
        setDocContent('');
        localStorage.removeItem('document');
    };

    const handleUpdate = () => {
        console.log('Document Updated:', docContent);
        setIsUpdated(true);
        setTimeout(() => setIsUpdated(false), 2000);
    };

    return (
        <div className="edit-page-container">
            <nav className="edit-navbar">
                <div className="edit-logo-container">
                    <h2 className="edit-logo">Docify</h2>
                </div>
                <ul className="edit-menu">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/About">ABOUT</a></li>
                </ul>
                <div className="edit-signin">
                    <a href="/register"><button className="edit-btn">Sign Up</button></a>
                </div>
            </nav>

            <div className="edit-content">
                <h1>Edit Your Document</h1>

                <div className="edit-controls">
                    <button className="edit-btn" onClick={toggleBold}>Bold</button>
                    <button className="edit-btn" onClick={toggleItalic}>Italic</button>
                    <button className="edit-btn" onClick={toggleUpperCase}>Uppercase</button>
                    <button className="edit-btn" onClick={() => changeFontSize(fontSize - 2)}>A-</button>
                    <button className="edit-btn" onClick={() => changeFontSize(fontSize + 2)}>A+</button>
                    <input
                        type="color"
                        value={textColor}
                        onChange={handleTextColorChange}
                        className="color-picker"
                    />
                    <button className="edit-btn" onClick={insertUnorderedList}>• Bullet List</button>
                    <button className="edit-btn" onClick={insertOrderedList}>1. Numbered List</button>
                    <button className="edit-btn" onClick={saveDocument}>Save</button>
                    <button className="edit-btn" onClick={loadDocument}>Open Saved</button>
                    <button className="edit-btn" onClick={createNewDocument}>New Document</button>
                </div>

                <div
                    ref={editorRef}
                    contentEditable
                    className="edit-doc-editor"
                    style={{ fontSize: `${fontSize}px`, color: textColor }}
                    onInput={handleTextChange}
                    dangerouslySetInnerHTML={{ __html: docContent }}
                    placeholder="Start typing your document here..."
                ></div>

                {isUpdated && <p className="edit-success-message">Document updated successfully!</p>}

                <button className="edit-update-btn" onClick={handleUpdate}>
                    Update Document
                </button>
            </div>
        </div>
    );
};

export default Edit;
