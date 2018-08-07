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
  getAllProducts: function() {
    return this.products;
  }
};

export default JsonApi;
