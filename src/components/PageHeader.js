import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  return (
    <div>
      <div className="pageheader-container p-5 align-items-center ">
        <h3 className="font-weight-bold">
          <Link to="/">Home </Link> / {title}
        </h3>
      </div>
      <div></div>
    </div>
  );
}
