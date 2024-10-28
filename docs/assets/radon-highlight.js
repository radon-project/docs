var script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
script1.defer = true;
script1.onload = function () {
    hljs.registerLanguage('rn', function (hljs) {
        return {
            contains: [
                {
                    className: 'keyword',
                    begin: '\\b(class|fun|if|else|true|false|null)\\b'
                },
                {
                    className: 'string',
                    begin: '"', end: '"',
                    contains: [
                        {
                            className: 'escape',
                            begin: '\\\\.', end: hljs.IMMEDIATE_RE
                        }
                    ]
                },
                {
                    className: 'number',
                    begin: '\\b\\d+\\b'
                },
                {
                    className: 'special',
                    begin: '(?<=\\b(?:class|import|fun)\\s+)\\w+'
                },
                {
                    className: 'special',
                    begin: '\_\_constructor\_\_|this'
                },
                {
                    className: 'fncall',
                    begin: '(?<=\\b)(\\w+)\\s*\\('
                },
                {
                    className: 'fncall',
                    begin: '(\\)|\\()'
                },
                {
                    className: 'comment',
                    begin: '#',
                    end: '\\n'
                },
                {
                    className: 'identifier',
                    begin: '(\\w+)'
                },
                {
                    className: 'operator',
                    begin: '(\\+|-|=|!|not|and\\^)'
                }
            ]
        };
    });
    hljs.highlightAll();
};
document.head.appendChild(script1);