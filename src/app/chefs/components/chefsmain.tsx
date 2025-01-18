import Card from "./card";

export default async function Main() {
    return (
        <div>
            {await Card()}
        </div>
    )
}