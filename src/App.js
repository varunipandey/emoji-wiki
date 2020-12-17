import React, { useState } from "react";
import "./styles.css";

var headingName = " Food Emoji Wiki";
var color = "yellow";
var colorText = "blue";

var emojiDictionary = {
  "🍇": "     Grapes   ",
  "🍈": "    Melon   ",
  "🍉": "    Watermelon   ",
  "🍊": "    Tangerine",
  "🍋": "    Lemon",
  "🍌": "    Banana",
  "🍍": "    Pineapple",
  "🥭": "    Mango",
  "🍎": "    Red Apple  ",
  "🍏": "    Green Apple  ",
  "🍐": "    Pear",
  "🍑": "    Peach",
  "🍒": "    Cherries",
  "🍓": "    Strawberry",
  "🥝": "    Kiwi  ",
  "🍅": "    Tomato",
  "🥥": "    Coconut",
  "🥑": "    Avocado",
  "🥔": "    Potato",
  "🥕": "    Carrot",
  "🌽": "    Ear of Corn  ",
  "🌶️": "    Hot Pepper  ",
  "🥒": "    Cucumber",
  "🥬": "    Leafy Green  ",
  "🥦": "    Broccoli",
  "🧄": "    Garlic",
  "🧅": "    Onion",
  "🍄": "    Mushroom",
  "🥜": "    Peanuts",
  "🌰": "    Chestnut",
  "🍞": "    Bread",
  "🥐": "    Croissant",
  "🥖": "    Baguette  ",
  "🥨": "    Pretzel",
  "🥯": "    Bagel",
  "🥞": "    Pancakes",
  "🧇": "    Waffle",
  "🧀": "    Cheese  ",
  "🍖": "    Meat  ",
  "🍗": "    Poultry  ",
  "🥩": "    Cut  ",
  "🥓": "    Bacon",
  "🍔": "    Hamburger",
  "🍟": "    French  ",
  "🍕": "    Pizza",
  "🌭": "    Hot  ",
  "🥪": "    Sandwich",
  "🌮": "    Taco",
  "🌯": "    Burrito",
  "🥙": "    Stuffed Bread  ",
  "🧆": "    Falafel"
  // "🥚": "    Egg",
  // "🍳": "    Cooking",
  // "🥘": "    Shallow Pan  ",
  // "🍲": "    Pot  ",
  // "🥣": "    Bowl  ",
  // "🥗": "    Green Salad  ",
  // "🍿": "    Popcorn",
  // "🧈": "    Butter",
  // "🧂": "    Salt",
  // "🥫": "    Canned Food  ",
  // "🍱": "    Bento Box  ",
  // "🍘": "    Rice Cracker  ",
  // "🍙": "    Rice Ball",
  // "🍚": "    Cooked Rice",
  // "🍛": "    Curry Rice",
  // "🍜": "    Steaming Bowl",
  // "🍝": "    Spaghetti",
  // "🍠": "    Roasted Sweet Potato",
  // "🍢": "    Oden",
  // "🍣": "    Sushi",
  // "🍤": "    Fried Shrimp",
  // "🍥": "    Fish Cake with Swirl",
  // "🥮": "    Moon Cake",
  // "🍡": "    Dango",
  // "🥟": "    Dumpling",
  // "🥠": "    Fortune Cookie",
  // "🥡 ": "    Takeout Box",
  // "🦪  ": "    Oyster",
  // "🍦": "    Soft Ice Cream",
  // "🍧": "    Shaved Ice",
  // "🍨": "    Ice Cream",
  // "🍩": "    Doughnut",
  // "🍪": "    Cookie",
  // "🎂": "    Birthday Cake",
  // "🍰": "    Shortcake",
  // "🧁": "    Cupcake",
  // "🥧": "    Pie",
  // "🍫": "    Chocolate Bar",
  // "🍬": "    Candy",
  // "🍭": "    Lollipop",
  // "🍮": "    Custard",
  // "🍯": "    Honey Pot",
  // "🍼": "    Baby Bottle",
  // "🥛": "    Glass of Milk",
  // "☕": "    Hot Beverage",
  // "🍵": "    Teacup Without Handle",
  // "🍶": "    Sake",
  // "🍾": "    Bottle with Popping Cork",
  // "🍷": "    Wine Glass",
  // "🍸": "    Cocktail Glass",
  // "🍹": "    Tropical Drink",
  // "🍺": "    Beer Mug",
  // "🍻": "    Clinking Beer Mugs",
  // "🥂": "    Clinking Glasses",
  // "🥃": "    Tumbler Glass",
  // "🥤": "    Cup with Straw",
  // "🧃": "    Beverage Box",
  // "🧉": "    Mate",
  // "🧊": "    Ice",
  // "🥢": "    Chopsticks",
  // "🍽️": "    Fork and Knife with Plate",
  // "🍴 ": "    Fork and Knife",
  // "🥄": "    Spoon"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color, color: colorText }}>
        {headingName}
      </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer",
              border: "black solid",
              marginBottom: "10px",
              marginTop: "50px",
              display: "inline-grid"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/* 


*/
