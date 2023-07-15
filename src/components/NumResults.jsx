export function NumResults({ movies }) {
  return (
    <p className="justify-self-end text-lg">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
