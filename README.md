# Personal AI Finance Management Application

Welcome to the **Personal AI Finance Management Application**, a cutting-edge platform designed to help users manage their finances efficiently with the power of AI. This application allows users to create multiple accounts, set personalized budgets, receive warnings for overspending, and gain monthly insights into their expenses, categorized for better clarity. It also provides AI-powered tips to help users optimize their financial habits.

## Features

### 1. **User Authentication**
- **Clerk Integration**: Users can securely log in using their Gmail accounts.
- Ensures a seamless and secure onboarding experience.

### 2. **Account Management**
- Create and manage multiple financial accounts.
- Each account can have a separate budget, allowing tailored financial tracking.

### 3. **Budget Tracking and Alerts**
- Set individual budgets for each account.
- Receive warning emails if spending exceeds the set budget.

### 4. **Monthly Expense Summary**
- Automatically sends users a monthly email summarizing their expenses.
- Categorizes expenses (e.g., Travel, Entertainment, etc.).
- Includes AI-powered tips to help users manage their finances better.

### 5. **Automated Emails**
- **Cron Jobs with Inngest**: Ensures regular and timely email notifications.
- Automated warning emails for overspending.
- Monthly summary emails with expense breakdown and tips.

### 6. **Security**
- **Arcjet Integration**: Implements advanced security measures to safeguard user data and ensure compliance with industry standards.

### 7. **Database Management**
- **Supabase**: Handles all database operations, ensuring reliable and scalable data storage.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Amannigam1820/Welth-Finance-management-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Welth-Finance-management-
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   CLERK_API_KEY=<your-clerk-api-key>
   ARCJET_API_KEY=<your-arcjet-api-key>
   INNGEST_API_KEY=<your-inngest-api-key>
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure
```
Welth-Finance-management-
├── components/        # Reusable React components
├── pages/             # Next.js pages
├── styles/            # Global styles and Tailwind CSS setup
├── utils/             # Utility functions and helpers
├── lib/               # Integrations with Clerk, Supabase, Arcjet, and Inngest
├── public/            # Static assets
├── .env.local         # Environment variables
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Key Technologies

### 1. **Frontend**
- **Next.js**: Framework for building server-side rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### 2. **Backend**
- **Supabase**: PostgreSQL-based backend for managing user data and budgets.
- **Inngest**: Handles cron jobs for sending regular emails.

### 3. **Authentication and Security**
- **Clerk**: Manages user authentication.
- **Arcjet**: Ensures data security and compliance.

### 4. **AI Insights**
- Integrated AI for providing personalized financial tips.

## Development

### Running the Application
- Start the development server:
  ```bash
  npm run dev
  ```
- Access the application at:
  ```
  http://localhost:3000
  ```

### Testing
- Implement unit and integration tests to ensure application reliability.
- Test critical workflows, such as budget creation, email notifications, and account management.

### Deployment
- Deploy the application using platforms like **Vercel**, **Netlify**, or **AWS**.
- Ensure that all environment variables are correctly configured in the production environment.

## Contribution

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For inquiries or support, contact:
- **Name**: Aman Nigam
- **Email**: amannigam18082001@gmail.com
- **GitHub**: [Amannigam1820](https://github.com/Amannigam1820)

## Acknowledgments
Special thanks to the developers and contributors who made this project possible.

---

Enjoy using the Personal AI Finance Management Application to take control of your financial journey!

