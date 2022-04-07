import { useState } from "react";

interface UpDataProps {
  levelUp: string;
  setLevelUp: Function;
  resistence: string;
  setResistence: Function;
}

export const UpData = ({
  levelUp,
  setLevelUp,
  resistence,
  setResistence,
}: UpDataProps) => {
  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-6">
          <label htmlFor="level-up" className="form-label fw-bold">
            Level Up
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="level-up"
            placeholder="Enter Level Up"
            value={levelUp}
            onChange={(event) =>
              setLevelUp(parseFloat(event.target.value.replace(",", ".")))
            }
          />
        </div>
        <div className="col-6">
          <label htmlFor="resistence" className="form-label fw-bold">
            Resistence
          </label>
          <input
            type="number"
            step={"0.1"}
            className="form-control"
            id="resistence"
            placeholder="Enter Resistence"
            value={resistence}
            onChange={(event) => setResistence(parseFloat(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
