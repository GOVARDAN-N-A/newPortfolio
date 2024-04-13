import React, { useState, useEffect } from 'react';
import './Home.css';
import img1 from '/portfolio_fp3.png';

const Home = () => {
    const [showIcons, setShowIcons] = useState(false);
    const [isEncrypted, setIsEncrypted] = useState(true); // Set the initial state to encrypted
    const [decryptedText1, setDecryptedText1] = useState('Decrypting Challenges');
    const [decryptedText2, setDecryptedText2] = useState('Through a <span>&lt; Code /&gt;</span>');
    const [encryptedText1, setEncryptedText1] = useState('');
    const [encryptedText2, setEncryptedText2] = useState('');

    // Function to encrypt text using Caesar cipher
    const encrypt = (text, shift) => {
        return text.replace(/[a-zA-Z]/g, (char) => {
            const charCode = char.charCodeAt(0);
            let shiftedCharCode = charCode + shift;

            if (char >= 'A' && char <= 'Z') {
                if (shiftedCharCode > 90) {
                    shiftedCharCode -= 26;
                } else if (shiftedCharCode < 65) {
                    shiftedCharCode += 26;
                }
            } else if (char >= 'a' && char <= 'z') {
                if (shiftedCharCode > 122) {
                    shiftedCharCode -= 26;
                } else if (shiftedCharCode < 97) {
                    shiftedCharCode += 26;
                }
            }

            return String.fromCharCode(shiftedCharCode);
        });
    };

    // Function to decrypt text using Caesar cipher
    const decrypt = (text, shift) => {
        return encrypt(text, -shift);
    };

    useEffect(() => {
        // Encrypt the default texts
        const encrypted1 = encrypt(decryptedText1, 1);
        setEncryptedText1(encrypted1);

        const encrypted2 = encrypt(decryptedText2, 1);
        setEncryptedText2(encrypted2);
    }, []);

    const handleKnowMoreClick = () => {
        setShowIcons(!showIcons);
        setIsEncrypted(!isEncrypted);
    };

    return (
        <div className="bg">
        <div className='home'>
                <div className="left">
                    <div className="quote">
                        <h2 dangerouslySetInnerHTML={{ __html: isEncrypted ? encryptedText1 : decryptedText1 }} />
                        <h2 dangerouslySetInnerHTML={{ __html: isEncrypted ? encryptedText2 : decryptedText2 }} />
                        <button className="knowMore" onClick={handleKnowMoreClick}>decodeIt()</button>
                        {showIcons && (
                            <div className="icons">
                                {/* Render icons here */}
                            </div>
                        )}
                    </div>
                </div>
                <img src={img1} className="image1"  />
            </div>
            </div>
    );
};

export default Home;
