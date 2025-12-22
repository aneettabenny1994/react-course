export function Results({ input }) {
    return (
        <section id="results">
            <h2>Investment Results</h2>
            <p>Total Invested Amount: {input.initialInvestment}</p>
        </section>
    );
}
