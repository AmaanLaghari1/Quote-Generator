const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newQuoteBtn = document.getElementById('new-quote')

const quotes = [
    {
        id: 1,
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
        author: "Nelson Mandela"
    },
    {
        id: 2,
        quote: `The way to get started is to quit talking and begin doing.`,
        author: "Walt Disney"
    },
    {
        id: 3,
        quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
        author: "Steve Jobs"
    },
    {
        id: 4,
        quote: `The future belongs to those who believe in the beauty of their dreams.`,
        author: "Eleanor Roosevelt"
    },
    {
        id: 5,
        quote: `Do one thing every day that scares you.`,
        author: "Eleanor Roosevelt"
    },
    {
        id: 6,
        quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
        author: "Oprah Winfrey"
    },
    {
        id: 7,
        quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        author: "James Cameron"
    },
    {
        id: 8,
        quote: `You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.`,
        author: "John Lennon"
    },
    {
        id: 9,
        quote: `You must be the change you wish to see in the world.`,
        author: "Mahatma Gandhi"
    },
    {
        id: 10,
        quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier.`,
        author: "Mother Teresa"
    },
    {
        id: 11,
        quote: `The only thing we have to fear is fear itself.`,
        author: "Franklin D.Roosevelt"
    },
    {
        id: 12,
        quote: `Well done is better than well said.`,
        author: "Benjamin Franklin"
    },
    {
        id: 13,
        quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
        author: "Martin Luther King Jr"
    },
    {
        id: 14,
        quote: `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.`,
        author: "Helen Keller"
    },
    {
        id: 15,
        quote: `It is during our darkest moments that we must focus to see the light.`,
        author: "Aristotle"
    },
    {
        id: 16,
        quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
        author: "Ralph Waldo Emerson"
    },
    {
        id: 17,
        quote: `Be yourself; everyone else is already taken.`,
        author: "Oscar Wilde"
    }
]

let random = Math.floor(Math.random() * quotes.length)

quote.innerText = quotes[random].quote
author.innerText = quotes[random].author

newQuoteBtn.addEventListener('click', () => {
    // To get random quotes
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    author.innerText = quotes[random].author
})