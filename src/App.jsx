import { useState } from "react";
import "./App.css";
import Countting from "./components/Countting";

const animal = [
    { name: "호랑이", type: "Carnivore" },
    { name: "토끼", type: "Herbivore" },
    { name: "기린", type: "Herbivore" },
    { name: "사자", type: "Carnivore" },
    { name: "쥐", type: "Omnivore" },
];

function App() {
    const [animals, setAnimals] = useState(animal);

    const [checkedList, setCheckedList] = useState({
        Carnivore: false,
        Herbivore: false,
        Omnivore: false,
    });

    const listAnimals = animals.map((animal, order) => {
        return <li key={order}>{animal.name}</li>;
    });

    const animalsHandle = (food, event) => {
        const newCheckedList = {
            ...checkedList,
            [food]: event.target.checked,
        };
        setCheckedList(newCheckedList);

        const { Carnivore, Herbivore, Omnivore } = newCheckedList;

        if (Carnivore || Herbivore || Omnivore) {
            setAnimals(
                animal.filter((animal) => {
                    return (
                        (Carnivore && animal.type === "Carnivore") ||
                        (Herbivore && animal.type === "Herbivore") ||
                        (Omnivore && animal.type === "Omnivore")
                    );
                })
            );
        } else {
            setAnimals(animal);
        }
    };

    return (
        <>
            <div>
                <Countting />
            </div>
            <fieldset>
                <legend>식성</legend>
                육식
                <input
                    type="checkbox"
                    checked={checkedList.Carnivore}
                    onChange={(event) => animalsHandle("Carnivore", event)}
                />
                초식
                <input
                    type="checkbox"
                    checked={checkedList.Herbivore}
                    onChange={(event) => animalsHandle("Herbivore", event)}
                />
                잡식
                <input
                    type="checkbox"
                    checked={checkedList.Omnivore}
                    onChange={(event) => animalsHandle("Omnivore", event)}
                />
            </fieldset>
            <ul>{listAnimals}</ul>
        </>
    );
}
export default App;
