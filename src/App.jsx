import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const upNumber = () => {
        setCount(count + 1);
    };

    const downNumber = () => {
        setCount(count - 1);
    };

    const animal = [
        { name: "호랑이", type: "육식" },
        { name: "토끼", type: "초식" },
        { name: "기린", type: "초식" },
        { name: "사자", type: "육식" },
        { name: "쥐", type: "잡식" },
    ];
    const [animals, setAnimals] = useState(animal);

    const listAnimals = animals.map((animal, order) => {
        return <li key={order}>{animal.name}</li>;
    });

    const [checkedCarnivore, setCheckedCarnivore] = useState(false);

    const handleCarnivore = (event) => {
        setCheckedCarnivore(event.target.checked);
        if (event.target.checked) {
            const filteredCarnivore = animals.filter((carnivoreAnimal) => carnivoreAnimal.type === "육식");
            setAnimals(filteredCarnivore);
        }
    };

    console.log(checkedCarnivore);

    const filteredHerbivore = animals.filter((herbivoreAnimal) => herbivoreAnimal.type === "초식");
    const filteredOmnivore = animals.filter((omnivoreAnimal) => omnivoreAnimal.type === "잡식");

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={upNumber}>누르면 숫자 1 증가</button>
                <button onClick={downNumber}>누르면 숫자 1 감소</button>
            </div>
            <fieldset>
                <legend>식성</legend>
                육식
                <input type="checkbox" checked={checkedCarnivore} onChange={handleCarnivore} />
                초식
                <input type="checkbox" />
                잡식
                <input type="checkbox" />
            </fieldset>
            <ul>{listAnimals}</ul>
        </>
    );
}

export default App;
