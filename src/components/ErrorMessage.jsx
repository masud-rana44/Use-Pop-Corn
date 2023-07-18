export default function ErrorMessage({ message = "There was an error!" }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}
