// import React from "react"; Раньше нужно было подключать
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";
// Тут описали нашу БД costs и сделали вывод полей с покупками.
const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 5, 18),
        description: 'MacBook',
        amount: 9499.99,
    },
    {
        id: 'c3',
        date: new Date(2020, 10, 2),
        description: 'Clothes',
        amount: 199.99,
    }
];


const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

// Старый стиль написания на React
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'Начнем изучение React!'),
//         React.createElement(Costs, { costs: costs} )
//     );

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        });
    }

  return (
    <div>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs} />
    </div>
    );
}

export default App;
