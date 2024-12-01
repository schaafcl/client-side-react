function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

// markup with JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>

  );
}

function ShoppingList() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  )

}

export default function App() {
  return (
    <>
      <h1>Welcome to my app!</h1>
      <Greeting name="world" />
      <MyButton />
      <AboutPage />
      <ShoppingList />    
      </>
  );
}





