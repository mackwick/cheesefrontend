import { Link, useLoaderData, Form } from "react-router-dom";

function Index() {
  const cheese = useLoaderData();
  return (
    <div>
      <h2>Add a Cheese</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="name your cheese" />
        <input type="input" name="image" placeholder="show me your cheese" />
        <input
          type="input"
          name="title"
          placeholder="cheese's official title"
        />
        <input type="submit" value="add the cheese" />
      </Form>

      <h2>All the Cheese</h2>
      {cheese.map((one) => (
        <div key={one._id} className="oneCheese">
          <Link to={`/${one._id}`}>
            <h1>{one.name}</h1>
          </Link>
          <img src={one.image} alt={one.name} />
          <h3>{one.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Index;
