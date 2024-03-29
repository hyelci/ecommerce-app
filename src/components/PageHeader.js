import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  return (
    <div>
      <div className="pageheader-container p-5 align-items-center text-capitalize">
        <h3 className="font-weight-bold">
          <Link className="pageheaderTitle" to="/">
            Home{" "}
          </Link>{" "}
          /<span> {title}</span>
        </h3>
      </div>
      <div></div>
    </div>
  );
}
