function randomNumGen(num) {
    return Math.floor(Math.random() * num)
}

const Inspiration = {
    word: ['Resilience', 'Tenacity', 'Empowerment', 'Vision', 'Perseverance', 'Courage', 'Passion', 'Determination', 'Innovation',],
    quote: ["Believe you can and you're halfway there. - Theodore Roosevelt", "Your time is limited, don't waste it living someone else's life. - Steve Jobs", "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "Don't watch the clock; do what it does. Keep going. - Sam Levenson", "The only place where success comes before work is in the dictionary. - Vidal Sassoon", "Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar", "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort", "Dream big. Start small. But most of all, start. - Simon Sinek"],
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

InspirationOTD = []

for(let prop in Inspiration) {
    let optionIdx = randomNumGen(Inspiration[prop].length)

    switch(prop) {
        case 'word':
            InspirationOTD.push(`Your word of the day is: ${Inspiration[prop][optionIdx]}.`)
            break
        case 'quote': 
        InspirationOTD.push(`Your quote of the day is: ${Inspiration[prop][optionIdx]}.`)
            break
        case 'number': 
        InspirationOTD.push(`Your lucky number of the day is: ${Inspiration[prop][optionIdx]}`)
            break
        default: 
        Inspiration.push('Error')
    }
}

function formatInspiration(inspo) {
    const formatted = InspirationOTD.join('\n')
    console.log(formatted)
}

formatInspiration(InspirationOTD);