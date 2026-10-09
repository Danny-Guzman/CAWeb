/**
 * Use SVGO to optimize the SVG file removing:
 * - Doctype
 * - Comments
 * - Dimensions
 * - Metadata
 */
export default {
    js2svg: { 
        indent: 2, 
        pretty: true,
    },
    plugins: [
        "removeDoctype",
        "removeComments",
        "removeMetadata",
        "removeDimensions"
    ]
}