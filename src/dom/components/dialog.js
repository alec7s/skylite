'use-strict';

export function Dialog(msgContent) {
    const elements = {
        body: document.body,
        dialog: document.createElement('dialog'),
        parent: document.getElementById('weather-cntr'),
        text: document.createElement('p'),
        closeBtn: document.createElement('button'),
    };

    //content
    elements.text.textContent = msgContent;
    elements.closeBtn.textContent = 'CLOSE';

    //styling
    elements.dialog.classList.add('flex-col', 'flex-ctr-all');
    elements.closeBtn.classList.add('close-btn');
    elements.body.classList.add('blur-bg');

    //behavior
    elements.closeBtn.addEventListener('click', function(){
        elements.dialog.remove();
        elements.body.classList.remove('blur-bg');
    });

    //display
    elements.dialog.append(elements.text, elements.closeBtn);
    elements.parent.append(elements.dialog);
    elements.dialog.showModal();
}