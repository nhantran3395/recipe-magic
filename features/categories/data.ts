const mealsOfTheDay = {
  title: "Meals of the day",
  options: [
    {
      name: "Breakfast",
      thumbnail: "/breakfast.jpg",
    },
    {
      name: "Lunch",
      thumbnail: "/lunch.jpg",
    },
    {
      name: "Dinner",
      thumbnail: "/dinner.jpg",
    },
    {
      name: "Desserts",
      thumbnail: "/desserts.jpg",
    },
  ],
};

const healthyMeals = {
  title: "Healthy meals",
  options: [
    {
      name: "Vegan",
      thumbnail: "/vegan.jpg",
    },
    {
      name: "Vegetarian",
      thumbnail: "/vegetarian.jpg",
    },
    {
      name: "Low Sugar",
      thumbnail: "/low-sugar.jpg",
    },
    {
      name: "Nut Free",
      thumbnail: "/nut-free.jpg",
    },
  ],
};

const categories = [mealsOfTheDay, healthyMeals];

export default categories;