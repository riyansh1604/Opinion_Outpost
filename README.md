# Opinion Outpost 📝

A beautiful, full-featured social posting application built with **Node.js**, **Express**, and **EJS**. Share your thoughts and opinions in a sleek, modern interface.

## 🎯 Features

- **Create Posts** - Share your thoughts with a username and content
- **View All Posts** - Browse through all posts on the main feed with a beautiful card layout
- **View Post Details** - Click on any post to see the full details including the post ID
- **Edit Posts** - Update the content of your posts anytime
- **Delete Posts** - Remove posts you no longer want
- **Responsive Design** - Beautiful UI that works on desktop and mobile devices
- **Unique Post IDs** - Each post gets a unique UUID for reliable identification
- **Glass-morphism UI** - Modern, semi-transparent cards with backdrop blur effects

## 🛠 Tech Stack

- **Backend**: Node.js + Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with glass-morphism effects
- **ID Generation**: UUID v4
- **HTTP Methods**: GET, POST, PATCH, DELETE (with method-override support)

## 📋 Project Structure

```
Post app/
├── index.js                 # Main server file
├── package.json             # Dependencies and metadata
├── package-lock.json        # Dependency lock file
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── public/
│   ├── style.css           # Global stylesheet with glass-morphism design
│   └── bg.jpg              # Background image
└── views/
    ├── index.ejs           # Posts list page
    ├── show.ejs            # Post detail page
    ├── form.ejs            # Create new post page
    ├── edit.ejs            # Edit post page
    ├── footer.ejs          # Footer component (if applicable)
    ├── head.ejs            # Head component (if applicable)
    └── includes/           # Includes folder for shared components
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Post-app.git
   cd Post-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   # or use nodemon for development
   nodemon index.js
   ```

4. **Open in browser**
   ```
   http://localhost:8080/posts
   ```

## 📖 Usage Guide

### View All Posts
Navigate to `http://localhost:8080/posts` to see the main feed with all posts displayed in beautiful cards.

### Create a New Post
1. Click **"Create a new Post"** button
2. Enter your username
3. Write your opinion/thought in the content area
4. Click **"Submit Post"**

### View Post Details
- Click **"See in detail"** on any post card to view the full post with its unique ID

### Edit a Post
1. Click **"Edit the post"** on any post
2. Update the content in the text area
3. Click **"Submit post"** to save changes

### Delete a Post
- Click the **"Delete Post"** button on any post card to remove it permanently

## 🎨 UI/UX Features

- **Glass-morphism Design**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Hover effects and transitions on buttons
- **Responsive Layout**: Adapts beautifully to all screen sizes
- **Color Scheme**: 
  - Blue accent colors for primary actions
  - Red for delete actions
  - Clean, readable typography
- **Backdrop Effects**: Beautiful layered background with overlay

## 🔧 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/posts` | Get all posts |
| GET | `/posts/new` | Show create post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | Get post details |
| GET | `/posts/:id/edit` | Show edit post form |
| PATCH | `/posts/:id` | Update post content |
| DELETE | `/posts/:id` | Delete a post |

## 📦 Dependencies

- **express** (^5.2.1) - Web framework
- **ejs** (^5.0.2) - Template engine
- **uuid** (^14.0.0) - Unique ID generation

## 💾 In-Memory Data Storage

**Note**: This app currently stores posts in memory. This means:
- Posts will be lost when the server restarts
- Perfect for development and testing
- For production, consider adding a database (MongoDB, PostgreSQL, etc.)

### Adding Database Support

To persist data, consider integrating:
- **MongoDB** with Mongoose
- **PostgreSQL** with Sequelize or TypeORM
- **Firebase** for real-time database

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📝 License

This project is open source and available under the ISC License.

## 👤 Author

**Priyanshu Dubey**

## 🐛 Known Issues & Future Improvements

- [ ] Add database persistence (MongoDB/PostgreSQL)
- [ ] Add user authentication and authorization
- [ ] Add post categories/tags
- [ ] Add search and filter functionality
- [ ] Add pagination for large number of posts
- [ ] Add comments on posts
- [ ] Add like/reaction system
- [ ] Add real-time updates with WebSockets
- [ ] Add image upload support

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Enjoy sharing your opinions! 🎉**
