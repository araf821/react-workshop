import React, { useState } from "react";

interface WatchListItem {
  id: number;
  title: string;
  description: string;
  type: string;
  status: string;
}

interface WatchListCardProps {
  item: WatchListItem;
  onStatusChange: (id: number, newStatus: string) => void;
}

const WatchListCard: React.FC<WatchListCardProps> = ({
  item,
  onStatusChange,
}) => {
  const [status, setStatus] = useState(item.status);

  const toggleStatus = () => {
    const newStatus = status === "Watched" ? "Planning" : "Watched";
    setStatus(newStatus);
    onStatusChange(item.id, newStatus);
  };

  return (
    <div className="watchlist-card">
      <div>
        <div className="watchlist-card-header">
          <h3>{item.title}</h3>
          <span>{item.type}</span>
        </div>
        <p>{item.description}</p>
      </div>
      <div className="watchlist-card-footer">
        <span
          className={`status-badge ${
            status === "Watched"
              ? "status-badge-watched"
              : "status-badge-planning"
          }`}
        >
          {status}
        </span>
        <button onClick={toggleStatus} className="toggle-button">
          Toggle Status
        </button>
      </div>
    </div>
  );
};

export default WatchListCard;
