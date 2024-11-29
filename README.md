# My Portfolio Website

This is a personal portfolio website built using **Next.js** and hosted on **Namecheap** with a custom server (`server.js`).

## Features

- **Next.js Framework**: Modern, fast, and scalable React-based framework.
- **Custom Server**: Uses a Node.js custom server (`server.js`) for advanced routing and flexibility.
- **Responsive Design**: Optimized for all screen sizes.
- **Fast Loading**: Pre-rendered static pages for better performance.
- **Tailwind CSS**: For easy and modern styling.

---

## Requirements

To run or develop this project locally, you need:

- **Node.js**: v16+ (or as supported by your hosting).
- **npm** or **yarn** for managing dependencies.
- **Hosting**: Namecheap or similar Node.js-compatible hosting.

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project for production:

   ```bash
   npm run build
   ```

4. Run the development server locally (optional):
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Deployment

This project is deployed on **Namecheap** using **cPanel** with the following steps:

1. **Prepare for Deployment**:

   - Build the project locally using `npm run build`.
   - Upload the `public` folder, `.next` folder, `package.json`, and other required files to your server.

2. **Configure the Server**:

   - Use the `server.js` file to handle routing and start the app.
   - Make sure the `Application startup file` is set to `server.js` in your cPanel Node.js settings.

3. **Install Dependencies on the Server**:

   - Use the `Run NPM Install` button in cPanel or run manually via SSH:
     ```bash
     npm install
     ```

4. **Start the Application**:
   - Use the **Start/Restart** button in cPanel.

---

## File Structure

```
.
├── .next/             # Build output
├── public/            # Static assets
├── src/               # Source code
├── package.json       # Node.js dependencies and scripts
├── server.js          # Custom server for handling routes
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md          # Project documentation
```

---

## Technologies Used

- **Next.js**
- **React**
- **Tailwind CSS**
- **Node.js**
- **cPanel Hosting**

---

## How to Use

- Visit the live website at [DGeraskin.com](http://dgeraskin.com).
- Clone the repository to explore the source code.
- Customize the design and content in the `src` and `public` directories.

---

## Troubleshooting

1. **Dependencies not installing?**

   - Ensure the correct version of Node.js is installed.
   - Run `npm install` in the project root.

2. **Application not starting?**

   - Check the `stderr.log` file on the server for errors.
   - Verify the `server.js` file is correctly configured.

3. **Design issues?**
   - Modify Tailwind CSS configuration in `tailwind.config.js`.

---

## Future Plans

- Add animations with Framer Motion.
- Integrate a CMS for easier content management.
- Improve performance with server-side caching.

---

Made with ❤️ by Dmitrii Geraskin ([Gerbull](https://github.com/Gerbull)).  
For questions or suggestions, feel free to reach out via GitHub.
