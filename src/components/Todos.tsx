type TodosProps = {
    items: string[]
}

export default function Todos({ items }: TodosProps) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};
