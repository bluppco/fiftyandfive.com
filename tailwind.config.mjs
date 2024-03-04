/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"faf_black": "#333333",
				"faf_charcoal_black": "#2F2F2F",
				"faf_dark_gray": "#666666",
				"faf_gray": "#707070",

			},
			fontFamily: {

				"helvetica_neue_thin": [ "Helvetica Neue Thin", "Sans-serif" ],
				"helvetica_neue_light": [ "Helvetica Neue Light", "Sans-serif" ],
				"helvetica_neue_medium": [ "Helvetica Neue Medium", "Sans-serif" ],
				"helvetica_neue_bold": [ "Helvetica Neue Bold", "Sans-serif" ],
				"helvetica_neue_extrabold": [ "Helvetica Neue Extrabold", "Sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
