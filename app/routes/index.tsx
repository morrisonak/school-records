// app/routes/index.tsx

import { useState } from "react";
import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import StudentSelector from "~/components/StudentSelector";
import StudyTypeSelector from "~/components/StudyTypeSelector";
import SubjectSelector from "~/components/SubjectSelector";
import UnitSelector from "~/components/UnitSelector";
import SubmitButton from "~/components/SubmitButton";
import DatePicker from "~/components/DatePicker";

function handleAddEntryClick() {
  // Logic for handling the "Add Entry" button click
}

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedStudyType, setSelectedStudyType] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [unitCount, setUnitCount] = useState(0);

  const students = ["Grant", "Micah", "Aaron"]; // Replace this array with actual student data
  const studyTypes = ["Reading", "Writing", "Math", "Science", "History"];
  const subjects = ["English", "Mathematics", "Biology", "Physics", "Chemistry"];

  const handleSubmit = () => {
    // Logic for handling form submission
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddEntryClick={handleAddEntryClick} />
      <main className="container mx-auto p-6">
        <StudentSelector
          students={students}
          selectedStudent={selectedStudent}
          onStudentChange={setSelectedStudent}
        />
        <StudyTypeSelector
          studyTypes={studyTypes}
          selectedStudyType={selectedStudyType}
          onStudyTypeChange={setSelectedStudyType}
        />
        <DatePicker onDateChange={handleDateChange} />
        <SubjectSelector
          subjects={subjects}
          selectedSubject={selectedSubject}
          onSubjectChange={setSelectedSubject}
        />
        <UnitSelector unitCount={unitCount} onUnitChange={setUnitCount} />
        <SubmitButton onSubmit={handleSubmit} />
        <Outlet />
      </main>
    </div>
  );
}
