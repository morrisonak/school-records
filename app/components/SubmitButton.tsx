// src/components/SubmitButton.tsx

interface SubmitButtonProps {
    onSubmit: () => void;
  }
  
  export default function SubmitButton({ onSubmit }: SubmitButtonProps) {
    return (
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onSubmit}
      >
        Submit
      </button>
    );
  }
  