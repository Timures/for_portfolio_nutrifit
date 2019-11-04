import '../../node_modules/mburger-css/dist/mburger'
import '../../node_modules/mmenu-js/dist/mmenu'

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu( "#my-menu", {
            "slidingSubmenus": false,
            "extensions": [
                "pagedim-black",
                "position-right"
            ]
         });
    }
);