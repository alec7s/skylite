'use strict';

export function ScrollFadeInAnimation(cntr, htmlContent) {
    return new Promise(resolve => {
        //add fade out animation if weather content is already displayed
        cntr.classList.remove('fade-in');
        
        //ensure fade-out animation occurs before html content is updated if weather content is already visible
        setTimeout(function(){
            //expand height/width of weather content if not already visible
            cntr.classList.add('expand-weather');
            //insert weather content html
            cntr.innerHTML = htmlContent;
            //scroll to weather content if it's not already visible
            cntr.scrollIntoView({ behavior: 'smooth', block: 'end' });
            //add fade-in animation to weather content
            cntr.classList.add('fade-in');
        }, 1250);

        resolve();
    });
}
