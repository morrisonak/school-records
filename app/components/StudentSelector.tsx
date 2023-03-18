// src/components/StudentSelector.tsx

interface StudentSelectorProps {
    students: string[];
    selectedStudent: string;
    onStudentChange: (student: string) => void;
  }
  
  export default function StudentSelector({
    students,
    selectedStudent,
    onStudentChange,
  }: StudentSelectorProps) {
    return (
      <div className="mb-4">
        <label htmlFor="student" className="block mb-2 text-gray-700">
          Select Student
        </label>
        <select
          id="student"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedStudent}
          onChange={(e) => onStudentChange(e.target.value)}
        >
          {students.map((student) => (
            <option key={student} value={student}>
              {student}
            </option>
          ))}
        </select>
      </div>
    );
  }
  