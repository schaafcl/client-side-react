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



export default function App() {
  return (
    <>
      <h1>Welcome to my app!</h1>
      <Greeting name="world" />
      <MyButton />
      <AboutPage />
    
      
      </>
  );
}





