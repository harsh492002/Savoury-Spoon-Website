export interface MenuItem {
  name: string
  ingredients: string
  method: string
  image: string
  tag?: string
}

export interface MenuCategory {
  id: string
  chapter: string
  title: string
  subtitle: string
  accent: string
  accentLight: string
  gradient: string
  items: MenuItem[]
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&h=480&q=80`

export const menuCategories: MenuCategory[] = [
  {
    id: 'the-egg',
    chapter: 'Chapter 2',
    title: 'The Egg',
    subtitle: 'Fourteen signature egg preparations — bold, rustic, unforgettable',
    accent: '#e8871e',
    accentLight: 'rgba(232,135,30,0.18)',
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
    items: [
      {
        name: 'Boiled Egg',
        ingredients: 'Eggs, Salt, Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Masala Omelet',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
         image: '/Images/EggDish2.jpg',
        tag: 'Popular',
      },
      {
        name: 'Limbu Masala Omelet',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato, Lime',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
         image: '/Images/EggDish3.jpg',
      },
      {
        name: 'Half Fry',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish4.jpg',
      },
      {
        name: 'Tomato Fry',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish5.jpg',
      },
      {
        name: 'Lasan Fry',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato, Garlic',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish6.jpg',
      },
      {
        name: 'Australian Fry',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Onion & Tomato',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Bhurji',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Gotala',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Pullet',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Tikheri',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Lachko',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Egg Lahori',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
      },
      {
        name: 'Chef Special 8 Idiots',
        ingredients: 'Eggs, Oil/Butter, Salt, Masala/Spices, Chef\'s Secret Blend',
        method: 'Cook fresh using standard kitchen recipe and serve hot.',
        image: '/Images/EggDish1.jpg',
        tag: 'Chef\'s Pick',
      },
    ],
  },
  {
    id: 'fast-food',
    chapter: 'Chapter 3',
    title: 'Fast Food & Appetizers',
    subtitle: 'Crispy bites and loaded favourites to kick off your meal',
    accent: '#c1440e',
    accentLight: 'rgba(193,68,14,0.15)',
    gradient: 'from-rose-500/20 via-pink-500/10 to-red-500/5',
    items: [
      {
        name: 'Fries',
        ingredients: 'Potatoes, Oil, Salt',
        method: 'Deep fry until crispy and season well.',
        image: img('photo-1573080496219-bb080dd4f877'),
      },
      {
        name: 'Nachos with Dips',
        ingredients: 'Nachos, Cheese Sauce, Salsa, Sour Cream',
        method: 'Arrange nachos and serve with dips.',
        image: '/Images/Nachos1.jpg',
        tag: 'Shareable',
      },
      {
        name: 'Loaded Fries with Cheese Sauce',
        ingredients: 'French Fries, Cheese Sauce, Jalapeno, Sauces',
        method: 'Top fries with cheese sauce and jalapeno.',
        image: '/Images/EggDish6.jpg',
        tag: 'Bestseller',
      },
      {
        name: 'Jalapeno Poppers',
        ingredients: 'Jalapeno, Cheese Filling, Breadcrumbs',
        method: 'Stuff jalapeno with cheese and fry until golden.',
        image: '/Images/pappers.jpg',
      },
    ],
  },
  {
    id: 'beverages',
    chapter: 'Chapter 4',
    title: 'Hot & Cold Beverages',
    subtitle: 'Warm cups and cool sips to pair with every craving',
    accent: '#1a8a7d',
    accentLight: 'rgba(26,138,125,0.15)',
    gradient: 'from-cyan-500/20 via-sky-500/10 to-blue-500/5',
    items: [
      {
        name: 'Masala Tea',
        ingredients: 'Water - 150ml, Milk - 100ml, Tea Powder - 1 tsp, Sugar - 2 tsp, Masala Spice Mix - 1 tsp',
        method: 'Boil all ingredients together and serve hot.',
        image: '/Images/Tea.jpg',
        tag: 'Classic',
      },
      {
        name: 'British Tea',
        ingredients: 'Water - 200ml, Tea Bag - 1, Milk - 30ml',
        method: 'Add tea bag to hot water and serve.',
        image: img('photo-1556679343-c7306c1976bc'),
      },
      {
        name: 'Oreo Shake',
        ingredients: 'Oreo Biscuits - 4, Milk - 250ml, Vanilla Ice Cream - 2 scoops',
        method: 'Blend all ingredients with ice.',
        image: '/Images/OreoShake1.jpg',
        tag: 'Indulgent',
      },
    ],
  },
  {
    id: 'street-food',
    chapter: 'Chapter 5',
    title: 'Street Food',
    subtitle: 'Iconic Indian street classics, served hot and fresh',
    accent: '#5c1a1a',
    accentLight: 'rgba(92,26,26,0.12)',
    gradient: 'from-emerald-500/20 via-green-500/10 to-lime-500/5',
    items: [
      {
        name: 'Vada Pav',
        ingredients: 'Pav Bread - 1, Potato Vada - 1, Chutneys',
        method: 'Toast pav, add chutney and vada, serve hot.',
        image: '/Images/Vadapav1.jpg',
        tag: 'Mumbai Classic',
      },
      {
        name: 'Veg Cheese Sandwich',
        ingredients: 'Bread, Fresh Vegetables, Cheese, Butter, Spices',
        method: 'Grill with fresh veggies and cheese until golden.',
        image: '/Images/Veg Cheese Sandwich.jpg',
      },
      {
        name: 'Paneer Roll',
        ingredients: 'Wrap, Paneer Filling, Sauce',
        method: 'Fill wrap with paneer mixture and roll.',
        image: '/Images/Aloo Paratha.jpg',
      },
      {
        name: 'Punjabi Samosa',
        ingredients: 'Pastry Dough, Potato Filling',
        method: 'Fill dough and deep fry until golden.',
        image: '/Images/Punjabi Samosa.jpg',
      },
      {
        name: 'Aloo Paratha',
        ingredients: 'Wheat Dough, Potato Filling, Butter',
        method: 'Stuff dough and cook on tawa.',
        image: '/Images/Aloo Paratha.jpg',
        tag: 'Comfort Food',
      },
      {
        name: 'Schezwan Chowmein',
        ingredients: 'Noodles, Vegetables, Schezwan Sauce, Spices, Oil',
        method: 'Stir-fry noodles with vegetables and schezwan sauce until hot.',
        image: '/Images/Schezwan Chowmein.jpg',
        tag: 'Spicy',
      },
    ],
  },
]
