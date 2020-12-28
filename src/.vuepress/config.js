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
            lang: 'English', // this will be set as the lang attribute on <html>
            title: 'Robotics Roadmap',
            description: 'Robotics Roadmap to help to get started in the Robotics field'
        },
        '/ru/':
        {
            lang: 'Русский',
            title: 'Роадмап робототехники',
            description: ''
        }
    },

    themeConfig:
    {
        repo: '',
        editLinks: false,
        docsDir: 'roadmap',
        editLinkText: '',
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

            '/roadmap/robo_programmer/':
            [
                '../',
                '',
                'clean_code/',
                'concurrent_programming/',
                'languages/',
                'algorithms/',
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
                'calculus/',
                'linear_algebra/',
                'differential_equations/',
                'physics/',
                'prob_stat/',
            ],

            '/roadmap/robo_technician/':
            [
                '../',
                '',
                'prototyping/',
                'sensors/',
                'actuators/',
                'microcontrollers/',
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

    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
