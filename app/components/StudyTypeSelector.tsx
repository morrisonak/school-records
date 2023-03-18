// src/components/StudyTypeSelector.tsx

interface StudyTypeSelectorProps {
    studyTypes: string[];
    selectedStudyType: string;
    onStudyTypeChange: (studyType: string) => void;
  }
  
  export default function StudyTypeSelector({
    studyTypes,
    selectedStudyType,
    onStudyTypeChange,
  }: StudyTypeSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="studyType" className="block mb-2 text-gray-700">
          Study Type
        </label>
        <select
          id="studyType"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedStudyType}
          onChange={(e) => onStudyTypeChange(e.target.value)}
        >
          {studyTypes.map((studyType) => (
            <option key={studyType} value={studyType}>
              {studyType}
            </option>
          ))}
        </select>
      </div>
    );
  }
  