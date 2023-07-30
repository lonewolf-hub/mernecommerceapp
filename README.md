[Live Preview Link](https://mern-ecommerce-brown.vercel.app/)
# MERN E-Commerce Website

Welcome to the GitHub repository for our MERN E-Commerce website! This project serves as a basic implementation of an e-commerce platform with essential features such as product lists, product details, cart, checkout, secure card payment, cash payment, user profile, user order history, authentication, order emails, reset password emails, and an admin panel to manage orders and products. The application also includes functionalities for sorting, filtering, and pagination using Mongoose.

## Technical Specifications

### Frontend

1. React 18: We utilize the latest version of React to build a modern and efficient user interface.
2. Tailwind CSS: Tailwind CSS is our chosen CSS framework for styling, providing a highly customizable and responsive design.
3. Redux Toolkit: Redux Toolkit handles state management for asynchronous actions, making it easier to manage application data.
4. React Router v6: With React Router v6, navigation and routing within the application are seamless and user-friendly.
5. React-Alert: We use React-Alert to display alerts during asynchronous actions, enhancing user experience.
6. React Hook Form: React Hook Form simplifies form handling throughout the application.

### Backend

1. JSON Server: We employ JSON Server for rapid prototyping and creating a fake REST API during development.
2. MongoDB: The application uses MongoDB as its primary database to store data efficiently.
3. Mongoose v7: Mongoose v7 acts as an elegant MongoDB object modeling tool and helps manage relationships between data.
4. Express: Express is the chosen backend framework, providing robust routing and middleware support.
5. MongoDB Atlas: We use MongoDB Atlas as our cloud-based database service, ensuring scalability and accessibility.
6. Passport.js: Passport.js is implemented for user authentication, providing a secure and reliable login process.

### Additional Considerations

- Performance Optimization: Throughout the development process, we focus on optimizing the application's performance to ensure a smooth user experience.
- Security: We prioritize security to safeguard user data and transactions.
- Vercel: The application is deployed using Vercel, a reliable and efficient hosting service.
- Error Handling (404): We implement proper error handling to provide a user-friendly experience when encountering 404 pages.
- UI/UX: The user interface and user experience are designed with a focus on ease of use and aesthetics.
- Scalability: The application is designed with scalability in mind, ensuring it can handle increased user loads.
- Payment Processing: Secure payment processing is implemented to facilitate smooth and safe transactions.
- Accessibility: We strive to make the application accessible to all users, regardless of their abilities.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project folder and install the dependencies using `npm install`.
3. Set up the required environment variables for MongoDB Atlas and payment processing credentials.
4. Run the frontend and backend servers using `npm start` or `npm run dev` (if using JSON Server).
5. Access the application in your browser at `http://localhost:3000`.

## Contributing

We welcome contributions to enhance the features and functionalities of this project. Please fork the repository, make your changes, and submit a pull request for review.


## Acknowledgments

We would like to express our gratitude to the open-source community and all the developers whose libraries and tools have made this project possible.

Thank you for being a part of our journey in building this MERN E-Commerce website! If you have any questions or feedback, please don't hesitate to reach out. Happy coding!