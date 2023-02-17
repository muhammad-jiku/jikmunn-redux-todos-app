import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosRequest } from '../utils/actions';

const Todos = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTodosRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h2> Loading... </h2>}
      {error && <h2> {error} </h2>}
      <section>
        {todos &&
          todos.slice(0, 25).map((todo) => (
            <article
              key={todo.id}
              style={{
                border: '1px solid black',
                padding: '10px',
                margin: '10px',
              }}
            >
              <h3>
                {todo.id}. {todo.title}{' '}
              </h3>
              <p>
                {todo.completed
                  ? "Hurrah! it's completed! by " + todo.userId
                  : 'Not Completed yet!'}{' '}
              </p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Todos;
