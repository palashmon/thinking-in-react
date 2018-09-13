# Thinking In React

A walk through the thought process of building simple apps using React [blog](https://reactjs.org/docs/thinking-in-react.html) post "Thinking in React" concept.

<br/>

## Steps

- Start With A Mock
- Break The UI Into A Component Hierarchy
- Build A Static Version in React
- Identify The Minimal (but complete) Representation Of UI State
- Identify Where Your State Should Live
- Add Inverse Data Flow

<br/>

## Practice Apps

### Simple Product List

A simple product list display app with simple user interaction. Components hierarchy is like:

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

Our state lives in `FilterableProductTable` like `state = {filterText: '', inStockOnly: false}`. Then, we pass `filterText` and `inStockOnly` to `ProductTable` and `SearchBar` as a prop. Finally, we use these props to filter the rows in `ProductTable` and set the values of the form fields in `SearchBar`.

### Simple Card List

A simple card list display app. First we create a `Card` component and once we have a single `Card` component rendering, we try to display a list of them with some fake data. Components hierarchy is like:

- Cards
  - Card
    - CardImageTop
    - CardBody
      - CardTitle
      - CardText

### Shuffle Cards

A simple project to shuffle a deck of cards. When the deck has been shuffled users are given the option to reset the deck back to the initial state or continue shuffling. Components hierarchy is like:

- Deck
  - Card
    - CardTop
    - CardNumber
    - CardBottom
