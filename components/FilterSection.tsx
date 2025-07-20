import { useState } from "react";
import Pill from "./Pills"; // Ensure this matches your actual component/file name

const filter = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Pet Friendly",
    "Beach Front",
    "Mountain View"
];

const FilterSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("");

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter === activeFilter ? "" : filter);
    };

    return (
        <div className="flex flex-wrap gap-2 my-4">
            {filter.map((filter) => (
                <Pill
                    key={filter}
                    label={filter}
                    onClick={() => handleFilterClick(filter)}
                    isActive={activeFilter === filter}
                />
            ))}
        </div>
    );
};

export default FilterSection;