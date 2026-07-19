/*
  titleColor.ts

  Transforming a string (the title) into a (semi) unique color.
  This process doesn't have to be perfect, it just has to give one color for one input, and give another color for another.
*/

const catppuccinColors = [
  "rgb(245, 224, 220)", // rosewater
  "rgb(242, 205, 205)", // flamingo
  "rgb(245, 194, 231)", // pink
  "rgb(203, 166, 247)", // mauve
  "rgb(243, 139, 168)", // red
  "rgb(235, 160, 172)", // maroon
  "rgb(250, 179, 135)", // peach
  "rgb(249, 226, 175)", // yellow
  "rgb(166, 227, 161)", // green
  "rgb(148, 226, 213)", // teal
  "rgb(137, 220, 235)", // sky
  "rgb(116, 199, 236)", // sapphire
  "rgb(137, 180, 250)", // blue
  "rgb(180, 190, 254)", // lavender
]

export function titleHash(title: string) {
  let sum = 0;
  for (let i = 0; i < title.length; i++) {
    sum += title.charCodeAt(i);
  }
  sum += title.length; // "foodbot" and "watchcord" collided by pure chance before adding this lmao
  return catppuccinColors[sum % catppuccinColors.length]
}

export function random() {
  return catppuccinColors[Math.floor(Math.random() * catppuccinColors.length)]
}