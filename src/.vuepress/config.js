const
{
    description
} = require('../../package')

    module.exports =
{
    base: '/RoboticsRoadmap/',
    title: 'Robotics Roadmap',
    description: description,
    head: [
        ['link',
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/assets/favicons/apple-icon.png"
            }
        ],
        ['link',
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/assets/favicons/favicon-32x32.png"
            }
        ],
        ['link',
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/assets/favicons/favicon-16x16.png"
            }
        ],
        ['link',
            {
                rel: "shortcut icon",
                href: "/assets/favicons/favicon.ico"
            }
        ],
        ['meta',
            {
                name: "msapplication-config",
                content: "/assets/favicons/browserconfig.xml"
            }
        ],
        ['meta',
            {
                name: 'theme-color',
                content: '#d620fd'
            }
        ],
        ['meta',
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            }
        ],
        ['meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black'
            }
        ]
    ],

    locales:
    {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/':
        {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Robotics Roadmap',
            description: 'Robotics Roadmap to help to get started in the Robotics field'
        },
        '/ru/':
        {
            lang: 'ru-RU',
            label: "Robotics Roadmap",
            title: 'Роадмап робототехники',
            description: ''
        }
    },

    themeConfig:
    {
        locales:
        {
            '/':
            {
                label: "English",
                repo: 'Sarrasor/RoboticsRoadmap',
                editLinks: true,
                editLinkText: 'Help to improve this page',
                docsDir: 'roadmap',
                lastUpdated: true,
                nav: [
                    {
                        text: 'How to use',
                        link: '/guide/',
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Sarrasor/RoboticsRoadmap',
                    },
                ],
                displayAllHeaders: false,
                sidebarDepth: 2,
                sidebar:
                {
                    '/roadmap/robo_human/':
                    [
                        '../',
                        '',
                        'communication/',
                        'teamwork/',
                        'time_management/',
                        'stress_management/',
                        'self_development/',
                        'workplace/',
                        'health/',
                    ],

                    '/roadmap/robo_integrator/':
                    [
                        '../',
                        '',
                        'ros/',
                        'devops/',
                        'api/',
                        'storage/',
                        'cloud/',
                    ],

                    '/roadmap/robo_manager/':
                    [
                        '../',
                        '',
                        'hr/',
                        'product_owner/',
                        'project_manager/',
                    ],

                    '/roadmap/robo_inventor/':
                    [
                        '../',
                        '',
                        'customer_development/',
                        'hypothesis_testing/',
                    ],

                    '/roadmap/robo_programmer/languages/':
                    [
                        '../',
                        '',
                        'cpp/',
                        'python/',
                        'shell/',
                        'matlab/',
                    ],

                    '/roadmap/robo_programmer/':
                    [
                        '../',
                        '',
                        'algorithms/',
                        'clean_code/',
                        'legacy_code/',
                        'concurrent_programming/',
                        'languages/',
                        'software_architecture/',
                        'tests/',
                        'tools/',
                    ],

                    '/roadmap/robo_scientist/':
                    [
                        '../',
                        '',
                        'data_science/',
                        'optimization/',
                        'control_theory/',
                        'computer_vision/',
                        'decision_making/',
                        'localization/',
                        'dsp/',
                        'calculus/',
                        'linear_algebra/',
                        'discrete_math/',
                        'differential_equations/',
                        'physics/',
                        'prob_stat/',
                        'research/',
                    ],

                    '/roadmap/robo_technician/':
                    [
                        '../',
                        '',
                        'mechanism_design/',
                        'prototyping/',
                        'sensors/',
                        'actuators/',
                        'electronics/',
                    ],

                    '/roadmap/':
                    [
                        '../guide/',
                        '',
                        'robo_human/',
                        'robo_integrator/',
                        'robo_manager/',
                        'robo_programmer/',
                        'robo_scientist/',
                        'robo_technician/',
                    ],

                    '/guide/':
                    [
                        '',
                        '../roadmap/',
                    ],

                    '/': [
                        '',
                        'guide/',
                    ]
                },

            },
            '/ru/':
            {
                label: "Русский",
                repo: '',
                editLinks: false,
                docsDir: 'roadmap',
                editLinkText: '',
                lastUpdated: true,
                nav: [
                    {
                        text: 'Как использовать',
                        link: '/guide/',
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Sarrasor/RoboticsRoadmap',
                    },
                ],
            },
        },
    },

    plugins:
    [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        'check-md',

        [
            'container',
            {
                type: 'block',
                defaultTitle: '',
                before: info => `<div class="block"><p class="title">${info}</p>`,
                after: '</div>',
            }
        ],

        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-96209688-1'
            }
        ],
    ]
}
