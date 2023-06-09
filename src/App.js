import React from 'react';
import './App.css';
import Hero from './components/Hero';


const heroes = [{
  name: "Железный человек",
  alterego: "Тони Старк",
  business: "гений, миллиардер, плейбой, филантроп",
  friends: "Мстители",
  superpowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  details: "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые.",
  picture: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
  id: "ironman"
}, {
  name: "Человек-паук",
  alterego: "Питер Паркер",
  business: "борец за справедливость, студент, фотограф",
  friends: "Мстители, Фантастическая четверка, Люди Икс",
  superpowers: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  details: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)",
  picture: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
  id: "spiderman"
}, {
  name: "Капитан Америка",
  alterego: "Стивен Роджерс",
  business: "супер-солдат",
  friends: "Мстители",
  superpowers: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  details: "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом.",
  picture: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
  id: "captainAmerica"
}, {
  name: "Тор",
  alterego: "нет; полное имя — Тор Одинсон",
  business: "борец за справедливость, скандинавский бог",
  friends: "Мстители",
  superpowers: "все, что может бог, плюс молот Мьелнир",
  details: "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении.",
  picture: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
  id: "thor"
}, {
  name: "Халк",
  alterego: "Брюс Беннер",
  business: "супергерой, борец за справедливость, ученый-биохимик",
  friends: "Мстители",
  superpowers: "сверхчеловеческая сила искорость, выносливость, полет",
  details: "идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев.",
  picture: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
  id: "hulk"
}, {
  name: "Черная вдова",
  alterego: "Наташа Романофф",
  business: "супергероиня, шпионка",
  friends: "Мстители",
  superpowers: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  details: "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы.",
  picture: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
  id: "BlackWidow"
}
];

function App() {
  return (
    <div className="App">
      <div className="superheroes">
      {
        heroes.map((hero) =>
        <Hero key={hero.id} name={hero.name} alterego={hero.alterego} business={hero.business} friends={hero.friends} superpowers={hero.superpowers} details={hero.details} picture={hero.picture} ></Hero>
        )
      }
      </div>
    </div>
  );
}

export default App;
