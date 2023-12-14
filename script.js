var Allquotes = [
    {'author':"Be yourself; everyone else is already taken.",
    'quote': "― Oscar Wilde"
    },
    {'author':" I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,
    'quote': "― Marilyn Monroe"
    },
    {'author':"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    'quote': "― Maya Angelou"
    },
    {'author':"Always forgive your enemies; nothing annoys them so much.",
    'quote':"― Oscar Wilde"
    },
    {'author':"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    'quote':"― Martin Luther King Jr."
    },
    {'author':"To live is the rarest thing in the world. Most people exist, that is all.",
    'quote':"― Oscar Wilde"
    },
    {'author':"A friend is someone who knows all about you and still loves you.",
    'quote':"― Elbert Hubbard"
    },
];

function getQuote(){
    
    var random = Number.parseInt(Math.random()*Allquotes.length+1);
    document.getElementById('quotes').innerHTML = `\"${Allquotes[random].author}\"`;
    document.getElementById('author').innerHTML = `${Allquotes[random].quote}`;

}

