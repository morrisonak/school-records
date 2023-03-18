// app/components/DatePicker.tsx

import { useState } from "react";

type DatePickerProps = {
  onDateChange: (date: Date) => void;
};

export default function DatePicker({ onDateChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const date = new Date(selectedValue);
    setSelectedDate(date);
    onDateChange(date);
  };

  // Create an array of dates for the dropdown
  const today = new Date();
  const dateOptions = [
    { label: "Today", value: today.toISOString() },
    { label: "Yesterday", value: new Date(today.getTime() - 86400000).toISOString() },
    { label: "Two Days Ago", value: new Date(today.getTime() - 172800000).toISOString() }
  ];

  return (
    <div className="mb-4">
      <label htmlFor="date" className="block mb-2 text-gray-700">
        Select a Date:
      </label>
      <select
        id="date"
        name="date"
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleDateChange}
        value={selectedDate?.toISOString()}
      >
        {dateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} ({new Date(option.value).toLocaleDateString()})
          </option>
        ))}
      </select>
    </div>
  );
}
