import 'bootstrap/dist/css/bootstrap.css';

function TodoMaker() {
  return (
    <>
      <input className='form-control' placeholder='What needs to be done?' />
    </>
  );
};

function Todos() {
  return (
    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
      <span>Salom</span>
      <div>
        <button className="btn btn-success btn-sm mr-2">Done</button>
        <button className="btn btn-danger btn-sm">X</button>
      </div>
    </li>
  );
};

export { Todos };
export default TodoMaker;