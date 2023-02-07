import { useEffect } from "react";
import words from "word-list-json";
export default function Hooks12() {
const arra = [];
useEffect(() => {
var randomColor = Math.floor(Math.random() *
16777215).toString(16);
document.body.style.backgroundColor = `#${randomColor}`;
});
return (
<>
<h1>A list of all palindrome words with always new
backgroundcolor on every render</h1>
{words.map((word, i) => {
if (word === word.split("").reverse().join("")) {
arra.push(word);
return <div style={{margin: '2rem' , color: 'red'}}
key={i}>{word}&nbsp;</div>;
}
})}
</>
);
}
