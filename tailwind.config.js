/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pixelf: "#7f35f8",
        pixele: "#ff0cf5",
      },
      keyframes: {
        blink: {
          "0%, 100%": { borderWidth: "7px", borderRadius: "150%" },
          "50%": { borderColor: "#7CB9E8", borderRadius: "150%" }, // Replace with the color of your choice
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
});
