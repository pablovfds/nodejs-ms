import express from 'express';

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/movies', (req, res) => {
    res.send([
    {
      "popularity": 408.093,
      "vote_count": 4449,
      "video": false,
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
        80,
        18,
        53
      ],
      "title": "Joker",
      "vote_average": 8.6,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-04"
    },
    {
      "popularity": 217.578,
      "vote_count": 529,
      "video": false,
      "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      "id": 420809,
      "adult": false,
      "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
      "original_language": "en",
      "original_title": "Maleficent: Mistress of Evil",
      "genre_ids": [
        12,
        14,
        10751
      ],
      "title": "Maleficent: Mistress of Evil",
      "vote_average": 7.3,
      "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      "release_date": "2019-10-18"
    },
    {
      "popularity": 224.483,
      "vote_count": 121,
      "video": false,
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "adult": false,
      "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
      "original_language": "en",
      "original_title": "Terminator: Dark Fate",
      "genre_ids": [
        28,
        878
      ],
      "title": "Terminator: Dark Fate",
      "vote_average": 6.5,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    },
    {
      "popularity": 134.435,
      "vote_count": 0,
      "video": false,
      "poster_path": "/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg",
      "id": 449924,
      "adult": false,
      "backdrop_path": "/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",
      "original_language": "cn",
      "original_title": "葉問4",
      "genre_ids": [
        28,
        18,
        36
      ],
      "title": "Ip Man 4: The Finale",
      "vote_average": 0,
      "overview": "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
      "release_date": "2019-12-20"
    },
    {
      "popularity": 132.147,
      "vote_count": 1683,
      "video": false,
      "poster_path": "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
      "id": 384018,
      "adult": false,
      "backdrop_path": "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
      "original_language": "en",
      "original_title": "Fast & Furious Presents: Hobbs & Shaw",
      "genre_ids": [
        28,
        12,
        35
      ],
      "title": "Fast & Furious Presents: Hobbs & Shaw",
      "vote_average": 6.5,
      "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
      "release_date": "2019-08-02"
    },
    {
      "popularity": 115.811,
      "vote_count": 3274,
      "video": false,
      "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "id": 420818,
      "adult": false,
      "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
      "original_language": "en",
      "original_title": "The Lion King",
      "genre_ids": [
        12,
        16,
        18
      ],
      "title": "The Lion King",
      "vote_average": 7.1,
      "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      "release_date": "2019-07-19"
    },
    {
      "popularity": 162.825,
      "vote_count": 8282,
      "video": false,
      "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
      "id": 920,
      "adult": false,
      "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "original_language": "en",
      "original_title": "Cars",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Cars",
      "vote_average": 6.7,
      "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
      "release_date": "2006-06-09"
    },
    {
      "popularity": 116.714,
      "vote_count": 1194,
      "video": false,
      "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
      "id": 559969,
      "adult": false,
      "backdrop_path": "/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg",
      "original_language": "en",
      "original_title": "El Camino: A Breaking Bad Movie",
      "genre_ids": [
        80,
        18,
        53
      ],
      "title": "El Camino: A Breaking Bad Movie",
      "vote_average": 7.1,
      "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
      "release_date": "2019-10-11"
    },
    {
      "popularity": 120.92,
      "vote_count": 4735,
      "video": false,
      "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      "id": 429617,
      "adult": false,
      "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Spider-Man: Far from Home",
      "vote_average": 7.6,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-07-02"
    },
    {
      "popularity": 105.652,
      "vote_count": 186,
      "video": false,
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "adult": false,
      "backdrop_path": "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
      "original_language": "en",
      "original_title": "Zombieland: Double Tap",
      "genre_ids": [
        28,
        35,
        27
      ],
      "title": "Zombieland: Double Tap",
      "vote_average": 7.5,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    },
    {
      "popularity": 75.347,
      "vote_count": 2862,
      "video": false,
      "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
      "id": 301528,
      "adult": false,
      "backdrop_path": "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
      "original_language": "en",
      "original_title": "Toy Story 4",
      "genre_ids": [
        12,
        16,
        35,
        14,
        10751
      ],
      "title": "Toy Story 4",
      "vote_average": 7.6,
      "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
      "release_date": "2019-06-21"
    },
    {
      "popularity": 77.027,
      "vote_count": 452,
      "video": false,
      "poster_path": "/q5298SICFzqMcKtQoBktk8p6FH.jpg",
      "id": 417384,
      "adult": false,
      "backdrop_path": "/qBI3Spq93lNxGzecdGpbwV5lOvU.jpg",
      "original_language": "en",
      "original_title": "Scary Stories to Tell in the Dark",
      "genre_ids": [
        27,
        53
      ],
      "title": "Scary Stories to Tell in the Dark",
      "vote_average": 6.3,
      "overview": "Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.",
      "release_date": "2019-08-09"
    },
    {
      "popularity": 79.921,
      "vote_count": 3916,
      "video": false,
      "poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
        12,
        35,
        14,
        10749,
        10751
      ],
      "title": "Aladdin",
      "vote_average": 7.1,
      "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      "release_date": "2019-05-24"
    },
    {
      "popularity": 88.453,
      "vote_count": 57,
      "video": false,
      "poster_path": "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
      "id": 568012,
      "adult": false,
      "backdrop_path": "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",
      "original_language": "ja",
      "original_title": "ワンピーススタンピード",
      "genre_ids": [
        28,
        12,
        16
      ],
      "title": "One Piece: Stampede",
      "vote_average": 7.6,
      "overview": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
      "release_date": "2019-10-24"
    },
    {
      "popularity": 80.983,
      "vote_count": 1781,
      "video": false,
      "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
      "id": 474350,
      "adult": false,
      "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
      "original_language": "en",
      "original_title": "It Chapter Two",
      "genre_ids": [
        27
      ],
      "title": "It Chapter Two",
      "vote_average": 6.9,
      "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
      "release_date": "2019-09-06"
    },
    {
      "popularity": 47.157,
      "vote_count": 55,
      "video": false,
      "poster_path": "/cEr3S3Atr4eRlHmMOA1GvaX0f4p.jpg",
      "id": 560362,
      "adult": false,
      "backdrop_path": "/meEuc9El2efDGZMARPjd4u4qHhd.jpg",
      "original_language": "en",
      "original_title": "Rattlesnake",
      "genre_ids": [
        18,
        27,
        9648,
        53
      ],
      "title": "Rattlesnake",
      "vote_average": 5.4,
      "overview": "After a mysterious woman saves her daughter from a deadly snakebite, a single mother must repay the debt by killing a stranger before sundown.",
      "release_date": "2019-10-25"
    },
    {
      "popularity": 74.908,
      "vote_count": 428,
      "video": false,
      "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
      "id": 453405,
      "adult": false,
      "backdrop_path": "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",
      "original_language": "en",
      "original_title": "Gemini Man",
      "genre_ids": [
        28,
        53
      ],
      "title": "Gemini Man",
      "vote_average": 5.8,
      "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",
      "release_date": "2019-10-11"
    },
    {
      "popularity": 69.259,
      "vote_count": 11110,
      "video": false,
      "poster_path": "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      "id": 245891,
      "adult": false,
      "backdrop_path": "/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg",
      "original_language": "en",
      "original_title": "John Wick",
      "genre_ids": [
        28,
        53
      ],
      "title": "John Wick",
      "vote_average": 7.2,
      "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      "release_date": "2014-10-24"
    },
    {
      "popularity": 68.21,
      "vote_count": 96,
      "video": false,
      "poster_path": "/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg",
      "id": 480105,
      "adult": false,
      "backdrop_path": "/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
      "original_language": "en",
      "original_title": "47 Meters Down: Uncaged",
      "genre_ids": [
        12,
        18,
        27,
        53
      ],
      "title": "47 Meters Down: Uncaged",
      "vote_average": 5.4,
      "overview": "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
      "release_date": "2019-08-16"
    },
    {
      "popularity": 81.418,
      "vote_count": 2305,
      "video": false,
      "poster_path": "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
      "id": 320288,
      "adult": false,
      "backdrop_path": "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
      "original_language": "en",
      "original_title": "Dark Phoenix",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Dark Phoenix",
      "vote_average": 6.1,
      "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
      "release_date": "2019-06-07"
    }
  ])
})

app.post('/movies', (req, res) => {
  res.send("POST /movies")
})

app.listen(3002, () => {
    console.log('Server is listening on port 3002');
})
