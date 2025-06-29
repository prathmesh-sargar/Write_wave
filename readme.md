
---


# 📝 Blog Website with Rich Text Editor and MongoDB Integration

A full-stack blog CMS built using the MERN stack (MongoDB, Express, React, Node.js) featuring rich-text support, admin dashboard, SEO-friendly URLs, category-based filtering, and MongoDB for data storage. Perfect for learning, blogging, or personal publishing platforms.



## 🚀 Features

- ✅ **Admin Dashboard (CRUD)** — Create, edit, view, and delete blog posts easily.
- ✅ **Rich Text Editor (React Quill)** — Beautiful WYSIWYG editor for formatting blog content.
- ✅ **SEO-Friendly Slugs** — Auto-generated slugs based on blog titles for clean and searchable URLs.
- ✅ **MongoDB Integration** — All blog data stored securely in MongoDB with Mongoose.
- ✅ **Dynamic Post Viewing** — Posts are dynamically rendered using the URL slug.
- ✅ **Category Support** — Admin can assign categories for better filtering and organization.
- 🔄 **Dynamic Meta Tags for SEO** — (In progress) Meta tags generated per post using `react-helmet-async`.

---

```markdown

## 🧱 Tech Stack

**Frontend**:  
- React (with React Router DOM)
- React Quill (for rich text editing)
- fetch (for API calls)
- Tailwind CSS / DaisyUI (for styling)
- React Helmet Async (for SEO)

**Backend**:  
- Node.js with Express
- MongoDB with Mongoose
- JWT and bcryptjs (for authentication)
- dotenv and cookie-parser

```

## 📁 Folder Structure

/client     - React frontend 

/server     - Node.js backend

README.md   - Project documentation

````
---

## ⚙️ Getting Started (Local Setup)

### ✅ Prerequisites

- Node.js & npm
- MongoDB (local or MongoDB Atlas)
- Vite (for frontend dev server — auto installed)

---
````
### 📦 Backend Setup

1. Navigate to the backend directory:
```bash
cd server

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the backend:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

1. Navigate to the frontend directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `/client` directory:

```env
VITE_API_BASE_URL=
```

4. Start the frontend development server:

```bash
npm run dev
```

The frontend will typically run at `http://localhost:5173`.

---

## 🌐 Usage Instructions

* Visit `http://localhost:5173` in your browser.
* Admin can log in and create rich-text blog posts.
* Posts are accessible at:
  `http://localhost:5173/post/your-blog-title-slug`
* Posts can be filtered by category.

---



