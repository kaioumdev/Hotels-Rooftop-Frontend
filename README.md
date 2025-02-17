# Frontend - Hotels Rooftop Blog

This is the frontend part of a blog project focused on hotels with rooftop pools. It's built using React, Redux Toolkit, React Router, and Tailwind CSS.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For navigation and routing within the application.
*   **Redux Toolkit:**  For state management, including API interactions.
*   **Tailwind CSS:** A utility-first CSS framework for styling.
*   **Swiper.js:** For the hero section carousel.
*   **Editor.js:** A block-style editor for creating and managing blog post content.

## Project Structure

Key directories and files:

*   `src/`: Contains the main application code.
    *   `App.js`: Main component that sets up the layout (Navbar, Outlet, Footer).
    *   `components/`: Reusable components like Navbar and Footer.
    *   `pages/`: Contains different pages:
        *   `home/`: Home page components (Hero, Blogs).
        *   `blogs/`: Components for displaying blogs (SingleBlog, RelatedBlogs, etc.).
        *   `user/`: Login and Register pages.
        *   `admin/`: Admin dashboard and related components.
    *   `redux/`: Redux store configuration and API definitions.
        *   `features/`:  Redux slices for auth, blogs, and comments.
        *   `store.js`: Configures the Redux store.
    *   `utils/`: Utility functions, such as date formatting.
*   `public/`: Static assets like images.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kaiyumdev/Hotels-Rooftop-Frontend
    cd Hotels-Rooftop-Frontend  # Or the name of your frontend directory
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # Or yarn install
    ```

3.  **Configure environment variables:**

    *   This project relies on connecting to a backend server. Ensure your backend server is running and accessible.
    *   The base URL for API requests is set in `redux/features/blogs/blogsApi.js`, `redux/features/auth/authApi.js` and `redux/features/comments/commentApi.js` (currently `https://hotels-rooftop-backend-ivory.vercel.app/api/`).  Update these if your backend is running on a different address.

4.  **Start the development server:**

    ```bash
    npm start  # Or yarn start
    ```

    This will start the application in development mode, typically on `https://hotels-rooftop-backend-ivory.vercel.app`.

## Key Features

*   **Dynamic Routing:**  Uses React Router to handle different routes.
*   **State Management:** Redux Toolkit manages application state, user authentication, and API data.
*   **User Authentication:** Includes registration, login, and logout functionality.
*   **Admin Dashboard:** Protected route with features for managing posts and users.
*   **Blog Display:** Fetches and displays blog posts, including related posts and comments.
*   **Comment System:** Allows users to post comments on blog posts.
*   **Responsive Design:** Uses Tailwind CSS for a responsive layout.

## Redux RTK Query Endpoints

*   **authApi:**
    *   `registerUser`: Registers a new user.
    *   `loginUser`: Logs in an existing user.
    *   `logOut`: Logs out the current user.
    *   `getUser`: Gets all users.
    *   `deleteUser`: Deletes a user.
    *   `updateUserRole`: Updates a user's role.
*   **blogApi:**
    *   `fetchBlogs`: Fetches blog posts with optional search, category, and location filters.
    *   `fetchBlogsById`: Fetches a single blog post by ID.
    *   `fetchRelatedBlogs`: Fetches related blog posts.
    *   `postBlog`: Creates a new blog post.
    *   `updateBlog`: Updates an existing blog post.
    *   `deleteBlog`: Deletes a blog post.
*   **commentApi:**
    *   `postComment`: Posts a new comment.
    *   `getComments`: Gets all comments.

## Authentication

*   User authentication status is managed using Redux.
*   The `PrivateRouter` component protects admin-only routes.
*   User information is stored in local storage.

## Contributing

Contributions are welcome!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with descriptive messages.
4.  Push your branch to your fork.
5.  Submit a pull request.

## Deploying Live

To deploy this frontend application live, you can use platforms like Netlify, Vercel, or GitHub Pages. 

 **Vercel Live LInk:** [Live](https://hotels-rooftop-frontend.vercel.app).