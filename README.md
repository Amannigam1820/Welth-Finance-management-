# Personal AI Finance Management Application

## Overview
This Personal AI Finance Management Application is a comprehensive tool to help users manage their finances across multiple accounts effectively. The application allows users to:

1. **Create Multiple Accounts:** Manage separate budgets for each account.
2. **Budget Monitoring:** Set specific budgets for accounts and receive warning emails if expenses exceed the budget.
3. **Expense Summary Emails:** Get detailed monthly expense summaries categorized by type (e.g., Travel, Entertainment) with AI-driven tips for better expense management.
4. **Secure Login:** Login via Gmail using Clerk for authentication.
5. **Automated Email Notifications:** Use Inngest for scheduling email notifications and reports.
6. **Enhanced Security:** Ensure data protection using Arcjet.

## Features

### 1. **Multi-Account Management**
   - Users can create and manage multiple accounts.
   - Each account has its own separate budget allocation.

### 2. **Budget Tracking & Warning Emails**
   - Set individual budgets for each account.
   - Automatically track expenses and send a warning email when the spending exceeds the allocated budget.

### 3. **Monthly Expense Summary with AI Tips**
   - At the end of each month, the application sends an email containing:
     - A categorized breakdown of expenses (e.g., Travel, Entertainment, Food, etc.).
     - Personalized AI-generated tips for better financial management based on the user’s spending patterns.

### 4. **Authentication with Clerk**
   - Users log in using Gmail for seamless and secure authentication.
   - Clerk handles all user sessions and authentication flows.

### 5. **Automated Email Scheduling with Inngest**
   - Cron jobs powered by Inngest manage scheduled tasks like:
     - Sending warning emails when budgets are exceeded.
     - Sending monthly expense summaries at the beginning of every month.

### 6. **Enhanced Security with Arcjet**
   - Arcjet ensures the security and privacy of user data.
   - Protects against common security threats such as unauthorized access and data breaches.

## Technologies Used

### Frontend
- **Next.js**: Framework for building the application’s user interface.
- **Tailwind CSS**: For styling components.

### Backend
- **Node.js**: Backend runtime for handling server-side logic.
- **Clerk**: Authentication and user management.
- **Inngest**: Task scheduling and cron jobs for email notifications.
- **Arcjet**: Security framework for data protection.

### Database
- **[Your choice of database (e.g., MongoDB, PostgreSQL)]**: For storing user data, accounts, and expense records.

### Email Service
- **[Your choice of email service (e.g., SendGrid, Nodemailer)]**: For sending warning and summary emails.

## Installation

### Prerequisites
- Node.js (>= 16.x)
- npm (>= 8.x)

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/personal-ai-finance-management.git
   cd personal-ai-finance-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   DATABASE_URL=<your-database-url>
   EMAIL_SERVICE_API_KEY=<your-email-service-api-key>
   ARCJET_API_KEY=<your-arcjet-api-key>
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### 1. **User Registration and Login**
   - Register or log in using Gmail authentication (powered by Clerk).

### 2. **Create Accounts**
   - Navigate to the "Accounts" section to create new accounts.
   - Assign a budget to each account.

### 3. **Track Expenses**
   - Add expenses to accounts manually or import them using the upload feature (if implemented).
   - View expense breakdowns by categories.

### 4. **Email Notifications**
   - **Warning Emails:** Receive an email if spending exceeds the budget for any account.
   - **Monthly Summary Emails:** Get categorized expense summaries and AI tips at the start of each month.

## Folder Structure

```plaintext
personal-ai-finance-management/
├── components/        # Reusable React components
├── pages/             # Next.js pages
├── public/            # Static files
├── styles/            # Global CSS and Tailwind setup
├── utils/             # Utility functions (e.g., for email handling)
├── inngest/           # Inngest workflows for cron jobs
├── clerk/             # Clerk configuration for authentication
├── arcjet/            # Arcjet security configuration
├── .env.local         # Environment variables
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.

## Deployment

### Vercel Deployment
This project can be easily deployed to Vercel:

1. Login to [Vercel](https://vercel.com).
2. Import your repository.
3. Add environment variables in the Vercel project settings.
4. Deploy the application.

## Future Enhancements

1. **Expense Import:** Allow users to import expenses from bank statements.
2. **AI Insights Dashboard:** Create an interactive dashboard for visualizing AI insights.
3. **Mobile App:** Extend functionality to a mobile application.
4. **Shared Accounts:** Enable account sharing between multiple users.

## License
This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Personal AI Finance Management Application! For questions or support, feel free to contact [your-email@example.com].

