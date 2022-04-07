interface MiddleDataProps {
  middleUp: string;
  setMiddleUp: Function;
  middleDown: string;
  setMiddleDown: Function;
}

export const MiddleData = ({
  middleDown,
  middleUp,
  setMiddleDown,
  setMiddleUp,
}: MiddleDataProps) => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-6">
          <label htmlFor="middle-up" className="form-label fw-bold">
            Middle Up
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="middle-up"
            placeholder="Enter Middle Up"
            value={middleUp}
            onChange={(event) => setMiddleUp(Number(event.target.value))}
          />
        </div>

        <div className="col-6">
          <label htmlFor="middle-down" className="form-label fw-bold">
            Middle Down
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="middle-down"
            placeholder="Enter Middle Down"
            value={middleDown}
            onChange={(event) => setMiddleDown(Number(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
