import { useParams } from "react-router-dom";

export default function BlogDetailsPage() {
  const { blogId } = useParams();
  return <p>Blog details {blogId}</p>;
}
