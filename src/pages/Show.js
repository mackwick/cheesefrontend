import { useLoaderData, Form } from "react-router-dom";

function Show() {
  const cheese = useLoaderData();
  return (
    <div className="showCheese">
      <h1>{cheese.name}</h1>
      <img src={cheese.image} alt={cheese.name} />
      <h2>{cheese.title}</h2>

      <h2>Update {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
        <input
          type="input"
          name="name"
          placeholder="cheese's name"
          defaultValue={cheese.name}
        />
        <input
          type="input"
          name="image"
          placeholder="cheese's picture"
          defaultValue={cheese.image}
        />
        <input
          type="input"
          name="title"
          placeholder="cheese's title"
          defaultValue={cheese.title}
        />
        <input type="submit" value={`update ${cheese.name}`} />
      </Form>
      <h2>Delete {cheese.name}</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value={`delete ${cheese.name}`} />
      </Form>
    </div>
  );
}

export default Show;
