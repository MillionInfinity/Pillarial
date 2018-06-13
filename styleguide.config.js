module.exports = {
    components: 'src/components/**/*.js',
    // ignore: ['**/components/views/*.js'],
    ribbon: {
      url: 'https://github.com/MillionInfinity',
      text: 'Pillarial StyleGuidist'
    },
    template: {
      favicon: './public/favicon.ico',
      head: {
        links: [
          {
            rel: 'stylesheet',
            href: './node_modules/semantic-ui-css/semantic.min.css'
          },
          {
            rel: 'stylesheet',
            href: './src/styles/styleguidist.css'
          }
        ]
      }
    },
    theme: {
        color: {
          link: 'white',
          linkHover: 'salmon',
          sidebarBackground : '#ED7529',
        },
        fontFamily: {
          base: '"Droid Sans"',
        },
        fontSize:{
          small: 13,
        }
      }
};
