import { Bellefair, Pacifico, Paytone_One } from "next/font/google";


// Define the Pacifico font
export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico", 
  display: "swap",
});


export const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone-one",
});


export const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});