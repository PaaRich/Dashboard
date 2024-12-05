import React, { useState, ChangeEvent } from "react";
import ProfileImg from "../assets/ProfileImg.jpeg";

const ProfilePictureUpload: React.FC = () => {
  // Default profile picture URL
  const [preview, setPreview] = useState<string>(ProfileImg);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await fetch("http://localhost:3000/upload-profile-pic", {
        method: "POST",
        body: formData,
      });

      const result: { filePath: string; message?: string } =
        await response.json();
      if (response.ok) {
        alert("Upload successful!");
        setPreview(result.filePath); // Update preview with the server path
      } else {
        alert("Upload failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  const handleDelete = (): void => {
    setFile(null);
    setPreview(defaultProfilePic);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="profile-pic-upload" className="cursor-pointer">
        <img
          src={preview}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
      </label>
      <input
        type="file"
        id="profile-pic-upload"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="ml-4 flex gap-4 ">
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
