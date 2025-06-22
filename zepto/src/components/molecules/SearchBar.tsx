import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/theme.scss";
import "../../stories/searchbar.scss";

export interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const renderSearchText = (text: string) => {
  const parts = text.split('"');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <React.Fragment key={i}>
            <span className="searchbar-quote">"</span>
            {part}
            <span className="searchbar-quote">"</span>
          </React.Fragment>
        ) : (
          part
        )
      )}
    </>
  );
};

export const SearchBar = ({
  value,
  placeholder = "Search...",
  onChange,
}: SearchBarProps) => (
  <div className="searchbar-container">
    <span className="searchbar-icon">
      <SearchIcon fontSize="inherit" />
    </span>
    <input
      className="searchbar-input"
      type="text"
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
    />
    {!value && (
      <div className="searchbar-placeholder">
        {renderSearchText(placeholder)}
      </div>
    )}
    {value && (
      <div className="searchbar-text-display">{renderSearchText(value)}</div>
    )}
  </div>
);
