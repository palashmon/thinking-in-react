// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const JsonApi = {
  products: [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football'
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball'
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball'
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch'
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5'
    },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
  ],
  cards: [
    {
      title: 'Card Title 1',
      text: 'Laudantium enim quasi est quidem magnam voluptate ipsam eos',
      src: 'https://picsum.photos/300/200?image=1040'
    },
    {
      title: 'Card Title 2',
      text: 'Oluptatem occaecati omnis eligendi aut ad oluptatem doloribus vel accusantium quis',
      src: 'https://picsum.photos/300/200?image=1003'
    },
    {
      title: 'Card Title 3',
      text: 'Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident',
      src: 'https://picsum.photos/300/200?image=1050'
    },
    {
      title: 'Card Title 4',
      text: 'Repudiandae veniam quaerat sunt sed lias aut fugiat sit autem sed est rerum culpa',
      src: 'https://picsum.photos/300/200?image=1015'
    },
    {
      title: 'Card Title 5',
      text: 'Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident',
      src: 'https://picsum.photos/300/200?image=961'
    },
    {
      title: 'Card Title 6',
      text: 'Repudiandae veniam quaerat sunt sed lias aut fugiat sit autem sed est rerum culpa',
      src: 'https://picsum.photos/300/200?image=1005'
    }
  ],
  getAllProducts: function() {
    return this.products;
  },
  getAllCards: function() {
    return this.cards;
  }
};

export default JsonApi;
