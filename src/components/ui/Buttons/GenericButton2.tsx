
import "./style.css";

const GenericButton2 = () => {
  return (
   
    <section className="buttonsB">
      <div className="containerB">
        <a className="btn btn-1" href="#" title="borde animado SVG">
          {/* <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg> */}
          <svg>
            <rect x="0" y="0" width="100%" height="100%" rx="25" ry="25" fill="none" stroke="black"/>
          </svg>
          Cotiza 
        </a>
      </div>
    </section>
    
  );
};

export default GenericButton2;
  