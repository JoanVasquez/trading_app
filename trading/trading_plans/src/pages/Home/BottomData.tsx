interface BottomDataProps {
  support: string;
  setSupport: Function;
  levelDown: string;
  setLevelDown: Function;
}

export const BottomData = ({
  levelDown,
  setLevelDown,
  setSupport,
  support,
}: BottomDataProps) => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-6">
          <label htmlFor="support" className="form-label fw-bold">
            Support
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="support"
            placeholder="Enter Support"
            value={support}
            onChange={(event) => setSupport(Number(event.target.value))}
          />
        </div>

        <div className="col-6">
          <label htmlFor="level-down" className="form-label fw-bold">
            Level Down
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="level-down"
            placeholder="Enter Level Down"
            value={levelDown}
            onChange={(event) => setLevelDown(Number(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
