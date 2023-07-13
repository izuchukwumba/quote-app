// Array of Quote Data
let quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        profession: "Irish poet",
        topics: [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        profession: "Irish poet",
        topics: [
            "Philosophy",
            "Humor"
        ]
    },
    {
        quote: "True friends stab you in the front.",
        author: "Oscar Wilde",
        profession: "Irish poet",
        topics: [
            "Philosophy",
            "People"
        ]
    },
    {
        quote: "Women are made to be Loved, not understood.",
        author: "Oscar Wilde",
        profession: "Irish poet",
        topics: [
            "Philosophy",
            "Humor"
        ]
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        profession: "Former First Lady of the United States",
        topics: [
            "Wisdom"
        ]
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
        profession: "Former First Lady of the United States",
        topics: [
            "Wisdom",
            "People"
        ]
    },
    {
        quote: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        author: "Eleanor Roosevelt",
        profession: "Former First Lady of the United States",
        topics: [
            "Wisdom",
            "Advice"
        ]
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
        profession: "Former First Lady of the United States",
        topics: [
            "Wisdom",
            "Life"
        ]
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "People",
            "Life"
        ]
    },
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "Wisdom"
        ]
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Life's most persistent and urgent question is, 'What are you doing for others?",
        author: "Martin Luther King",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
        profession: "American inventor",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas A. Edison",
        profession: "American inventor",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas A. Edison",
        profession: "American inventor",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "If we did all the things we are capable of, we would literally astound ourselves.",
        author: "Thomas A. Edison",
        profession: "American inventor",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
        profession: "Irish playwright",
        topics: [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "We make a living by what we get, but we make a life by what we give.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "People",
            "Life"
        ]
    },
    {
        quote: "Peace begins with a smile.",
        author: "Mother Teresa",
        profession: "Roman Catholic Saint",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        profession: "Roman Catholic Saint",
        topics: [
            "Inspirational",
            "Love",
            "Advice"
        ]
    },
    {
        quote: "If you can't feed a hundred people, then feed just one.",
        author: "Mother Teresa",
        profession: "Roman Catholic Saint",
        topics: [
            "Inspirational",
            "Advice",
            "People"
        ]
    },
    {
        quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
        author: "Mother Teresa",
        profession: "Roman Catholic Saint",
        topics: [
            "Inspirational",
            "People"
        ]
    },
    {
        quote: "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
        author: "L.M. Montgomery",
        profession: "Canadian author",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Tomorrow is always fresh, with no mistakes in it.",
        author: "L.M. Montgomery",
        profession: "Canadian author",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
        author: "L.M. Montgomery",
        profession: "Canadian author",
        topics: [
            "Inspirational",
            "Advice",
            "Life"
        ]
    },
    {
        quote: "It's so easy to be wicked without knowing it, isn't it?",
        author: "L.M. Montgomery",
        profession: "Canadian author",
        topics: [
            "Inspirational",
            "Philosophy",
            "Life"
        ]
    },
    {
        quote: "All the darkness in the world cannot extinguish the light of a single candle.",
        author: "Francis of Assisi",
        profession: "Italian Catholic Saint",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        author: "Francis of Assisi",
        profession: "Italian Catholic Saint",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Preach the Gospel at all times and when necessary use words.",
        author: "Francis of Assisi",
        profession: "Italian Catholic Saint",
        topics: [
            "Religion",
            "Wisdom"
        ]
    },
    {
        quote: "A single sunbeam is enough to drive away many shadows.",
        author: "Francis of Assisi",
        profession: "Italian Catholic Saint",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "You never fail until you stop trying.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
        author: "George Bernard Shaw",
        profession: "Irish playwright",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
        author: "George Bernard Shaw",
        profession: "Irish playwright",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
        author: "George Bernard Shaw",
        profession: "Irish playwright",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        author: "George Bernard Shaw",
        profession: "Irish playwright",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Kindness is a language which the deaf can hear and the blind can see.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
        profession: "American writer",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "I have never met a man so ignorant that I couldn't learn something from him",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational"
        ]
    },
    {
        quote: "Earth provides enough to satisfy every man's needs, but not every man's greed.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Life",
            "Love"
        ]
    },
    {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "In a gentle way, you can shake the world.",
        author: "Mahatma Gandhi",
        profession: "Indian leader",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "He that can have patience can have what he will.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Either write something worth reading or do something worth writing.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Inspirational",
            "Wisdom",
            "Philosophy"
        ]
    },
    {
        quote: "Never ruin an apology with an excuse.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Life",
            "Advice"
        ]
    },
    {
        quote: "Early to bed and early to rise makes a man healthy, wealthy and wise.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Life",
            "Advice"
        ]
    },
    {
        quote: "By failing to prepare, you are preparing to fail.",
        author: "Benjamin Franklin",
        profession: "Founding Father of the United States",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "Those who look for the bad in people will surely find it.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Inspirational",
            "People"
        ]
    },
    {
        quote: "People don't realize how a man's whole life can be changed by one book.",
        author: "Malcolm X",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "If you have no critics you'll likely have no success.",
        author: "Malcolm X",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "I'm for truth, no matter who tells it. I'm for justice, no matter who it's for or against.",
        author: "Malcolm X",
        profession: "American minister",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "It is not a lack of Love, but a lack of People that makes unhappy marriages.",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Love",
            "Marriage"
        ]
    },
    {
        quote: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Life",
            "Inspirational"
        ]
    },
    {
        quote: "That which does not kill us makes us stronger",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Inspirational",
            "Philosophy"
        ]
    },
    {
        quote: "To live is to suffer, to survive is to find some meaning in the suffering.",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Life",
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        quote: "There is always some madness in love. But there is also always some reason in madness.",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Philosophy",
            "Love"
        ]
    },
    {
        quote: "No price is too high to pay for the privilege of owning yourself.",
        author: "Friedrich Nietzsche",
        profession: "German philosopher",
        topics: [
            "Philosophy",
            "Advice"
        ]
    },
    {
        quote: "You know, when it works, Love is amazing. It's not overrated.",
        author: "Sarah Dessen",
        profession: "American novelist",
        topics: [
            "Love",
            "Life"
        ]
    },
    {
        quote: "Life is an awful, ugly place to not have a best friend.",
        author: "Sarah Dessen",
        profession: "American novelist",
        topics: [
            "Friends",
            "Life"
        ]
    },
    {
        quote: "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        author: "Sarah Dessen",
        profession: "American novelist",
        topics: [
            "Love",
            "Life"
        ]
    },
    {
        quote: "Anyone can hide. Facing up to things, working through them, that's what makes you strong.",
        author: "Sarah Dessen",
        profession: "American novelist",
        topics: [
            "Love",
            "Life"
        ]
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        quote: "Everything around you that you call life was made up by people, and you can change it.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Design"
        ]
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Philosophy"
        ]
    },
    {
        quote: "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Faith",
            "Advice",
            "Life"
        ]
    },
    {
        quote: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Innovation",
            "Advice"
        ]
    },
    {
        quote: "A lot of times, people don't know what they want until you show it to them.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "People",
            "Philosophy"
        ]
    },
    {
        quote: "Let’s go invent tomorrow rather than worrying about what happened yesterday.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Innovation",
            "Inspirational"
        ]
    },
    {
        quote: "The most precious thing that we all have with us is time.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "You have to trust in something, your gut, destiny, life, karma, whatever.",
        author: "Steve Jobs",
        profession: "American entrepreneur",
        topics: [
            "Inspirational",
            "Life",
            "Faith"
        ]
    },
    {
        quote: "Every child is an artist, the problem is staying an artist when you grow up.",
        author: "Pablo Picasso",
        profession: "Spanish painter",
        topics: [
            "Art",
            "Life"
        ]
    },
    {
        quote: "The purpose of art is washing the dust of daily life off our souls.",
        author: "Pablo Picasso",
        profession: "Spanish painter",
        topics: [
            "Art",
            "Life"
        ]
    },
    {
        quote: "Good artists copy, great artists steal.",
        author: "Pablo Picasso",
        profession: "Spanish painter",
        topics: [
            "Art"
        ]
    },
    {
        quote: "Art is a lie that makes us realize truth.",
        author: "Pablo Picasso",
        profession: "Spanish painter",
        topics: [
            "Art"
        ]
    },
    {
        quote: "Inspiration does exist, but it must find you working.",
        author: "Pablo Picasso",
        profession: "Spanish painter",
        topics: [
            "Art",
            "Advice",
            "Inspirational"
        ]
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "We learn wisdom from failure much more than from succes.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Wisdom",
            "Failure",
            "Succes"
        ]
    },
    {
        quote: "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "We often discover what will do, by finding out what will not do; and probably he who never made a mistake never made a discovery.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Wisdom",
            "Failure"
        ]
    },
    {
        quote: "Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Wisdom",
            "Time"
        ]
    },
    {
        quote: "Life will always be to a large extent what we ourselves make it.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "Enthusiasm... the sustaining power of all great action.",
        author: "Samuel Smiles",
        profession: "Scottish Author",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Wisdom"
        ]
    },
    {
        quote: "There is nothing either good or bad, but thinking makes it so.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Philosophy"
        ]
    },
    {
        quote: "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.",
        author: "Malcolm X",
        profession: "American minister",
        topics: [
            "Philosophy"
        ]
    },
    {
        quote: "Hell is empty and all the devils are here.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Philosophy"
        ]
    },
    {
        quote: "The course of true Love never did run smooth.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Love",
            "Wisdom"
        ]
    },
    {
        quote: "Expectation is the root of all heartache.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "Listen to many, speak to a few.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        quote: "One may smile, and smile, and be a villain.",
        author: "William Shakespeare",
        profession: "English poet",
        topics: [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "Any fool can know. The point is to understand.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        quote: "It is not that I'm so smart. But I stay with the questions much longer.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        quote: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "Wisdom",
            "Inspirational",
            "Dream"
        ]
    },
    {
        quote: "Comfort is the enemy of achievement",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "Achievement",
            "Inspirational"
        ]
    },
    {
        quote: "You know, you don't have to have money to be a successful businessperson.",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "Business",
            "Inspirational"
        ]
    },
    {
        quote: "I can dream alone and strive alone, but true success always requires the help and support of others.",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "People",
            "Success",
            "Dream"
        ]
    },
    {
        quote: "Success isn’t something that happens overnight: it’s a process.",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "Business",
            "Inspirational",
            "Succes"
        ]
    },
    {
        quote: "The more we give, the more we receive. It's important to give back, because the seeds you plant today, you will harvest tomorrow.",
        author: "Farrah Gray",
        profession: "American businessman",
        topics: [
            "Giving"
        ]
    },
    {
        quote: "Either you run the day, or the day runs you.",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        quote: "Start from wherever you are and with whatever you’ve got.",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Advice",
            "Motivational"
        ]
    },
    {
        quote: "Without constant activity, the threats of life will soon overwhelm the values",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Life",
            "Wisdom"
        ]
    },
    {
        quote: "If you don’t like how things are, change it! You’re not a tree.",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Motivational",
            "Wisdom"
        ]
    },
    {
        quote: "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Motivational",
            "Success"
        ]
    },
    {
        quote: "How long should you try? Until.",
        author: "Jim Rohn",
        profession: "American entrepreneur",
        topics: [
            "Motivational",
            "Inspirational"
        ]
    },
    {
        quote: "Focus on making yourself better, not on thinking that you are better.",
        author: "Bohdi Sanders",
        profession: "author",
        topics: [
            "Inspirational",
            "Advice"
        ]
    },
    {
        quote: "A true friend is someone you can count on no matter what.",
        author: "Bohdi Sanders",
        profession: "author",
        topics: [
            "Friends",
            "Wisdom"
        ]
    },
    {
        quote: "Face your fears and you will be able to conquer them.",
        author: "Bohdi Sanders",
        profession: "author",
        topics: [
            "Fear",
            "Advice"
        ]
    },
    {
        quote: "If you want to know what people believe, don’t read what they write, don’t ask what they believe, just observe what they do.",
        author: "Bohdi Sanders",
        profession: "author",
        topics: [
            "People",
            "Inspirational"
        ]
    },
    {
        quote: "I used to think I was indecisive, but now I am not quite sure.",
        author: "Tommy Cooper",
        profession: "British Comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one and let the other one off.",
        author: "Tommy Cooper",
        profession: "British Comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Be nice to nerds. Chances are you'll end up working for one.",
        author: "Bill Gates",
        profession: "American business magnate",
        topics: [
            "Humor",
            "Advice"
        ]
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
        profession: "American business magnate",
        topics: [
            "Inspirational",
            "People"
        ]
    },
    {
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        author: "Bill Gates",
        profession: "American business magnate",
        topics: [
            "Inspirational",
            "People"
        ]
    },
    {
        quote: "Life is not fair; get used to it.",
        author: "Bill Gates",
        profession: "American business magnate",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "If you can't make it good, at least make it look good.",
        author: "Bill Gates",
        profession: "American business magnate",
        topics: [
            "Inspirational",
            "Wisdom",
            "Advice"
        ]
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
        profession: "Theoretical physicist",
        topics: [
            "Life",
            "Inspirational"
        ]
    },
    {
        quote: "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Life",
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "I would rather be a little nobody, then to be a evil somebody.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "I will prepare and some day my chance will come.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Inspirational",
            "Life"
        ]
    },
    {
        quote: "Important principles may, and must, be inflexible.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Philosophy",
            "Wisdom",
            "Inspirational"
        ]
    },
    {
        quote: "Tact is the ability to describe others as they see themselves.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "You cannot escape the responsibility of tomorrow by evading it today.",
        author: "Abraham Lincoln",
        profession: "16th U.S. President",
        topics: [
            "Inspirational",
            "Philosophy",
            "Wisdom"
        ]
    },
    {
        quote: "Knowing thyself, that is the greatest wisdom.",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "To be humane, we must ever be ready to pronounce that wise, ingenious and modest statement 'I do not know'.",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Two truths cannot contradict one another.",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "Where the senses fail us, reason must step in.",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        quote: "All truths are easy to understand once they are discovered; the point is to discover them.",
        author: "Galileo Galilei",
        profession: "Italian Polymath",
        topics: [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
		quote: 'Most of modern life, all our diseases, are diseases of abundance, not diseases of scarcity.',
		author: 'Naval Ravikant',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		quote: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		quote: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never tell anyone',
		author: 'Emil Cioran',
	},
	{
		quote: "I'm telling you it is going to be easy. I'm telling you it is going to be worth it.",
		author: 'Art Williams',
	},
	{
		quote: "Don't focus on the pain, Focus on the Progress.",
		author: 'Dwayne Johnson',
	},
	{
		quote: "It always seems impossible until it's done.",
		author: 'Nelson Mandela',
	},
	{
		quote: "Everything is hard before it is easy.",
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Work hard in silence. Let your success be noise.',
		author: 'Frank Ocean',
	},
	{
		quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
		author: 'Oscar Wilde',
	},
	{
		quote: 'Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.',
		author: 'Anna White',
	},
	{
		quote: "I've had the sort of day that would make St. Francis of Assisi kick babies.",
		author: 'JDouglas Adams',
	},
	{
		quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
		author: 'Jim Rohn',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
    quote: "Be worthy of the people and things you get in your life.",
    author: "Sulabh Bashyal",
  },
	 {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
	 {
    quote: "A question that sometimes drives me hazy: am I or are the others crazy?",
    author: "Albert Einstein",
  },
	{
    quote: "We are surrounded by story.",
    author: "Alice McDermott",
  },
	{
    quote: "The past beats inside me like a second heart.",
    author: "John Banville",
  },


{
    quote: "To doubt is better, because it helps understand, aids searching. Question is everything, answer is maturity",
    author: "Laxmi Prasad Devkota",
  },
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		quote: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		quote: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		quote: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'The art of life is to know how to enjoy a little',
		author: 'William Hazlitt',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		quote: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
		{

quote:"You know, Hobbes, some days even my lucky rocketship underpants don't help.",
author:"Bill Watterson"

},
{

quote:"I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
author:"Holly Black"

},
{

quote:"Even if we don't have the power to choose where we come from, we can still choose where we go from there",
author:"Stephen Chbosky"

},
{

quote:"And now that you don't have to be perfect, you can be good.",
author:"John Steinbeck"

},
{

quote:"Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
author:"Ilona Andrews"

},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
		
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		quote: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		quote: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		quote: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		quote: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		quote: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		quote: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		quote: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		quote: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		quote: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		quote: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		quote: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		quote: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		quote: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		quote: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		quote: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		quote: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		quote: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		quote: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		quote: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		quote: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		quote: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		quote: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		quote: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		quote: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		quote: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		quote: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		quote: "The world isn't perfect. But it's there for us, doing the best it can… thats what makes it so damn beautiful.",
		author: 'Roy Mustang',
	},
	{
		quote: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		quote: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		quote: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		quote: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		quote: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		quote: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		quote: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		quote: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		quote: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		quote: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		quote: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		quote: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		quote: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		quote: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		quote: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		quote: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		quote: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		quote: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		quote: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		quote: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		quote: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		quote: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		quote: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		quote: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		quote: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		quote: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		quote: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		quote: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		quote: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		quote: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		quote: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		quote: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		quote: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		quote: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		quote: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		quote: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		quote: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		quote: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		quote: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		quote: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		quote: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		quote: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		quote: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		quote: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		quote: 'A person can change, at the moment when the person wishes to change.',
		author: 'Haruhi Fujioka',
	},
	{
		quote: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		quote: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		quote: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		quote: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		quote: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		quote: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		quote: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		quote: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		quote: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		quote: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		quote: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		quote: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		quote: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		quote: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		quote: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		quote: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		quote: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		quote: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		quote: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		quote: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		quote: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		quote: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		quote: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		quote: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		quote: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		quote: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		quote: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		quote: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		quote: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		quote: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'When the going gets weird, the weird turn pro.',
		author: 'Hunter S. Thompson',
	},
	{
		quote: 'There is nothing more helpless and irresponsible than a man in the depths of an ether binge.',
		author: 'Hunter S. Thompson',
	},
	{
		quote: "If you're going through hell, keep going.",
		author: 'Winston Churchill',
	},
	{
		quote: 'Be happy for this moment. This moment is your life.',
		author: 'Omar Khayyam',
	},
	{
		quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Tis better to have loved and lost than never to have loved at all.',
		author: 'Alfred Lord Tennyson',
	},
	{
		quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
		author: 'Mother Teresa',
	},
	{
		quote: 'Kind words can be short and easy to speak, but their echoes are truly endless.',
		author: 'Mother Teresa',
	},
	{
		quote: "You can't blame gravity for falling in love.",
		author: 'Albert Einstein',
	},
	{
		quote: 'Hope is a waking dream.',
		author: 'Aristotle',
	},
	{
		quote: 'Hope is being able to see that there is light despite all of the darkness.',
		author: 'Desmond Tutu',
	},
	{
		quote: 'Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.',
		author: 'Samuel Smiles',
	},
	{
		quote: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
		author: 'Epicurus',
	},
	{
		quote: 'Hope springs eternal in the human breast: Man never is, but always to be blest.',
		author: 'Alexander Pope',
	},
	{
		quote: 'Hope is not the conviction that something will turn out well but the certainty that something makes sense, regardless of how it turns out.',
		author: 'Vaclav Havel',
	},
	{
		quote: 'A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.',
		author: 'Elbert Hubbard',
	},
	{
		quote: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein',
	},
	{
		quote: 'All you need in this life is ignorance and confidence, and then success is sure.',
		author: 'Mark Twain',
	},
	{
		quote: 'He who has a why to live can bear almost any how.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: "I'm not trying to be different. To me, I'm just being myself.",
		author: 'Jaylen Brown',
	},
	{
		quote: 'One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.',
		author: 'Plato',
	},
	{
		quote: 'We hang the petty thieves and appoint the great ones to public office.',
		author: 'Aesop',
	},
	{
		quote: 'If nominated, I will not run; if elected, I will not serve.',
		author: 'William Tecumseh Sherman',
	},
	{
		quote: 'Life without liberty is like a body without spirit.',
		author: 'Khalil Gibran',
	},
	{
		quote: 'We do not remember days, we remember moments.',
		author: 'Cesare Pavese',
	},
	{
		quote: 'The object of the superior man is truth.',
		author: 'Confucius',
	},
	{
		quote: "It's not what you look at that matters, it's what you see.",
		author: 'Henry David Thoreau',
	},
	{
		quote: 'O, what a tangled web we weave when first we practise to deceive!',
		author: 'Walter Scott',
	},
	{
		quote: 'No man is free who is not master of himself.	',
		author: 'Epictetus',
	},
	{
		quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
		author: 'Thomas A. Edison',
	},
	{
		quote: 'Play by the rules, but be ferocious.',
		author: 'Phil Knight',
	},
	{
		quote: 'Business opportunities are like buses, there’s always another one coming',
		author: 'Richard Branson',
	},
	{
		quote: 'Every problem is a gift—without problems we would not grow.',
		author: 'Anthony Robbins',
	},
	{
		quote: 'Success usually comes to those who are too busy to be looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		quote: 'There’s no shortage of remarkable ideas, what’s missing is the will to execute them.',
		author: 'Seth Godin',
	},
	{
		quote: 'I don’t know the word ‘quit.’ Either I never did, or I have abolished it.',
		author: 'Susan Butcher',
	},
	{
		quote: 'If you really look closely, most overnight successes took a long time.',
		author: 'Steve Jobs',
	},
	{
		quote: 'Even if you are on the right track, you’ll get run over if you just sit there',
		author: 'Will Rodgers',
	},
	{
		quote: 'The first one gets the oyster, the second gets the shell.',
		author: 'Andrew Carnegie',
	},
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		quote: 'Money is a terrible master but an excellent servant.',
		author: 'P.T. Barnum',
	},
	{
		quote: 'A man who pays his bills on time is soon forgotten.',
		author: 'Oscar Wilde',
	},
	{
		quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
		author: 'Amelia Earhart',
	},
	{
		quote: 'Beware of little expenses; a small leak will sink a great ship.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'You cannot escape the responsibility of tomorrow by evading it today.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The desire of gold is not for gold. It is for the means of freedom and benefit.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'To contract new debts is not the way to pay old ones.',
		author: 'George Washington',
	},
	{
		quote: 'Fortune befriends the bold.',
		author: 'Emily Dickinson',
	},
	{
		quote: 'When prosperity comes, do not use all of it.',
		author: 'Confucius',
	},
	{
		quote: 'Do the best you can, and don’t take life too serious.',
		author: 'Will Rogers',
	},
	{
		quote: 'Everything in moderation, including moderation.',
		author: 'Oscar Wilde',
	},
	{
		quote: "It's the imperfections that make things beautiful",
		author: 'Jenny Han',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.',
		author: 'Andrew Hunt',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		quote: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		quote: "Nothing is impossible. The word itself says 'I'm possible!'",
		author: 'Audrey Hepburn',
	},
	{
		quote: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		quote: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		quote: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		quote: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'Today is the tomorrow we worried about yesterday.',
		author: 'Dale Carnegie',
	},
	{
		quote: "It's easier to see the mistakes on someone else's paper.",
		author: 'Cynthia Lewis',
	},
	{
		quote: 'Every man dies. Not every man really lives.',
		author: 'William Wallace',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		quote: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		quote: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		quote: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		quote: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		quote: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		quote: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		quote: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		quote: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		quote: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		quote: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		quote: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		quote: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		quote: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		quote: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		quote: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		quote: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		quote: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		quote: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		quote: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		quote: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		quote: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		quote: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		quote: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		quote: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		quote: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		quote: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		quote: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		quote: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		quote: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		quote: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		quote: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		quote: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		quote: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		quote: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		quote: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		quote: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		quote: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		quote: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		quote: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		quote: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		quote: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		quote: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		quote: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		quote: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		quote: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		quote: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		quote: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		quote: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		quote: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		quote: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		quote: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		quote: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		quote: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		quote: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		quote: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		quote: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		quote: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		quote: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		quote: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		quote: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		quote: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		quote: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		quote: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		quote: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		quote: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		quote: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		quote: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		quote: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		quote: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		quote: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		quote: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		quote: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		quote: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		quote: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		quote: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		quote: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		quote: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		quote: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		quote: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		quote: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		quote: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		quote: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		quote: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		quote: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		quote: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		quote: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		quote: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		quote: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		quote: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		quote: 'I am the number one human being in music. That means any person that’s living or breathing is number two.',
		author: 'Kanye West',
	},
	{
		quote: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		quote: 'Nothing in life is promised except death.',
		author: 'Kanye West',
	},
	{
		quote: "I love sleep; it's my favorite.",
		author: 'Kanye West',
	},
	{
		quote: "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
		author: 'Kanye West',
	},
	{
		quote: "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be great! Be awesome! Be awesome!",
		author: 'Kanye West',
	},
	{
		quote: 'My greatest pain in life is that I will never be able to see myself perform live.',
		author: 'Kanye West',
	},
	{
		quote: 'For me to say I wasn’t a genius, I would just be lying to you and to myself.',
		author: 'Kanye West',
	},
	{
		quote: 'I am Warhol! I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney, Nike, Google.',
		author: 'Kanye West',
	},
	{
		quote: 'You know, I’m a creative genius and there’s no other way to word it.',
		author: 'Kanye West',
	},
	{
		quote: '50 is Eminem’s favourite rapper. I’m my favourite rapper.',
		author: 'Kanye West',
	},
	{
		quote: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		quote: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		quote: "There's no fangs. I don't have fangs. I'm a porcupine. I'm a blowfish. Like, I'm a — what's the fish that blows up? I'm a blowfish. I'm not a shark, I'm a blowfish.",
		author: 'Kanye West',
	},
	{
		quote: 'I don’t want to say these really big, over-the-top statements that end up getting quoted.',
		author: 'Kanye West',
	},
	{
		quote: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		quote: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		quote: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		quote: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		quote: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		quote: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		quote: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		quote: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		quote: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.',
		author: 'Swami Vivekananda',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		name: 'Dr. Seuss',
	},
	{
		quote:
			"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
		name: 'Albert Einstein',
	},
	{
		quote:
			"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		name: 'Bernard M. Baruch',
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		name: 'Dr. Seuss',
	},
	{
		quote: 'Strength is Life, Weakness is Death. Expansion is Life, Contraction is Death. Love is Life, Hatred is Death.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Truth can be stated in a thousand different ways, yet each one can be true.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'If faith in ourselves had been more extensively taught and practiced, I am sure a very large portion of the evils and miseries that we have would have vanished.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'As different streams having different sources all mingle their waters in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'External nature is only internal nature writ large.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Never think there is anything impossible for the soul. It is the greatest heresy to think so. If there is sin, this is the only sin; to say that you are weak, or others are weak.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Our duty is to encourage every one in his struggle to live up to his own highest idea, and strive at the same time to make the ideal as near as possible to the Truth.',
		author: 'Swami Vivekananda',
	},
	{
		quote: "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path.",
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'We have to dare to be ourselves, however frightening or strange that self may prove to be.',
		author: 'May Sarton',
	},
	{
		quote: 'There is nothing either good or bad, but thinking makes it so.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Man suffers only because he takes seriously what the gods made for fun.',
		author: 'Alan Wilson Watts',
	},
	{
		quote: 'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
		author: 'Carl Sagan',
	},
	{
		quote: 'I was never aware of any other option but to question everything.',
		author: 'Noam Chomsky',
	},
	{
		quote: 'Do the best you can, and don’t take life too serious.',
		author: 'Will Rogers',
	},
	{
		quote: 'Everything in moderation, including moderation.',
		author: 'Oscar Wilde',
	},
	{
		quote: "It's the imperfections that make things beautiful",
		author: 'Jenny Han',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.',
		author: 'Andrew Hunt',
	},
	{
		quote: 'Write books only if you are going to say in them the things you would never dare confide to anyone',
		author: 'Emil Cioran',
	},
	{
		quote: 'If you wish to make an apple pie from scratch, you must first invent the universe',
		author: 'Carl Sagan',
	},
	{
		quote: 'As you walk down the fairway of life you must smell the roses, for you only get to play one round.',
		author: 'Ben Hogan',
	},
	{
		quote: "Nothing is impossible. The word itself says 'I'm possible!'",
		author: 'Audrey Hepburn',
	},
	{
		quote: 'The art of life is to know how to enjoy a little and to endure very much.',
		author: 'William Hazlitt',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		quote: 'Be yourself; everyone else is already taken.',
		author: 'Oscar Wilde',
	},
	{
		quote: 'Love is not an emotion. It is your very existence.',
		author: 'Sri Sri Ravi Shankar',
	},
	{
		quote: 'So many books, so little time',
		author: 'Frank Zappa',
	},
	{
		quote: 'Life is nothing to be very serious about. Life is a ball in your hands to play with. Don’t hold on to the ball',
		author: 'Sri Sri Ravi Shankar',
	},
	{
		quote: 'A friend is someone who knows all about you and still loves you',
		author: 'Elbert Hubbard',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
		author: 'Lao Tzu',
	},
	{
		quote: 'If you do not change direction, you may end up where you are heading.',
		author: 'Lao Tzu',
	},
	{
		quote: 'To the mind that is still, the whole universe surrenders.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
	},
	{
		quote: 'He who does not trust enough, Will not be trusted.',
		author: 'Lao Tzu',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'Today is the tomorrow we worried about yesterday.',
		author: 'Dale Carnegie',
	},
	{
		quote: "It's easier to see the mistakes on someone else's paper.",
		author: 'Cynthia Lewis',
	},
	{
		quote: 'Every man dies. Not every man really lives.',
		author: 'William Wallace',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: "When you have a dream, you've got to grab it and never let go.",
		author: 'Carol Burnett',
	},
	{
		quote: 'There is nothing impossible to they who will try.',
		author: 'Alexander the Great',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: "All endings are also beginnings. We just don't know it at the time.",
		author: 'Mitch Albom',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Your mind is for having ideas, not holding them.',
		author: 'David Allen',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'he purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'Get busy living or get busy dying',
		author: 'Stephen King',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
		author: 'Thomas Edison',
	},
	{
		quote: 'If you want to live a happy life, tie it to a goal, not to people or things',
		author: 'Albert Einstein',
	},
	{
		quote: 'Never let the fear of striking out keep you from playing the game.',
		author: 'Babe Ruth',
	},
	{
		quote: 'Money and success don’t change people; they merely amplify what is already there.',
		author: 'Will Smith',
	},
	{
		quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
		author: 'Steve Jobs',
	},
	{
		quote: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		quote: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		quote: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		quote: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		quote: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		quote: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		quote: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		quote: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		quote: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		quote: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		quote: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		quote: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		quote: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		quote: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		quote: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		quote: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		quote: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		quote: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		quote: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		quote: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		quote: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		quote: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		quote: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		quote: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		quote: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		quote: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		quote: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		quote: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		quote: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		quote: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		quote: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		quote: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		quote: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		quote: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		quote: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		quote: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		quote: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		quote: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		quote: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		quote: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		quote: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		quote: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		quote: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		quote: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		quote: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		quote: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		quote: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		quote: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		quote: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		quote: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		quote: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		quote: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		quote: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		quote: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		quote: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		quote: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		quote: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		quote: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		quote: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		quote: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		quote: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		quote: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		quote: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		quote: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		quote: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		quote: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		quote: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		quote: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		quote: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		quote: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		quote: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		quote: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		quote: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		quote: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		quote: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		quote: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		quote: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		quote: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		quote: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		quote: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		quote: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		quote: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		quote: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		quote: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		quote: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		quote: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		quote: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		quote: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		quote: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		quote: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		quote: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		quote: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		quote: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		quote: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		quote: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		quote: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		quote: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		quote: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		quote: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		quote: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		quote: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		quote: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		quote: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		quote: 'Make your life a dream, and a dream, a reality.',
		author: 'Antoine de Saint-Exupéry',
	},
	{
		quote: 'Music is the langage of emotions.',
		author: 'Emmanuel Kant',
	},
	{
		quote: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
	},
	{
		quote: 'If you want peace, prepare for war.',
		author: 'Jules César',
	},
	{
		quote: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: 'Victor Hugo',
	},
	{
		quote: 'There is no worst deaf that the ones who do not want to listen.',
		author: 'Molière',
	},
	{
		quote: 'When we want we can, when we can we must.',
		author: 'Napoléon Bonaparte',
	},
	{
		quote: 'I think, therefore I am.',
		author: 'René Descartes',
	},
	{
		quote: 'Anyone who does not know history is doomed to relive it.',
		author: 'Karl Marx',
	},
	{
		quote: 'Promises only bind those who receive them.',
		author: 'Jacques Chirac',
	},
	{
		quote: "People won't have time for you if you are always angry or complaining.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Keep your face to the sunshine and you cannot see a shadow.',
		author: 'Hellen Keller',
	},
	{
		quote: 'Sometimes we stare so long at a door that is closing that we see too late the one that is open.',
		author: 'Alexander Graham Bell',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'First make the change easy (warning: this might be hard), then make the easy change.',
		author: 'Kent Beck',
	},
	{
		quote: 'Before software can be reusable it first has to be usable.',
		author: 'Ralph Johnson',
	},
	{
		quote: 'If it hurts, do it more frequently, and bring the pain forward.',
		author: 'Jez Humble',
	},
	{
		quote: 'Good programmers know what to write. Great ones know what to rewrite and reuse.',
		author: 'Eric S. Raymond',
	},
	{
		quote: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'To succeed in your mission, you must have single-minded devotion to your goal.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'If you fail, never give up because FAIL means First Attempt In Learning.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Creativity is seeing the same thing but thinking differently.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.',
		author: 'Dr. A.P.J Abdul Kalam',
	},
	{
		quote: 'Winning isnt everything, but wanting it is.',
		author: 'Arnold Palmer',
	},
	{
		quote: 'You can never cross the ocean unless you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
	},
	{
		quote: 'Great sea captains are made in rough waters and deep seas.',
		author: 'Kathryn Kuhlman',
	},
	{
		quote: 'Smooth sea never made a skillful sailor.',
		author: 'Anonymous',
	},
	{
		quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
		author: 'Pablo Picasso',
	},
	{
		quote: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
	},
	{
		quote: 'The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.',
		author: 'Viktor E. Frankl',
	},
	{
		quote: 'Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.',
		author: 'Indra Nooyi',
	},
	{
		quote: "It isn't what we say or think that defines us, but what we do.",
		author: 'Jane Austen',
	},
	{
		quote: 'There is no charm equal to tenderness of heart.',
		author: 'Jane Austen',
	},
	{
		quote: 'We have all a better guide in ourselves, if we would attend to it, than any other person can be.',
		author: 'Jane Austen',
	},
	{
		quote: "Evil is not something superhuman, it's something less than human.",
		author: 'Agatha Christie',
	},
	{
		quote: 'It is never too late to be who you might have been.',
		author: 'George Elliot',
	},
	{
		quote: 'Never let the odds keep you from doing what you know in your heart you were meant to do.',
		author: 'H. Jackson Brown',
	},
	{
		quote: 'Success usually comes to those who are too busy looking for it.',
		author: 'Henry David Thoreau',
	},
	{
		quote: 'I never dreamed about success. I worked for it.',
		author: 'Estee Lauder',
	},
	{
		quote: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
		author: 'Vernon Sanders Law',
	},
	{
		quote: 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.',
		author: 'Bruce Lee',
	},
	{
		quote: 'We all live in a house on fire, no fire department to call, no way out.',
		author: 'Tennessee Williams',
	},
	{
		quote: 'All truths are easy to understand once they are discovered. The point is to discover them.',
		author: 'Galileo Galilei',
	},
	{
		quote: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: 'Paul Rodriguez',
	},
	{
		quote: 'No matter how dark the moment, love and hope are always possible.',
		author: 'George Chakiris',
	},
	{
		quote: 'All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'It is a wise father that knows his own child.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Life will knock us down, but we can choose whether or not to stand back up.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Sometimes it takes only one act of kindness and caring to change a person’s life.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Do not let circumstances control you. You change your circumstances.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Being still and doing nothing are two completely different things.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Nothing makes me more determined to succeed than someone telling me something’s impossible.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Family is not who’s blood is in you, is who you love and who loves you.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.',
		author: 'Jackie Chan',
	},
	{
		quote: 'The best fights are ones we avoid.',
		author: 'Jackie Chan',
	},
	{
		quote: 'I prepare for the worst, but hope for the best.',
		author: 'Jackie Chan',
	},
	{
		quote: "Don't wait for the change of circumstances. You change the circumstances",
		author: 'Jackie Chan',
	},
	{
		quote: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: 'Jackie Chan',
	},
	{
		quote: 'I only want my work to make people happy.',
		author: 'Jackie Chan',
	},
	{
		quote: 'If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?',
		author: 'Jackie Chan',
	},
	{
		quote: 'Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.',
		author: 'Jackie Chan',
	},
	{
		quote: 'We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.',
		author: 'Jackie Chan',
	},
	{
		quote: 'Quiet people have the loudest minds.',
		author: 'Stephen Hawking',
	},
	{
		quote: "Life would be tragic if it weren't funny.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Intelligence is the ability to adapt to change.',
		author: 'Stephen Hawking',
	},
	{
		quote: "The universe doesn't allow perfection.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'Although I cannot move and I have to speak through a computer, in my mind I am free',
		author: 'Stephen Hawking',
	},
	{
		quote: 'If time travel is possible, where are the tourists from the future?',
		author: 'Stephen Hawking',
	},
	{
		quote: 'People who boast about their I.Q. are losers.',
		author: 'Stephen Hawking',
	},
	{
		quote: 'The thing about smart people is that they seem like crazy people to dumb people.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I'm not afraid of death, but I'm in no hurry to die.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'Not only does God play dice but... he sometimes throws them where they cannot be seen.',
		author: 'Stephen Hawking',
	},
	{
		quote: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: 'Stephen Hawking',
	},
	{
		quote: 'There is no avoiding war; it can only be postponed to the advantage of others.',
		author: 'Niccolo Machiavelli',
	},
	{
		quote: 'Life is trying things to see if they work.',
		author: 'Ray Bradbury',
	},
	{
		quote: 'Strike me down, and I will become more powerful than you could possibly imagine.',
		author: 'Obi-Wan Kenobi',
	},
	{
		quote: "I'd rather be someone that's underrated than overrated.",
		author: 'Clint Dempsey',
	},
	{
		quote: 'To live is to choose. But to choose well, you must know who you are and what you stand for, where you want to go and why you want to get there.',
		author: 'Kofi Annan',
	},
	{
		quote: 'We need to keep hope alive and strive to do better.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Change is a process which has to be managed.',
		author: 'Kofi Annan',
	},
	{
		quote: 'Freedom is not something that one people can bestow on another as a gift. Thy claim it as their own and none can keep it from them.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'Thought without practice is empty; and action without thought is blind.',
		author: 'Kwame Nkrumah',
	},
	{
		quote: 'People are worms, and even the God who created them is immensely bored with their antics.',
		author: 'Ama Ata Aidoo',
	},
	{
		quote: 'When evil men destroy, good men must build and bind.',
		author: 'Anas Aremeyaw Anas',
	},
	{
		quote: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'All our dreams can come true, if we have the courage to pursue them.',
		author: 'John Agyekum Kufuor',
	},
	{
		quote: "Dream as if you'll live forever. Live as if you'll die today.",
		author: 'John Agyekum Kufuor',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: "Never give up on something that you can't go a day without thinking about.",
		author: 'Winston Churchill',
	},
	{
		quote: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
		author: 'Dale Carnegie',
	},
	{
		quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		author: 'Thomas Edison',
	},
	{
		quote: "Most people are other people. Their thoughtx are someone else's opinions, their lives a mimicry, their passions a quotation.",
		author: 'Oscar Wilde',
	},
	{
		quote: "We accept the reality of the world with which we are presented. It's as simple as that.",
		author: 'The Truman Show',
	},
	{
		quote: "Who kills a man kills a reasonable creature, God's image; but he who destroys a good book, kills reason itself, kills the image of God, as it were, in the eye.",
		author: 'John Milton',
	},
	{
		quote: 'We stopped looking for monsters under our bed when we realised that they were inside us.',
		author: 'Charles Darwin',
	},
	{
		quote: "Life isn't just about darkness or light, rather it's about finding light within the darkness.",
		author: 'Landon Parham',
	},
	{
		quote: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		quote: 'For sale: baby shoes, never worn.',
		author: 'Ernest Hemingway',
	},
	{
		quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
		author: 'Martin Luther King Jr.',
	},
	{
		quote: 'Music is a hogher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives, thinks and invents.',
		author: 'Ludwig van Beethoven',
	},
	{
		quote: "Children are not colouring books. You don't get to fill them with your favourite colours.",
		author: 'Khaled Hosseini',
	},
	{
		quote: "It's not what happens to you, but how you react to it that matters.",
		author: 'Epictetus',
	},
	{
		quote: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
	},
	{
		quote: 'History repeats itself, first as tragedy, second as farce.',
		author: 'Karl Marx',
	},
	{
		quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: "I can't hold enough of you in my hands.",
		author: 'Franz Kafka',
	},
	{
		quote: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.',
		author: 'Duchess Meghan',
	},
	{
		quote: 'I construct my memories with my present.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'I am a man, Jupiter, and each man must invent his own path.',
		author: 'Jean-Paul Sartre',
	},
	{
		quote: 'We live in a world where people can ridicule you at the push of the button. They can question you at the push of a button.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'The only difference between the hero and the villain is that the villain chooses to use that power in a way that is selfish and hurts other people.',
		author: 'Chadwick Boseman',
	},
	{
		quote: 'If someone could only see my actions and not hear my words, what would they say are my priorities?',
		author: ' James Clear',
	},
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		author: 'Walt Disney',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You only live once - but if you work it right, once is enough.',
		author: 'Joe E. Lewis',
	},
	{
		quote: 'Fate chooses your relations, you choose your friends.',
		author: 'Jacques Delille',
	},
	{
		quote: 'Never underestimate your problem or your ability to deal with it.',
		author: 'Robert Schuller',
	},
	{
		quote: 'The best prophet of the future is the past.',
		author: 'Lord Byron',
	},
	{
		quote: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you',
		author: 'Plato',
	},
	{
		quote: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
	},
	{
		quote: 'One word frees us of all the weight and pain in life, that word is Love.',
		author: 'Sophocles',
	},
	{
		quote: 'He who conquers himself is the mightiest warrior.',
		author: 'Confucius',
	},
	{
		quote: 'True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.',
		author: 'Socrates',
	},
	{
		quote: 'What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow. Our life is the creation of our mind.',
		author: 'Gautama Buddha',
	},
	{
		quote: 'First say to yourself what would you be; and then do what you need to do.',
		author: 'Epictetus',
	},
	{
		quote: 'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		author: 'Plato',
	},
	{
		quote: 'The more sand had escaped from the hourglass of our life, the clearer we should see through it.',
		author: 'Niccolo Machiavelli',
	},
	{
		test: "I have Nakama who are not strong... But I still want them to be with me! So I have to be stronger than anybody else... or else I'll lose them all!",
		author: 'Monkey D. Luffy',
	},
	{
		quote: 'I am the number one human being in music. That means any person that’s living or breathing is number two.',
		author: 'Kanye West',
	},
	{
		quote: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		quote: 'Nothing in life is promised except death.',
		author: 'Kanye West',
	},
	{
		quote: "I love sleep; it's my favorite.",
		author: 'Kanye West',
	},
	{
		quote: "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
		author: 'Kanye West',
	},
	{
		quote: "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be great! Be awesome! Be awesome!",
		author: 'Kanye West',
	},
	{
		quote: 'My greatest pain in life is that I will never be able to see myself perform live.',
		author: 'Kanye West',
	},
	{
		quote: 'For me to say I wasn’t a genius, I would just be lying to you and to myself.',
		author: 'Kanye West',
	},
	{
		quote: 'I am Warhol! I am the number one most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney, Nike, Google.',
		author: 'Kanye West',
	},
	{
		quote: 'You know, I’m a creative genius and there’s no other way to word it.',
		author: 'Kanye West',
	},
	{
		quote: '50 is Eminem’s favourite rapper. I’m my favourite rapper.',
		author: 'Kanye West',
	},
	{
		quote: 'Kim has diarrhea a lot. Like way more than a normal person should have it.',
		author: 'Kanye West',
	},
	{
		quote: 'I’m going down as a legend, whether or not you like me or not. I am the new Jim Morrison. I am the new Kurt Cobain.',
		author: 'Kanye West',
	},
	{
		quote: "There's no fangs. I don't have fangs. I'm a porcupine. I'm a blowfish. Like, I'm a — what's the fish that blows up? I'm a blowfish. I'm not a shark, I'm a blowfish.",
		author: 'Kanye West',
	},
	{
		quote: 'I don’t want to say these really big, over-the-top statements that end up getting quoted.',
		author: 'Kanye West',
	},
	{
		quote: 'Perform your obligatory duty, because action is indeed better than inaction.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Man is made by his belief. As he believes, so he is.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'You are only entitled to the action, never to its fruits.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Lust, anger and greed are the three gates to self-destructive hell.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'Change is the law of the universe. You can be a millionaire, or a pauper in an instant.',
		author: 'Shri Krishna (Bhagavad Gita)',
	},
	{
		quote: 'I can accept failure. Everyone fails at something. But I can’t accept not trying.',
		author: 'Michael Jordan',
	},
	{
		quote: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
	},
	{
		quote: 'No matter what people tell you, words and ideas can change the world.',
		author: 'Robin Williams',
	},
	{
		quote: " That's one small step for a man, one giant leap for mankind .",
		author: 'Neil Armstrong ',
	},
	{
		quote: "I wish there was a way to know you're in the good old days before you've actually left them.",
		author: 'Andy Bernard',
	},
	{
		quote: "I'm not superstitious, but I am a little stitious.",
		author: 'Michael Scott',
	},
	{
		quote: 'Write it on your heart that every day is the best day in the year.',
		author: 'Ralph Waldo Emerson',
	},
	{
		quote: 'We accept the love we think we deserve',
		author: 'Todd Anderson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote: 'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.',
		author: 'Rabindranath Tagore',
	},
	{
		quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		author: 'James Cameron',
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: 'John Lennon',
	},
	{
		quote: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
	},
	{
		quote: 'The only impossible journey is the one you never begin.',
		author: 'Tony Robbins',
	},
	{
		quote: 'The purpose of our lives is to be happy.',
		author: 'Dalai Lama',
	},
	{
		quote: 'If you want to shine like a sun, first burn like a sun',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Excellence is a continuous process and not an accident',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'The youth need to be enabled to become job generators from job seekers',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'Great dreams of great dreamers are always transcended',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'You have to dream before your dreams can come true',
		author: 'A. P. J. Abdul Kalam',
	},
	{
		quote: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.',
		author: 'Swami Vivekananda',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: 'When you reach the end of your rope, tie a knot in it and hang on',
		author: 'Franklin D. Roosevelt',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote: 'Strength is Life, Weakness is Death. Expansion is Life, Contraction is Death. Love is Life, Hatred is Death.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Truth can be stated in a thousand different ways, yet each one can be true.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'If faith in ourselves had been more extensively taught and practiced, I am sure a very large portion of the evils and miseries that we have would have vanished.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'As different streams having different sources all mingle their waters in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'External nature is only internal nature writ large.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Never think there is anything impossible for the soul. It is the greatest heresy to think so. If there is sin, this is the only sin; to say that you are weak, or others are weak.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Our duty is to encourage every one in his struggle to live up to his own highest idea, and strive at the same time to make the ideal as near as possible to the Truth.',
		author: 'Swami Vivekananda',
	},
	{
		quote: "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path.",
		author: 'Swami Vivekananda',
	},
	{
		quote: 'Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.',
		author: 'Swami Vivekananda',
	},
	{
		quote: 'We have to dare to be ourselves, however frightening or strange that self may prove to be.',
		author: 'May Sarton',
	},
	{
		quote: 'There is nothing either good or bad, but thinking makes it so.',
		author: 'William Shakespeare',
	},
	{
		quote: 'Man suffers only because he takes seriously what the gods made for fun.',
		author: 'Alan Wilson Watts',
	},
	{
		quote: 'The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.',
		author: 'Carl Sagan',
	},
	{
		quote: 'I was never aware of any other option but to question everything.',
		author: 'Noam Chomsky',
	},
	{
		quote: "The question isn't who is going to let me; it's who is going to stop me.",
		author: 'Ayn Rand',
	},
	{
		quote: 'A surplus of effort could overcome a deficit of confidence.',
		author: 'Sonia Sotomayor',
	},
	{
		quote: 'If your dreams do not scare you, they are not big enough',
		author: 'Ellen Johnson Sirleaf',
	},
	{
		quote: 'Trying to define yourself is like trying to bite your own teeth.',
		author: 'Alan Wilson Watts',
	},
	{
		quote: 'Muddy water is best cleared by leaving it alone.',
		author: 'Alan Wilson Watts',
	},
	{
		quote: 'When the going gets weird, the weird turn pro.',
		author: 'Hunter S. Thompson',
	},
	{
		quote: 'There is nothing more helpless and irresponsible than a man in the depths of an ether binge.',
		author: 'Hunter S. Thompson',
	},
	{
		quote: "If you're going through hell, keep going.",
		author: 'Winston Churchill',
	},
	{
		quote: 'Be happy for this moment. This moment is your life.',
		author: 'Omar Khayyam',
	},
	{
		quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
		author: 'Lao Tzu',
	},
	{
		quote: 'Tis better to have loved and lost than never to have loved at all.',
		author: 'Alfred Lord Tennyson',
	},
	{
		quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
		author: 'Mother Teresa',
	},
	{
		quote: "You can't blame gravity for falling in love.",
		author: 'Albert Einstein',
	},
	{
		quote: 'Hope is a waking dream.',
		author: 'Aristotle',
	},
	{
		quote: 'Hope is being able to see that there is light despite all of the darkness.',
		author: 'Desmond Tutu',
	},
	{
		quote: 'Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us.',
		author: 'Samuel Smiles',
	},
	{
		quote: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
		author: 'Epicurus',
	},
	{
		quote: 'Hope springs eternal in the human breast: Man never is, but always to be blest.',
		author: 'Alexander Pope',
	},
	{
		quote: 'Hope is not the conviction that something will turn out well but the certainty that something makes sense, regardless of how it turns out.',
		author: 'Vaclav Havel',
	},
	{
		quote: 'A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.',
		author: 'Elbert Hubbard',
	},
	{
		quote: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein',
	},
	{
		quote: 'All you need in this life is ignorance and confidence, and then success is sure.',
		author: 'Mark Twain',
	},
	{
		quote: 'He who has a why to live can bear almost any how.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
		author: 'Friedrich Nietzsche',
	},
	{
		quote: "I'm not trying to be different. To me, I'm just being myself.",
		author: 'Jaylen Brown',
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		name: 'Albert Einstein',
	},
	{
		quote:
			"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
		name: ' Bernard M. Baruch',
	},
	{
		quote:
			"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
		name: 'Dr. Seuss',
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
		author: 'Robert Louis Stevenson',
	},
	{
		quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
		author: 'Rosa Parks',
	},
	{
		quote: ' Wealth grows wherever men exert energy.',
		author: 'George S. Clason',
	},
	{
		quote: 'The greatest loss that we all have to deal with is the loss of the image of ourselves as a perfect person.',
		author: 'Fred Rogers',
	},
	{
		quote: 'It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment',
		author: 'Carl Friedrich Gauss',
	},
	{
		quote: 'If I have seen further, it is by standing on the shoulders of giants.',
		author: 'Isaac Newton',
	},
	{
		quote: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		quote: 'Sorrow spares no one, and scars respect no person.',
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: "The worst wounds, the deadliest of them, aren't the ones people see on the outside. They're the ones that make us bleed internally.",
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: 'Life is pain. Anyone who says differently is selling something.',
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: 'In the land of Bad Ass, Acheron reigned supreme.',
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: 'Better to be judged by twelve than carried by six',
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: 'All of us have darkness inside us, and at times it possesses and seduces us in ways we never thought possible.',
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: "Life isn't a puzzle to be solved. It's an adventure to be savored.",
		author: 'Sherrilyn Kenyon',
	},
	{
		quote: 'Absence of evidence is not the evidence of absence',
		author: 'Carl Sagan',
	},
	{
		quote: 'The only risk of failure is promotion.',
		author: 'Scot Adams',
	},
	{
		quote: 'The only risk of failure is promotion.',
		author: 'Scot Adams',
	},
	{
		quote: "We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams.",
		author: 'Jeremy Irons',
	},
	{
		quote: 'Do not brood over your past mistakes and failures as this will only fill your mind with grief, regret and depression. Do not repeat them in the future.',
		author: 'Sri Swami Sivananda',
	},
	{
		quote: 'It is not important to be better than someone else, but to be better than yesterday.',
		author: 'Jigoro Kano',
	},
	{
		quote: 'He who cannot rest, cannot work; he who cannot let go, cannot hold on; he who cannot find footing, cannot go forward.',
		author: 'Harry Emerson Fosdick',
	},
	{
		quote: 'You are not your thoughts.',
		author: 'Frances Trussell',
	},
	{
		quote: "Money is one thing which rarely unites and mostly divides people.",
		author: 'Sudha Murty',
	},
	{
		quote: "You will never win if you never begin.",
		author: 'Helen Rowland',
	},
	{
		quote: "Moments, when lost, can't be found again. They're just gone.",
		author: 'Jenny Han',
	},
	{
		quote: "You told me once that I bring out the worst in you. Well, you bring out the best in me.",
		author: 'Anna Todd',
	},
	{
		quote: 'If we are emotional, subjective and short-sighted, we only add to our troubles.',
		author: 'Ryan Holiday',
	},
	{
		quote: 'The obstacle in the path becomes the path.',
		author: 'Ryan Holiday',
 	},
  	{
   		quote: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
  	},
  	{		
    		quote: "Many of life's failures are people who did not realize how close to success they were when they gave up.",
		author: 'Thomas Edison',
	},
	{		
    		quote: "We are healed of a suffering only by experiencing it to the full.",
		author: 'Marcel Proust',
	},
	{
		quote: "Life can only be understood backwards; but it must be lived forwards.",
		author: 'Soren Kierkegaard',
	},
	{
		quote: 'I see now that the circumstances of one\'s birth are irrelevant. It is what you do with the gift of life that determines who you are.',
		author: 'Mewtwo',
  },
  {		
    quote: "Education is the most powerful weapon which you can use to change the world.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "It is in your hands, to make a better world for all who live in it.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "A winner is a dreamer who never gives up.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "Overcoming poverty is not a task of charity, it is an act of justice.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "One cannot be prepared for something while secretly believing it will not happen.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
		author: 'Nelson Mandela',
	},
  {		
    quote: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others.",
		author: 'Nelson Mandela',
 	},
 	{
   	quote: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
  },
	{
    quote: 'just move on and dont look back',
		author: 'Cary salvatore ',
  },
	{
		quote: 'You’ll never achieve 100 percent if 99 percent is okay.',
		author: 'Will Smith',
	},
	{
		quote: "Many of life's failures are people who did not realize how close to success they were when they gave up.",
		author: 'Thomas Edison',
	},
	{		
		quote: "If you do not come out of your shell, you are just a nut.",
			author: 'Sadhguru(Jagdish Vasudev)',
	},
	{		
		quote: "The secrets of life will not yield to a flirtatious mind.It needs the attention of a dedicated lover.",
			author: 'Sadhguru(Jagdish Vasudev)',
	},
	{		
		quote: "This is a brief life. What you make out of it is completely in your hands.",
		author: 'Sadhguru(Jagdish Vasudev)',
    },
	{
		quote: 'You are too concerned with what was and what will be. Yesterday is history, tomorrow is a mystery. But today- today is a gift! That is why it is called present',
		author: 'Kung fu Panda',
	},
	{
		quote: 'Success is stumbling from failure to failure with no loss of enthusiasm.',
		author: 'Winston Churchill'
	},
	{
		quote: 'In the beginning I looked around and, not finding the automobile of my dreams, decided to build it myself.',
		author: 'Ferdinand Porsche',
	},
	{
		quote: 'I have written you down. Now you will live forever.',
		author: 'Bastille',
	},
	{
		quote: 'Education is not the filling of a pail, but the lighting of a fire.',
		author: 'William Butler Yeats',
	},
	{
		quote: 'The aim of science is not to open the door to infinite wisdom, but to set a limit to infinite error.',
		author: 'Bertolt Brecht',
	},
	{
		quote: 'Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.',
		author: 'Franz Kafka',
	},
	{
		quote: 'Reading gives us someplace to go when we have to stay where we are.',
		author: 'Mason Cooley',
  },
  {
		quote: "I am a cage, in search of a bird.",
		author: "Franz Kafka",
	},
	{
		quote: "Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.",
		author: "Jean-Paul Sartre",
  },
  {
		quote:"Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.",
		author:"Jean-Paul Sartre",
	},
	{
		quote:"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
		author:"Simon Sinek",
	},
	{
		quote:"Innovative people struggle to stick to conventional wisdom when needed.",
		author:"Kunal Shah",
	},
	{
		quote:"Courage isn't having the strength to go on, it is going on when you don't have strength.",
		author:"Napoleon Bonaparte",
	},
  {
		quote: "People are drawn deeper into tragedy not by their defects but by their virtues.",
		author: 'Haruki Murakami',
	},
	{
		quote: "It’s like my identity’s an orbit that I’ve strayed far away from.",
		author: 'Haruki Murakami',
  },
  {
      quote:"It is not in the stars to hold our destiny but in ourselves.",
      author:"William Shakespeare",
  },
  {
      quote:"Never give up on something that you can't go a day without thinking about.",
      author:"Winston Churchill",
  },
  {
      quote:"Success is a lousy teache. It seduces smart peopleinto thinking they can't loose.",
      author:"Bill Gates",
  },
  {
      quote:"If you want to live a happy life,tie it to a goal.Not to people or things.",
      author:"Albert Einstein",
  },
  {
      quote:"You can't edit a blank page.",
      author:"Jodi Picoult",
  },
  {
      quote:"In a gentle way, you can shake the world.",
      author:"Mahatma gandhi",
  },
  {
		quote:"In order to write about life first you must live it.",
		author:"Ernest Hemingway",
  },
	{
		quote:"Life is not a problem to be solved, but a reality to be experienced.",
		author:"Soren Kierkegaard",
  },
	{
		quote:"Turn your wounds into wisdom.",
		author:"Oprah Winfrey",
	},
	{
		quote:"Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
		author:"Celine Dion",
  },
	{
		quote:"The path to success is to take massive, determined actions.",
		author:"Tony Robbins",
	},
	{
		quote:"People may doubt what you say, but they will believe what you do.",
		author:"Lewis Cass",
	},
	{
		quote:"Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.",
		author:"Joel A. Barker",
	},
	{
		quote:"Progress is impossible without change, and those who cannot change their minds cannot change anything.",
		author:"George Bernard Shaw",
	},
	{
		quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
		author:"Albert Schweitzer",
  },
  {
		quote:"I don't like to commit myself about heaven and hell- you see, I have friends in both places.",
		author:"Mark Twain",
	},
    {
        quote: "You know, somebody actually complimented me on my driving today. They left a little note on the windscreen, it said 'Parking Fine.'",
        author: "Tommy Cooper",
        profession: "British Comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "A lie gets halfway around the world before the truth has a chance to get its pants on.",
        author: "Winston Churchill",
        profession: "Former British Prime Minister",
        topics: [
            "Humor",
            "Life"
        ]
    },
    {
        quote: "Knowledge is like underwear. It is useful to have it, but not necessary to show it off.",
        author: "Bill Murray",
        profession: "American actor",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "We are all here on earth to help others; what on earth the others are here for I don't know.",
        author: "Bill Murray",
        profession: "American actor",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Happiness is having a large, loving, caring, close-knit family in another city.",
        author: "George Burns",
        profession: "American comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "A professor is someone who talks in someone else's sleep.",
        author: "W. H. Auden",
        profession: "English-American Poet",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Everything is changing. People are taking the comedians seriously and the politicians as a joke.",
        author: "Will Rogers",
        profession: "American actor",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "That’s why they call it the American Dream, because you have to be asleep to believe it.",
        author: "George Carlin",
        profession: "American comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "If you’re too open-minded; your brains may fall out.",
        author: "Lawrence Ferlinghetti",
        profession: "American poet",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "If you think nobody cares about you, try missing a couple of payments.",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "There's a fine line between fishing and just standing on the shore like an idiot.",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "If at first you don't succeed then skydiving definitely isn't for you.",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "A lot of people are afraid of heights. Not me, I'm afraid of widths.",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "What's another word for Thesaurus?",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "You can't have everything. Where would you put it?",
        author: "Steven Wright",
        profession: "American stand-up comedian",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Don’t be so humble – you are not that great.",
        author: "Golda Meir",
        profession: "Former Prime Minister of Israel",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "Whether women are better than men I cannot say - but I can say they are certainly no worse.",
        author: "Golda Meir",
        profession: "Former Prime Minister of Israel",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
        author: "Bill Murray",
        profession: "American actor",
        topics: [
            "Humor"
        ]
    },
    {
        quote: "You can't soar with the eagles as long as you hang out with the turkeys.",
        author: "Joel Osteen",
        profession: "American televangelist",
        topics: [
            "Philosophy",
            "Inspirational"
        ]
    },
    {
        quote: "You can change your world by changing your words... Remember, death and life are in the power of the tongue.",
        author: "Joel Osteen",
        profession: "American televangelist",
        topics: [
            "Philosophy",
            "Life"
        ]
    },
    {
        quote: "Nothing is impossible, the word itself says 'I'm possible'!",
        author: "Audrey Hepburn",
        profession: "British actress",
        topics: [
            "Humor",
            "Inspirational"
        ]
    },
    {
        quote: "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
        author: "Audrey Hepburn",
        profession: "British actress",
        topics: [
            "People",
            "Inspirational"
        ]
    },
    {
        quote: "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
        author: "Audrey Hepburn",
        profession: "British actress",
        topics: [
            "People",
            "Inspirational"
        ]
    },
    {
        quote: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
        profession: "British actress",
        topics: [
            "People",
            "Life"
        ]
    },
];
  //Exporting to the script.js file
export const allQuotes = quotes;
