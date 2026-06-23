// // 2. Extract information into an object

const person = {
    name: 'Gregorio Y. Zara',
    imageUrl: "https://react.dev/images/docs/scientists/7vQD0fPs.jpg",
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList1() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={person.imageUrl}
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}
