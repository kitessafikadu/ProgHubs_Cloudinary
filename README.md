# ProgHubs Cloudinary Image Upload 

## 📌 Project Overview
This is an application for uploading and storing images efficiently with **Cloudinary**.
The frontend is built using **Vite** for a fast development experience.

## ✨ Features
- 📸 **Image Upload** (Users can upload images via an input field)
- ☁️ **Cloud Storage** (Stores images on Cloudinary)
- 🚀 **Fast Frontend** (Built with Vite for optimal performance)
- 🎨 **UI with Tailwind CSS**
- 🔗 **REST API** for handling image uploads

## 🛠️ Setup Instructions
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/ProgHubs_Cloudinay
cd ProgHubs_Cloudinay
```

### 2️⃣ **Backend Setup**
```sh
cd backend
npm install
```
- Create a **.env** file in `backend/` and add:
  ```
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret
  PORT=4000
  ```
- Start the backend:
  ```sh
  npm run dev
  ```

### 3️⃣ **Frontend Setup**
```sh
cd frontend
npm install
```
- Start the frontend:
  ```sh
  npm run dev
  ```

## 🚀 Usage
1. Open **http://localhost:5173** (Vite default port).
2. Select an image and click **Upload**.
3. The image gets uploaded to Cloudinary, and its URL is displayed on the screen.

