// src/components/SubjectSelector.tsx

interface SubjectSelectorProps {
    subjects: string[];
    selectedSubject: string;
    onSubjectChange: (subject: string) => void;
  }
  
  export default function SubjectSelector({
    subjects,
    selectedSubject,
    onSubjectChange,
  }: SubjectSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 text-gray-700">
          Subject
        </label>
        <select
          id="subject"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
    );
  }
  