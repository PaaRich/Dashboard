import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FileInput = () => {
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg max-w-[300px]">
      <label
        htmlFor="file-input"
        className="mb-4 text-lg font-semibold text-gray-700"
      >
        <span className="flex items-center gap-x-2">
          Upload a file
          <FaPlus />
        </span>
      </label>
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        className="mb-4 p-2 border-2 border-black w-[90%]  rounded-lg cursor-pointer"
      />
      {file && (
        <div className="mt-4 text-center text-gray-600">
          <p>
            Selected File: <span className="font-semibold">{file.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
