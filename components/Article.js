// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'New In Javascript',
    date: 'July 5, 2021',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];



/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton"> + </span>
  </div>
*/
  
// Creating the div element
function articleMaker() {
  let article = document.createElement('div');

  article.classList.add('article');

  let container = document.querySelector('.header');
  container.appendChild(article);

// Create the h2 and title element

  let title = document.createElement('h2');

  title.textContent = data["title"];

  article.appendChild(title);

  // create the p and article date element

  let articleDate = document.createElement('p');

  articleDate.textContent = data["date"];

  articleDate.classList.add('date');

  article.appendChild(articleDate);

  // Create 3 separate paragraph elements

  let paragraph = document.createElement('p');

  paragraph.innerHTML= `
    data["firstParagraph"];
    data["secondParagraph"];
    data["thirdParagraph"];
    `
    // Create span element

  let expandButton = document.createElement('span');
  let articles = document.querySelector('.articles');

  expandButton.textContent = '+';

  expandButton.classList.add('expandButton');

  articles.appendChild(expandButton);


  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton. This listener should toggle the class 'article-open' on div.article.

expandButton.addEventListener('click', (event) => {
  event.target.classList.toggle('article-open');
}) 
console.log(document);
return article;


  // Step 3: Don't forget to return something from your function!
}
  articleMaker();

  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component to create a div.article element and append it to the DOM inside div.articles (see index.html).

data.forEach(item => {
  let newArticle = articleMaker(item);

  let articles = document.querySelector('.articles');
  articles.appendChild(newArticle);
})  

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others. Refresh the page to see the new article.



let myArticle1 = {
  title: 'Dogs learn to code"',
  date: 'July 5, 2021',
  firstParagraph: `Wow such tempt shoob boof, most angery pupper I have ever seen. Heckin angery woofer very good spot porgo yapper porgo puggo, h*ck ur givin me a spook boofers. Waggy wags super chub heck doing me a frighten borking doggo, waggy wags ruff. Dat tungg tho tungg shoober ruff, porgo big ol pupper. You are doing me the shock borkdrive long bois stop it fren, very hand that feed shibe I am bekom fat. Mlem long woofer dat tungg tho maximum borkdrive blep, yapper porgo. Pats many pats shoob blop, length boy waggy wags. Very good spot aqua doggo floofs pats, heck bork. Woofer pupperino borkdrive extremely cuuuuuute thicc, extremely cuuuuuute adorable doggo.`,

  secondParagraph: `Maximum borkdrive tungg you are doing me the shock doge porgo, smol borking doggo with a long snoot for pats ur givin me a spook much ruin diet. Bork long water shoob you are doing me the shock sub woofer very good spot, doge ruff. You are doing me a frighten tungg wrinkler heckin angery woofer long bois dat tungg tho aqua doggo noodle horse heck, blep vvv much ruin diet pupper dat tungg tho mlem. Puggo long bois floofs shoob very good spot, wow very biscit woofer. Boofers wow such tempt such treat shooberino shoober heck, lotsa pats noodle horse wow such tempt. Such treat heckin angery woofer you are doing me a frighten woofer adorable doggo boofers woofer heck, corgo you are doing me the shock clouds smol borking doggo with a long snoot for pats shooberino.`,

  thirdParagraph: `Doggo ipsum he made many woofs I am bekom fat smol borking doggo with a long snoot for pats. Doge long doggo blep extremely cuuuuuute doing me a frighten wrinkler much ruin diet extremely cuuuuuute, dat tungg tho mlem very taste wow the neighborhood pupper extremely cuuuuuute. blop. You are doin me a concern long bois most angery pupper I have ever seen pupperino blop, fluffer you are doing me the shock much ruin diet. Wow very biscit smol ur givin me a spook borkdrive what a nice floof, most angery pupper I have ever seen blep. Waggy wags vvv most angery pupper I have ever seen doge, blop pupperino. much ruin diet. Doge h*ck you are doing me a frighten heckin good boys very taste wow dat tungg tho adorable doggo much ruin diet, clouds borkf aqua doggo much ruin diet shooberino. Wow very biscit heckin he made many woofs h*ck noodle horse, wow such tempt borkf.`
};

let newArticle1 = articleMaker(myArticle1);

let myArticle2 = {
  title: 'Dogs Love React"',
  date: 'July 6, 2021',
  firstParagraph: `Big ol pupper borking doggo fluffer he made many woofs length boy fluffer, wow such tempt very taste wow sub woofer. Shoob boof extremely cuuuuuute heckin angery woofer smol borking doggo with a long snoot for pats extremely cuuuuuute, bork stop it fren smol borking doggo with a long snoot for pats. Most angery pupper I have ever seen boof bork long bois shoob h*ck heckin good boys and girls, sub woofer clouds ur givin me a spook wow such tempt. Long water shoob doge mlem super chub pupperino extremely cuuuuuute, length boy borkf very hand that feed shibe puggo. Shooberino doggorino long woofer what a nice floof noodle horse I am bekom fat yapper tungg, maximum borkdrive mlem very good spot lotsa pats heckin.
  `,

  secondParagraph: `Mlem h*ck the neighborhood pupper shibe, hck noodle horse. Borking doggo stop it fren pupper pupperino very good spot, heckin good boys wrinkler big ol, he made many woofs pupperino shooberino. very taste wow you are doing me a frighten much ruin diet. Shoober heck very hand that feed shibe thicc big ol doge, borking doggo pats many pats. Very jealous pupper doggo heckin, length boy. Puggorino long water shoob doggo sub woofer, many pats long woofer heckin angery woofer stop it fren, boof very good spot. dat tungg tho. Borkdrive wrinkler long woofer super chub, you are doin me a concern pupper. Many pats borkdrive heckin good boys and girls mlem, such treat aqua doggo vvv many pats, very good spot shooberino. Super chub waggy wags ruff doge many pats, smol borking doggo with a long snoot for pats shoober adorable doggo.`,

  thirdParagraph: `borkf clouds heckin good boys and girls. Mlem shibe wrinkler vvv heckin angery woofer very taste wow shooberino, ruff maximum borkdrive doggo super chub such treat. Smol borking doggo with a long snoot for pats many pats smol borking doggo with a long snoot for pats heckin, you are doing me the shock. Blop yapper the neighborhood pupper heck dat tungg tho, heck heckin good boys and girls extremely cuuuuuute. Shibe most angery pupper I have ever seen ur givin me a spook floofs tungg, length boy long water shoob. Pupperino you are doing me a frighten long bois woofer pupperino, big ol pupper you are doin me a concern. Such treat adorable doggo most angery pupper I have ever seen puggo maximum borkdrive, super chub extremely cuuuuuute. Heckin good boys puggorino long doggo aqua doggo heckin clouds wow very biscit, borkf doggorino heckin angery woofer most angery pupper I have ever seen doge. H*ck floofs much ruin diet yapper long bois, shoober heck. Ruff what a nice floof doge ur givin me a spook heck, big ol heckin good boys maximum borkdrive, big ol very good spot very taste wow.`
};

let newArticle2 = articleMaker(myArticle2);

console.log(newArticle1);
console.log(newArticle2);