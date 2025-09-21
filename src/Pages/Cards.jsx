import { useEffect, useState } from 'react';
import './Cards.css';

export function Cards() {
    const [cards, setCards] = useState([]);
    useEffect(function () {
        setCards([{
            name: "JEE",
            icon: "----=>"
        }, {
            name: "Neet",
            icon: "----=>"
        }])

    }, [])


    const cardComponents = cards.map(card => <Card>
        <div>
            <div>{card.name}</div>
            <div>{card.icon}</div>
        </div>
    </Card>)

    return (
        <>
            {cardComponents}
        </>
    )

}

function Card({ children }) {

    return (
        <>
            <div className="card">
                {children}
            </div>
        </>
    )
}