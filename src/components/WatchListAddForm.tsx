import React, { useState } from "react";

interface WatchListItem {
  id: number;
  title: string;
  description: string;
  type: string;
  status: string;
}

interface WatchListAddFormProps {
  onAddItem: (newItem: Omit<WatchListItem, "id">) => void;
}

const WatchListAddForm: React.FC<WatchListAddFormProps> = ({ onAddItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Movie",
    status: "Planning",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // Add the new item
    onAddItem(formData);

    // Reset form
    setFormData({
      title: "",
      description: "",
      type: "Movie",
      status: "Planning",
    });

    // Collapse form
    setIsExpanded(false);
  };

  return (
    <div className="watchlist-add-form">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="watchlist-add-form-expand-button"
        >
          Add New Watch List Item
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="watchlist-add-form-container">
          <div>
            <label htmlFor="title" className="watchlist-add-form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="watchlist-add-form-input"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="watchlist-add-form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="watchlist-add-form-input"
              placeholder="Enter description"
              required
            />
          </div>

          <div className="watchlist-add-form-grid">
            <div>
              <label htmlFor="type" className="watchlist-add-form-label">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="watchlist-add-form-input"
              >
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="watchlist-add-form-label">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="watchlist-add-form-input"
              >
                <option value="Planning">Planning</option>
                <option value="Watched">Watched</option>
              </select>
            </div>
          </div>

          <div className="watchlist-add-form-buttons">
            <button type="submit" className="watchlist-add-form-submit-button">
              Add Item
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="watchlist-add-form-cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default WatchListAddForm;
