export default function TodoItem2() {
    let todoName = 'Go to college';
    let todoDate = '04/10/2023';
    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger kg-button">Delete</button></div>
            </div>
        </div>
    )
}
