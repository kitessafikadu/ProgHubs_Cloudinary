import { useState } from "react";
import axios from "axios";
import { UploadCloud, Image } from "lucide-react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(data.message);
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Image className="text-blue-500" />
        Upload Image
      </h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleUpload}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
        <UploadCloud />
      </button>

      {imageUrl && (
        <div className="text-center">
          <p className="text-green-500 font-semibold">Upload Successful!</p>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-40 h-40 rounded mt-2 shadow"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
