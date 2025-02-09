/**
 * @module Option
 *
 */
declare const _default: {
    CSS: {
        csso: {
            comments: false;
            forceMediaMerge: true;
            restructure: false;
        };
        lightningcss: {
            minify: true;
        };
    };
    HTML: {
        "html-minifier-terser": {
            caseSensitive: true;
            collapseInlineTagWhitespace: false;
            collapseWhitespace: true;
            continueOnParseError: true;
            html5: true;
            ignoreCustomComments: RegExp[];
            includeAutoGeneratedTags: true;
            keepClosingSlash: true;
            minifyCSS: true;
            minifyJS: true;
            minifyURLs: false;
            noNewlinesBeforeTagClose: true;
            preventAttributesEscaping: false;
            processConditionalComments: false;
            processScripts: string[];
            quoteCharacter: string;
            removeAttributeQuotes: true;
            removeComments: true;
            removeScriptTypeAttributes: true;
            removeStyleLinkTypeAttributes: true;
            removeTagWhitespace: false;
            sortAttributes: true;
            sortClassName: true;
            trimCustomFragments: true;
            useShortDoctype: false;
        };
    };
    JavaScript: {
        terser: {
            ecma: 5;
            enclose: false;
            keep_classnames: false;
            keep_fnames: false;
            ie8: false;
            module: false;
            safari10: false;
            toplevel: false;
            format: {
                comments: false;
            };
        };
    };
    Image: {
        sharp: {
            avif: {
                chromaSubsampling: string;
                effort: number;
            };
            gif: {
                effort: number;
            };
            jpeg: {
                chromaSubsampling: string;
                mozjpeg: true;
                trellisQuantisation: true;
                overshootDeringing: true;
                optimiseScans: true;
            };
            png: {
                compressionLevel: number;
                palette: true;
            };
            raw: {};
            tiff: {
                compression: string;
            };
            webp: {
                effort: number;
            };
        };
    };
    SVG: {
        svgo: {
            multipass: true;
            js2svg: {
                indent: number;
                pretty: false;
            };
            plugins: "preset-default"[];
        };
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Parser: {
        CSS: ("csso" | "lightningcss")[];
        HTML: "html-minifier-terser";
        Image: "sharp";
        JavaScript: "terser";
        SVG: "svgo";
    };
    Action: {
        Failed: ({ Input }: {
            Input: any;
        }) => Promise<string>;
        Passed: ({ Before, Buffer }: {
            Before: any;
            Buffer: any;
        }) => Promise<boolean>;
        Accomplished: ({ Input, Before, After }: {
            Input: any;
            Before: any;
            After: any;
        }) => Promise<string>;
        Changed: (Plan: any) => Promise<any>;
    };
    Path: string[];
};
export default _default;
