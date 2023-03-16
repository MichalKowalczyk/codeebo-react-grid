import React from "react";
import DelayRender from "../DelayRender/DelayRender";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface GenericListStatusProps {
  status?: string;
  data?: any;
}

const GenericListStatus: React.FC<GenericListStatusProps> = (props) => {
  const { status, data } = props;

  return status !== "default" &&
    ((status === "finished" && (data === undefined || data === null || data?.length === 0)) ||
      (status === "failed" && (data === undefined || data === null || data?.length === 0)) ||
      (status === "loading" && !(data && data.length > 5))) ? (
    <DelayRender delay={500}>
      <div className={`list-row list-row--status list-row--status-${status} ${data !== undefined ? "row-absolute" : ""}`}>
        {status === "loading" ? (
          <>
            <div className="cell-6 loading-cell">
              <LoadingSpinner size="xs" active={true} className="spinner" />
              <span>WCZYTYWANIE</span>
            </div>
          </>
        ) : null}
        {status === "finished" && (data === undefined || data === null || data?.length === 0) ? (
          <>
            <div className="cell-6">BRAK WYNIKÓW</div>
          </>
        ) : null}
        {status === "failed" && (data === undefined || data === null || data?.length === 0) ? (
          <>
            <div className="cell-6">BŁĄD WCZYTYWANIA DANYCH</div>
          </>
        ) : null}
      </div>
    </DelayRender>
  ) : null;
};

export default GenericListStatus;
