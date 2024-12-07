var quotes = [
    { q: " Be yourself; everyone else is already taken. ", author: "Oscar Wilde" },
    { q: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { q: "“So many books, so little time.”", author: " Frank Zappa" },
    { q: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { q: "A room without books is like a body without a soul.", author: " Marcus Tullius Cicero" },
    { q: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { q: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
]


function genrateQuote() {
    var random=Math.floor(Math.random()*6);
    
    document.getElementById("quote").innerHTML = quotes[random].q;
    document.getElementById("author").innerHTML = quotes[random].author;
}