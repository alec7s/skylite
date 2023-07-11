'use strict';

import "./dom/assets/styles/styles.css";
import { SearchEvent } from "./dom/state/search-event.js";

//make html visible after css loads 
//enable search event listener
window.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector("body")
            .style
            .setProperty("visibility", "visible");

    SearchEvent();
});