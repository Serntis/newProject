let random_quote = ['Learn as if you will live forever, live like you will die tomorrow.', 
'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
'Itn is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.',
'Don\'t let yesterday take up too much of today.',
'The elevator to success is out of order. You\'ll have to use the stairs, one step at a time.']

let button = document.getElementById('quote-button');
let quote = document.getElementById('random_quote');

function quote_selector() {
    let randomQuote = Math.floor(Math.random() * random_quote.length);
    return random_quote[randomQuote];
}

function show_Quote() {
    quote.innerHTML = quote_selector();
    button.innerHTML = 'Fetch another!';
    button.style.cursor = 'default';
}