import React, { useState, useEffect } from "react";
import WatchListCard from "../components/WatchListCard";
import WatchListAddForm from "../components/WatchListAddForm";
import watchListData from "../data/watchList.json";

interface WatchListItem {
  id: number;
  title: string;
  description: string;
  type: string;
  status: string;
}

const DashboardPage: React.FC = () => {
  const [watchList, setWatchList] = useState<WatchListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call with a timeout
    const fetchWatchList = async () => {
      try {
        // Simulating network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In a real scenario, this would be an actual API call
        const initialList = watchListData.map((item) => ({
          ...item,
          id: item.id, // Assuming the JSON already has unique IDs
        }));

        setWatchList(initialList);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch watch list", error);
        setIsLoading(false);
      }
    };

    fetchWatchList();
  }, []);

  const handleStatusChange = (id: number, newStatus: string) => {
    setWatchList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleAddItem = (newItemData: Omit<WatchListItem, "id">) => {
    // Generate a unique ID for the new item
    const randomId = Math.floor(Math.random() * 1000);
    const newItem = { ...newItemData, id: randomId };

    setWatchList((prevList) => [...prevList, newItem]);
  };

  if (isLoading) {
    return (
      <div className="dashboard-loading-container">
        <p className="text-xl">Loading watch list...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">My Watch List</h2>
      {watchList.length === 0 ? (
        <p className="watchlist-empty-message">No items in your watch list.</p>
      ) : (
        <div className="watchlist-grid">
          {watchList.map((item) => (
            <WatchListCard
              key={item.id}
              item={item}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
      <WatchListAddForm onAddItem={handleAddItem} />
    </div>
  );
};

export default DashboardPage;
