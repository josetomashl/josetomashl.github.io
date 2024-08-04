import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div id="not-found-page">
      <h1>Oops!</h1>
      <p>The requested resource was not found...</p>
      <Link to={"/"}>Go back Home!</Link>
    </div>
  );
}
