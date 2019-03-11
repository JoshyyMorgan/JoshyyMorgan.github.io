const comics = [
    {
        name: 'Detective Conan 94',
        link: 'detective-conan-94.html'
    },
    {
        name: 'Kimi ni Todoke 24',
        link: 'kimi-ni-todoke-24.html'
    },
    {
        name:'Youkai Apartment 13',
        link:'youkai-apartment-13.html'
    },

    {
        name:'TWINS',
        link:'twins.html'
    },

    {
        name:'Red River 33',
        link:'red-river-33.html'
    },

    {
        name:'The Top Secret 11',
        link:'the-top-secret-1.html'
    },

    {
        name:'Liar Game XIX',
        link:'liar-game-XIX.html'
    },

    {
        name:'Mainson Ikkoku 3',
        link:'mainson-ikkoku-3.html'
    },
    {
        name:'Inuyasha 18',
        link:'inuyasha-18.html'
    },
    {
        name:'Hunter x Hunter 31',
        link:'hunter-x-hunter-31.html'
    },
    {
        name:'Gintama 22',
        link:'gintama-22.html'
    },
    {
        name:'Last Game 5',
        link:'last-game-5.html'
    },
    // {
    //     name:'',
    //     link:''
    // },
    // {
    //     name:'',
    //     link:''
    // },
    // {
    //     name:'',
    //     link:''
    // },
    // {
    //     name:'',
    //     link:''
    // }
]


getMatches = (term) => {
    return comics.filter(item => (item.name.toUpperCase().indexOf(term.toUpperCase()) > -1))
        
}