
export default function Random() {
    let number = Math.random() * 100;
    return <h1 style={{ 'backgroundColor': '#76721167' }}>Random Number is : {Math.round(number)}</h1>
}
