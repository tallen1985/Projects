let quoteCount = 0;
const quoteBox = document.getElementById("quoteBox");
var quoteBank = [
    "<p>Where am I?<br></p><p>-Joe Biden</p>",
    "<p>Troy is the best inspector!<br></p><p>-Troy Allen</p>",
    "<p>I don't even know Troy?<br></p><p>-Guilbert Godfried</p>",
    "<p>BuyPal found the body in the wall before we could have!<br> Saved us thousands, not to mention the smell!<br></p><p>-Teri Kiely-Forrest</p>"];

setInterval(changeQuote, 5000);

function changeQuote() {
            quoteBox.innerHTML = quoteBank[quoteCount];
        
        if (quoteCount == 3) {
            quoteCount = 0;
        } else {
            quoteCount++;
        }
    }


