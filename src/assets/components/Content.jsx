import { useState } from 'react'

const Content = () => {
    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = () => {
        const textAreaValue = document.getElementById('textarea').value;
        setDisplayText(textAreaValue);
    };

    return (
        <main>
            <div className="row">
                <div className="column column-50 column-offset-25">
                    <textarea id="textarea" rows="4" cols="50" placeholder="Enter text" className='textarea'></textarea>
                    <br />
                    <button onClick={handleButtonClick} className=''>Display Text</button>
                    <p>{displayText}</p>
                </div>
            </div>
        </main>
    );
};

export default Content;
