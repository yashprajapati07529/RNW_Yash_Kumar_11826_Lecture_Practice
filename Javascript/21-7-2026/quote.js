"use strict";
/* quote application */
const quoteList = {
    title: "My Quotes",
    totalQuotes: 0,
    quotes: [
        {
            id: 1,
            text: "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
            author: "Oprah Winfrey",
            category: "motivational",
            likes: 456,
            isFavorite: true
        },
        {
            id: 2,
            text: "Wear gratitude like a cloak and it will feed every corner of your life.",
            author: "Rumi",
            category: "wisdom",
            likes: 256,
            isFavorite: false
        },
        {
            id: 3,
            text: "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
            author: "Mother Teresa",
            category: "motivational",
            likes: 156,
            isFavorite: true
        },
        {
            id: 4,
            text: "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
            author: "Nelson Mandela",
            category: "wisdom",
            likes: 456,
            isFavorite: true
        }
    ]
};
/* Get Quotes */
// for(let i = 0; i < quoteList.quotes.length; i++){
//     const quote = quoteList.quotes[i]
//     console.log(`ID : ${quote.id}`);
//     console.log(`Quote : ${quote.text}`);
//     console.log(`Author : ${quote.author}`);
// }
// for(const quote of quoteList.quotes){
//     console.log(`${quote.text}`);
//     console.log(`${quote.author}`);
// }
// quoteList.quotes.forEach((quote , index) => {
//     console.log(`${index + 1}. ${quote.author}`);
// })
// const favorites = quoteList.quotes.filter((quote)=> quote.isFavorite)
// favorites.forEach((quote) => {
//     console.log(`${quote.text}`);
// })
/* Motivational Quotes */
const categ = quoteList.quotes.filter((q) => q.category == "motivational");
const like = categ.filter((q) => q.likes > 200);
console.log(like);
/* Add new Quote */
const newQuote = {
    id: quoteList.quotes.length + 1,
    text: "Learning Typescript makes javascript safer and easier.",
    author: "Rumi",
    category: "motivational",
    likes: 200,
    isFavorite: true
};
quoteList.quotes.push(newQuote);
quoteList.totalQuotes = quoteList.quotes.length;
console.log(quoteList.totalQuotes);
/* search functionality */
function findQuoteByAuthor(author) {
    return quoteList.quotes.filter((q) => {
        return q.author.toLowerCase() == author.toLowerCase();
    });
}
const authorQuote1 = findQuoteByAuthor("Rumi");
const authorQuote2 = findQuoteByAuthor("Nelson Mandela");
console.log(authorQuote1);
console.log(authorQuote2);
/* total likes */
let totalLikes = 0;
for (const quote of quoteList.quotes) {
    totalLikes += quote.likes;
}
console.log(totalLikes);
// updatequote 
function updateQuote(id, newText) {
    const quote = quoteList.quotes.find((q) => q.id === id);
    if (quote) {
        quote.text = newText;
        console.log("Quote Updated Successfully");
    }
    else {
        console.log("Quote Not Found");
    }
}
updateQuote(2, "Gratitude is the key to happiness.");
console.log(quoteList.quotes);
// add like
// function likeQuote(id: number) {
//     const quote = quoteList.quotes.find((q) => q.id === id);
//     if (quote) {
//         quote.likes++;
//         console.log("Like Added");
//     }
// }
// likeQuote(3, );
// console.log(quoteList.quotes);
// reset like
function resetLikes(id) {
    const quote = quoteList.quotes.find((r) => r.id === id);
    if (quote) {
        quote.likes = 0;
        console.log(" Reset Like ");
    }
}
resetLikes(2);
console.log(quoteList.quotes);
