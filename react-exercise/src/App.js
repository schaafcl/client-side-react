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

export default function App() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Greeting name="world" />
      <MyButton />
    </div>
  );
}


