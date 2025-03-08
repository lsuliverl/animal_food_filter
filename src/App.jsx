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
    const [checkedList, setCheckedList] = useState({
        checkedCarnivore: false,
        checkedHerbivore: false,
        checkedOmnivore: false,
    });

    const handleCarnivore = (event) => {
        setCheckedList(event.target.checked);
        if (event.target.checked) {
            setCheckedList({ ...checkedList, checkedCarnivore: true });
            const filteredCarnivore = animal.filter((carnivoreAnimal) => carnivoreAnimal.type === "육식");
            setAnimals(filteredCarnivore);
        } else if (!event.target.checked) {
            setCheckedList({ ...checkedList, checkedCarnivore: false });
            setAnimals(animal);
        }
    };

    const handleHerbivore = (event) => {
        setCheckedList(event.target.checked);
        if (event.target.checked) {
            setCheckedList({ ...checkedList, checkedHerbivore: true });
            const filteredHerbivore = animal.filter((herbivoreAnimal) => herbivoreAnimal.type === "초식");
            setAnimals(filteredHerbivore);
        } else if (!event.target.checked) {
            setCheckedList({ ...checkedList, checkedHerbivore: false });
            setAnimals(animal);
        }
    };

    const handleOmnivore = (event) => {
        setCheckedList(event.target.checked);
        if (event.target.checked) {
            setCheckedList({ ...checkedList, checkedOmnivore: true });
            const filteredOmnivore = animal.filter((omnivoreAnimal) => omnivoreAnimal.type === "잡식");
            setAnimals(filteredOmnivore);
        } else if (!event.target.checked) {
            setCheckedList({ ...checkedList, checkedOmnivore: false });
            setAnimals(animal);
        }
    };

    // const [checkedCarnivore, setCheckedCarnivore] = useState(false);

    // const handleCarnivore = (event) => {
    //     setCheckedCarnivore(event.target.checked);
    //     if (event.target.checked) {
    //         const filteredCarnivore = animal.filter((carnivoreAnimal) => carnivoreAnimal.type === "육식");
    //         setAnimals(filteredCarnivore);
    //     } else if (!event.target.checked) {
    //         setAnimals(animal);
    //     }
    // };

    // const [checkedHerbivore, setCheckedHerbivore] = useState(false);
    // const handleHerbivore = (event) => {
    //     setCheckedHerbivore(event.target.checked);
    //     if (event.target.checked) {
    //         const filteredHerbivore = animal.filter((herbivoreAnimal) => herbivoreAnimal.type === "초식");
    //         setAnimals(filteredHerbivore);
    //     } else if (!event.target.checked) {
    //         setAnimals(animal);
    //     }
    // };

    // const [checkedOmnivore, setCheckedOmnivore] = useState(false);
    // const handleOmnivore = (event) => {
    //     setCheckedOmnivore(event.target.checked);
    //     if (event.target.checked) {
    //         const filteredOmnivore = animal.filter((omnivoreAnimal) => omnivoreAnimal.type === "잡식");
    //         setAnimals(filteredOmnivore);
    //     } else if (!event.target.checked) {
    //         setAnimals(animal);
    //     }
    // };

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
                <input type="checkbox" checked={checkedList.checkedCarnivore} onChange={handleCarnivore} />
                초식
                <input type="checkbox" checked={checkedList.checkedHerbivore} onChange={handleHerbivore} />
                잡식
                <input type="checkbox" checked={checkedList.checkedOmnivore} onChange={handleOmnivore} />
            </fieldset>
            {/* <fieldset>
                <legend>식성</legend>
                육식
                <input type="checkbox" checked={checkedCarnivore} onChange={handleCarnivore} />
                초식
                <input type="checkbox" checked={checkedHerbivore} onChange={handleHerbivore} />
                잡식
                <input type="checkbox" checked={checkedOmnivore} onChange={handleOmnivore} />
            </fieldset> */}
            <ul>{listAnimals}</ul>
        </>
    );
}

export default App;
