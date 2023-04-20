// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Mykola',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Ukraine, Sumy, 40022',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ivanov-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to   work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: false,
        },
        {
          name: 'Git',
          point: 9,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Badminton',
          isMain: false,
        },
        {
          name: 'Sport',
          isMain: true,
        },
        {
          name: 'Dogs',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Sumy State University',
          isEnd: true,
        },
        {
          name: 'SQL course',
          isEnd: true,
        },
        {
          name: 'IT Brains',
          isEnd: false,
        },
        {
          name: 'Microservices course',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'SQL',
          id: 10,
        },
        {
          name: 'MS',
          id: 20,
        },
        {
          name: 'GIT',
          id: 30,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.02.2021',
            to: '20.11.2022',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'Info about great project',
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'achievment 1',
                },
                {
                  name: 'achievment 2',
                },
              ],
              stackAmount: 5,
              awardAmount: 7,
            },
          ],
        },
        {
          position: 'Middle Fullstack Developer',
          company: {
            name: 'ArtInt',
            url: null,
          },
          duration: {
            from: '20.12.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'AI',
              url: 'https://ai.com.ua/',
              about: 'Info about AI project',
              stack: [
                {
                  name: 'C#',
                },
              ],
              awards: [
                {
                  name: 'achievment 3',
                },
                {
                  name: 'achievment 4',
                },
                {
                  name: 'achievment 5',
                },
              ],
              stackAmount: 2,
              awardAmount: 6,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
