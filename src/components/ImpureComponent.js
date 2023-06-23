export default function ImpureComponent({ data }) {
  data.push(4);

  return (
    <ul>
      {data.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}
