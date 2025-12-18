export function TabButton(props) {
    function handleClick() {
        console.log("Tab button clicked:");
    }
    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
