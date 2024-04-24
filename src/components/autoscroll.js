import "../back-to-top.js";

function Autoscroll() {
  return (
    <div className="Autoscroll">
      <section>
        <>
          <a
            href="javascript:void(0);"
            id="scroll"
            title="Scroll to Top"
            style={{ display: "none" }}
          >
            Top
            <span />
          </a>
        </>
      </section>
    </div>
  );
}

export default Autoscroll;
