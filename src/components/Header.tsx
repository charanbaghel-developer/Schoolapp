function Header() {
  return (
    <div className="container-fluid bg-primary mb-5">
  <div
    className="d-flex flex-column align-items-center justify-content-center"
    style={{ minHeight: "300px" }}
  >
    <h3 className="display-3 font-weight-bold text-white">
      About Us
    </h3>

    <div className="d-inline-flex text-white">
      <p className="m-0">
        <a className="text-white" href="/">
          Home
        </a>
      </p>

      <p className="m-0 px-2">/</p>

      <p className="m-0">About Us</p>
    </div>
  </div>
</div>
  );
}

export default Header;