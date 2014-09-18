App.Question=DS.Model.extend({
    questionNo :DS.attr('string'),
    option1 :DS.attr('string'),
    option2 :DS.attr('string'),
    option3 :DS.attr('string'),
    option4 :DS.attr('string'),
    actualResult:DS.attr('number')
})

App.Question.FIXTURES = [

    {
        id: 1,
        questionNo: 'Garampani sanctuary is located at?',
        option1 :'Junagarh, Gujarat',
        option2 :'Diphu, Assam',
        option3 :'Kohima, Nagaland',
        option4 :'Gangtok, Sikkim',
        actualResult:2

    },
    {
        id: 2,
        questionNo: 'Galileo was an Italian astronomer who',
        option1 :'developed the telescope',
        option2 :'discovered four satellites of Jupiter',
        option3 :'discovered that the movement of pendulum',
        option4 :'All of the above',
        actualResult:4
    },
    {
        id: 3,
        questionNo: 'Golf player Vijay Singh belongs to which country?',
        option1 :'India',
        option2 :'Fiji',
        option3 :'USA',
        option4 :'Japan',
        actualResult:2
    },
    {
        id: 4,
        questionNo: 'Gravity setting chambers are used in industries to remove',
        option1 :'SOx',
        option2 :'NOx',
        option3 :'suspended particulate matter',
        option4 :'CO',
        actualResult:3
    },
    {
        id: 5,
        questionNo: 'Film and TV institute of India is located at',
        option1 :'Pune (Maharashtra)',
        option2 :'Rajkot (Gujarat)',
        option3 :'Pimpri (Maharashtra)',
        option4 :'Perambur (Tamilnadu)',
        actualResult:1
    },
    {
        id: 6,
        questionNo: 'Hypothermia occurs due to loss of excessive heat from body due to sudden low body temperature in',
        option1 :'Snakes',
        option2 :'Frogs',
        option3 :'Human beings',
        option4 :'Lizards',
        actualResult:3
    },
    {
        id: 7,
        questionNo: 'Which of the following is an impact printer?',
        option1 :'Daisy wheel printer',
        option2 :'Ink-jet printer',
        option3 :'Bubble-jet printer',
        option4 :'Laser printer',
        actualResult:1
    },
    {
        id: 8,
        questionNo: 'Communication satellite are used to -',
        option1 :'transmit communication signal only',
        option2 :'receives communication signal only',
        option3 :'receive and redirect communication signal',
        option4 :'provide information of natural resources only',
        actualResult:3
    },
    {
        id: 9,
        questionNo: 'The vacancy of the office of the President must be filled within ',
        option1 :'3 months',
        option2 :'6 months',
        option3 :'9 months',
        option4 :'12 months',
        actualResult:2
    },
    {
        id: 10,
        questionNo: 'The southernmost point of peninsular India, that is, Kanyakumari, is',
        option1 :'north of Tropic of Cancer',
        option2 :'south of the Equator',
        option3 :'south of the Capricorn',
        option4 :'north of the Equator',
        actualResult:4
    }
];

