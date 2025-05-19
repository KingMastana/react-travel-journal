import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

function App() {
  const entryElements = data.map((entry) => (
    <Entry
      key={entry.id}
      country={entry.country}
      img={entry.img}
      mapsLink={entry.googleMapsLink}
      title={entry.title}
      dates={entry.dates}
      text={entry.text}
    />
  ));
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
