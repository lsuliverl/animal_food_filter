import { useState } from "react";
import "./App.css";
import Countting from "./components/Countting";

const animal = [
    { name: "호랑이", type: "육식" },
    { name: "토끼", type: "초식" },
    { name: "기린", type: "초식" },
    { name: "사자", type: "육식" },
    { name: "쥐", type: "잡식" },
];

function App() {
    const [animals, setAnimals] = useState(animal);

    const [checkedList, setCheckedList] = useState([
        { checkedCarnivore: false, type: "육식" },
        { checkedHerbivore: false, type: "초식" },
        { checkedOmnivore: false, type: "잡식" },
    ]);

    const listAnimals = animals.map((animal, order) => {
        return <li key={order}>{animal.name}</li>;
    });

    const animalsHandle = (food) => {
        if (checkedList[food]) {
            checkedList.type[food] = true;
            const animalsfiltered = animal.filter((animal) => animal.type === food);
            setAnimals(animalsfiltered);
        }
        setCheckedList(checkedList);
    };

    // const handleCarnivore = (event) => {
    //     setCheckedList(event.target.checked);
    //     if (event.target.checked) {
    //         const filteredCarnivore = animal.filter((carnivoreAnimal) => carnivoreAnimal.type === "육식");
    //         setAnimals(filteredCarnivore);
    //     } else if (!event.target.checked) {
    //         setCheckedList({ ...checkedList, checkedCarnivore: false });
    //         setAnimals(animal);
    //     }
    // };

    // const handleHerbivore = (event) => {
    //     setCheckedList(event.target.checked);
    //     if (event.target.checked) {
    //         setCheckedList({ ...checkedList, checkedHerbivore: true });
    //         const filteredHerbivore = animal.filter((herbivoreAnimal) => herbivoreAnimal.type === "초식");
    //         setAnimals(filteredHerbivore);
    //     } else if (!event.target.checked) {
    //         setCheckedList({ ...checkedList, checkedHerbivore: false });
    //         setAnimals(animal);
    //     }
    // };

    // const handleOmnivore = (event) => {
    //     setCheckedList(event.target.checked);
    //     if (event.target.checked) {
    //         setCheckedList({ ...checkedList, checkedOmnivore: true });
    //         const filteredOmnivore = animal.filter((omnivoreAnimal) => omnivoreAnimal.type === "잡식");
    //         setAnimals(filteredOmnivore);
    //     } else if (!event.target.checked) {
    //         setCheckedList({ ...checkedList, checkedOmnivore: false });
    //         setAnimals(animal);
    //     }
    // };

    return (
        <>
            <div>
                <Countting />
            </div>
            <fieldset>
                <legend>식성</legend>
                육식
                <input type="checkbox" checked={checkedList.checkedCarnivore} onChange={animalsHandle("육식")} />
                초식
                <input type="checkbox" checked={checkedList.checkedHerbivore} onChange={animalsHandle("초식")} />
                잡식
                <input type="checkbox" checked={checkedList.checkedOmnivore} onChange={animalsHandle("잡식")} />
            </fieldset>
            <ul>{listAnimals}</ul>
        </>
    );
}
export default App;
