var React = require('react');
import classes from './grid.css';
import {Row, Col} from 'react-bootstrap';

var data = [
    {
        "item": "Soda",
        "id": 49000050100,
        "name": "Coca-Cola",
        "description": "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world.",
        "maincategory": "Beverages",
        "brand": "Coca-Cola",
        "subcategory1": "Soft Drinks",
        "subcategory2": "Carbonated Soft Drinks",
        "price": 1.69,
        "onsale": "yes",
        "quantity": "2 L",
        "caloriesperserving": 100,
        "nuval": 1,
        "servingsize": "240 ml",
        "servingsperpackage": 8,
        "img": "src/components/grid/images/coke.jpeg"
    },
    {
        "item": "Frozen Chicken Breast",
        "id": 31000120200,
        "name": "Banquet Chicken Breast Tenders",
        "description": "Made with 100% natural* chicken breast with rib meat.",
        "maincategory": "Frozen",
        "brand": "Banquet",
        "subcategory1": "Frozen Meat",
        "subcategory2": "Frozen Chicken",
        "price": 3.77,
        "onsale": "no",
        "quantity": "24 oz",
        "caloriesperserving": 210,
        "nuval": 51,
        "servingsize": "85 g",
        "servingsperpackage": 8,
        "img": "src/components/grid/images/chicken_tenders.jpeg"
    },
    {
        "item": "Spinach",
        "id": 32601900950,
        "name": "Earthbound Farm Organic Baby Spinach Blend",
        "description": "In 1984, on 21/2-acres in California's verdant Carmel Valley, Drew & Myra Goodman started Earthbound Farm. Rooted on that tiny farm, our commitment to organic has grown stronger every year. Thank you for choosing organic!",
        "maincategory": "Fresh",
        "subcategory1": "Produce",
        "subcategory2": "Packaged Produce --> Bagged Salad Mixes",
        "price": "2/$7.00",
        "onsale": "Yes",
        "quantity": "5 oz",
        "caloriesperserving": 20,
        "nuval": "no",
        "servingsize": "3 oz (85g/about 2 cups)",
        "servingsperpackage": 1,
        "img": "src/components/grid/images/salad_mix.jpeg"
    },
    {
        "item": "Oreos",
        "id": 44000032020,
        "name": "Nabisco Oreo Chocolate Sandwich Cookies",
        "description": "Carry love in your heart and Oreo cookies everywhere else.",
        "maincategory": "Pantry",
        "brand": "Nabisco",
        "subcategory1": "Snack Foods",
        "subcategory2": "Cookies",
        "price": 2.98,
        "onsale": "no",
        "quantity": "14.3 oz",
        "caloriesperserving": 160,
        "nuval": 3,
        "servingsize": "34g",
        "servingsperpackage": 12,
        "img": "src/components/grid/images/oreo.jpeg"
    },
    {
        "item": "Bread",
        "id": 72945601330,
        "name": "Sara Lee Bread White",
        "description": "Bread is low fat, cholesterol free food. 0 grams of trans fat per serving. Per 2 slice serving: 150 calories. 0.5g sat fat 3% DV. 230mg sodium 10% DV. 3g sugars. A bread that truly deserves all the accolades. It's the original Sara Lee white, a bread so faithful to tradition that folks all over can't really have a sandwich without it. The flavor and texture say it all, and isn't that what enjoying bread is all about?",
        "maincategory": "Pantry",
        "brand": "Sara Lee",
        "subcategory1": "Bread & Cakes",
        "subcategory2": "Bread",
        "price": 1.99,
        "onsale": "yes",
        "quantity": "20 oz",
        "caloriesperserving": 150,
        "nuval": 25,
        "servingsize": "Two slices",
        "servingsperpackage": 10,
        "img": "src/components/grid/images/bread_white.jpeg"
    },
    {
        "item": "Apples",
        "id": 41330,
        "name": "Gala Apples",
        "description": "Sweet, Juicy, Crisp",
        "maincategory": "Fresh",
        "brand": "NA",
        "subcategory1": "Produce",
        "subcategory2": "Fresh Fruit",
        "price": "$0.59 ea",
        "onsale": "yes",
        "quantity": ".40 lbs",
        "caloriesperserving": "NA",
        "nuval": 100,
        "servingsize": "NA",
        "servingsperpackage": "NA",
        "nutritionlabel": "NA",
        "img": "src/components/grid/images/apple.jpeg"
    },
    {
        "item": "Milk",
        "id": 73948010150,
        "name": "Central Dairy Vitamin D Whole Milk Gallon",
        "description": "None",
        "maincategory": "Fresh",
        "brand": "Central",
        "subcategory1": "Dairy, Cheese & Eggs",
        "subcategory2": "Milk & Cream ---> Cows Milk",
        "price": 4.49,
        "onsale": "no",
        "quantity": "128 fl oz",
        "caloriesperserving": 150,
        "nuval": "no",
        "servingsize": "1 cup (240 mL)",
        "servingsperpackage": "about 16",
        "img": "src/components/grid/images/milk.png"
    },
    {
        "item": "Goldfish",
        "id": 14100096550,
        "name": "Pepperidge Farm Goldfish Cheddar Baked Snack Crackers",
        "description": "Goldfish CrackersEveryone loves Goldfish crackers – they're tasty and fun! With a large 30 oz carton you can always come back for more, or have enough to feed a crowd. The Snack that Smiles BackWhen it comes to Goldfish crackers, you can feel good about serving your favorite snacks. All of our cheese varieties, like cheddar, are baked with real cheese, and Goldfish crackers are made with no artificial preservatives. or flavors.",
        "maincategory": "Pantry",
        "brand": "Pepperidge Farm",
        "subcategory1": "Snack Foods",
        "subcategory2": "Crackers",
        "price": 7.86,
        "onsale": "no",
        "quantity": "30 oz",
        "caloriesperserving": 140,
        "nuval": 24,
        "servingsize": "30 g",
        "servingsperpackage": 28,
        "img": "src/components/grid/images/goldfish.jpeg"
    }
    // ,
    // {
    //     "item": "Cookies",
    //     "id": 260803000000,
    //     "name": "Chocolate Chip Cookies with Ghirardelli Chocolate Chip 12 Ct",
    //     "description": "None",
    //     "maincategory": "Bakery",
    //     "brand": "NA",
    //     "subcategory1": "Bakery Fresh Cookies",
    //     "price": 3.99,
    //     "onsale": "no",
    //     "quantity": "13 oz",
    //     "caloriesperserving": 150,
    //     "nuval": "no",
    //     "servingsize": "1 cookie",
    //     "servingsperpackage": 12,
    //     "img": "./images/cookies.jpeg"
    // },
    // {
    //     "item": "Sugar",
    //     "id": 75450055100,
    //     "name": "Hy-Vee Pure Granulated Cane Sugar",
    //     "description": "Pure cane sugar, granulated.",
    //     "maincategory": "Pantry",
    //     "brand": "Hy-Vee",
    //     "subcategory1": "Cooking & Baking",
    //     "subcategory2": "Baking Ingredients",
    //     "price": 1.89,
    //     "onsale": "yes",
    //     "quantity": "4 lb",
    //     "caloriesperserving": 15,
    //     "nuval": 1,
    //     "servingsize": "4g",
    //     "servingsperpackage": 454,
    //     "img": "./images/sugar_cane.jpeg"
    // },
    // {
    //     "item": "Butter",
    //     "id": 34500151500,
    //     "name": "Land O' Lakes Sweet Cream Unsalted Sweet Butter Sticks",
    //     "description": "Bring out the real, natural flavor of your foods.The fresh sweet cream in Land'O Lakes Unsalted Butter comes from the farm families of Land'O'Lakes.Only Land O'Lakes butter has the FlavorProtect Wrapper to keep other flavors out and the fresh taste you love in.",
    //     "maincategory": "Fresh",
    //     "brand": "Land O' Lakes",
    //     "subcategory1": "Dairy, Cheese & Eggs",
    //     "subcategory2": "Butter & Margarine",
    //     "price": "2/$5.00",
    //     "onsale": "yes",
    //     "quantity": "1 lb",
    //     "caloriesperserving": 100,
    //     "nuval": 2,
    //     "servingsize": "14g",
    //     "servingsperpackage": 32,
    //     "img": "./images/butter.jpeg"
    // },
    // {
    //     "item": "Ground Beef",
    //     "id": 232538000000,
    //     "name": "Fresh Ground Beef 80% Lean 20%",
    //     "description": "None",
    //     "maincategory": "Fresh",
    //     "brand": "None",
    //     "subcategory1": "Meat & Seafood",
    //     "subcategory2": "Beef",
    //     "price": 4.99,
    //     "onsale": "yes",
    //     "quantity": "1 lb",
    //     "caloriesperserving": 280,
    //     "nuval": 36,
    //     "servingsize": "4 oz (112 g)",
    //     "servingsperpackage": "varied",
    //     "img": "./images/ground_beef.jpeg"
    // },
    // {
    //     "item": "Strawberries",
    //     "id": 715756200020,
    //     "name": "Driscoll's Strawberries",
    //     "description": "none",
    //     "maincategory": "Produce",
    //     "brand": "Driscoll's",
    //     "subcategory1": "Fresh Fruit",
    //     "subcategory2": "Berries",
    //     "price": 4.99,
    //     "onsale": "yes",
    //     "quantity": "16 oz",
    //     "caloriesperserving": "N/A",
    //     "nuval": 100,
    //     "servingsize": "NA",
    //     "servingsperpackage": "NA",
    //     "nutritionlabel": "NA",
    //     "img": "./images/strawberry.jpeg"
    // },
    // {
    //     "item": "Eggs",
    //     "id": 715141503490,
    //     "name": "Eggland's Best Grade A Large Eggs",
    //     "description": "Egg-Land's Best Farm Fresh Best Grade A Eggs Large. EB quality approved. 12 grade A eggs. All natural. Vegetarian fed hens. Now! For your nutritious diet. Excellent source of... Vitamins D, B12, E. Good source of... Vitamins B2, B5. Plus-115mg omega 3. 25% less saturated fat than regular eggs. Per egg - see nutrition facts for cholesterol content. American Masters of taste gold superior taste.",
    //     "maincategory": "Fresh",
    //     "brand": "Eggland's Best",
    //     "subcategory1": "Dairy, Cheese & Eggs",
    //     "subcategory2": "Eggs & Egg Substitutes",
    //     "price": 2.99,
    //     "onsale": "no",
    //     "quantity": "12 ct",
    //     "caloriesperserving": 70,
    //     "nuval": 85,
    //     "servingsize": "NA",
    //     "servingsperpackage": 12,
    //     "img": "./images/eggs.jpeg"
    // },
    // {
    //     "item": "Ketchup",
    //     "id": 75450124420,
    //     "name": "Hy-Vee Ketchup",
    //     "description": "None",
    //     "maincategory": "Pantry",
    //     "brand": "Hy-Vee",
    //     "subcategory1": "Condiments & Salad Dressing",
    //     "subcategory2": "Condiments",
    //     "price": 1.99,
    //     "onsale": "yes",
    //     "quantity": "38 oz",
    //     "caloriesperserving": 20,
    //     "nuval": 3,
    //     "servingsize": "17 g",
    //     "servingsperpackage": 63,
    //     "img": "./images/ketchup.jpeg"
    // },
    // {
    //     "item": "Peanut Butter",
    //     "id": 75450040430,
    //     "name": "Hy-Vee Creamy Peanut Butter",
    //     "description": "None",
    //     "maincategory": "Pantry",
    //     "brand": "Hy-Vee",
    //     "subcategory1": "Canned & Jarred Foods",
    //     "subcategory2": "Peanut Butter & Jelly",
    //     "price": 4.49,
    //     "onsale": "yes",
    //     "quantity": "40 oz",
    //     "caloriesperserving": 180,
    //     "nuval": "none",
    //     "servingsize": "32 g",
    //     "servingsperpackage": 35,
    //     "img": "./images/peanut_butter.jpeg"
    // },
    // {
    //     "item": "Yogurt",
    //     "id": 75450080470,
    //     "name": "Hy-Vee Low Fat Vanilla Yogurt",
    //     "description": "None",
    //     "maincategory": "Fresh",
    //     "brand": "Hy-Vee",
    //     "subcategory1": "Dairy, Cheese & Eggs",
    //     "subcategory2": "Yogurt",
    //     "price": 2.99,
    //     "onsale": "no",
    //     "quantity": "32 oz",
    //     "caloriesperserving": 210,
    //     "nuval": 27,
    //     "servingsize": "227 g",
    //     "servingsperpackage": 4,
    //     "img": "./images/yogurt.jpeg"
    // },
    // {
    //     "item": "Granola Bar",
    //     "id": 30000451300,
    //     "name": "Quaker Chewy Granola Bar Variety Pack 18-0.84 oz. Bars",
    //     "description": "Quaker Chewy Granola Bars contain 8 grams of whole grain and have no high-fructose corn syrup, making these granola bars a tasty treat. The Chewy variety value pack includes Low Fat Chocolate Chunk, Peanut Butter Chocolate Chip, and S’mores flavors.",
    //     "maincategory": "Snack Foods",
    //     "brand": "Quaker",
    //     "subcategory1": "Snack Bars",
    //     "subcategory2": "Granola Bars",
    //     "price": 3.99,
    //     "onsale": "no",
    //     "quantity": "15.2 oz",
    //     "caloriesperserving": 90,
    //     "nuval": "none",
    //     "servingsize": "24 g",
    //     "servingsperpackage": 6,
    //     "img": "./images/granola.jpeg"
    // },
    // {
    //     "item": "Cereal",
    //     "id": 38000576080,
    //     "name": "Kellogg's Frosted Flakes Cereal",
    //     "description": "none",
    //     "maincategory": "Breakfast Foods",
    //     "brand": "Kellogg's",
    //     "subcategory1": "Cereal",
    //     "subcategory2": "Box Cereal",
    //     "price": 3.99,
    //     "onsale": "yes",
    //     "quantity": "26.8 oz",
    //     "caloriesperserving": 110,
    //     "nuval": 11,
    //     "servingsize": "29g",
    //     "servingsperpackage": 26,
    //     "img": "./images/cereal.jpeg"
    // },
    // {
    //     "item": "Asparagus",
    //     "id": 40800,
    //     "name": "Asparagus",
    //     "description": "none",
    //     "maincategory": "Fresh",
    //     "brand": "none",
    //     "subcategory1": "Produce",
    //     "subcategory2": "Fresh Vegetables",
    //     "price": "$1.48 ea",
    //     "onsale": "yes",
    //     "quantity": "1.00 lbs",
    //     "caloriesperserving": "NA",
    //     "nuval": 100,
    //     "servingsize": "NA",
    //     "servingsperpackage": "Na",
    //     "nutritionlabel": "NA",
    //     "img": "./images/asparagus.jpeg"
    // }
];

class Grid extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <Table />
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    return(
      <div>
        {
            data.map(item =>
              <Col md={2}>
                <span>
                  <img src={item.img} height="42" width="42" />
                </span>
                <span>
                  {item.item}
                </span>
                <span>
                  {item.price}
                </span>
                <button>Add to Cart</button>
              </Col>
            )
          }
      </div>
    );
  }
}

// const Item = () => {
//   return(
//     <div>
//
//     </div>
//   );
// }

export default Grid;
