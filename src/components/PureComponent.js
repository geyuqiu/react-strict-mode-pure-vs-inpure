export default function PureComponent({ data }) {
  return (
    <ul>
      {data.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}
