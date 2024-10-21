const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');
async function getData(){
    const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: { 'X-Api-Key': 'rLEaSWhw6940AGigyJb7Yg==RxbRjwqnc1w1KES5'}
    });
    const data = await res.json();

    quote.textContent = data[0].quote;
    author.textContent = `- ${data[0].author}`;
}
btn.addEventListener('click', function(){
    quote.textContent = 'Loading....';
    author.textContent = '-';
    getData();
});
