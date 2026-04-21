var script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
script1.defer = true;
script1.onload = function () {
    // Inject Radon color palette with !important to beat Material theme's
    // bundled hljs CSS which overrides standard class names (keyword, number,
    // operator). Non-standard names (builtin, fncall, special) don't need it.
    var rnStyle = document.createElement('style');
    rnStyle.textContent =
        '.hljs-keyword    { color: #7dd3fc !important; font-weight: 600; }\n' +
        '.hljs-string     { color: #a3e635 !important; }\n' +
        '.hljs-number     { color: #fb923c !important; }\n' +
        '.hljs-comment    { color: #5c6591 !important; font-style: italic; }\n' +
        '.hljs-operator   { color: #f87171 !important; }\n' +
        '.hljs-builtin    { color: #34d399; }\n' +
        '.hljs-special    { color: #c084fc; }\n' +
        '.hljs-fncall     { color: #c084fc; }\n' +
        '.hljs-punctuation{ color: #94a3b8; }\n';
    document.head.appendChild(rnStyle);

    hljs.registerLanguage('rn', function (hljs) {
        return {
            contains: [
                // Multi-line comment FIRST — #! ... !#
                // Must come before single-line so #! isn't consumed by the # rule
                {
                    className: 'comment',
                    begin: '#!',
                    end: '!#'
                },
                // Single-line comment — # to end of line
                {
                    className: 'comment',
                    begin: '#',
                    end: '$'
                },
                // Strings second — protect their content from keyword matches
                {
                    className: 'string',
                    begin: '"',
                    end: '"',
                    contains: [{ begin: '\\\\.' }]
                },
                // Builtins before keywords so e.g. "str", "int" don't hit keyword
                // Source: create_global_symbol_table() in core/builtin_funcs.py
                {
                    className: 'builtin',
                    begin: '\\b(print|print_ret|input|input_int|clear|cls|require|exit|len|is_num|is_int|is_float|is_str|is_bool|is_array|is_fun|is_null|arr_append|arr_pop|arr_extend|arr_len|arr_chunk|arr_get|str_len|str_find|str_get|int|float|str|bool|type|pyapi|time_now|license|credits|copyright|help|dir|File|String|Json|Requests|builtins)\\b'
                },
                {
                    className: 'keyword',
                    begin: '\\b(var|fun|class|if|elif|else|for|while|return|import|from|in|as|and|or|not|null|true|false|this|__constructor__|break|continue|try|catch|raise|step|to|const|static|assert|switch|case|default|fallthrough|fallout|del)\\b'
                },
                {
                    className: 'number',
                    begin: '\\b\\d+(?:\\.\\d+)?\\b'
                },
                // Name immediately after class/import/fun keyword
                {
                    className: 'special',
                    begin: '(?<=\\b(?:class|import|fun)\\s+)\\w+'
                },
                // Function calls — lookahead so the ( stays outside the span
                {
                    className: 'fncall',
                    begin: '\\b\\w+(?=\\s*\\()'
                },
                // Multi-char operators before single-char to avoid partial matches
                // //= before // before /=; ^= before ^ so they're one span
                {
                    className: 'operator',
                    begin: '->|\\+\\+|--|==|!=|<=|>=|//=|//|-=|\\+=|\\*=|/=|%=|\\^=|[+\\-*/%^=<>!]'
                },
                {
                    className: 'punctuation',
                    begin: '[{}()\\[\\],.;:]'
                }
            ]
        };
    });

    // MkDocs Pygments has no 'rn' lexer — falls back to TextLexer, producing
    // <div class="language-text highlight"><pre><code>…</code></pre>.
    // Explicitly highlight those blocks as 'rn'.
    hljs.configure({ ignoreUnescapedHTML: true });

    document.querySelectorAll(
        '.language-text.highlight pre code, pre code.language-rn'
    ).forEach(function (block) {
        var result = hljs.highlight(block.textContent, {
            language: 'rn',
            ignoreIllegals: true
        });
        block.innerHTML = result.value;
        block.classList.add('hljs');
    });
};
document.head.appendChild(script1);