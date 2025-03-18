function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



let facts = [
    "Reed: He has two brothers.", "Richie: His favorite color is purple.", "Hayden: He likes to swim.", "Jaxon: He broke his finger.", "Victor: He is ambidextrous.", "Olivia: She can say the alphabet backwards.", 
  "Corey: He is not famous.", "Tatum: She was born in Louisiana.", "Kaden: He has never had a peanut butter jelly sandwich.", "Dylan: He is allergic to cats.", "Samuel: He likes trains.", "Daniel: He knows the identity of beastcarp1.", "Matthew: He has a dog.", 
  "Jacob: He hates UNA parking.", "Landon: He has 3 dogs.", "Carly: She was adopted from China.", "Cohen: He used to have an orange hummer H3.", "Carson: He plays on the rugby team.", "Gage: He said UNA basketball sold the bag.", "Corbin: He said the Great Wall of China is 13,000 miles long.",
  "Hai: He hates JavaScript.", "Laura: She loves the bible verse Romans 5:8!", "Erika: She loves running.", "Jackson: 🦭🦭", "Griffin: He has eaten a pound of ground beef everyday for the last 6 months.", "Arun: He said that there is not much parking space at UNA.", "Connor: He enjoys kickboxing."
];

function displayFacts() {
    $('#factContainer').html(facts.map(fact => `
        <div class='col-md-6 mb-4'>
            <div class='card fact-card p-3' onclick='flipCard(this)'>
                <div>${fact}</div>
            </div>
        </div>`).join(''));  
}

function sortFacts(type) {
    if (type === 'alpha') facts.sort();
    if (type === 'reverse') facts.sort().reverse();
    if (type === 'random') facts.sort(() => Math.random() - 0.5);
    displayFacts();
}

function flipCard(card) {
    $(card).toggleClass('flipped');
}

$('#searchBox').on('input', function() {
    let searchVal = $(this).val().toLowerCase();
    $('.fact-card').each(function() {
        $(this).toggle($(this).text().toLowerCase().includes(searchVal));
    });
});

$(document).ready(displayFacts);
