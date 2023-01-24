export default function Newsletter() {
  return (
    <div className="contact m-5 pb-5">
      <div>
        <h3 className="font-weight-bold mt-5 pl-5 pt-5">
          Join our newsletter and get 20% off
        </h3>
      </div>

      <div className="row justify-content-around mt-5 pl-5">
        <div className="col-6">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sed
            aperiam vel. Nam pariatur veritatis distinctio alias quisquam
            molestias, nesciunt velit deserunt earum illum nulla, unde quo
            repudiandae culpa. Quasi.
          </p>
        </div>
        <div className="col-6 pl-5 ">
          <input type="email" placeholder="email" className="email-input" />
          <button className="submit-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
