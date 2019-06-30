import { textToEmoji } from "./emoji";

export function transform(input: string) {
  let s = input;

  for (const text in textToEmoji) {
    s = s.replace(new RegExp(text, "gi"), textToEmoji[text]);
  }

  return s;
}
