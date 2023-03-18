// src/components/UnitSelector.tsx

interface UnitSelectorProps {
    unitCount: number;
    onUnitChange: (unit: number) => void;
  }
  
  export default function UnitSelector({ unitCount, onUnitChange }: UnitSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="units" className="block mb-2 text-gray-700">
          Units Completed (1 unit = 30 min)
        </label>
        <input
          type="number"
          id="units"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          value={unitCount}
          onChange={(e) => onUnitChange(parseInt(e.target.value, 10))}
        />
      </div>
    );
  }
  