import { v4 as uuidv4 } from 'uuid';

export const TYPE = {
    "3d": "#3d",
    "2d": "#2d",
    "UGC": "#UGC",
};

export const CATEGORY = {
    PLAYGAME: "PLAYGAME"
}

function generateUniqueId(prefix) {
    return `${prefix}-${uuidv4()}`;
}


export const videosInformation = [
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-american-dad-underground.jpg',
        sources: [
            'https://player.vimeo.com/video/556182786'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'American dad Underground'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-hidden-object-square.jpg',
        sources: [
            'https://player.vimeo.com/video/554652338'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Hidden Object'
    },
    {
        id: generateUniqueId('portfolio-video'),
        sources: [
            'https://player.vimeo.com/video/618979427'
        ],
        poster: '../img/new-previews/2d/2d-hs-room-man-1.jpg',
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Hustle Castle Room Men'
    },
    {
        id: generateUniqueId('portfolio-video'),
        sources: [
            'https://player.vimeo.com/video/618987455'
        ],
        poster: '../img/new-previews/2d/2d-1.jpg',
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Merge Inn. food'
    },
    {
        id: generateUniqueId('portfolio-video'),
        sources: [
            'https://player.vimeo.com/video/618987351'
        ],
        type: TYPE["2d"],
        poster: '../img/new-previews/2d/2d-2.jpg',
        category: CATEGORY.PLAYGAME,
        title: 'Merge In. Food Tinder'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-dominoes.jpg',
        sources: [
            'https://player.vimeo.com/video/554748442'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Dominoes'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-american-dad-escape.jpg',
        sources: [
            'https://player.vimeo.com/video/556182633'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'American Dad. Escape'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-american-dad-roulete.jpg',
        sources: [
            'https://player.vimeo.com/video/556182677'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'American Dad Roulette'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-hidden-object.jpg',
        sources: [
            'https://player.vimeo.com/video/554744308'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Games Hidden Object'
    },

    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-hs-room-man-2.jpg',
        sources: [
            'https://player.vimeo.com/video/618979302'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Hustle Castle Combat Tower. 2D'
    },
    {
        id: generateUniqueId('portfolio-video'),
        sources: [
            'https://player.vimeo.com/video/618982000'
        ],
        poster: '../img/new-previews/2d/2d-zero-city-1.jpg',
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Zero City'
    },
    {
        id: generateUniqueId('portfolio-video'),
        sources: [
            'https://player.vimeo.com/video/618981813'
        ],
        poster: '../img/new-previews/2d/2d-hustle-castle-potion.jpg',
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Hustle Castle. Potion Puzzle'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-dragon-vale.jpg',
        sources: [
            'https://player.vimeo.com/video/618875839'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'DragonVale Games'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-hidden-object-1.jpg',
        sources: [
            'https://player.vimeo.com/video/554744406'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Games. Hidden Object'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-instadapp.jpg',
        sources: [
            'https://player.vimeo.com/video/580225159'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Instadapp'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-idle-game.jpg',
        sources: [
            'https://player.vimeo.com/video/574512909'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Idle Game example'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-rush-royal.jpg',
        sources: [
            'https://player.vimeo.com/video/556344370'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Rush Royale'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/2d-videos/2d14.jpg',
        sources: [
            'https://player.vimeo.com/video/554748795'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Games. Rush Royale'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-join-blocks.jpg',
        sources: [
            'https://player.vimeo.com/video/554748396'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Join blocks'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-join-spades.jpg',
        sources: [
            'https://player.vimeo.com/video/554748344'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'Spades'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/2d-videos/2d17.jpg',
        sources: [
            'https://player.vimeo.com/video/522270200'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'DragonVale Games'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/2d/2d-american-dad-apocalypse.jpg',
        sources: [
            'https://player.vimeo.com/video/522270072'
        ],
        type: TYPE["2d"],
        category: CATEGORY.PLAYGAME,
        title: 'American Dad Apocalypse Soon'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/age-of-magic.jpg',
        sources: [
            'https://player.vimeo.com/video/582858764'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Age of Magic. Battle'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/age-of-magic-3.jpg',
        sources: [
            'https://player.vimeo.com/video/582858451'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Age of Magic. Fresh tower'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/age-of-magic-4.jpg',
        sources: [
            'https://player.vimeo.com/video/582856768'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Age of Magic. Throne road'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/age-of-magic-5.jpg',
        sources: [
            'https://player.vimeo.com/video/582856901'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Age of Magic. Best Arcade'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/age-of-magic-2.jpg',
        sources: [
            'https://player.vimeo.com/video/582853442'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Age of Magic. Roland&Balthazar'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/airport-city.jpg',
        sources: [
            'https://player.vimeo.com/video/537291200'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Airport City'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/airport-city-2.jpg',
        sources: [
            'https://player.vimeo.com/video/522290279'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: '3D video. Airport City. Bridge'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/airport-city-3.jpg',
        sources: [
            'https://player.vimeo.com/video/580220396'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Airport City Boeing'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/autochess-2.jpg',
        sources: [
            'https://player.vimeo.com/video/522290353'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Autochess heroes'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/unity.jpg',
        sources: [
            'https://player.vimeo.com/video/556176205'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: '3D video. Unity3D'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/autochess-1.jpg',
        sources: [
            'https://player.vimeo.com/video/522290499'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Autochess'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/nitro-nation-5.jpg',
        sources: [
            'https://player.vimeo.com/video/586186472'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Nitro Nation. Coffee Ride'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/nitro-nation-4.jpg',
        sources: [
            'https://player.vimeo.com/video/586186614'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Nitro Nation. Violet'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/nitro-nation-3.jpg',
        sources: [
            'https://player.vimeo.com/video/586186528'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Nitro Nation. Drift'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/nitro-nation-2.jpg',
        sources: [
            'https://player.vimeo.com/video/586186392'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Nitro Nation. Upgrade'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/3d/nitro-nation-1.jpg',
        sources: [
            'https://player.vimeo.com/video/586186303'
        ],
        type: TYPE["3d"],
        category: CATEGORY.PLAYGAME,
        title: 'Nitro Nation. Desert'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/keto-diet.jpg',
        sources: [
            'https://player.vimeo.com/video/561265225'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC. Keto Diet'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/spades-1.jpg',
        sources: [
            'https://player.vimeo.com/video/556185930'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC. Spades'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/spades-2.jpg',
        sources: [
            'https://player.vimeo.com/video/556185967'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC. Spades'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/mojo-1.jpg',
        sources: [
            'https://player.vimeo.com/video/522270457'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC video. Mojo'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/ugc-1.jpg',
        sources: [
            'https://player.vimeo.com/video/510726778'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC video'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/keto-diet-2.jpg',
        sources: [
            'https://player.vimeo.com/video/561265179'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC. Keto'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/keto-diet-3.jpg',
        sources: [
            'https://player.vimeo.com/video/556228942'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UGC. Keto Diet'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/vprok.jpg',
        sources: [
            'https://player.vimeo.com/video/618778707'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Vprok.ru TikTok'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/vprok-2.jpg',
        sources: [
            'https://player.vimeo.com/video/618775273'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Vprok'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/vprok-3.jpg',
        sources: [
            'https://player.vimeo.com/video/618775242'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Vprok dog'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/upsets.jpg',
        sources: [
            'https://player.vimeo.com/video/618930376'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'UpsetStyle'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/angry-style.jpg',
        sources: [
            'https://player.vimeo.com/video/618930574'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'AngryStyle'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/meme.jpg',
        sources: [
            'https://player.vimeo.com/video/618930320'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'MemeMerge'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/positive.jpg',
        sources: [
            'https://player.vimeo.com/video/618930180'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Positive'
    },

    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/spades-2.jpg',
        sources: [
            'https://player.vimeo.com/video/618986610'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Spades. UGC'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/iq.jpg',
        sources: [
            'https://player.vimeo.com/video/600275577'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'IQ Option UGC'
    },
    {
        id: generateUniqueId('portfolio-video'),
        poster: '../img/new-previews/ugc/bloom.jpg',
        sources: [
            'https://player.vimeo.com/video/591484102'
        ],
        type: TYPE.UGC,
        category: CATEGORY.PLAYGAME,
        title: 'Bloom UGC'
    }
]
