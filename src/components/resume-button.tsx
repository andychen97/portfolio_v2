import React from 'react';
import resume from '../../src/resume.pdf'

export default function ResumeButton() {
    return (
        <button type='submit' onClick={Resume}>Resume</button>
    );
}

function Resume() {
    fetch('/../../src/resume.pdf')
        .then(response => {
            response.blob()
                .then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    const alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Andy_Chen_Resume.pdf';
                    alink.click();
                });
        });
}