# 🚀 Scholarship Platform - Frontend

Welcome to the **Scholarship Platform** frontend, a decentralized application built on the **Aptos Blockchain**. This platform empowers donors to create and distribute scholarships while allowing students to apply transparently. All interactions are securely managed via smart contracts on the blockchain.

---

## 🔗 Links

- **Live Demo**: [Scholarship Platform](https://aptos-scholarship.vercel.app/)
- **Smart Contract Explorer**: [Aptos Explorer](https://explorer.aptoslabs.com/account/0x25c8f2d9f9f8da2e858ce241b17fc32b9a157977dd1c8089b39115a5c459b4e7/modules/code/ScholarshipPlatform?network=testnet)

---

## ✨ Key Features

- **Create Scholarships**: Donors create scholarships by specifying eligibility criteria, amounts, and duration.
- **View Scholarships**: Applicants can explore available scholarships with detailed information.
- **Apply for Scholarships**: Eligible students can apply by submitting relevant academic details.
- **Distribute Scholarships**: Donors can disburse funds to qualified recipients seamlessly.
- **Emergency Close**: Donors have the option to close scholarships early and withdraw remaining funds.

---

## 📋 Prerequisites

Ensure the following tools are installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Aptos Wallet** (e.g., **Petra Wallet**) for blockchain interactions

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/scholarship-platform.git
cd scholarship-platform
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
PROJECT_NAME=StudyScholarships
VITE_APP_NETWORK=testnet
VITE_MODULE_ADDRESS=0x25c8f2d9f9f8da2e858ce241b17fc32b9a157977dd1c8089b39115a5c459b4e7
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 5. Deploy the Smart Contract

To deploy the smart contract:

1.  Install **Aptos CLI**.
2.  Update the **Move.toml** file with your wallet address:

        - Add you Wallet Address from Petra here

    ```bash
    donor_addrx="0xda9c8cb7b5536700f36dd6fbfa4f8dce2ca43a519782bd29e0112ac19d12bd1e"
    applicant_addrx="0xda9c8cb7b5536700f36dd6fbfa4f8dce2ca43a519782bd29e0112ac19d12bd1e"
    ```

3.  Create your new Address for Deployment

    ```bash
    aptos init
    ```

    - Add your Account addr here for Deployment

    ```bash
    my_addrx = "25c8f2d9f9f8da2e858ce241b17fc32b9a157977dd1c8089b39115a5c459b4e7"
    ```

4.  Compile and publish the contract:

    ```bash
    aptos move compile
    aptos move publish
    ```

---

## 🛠 How to Use the Platform

### 1. Connect Wallet

Connect your **Aptos Wallet** (e.g., Petra Wallet) to create, apply, and manage scholarships.

### 2. Create a Scholarship (For Donors)

1. Navigate to **Create Scholarship**.
2. Fill in details such as:
   - Scholarship Name
   - Amount per applicant
   - Eligibility Criteria (GPA, field of study)
   - Duration
3. Submit the form to create the scholarship.

### 3. View Scholarships

Browse the **Scholarships** section to explore available opportunities with details about eligibility, amount, and duration.

### 4. Apply for a Scholarship (For Students)

1. Select the scholarship you want to apply for.
2. Provide your academic information (GPA, field of study).
3. Submit your application.

### 5. Distribute Scholarships

Donors can:

1. Navigate to **Distribute Scholarships**.
2. Select the scholarship and disburse the funds to qualified recipients.

### 6. Emergency Close

Donors can:

1. Close the scholarship early from the **Manage Scholarships** section.
2. Withdraw any remaining funds securely.

---

## 📊 Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm test`**: Run unit tests.

---

## 🔍 Dependencies

- **React**: For building the user interface.
- **TypeScript**: Type-safe JavaScript for enhanced development.
- **Aptos SDK**: JS/TS SDK for blockchain interaction.
- **Ant Design / Tailwind CSS**: For responsive UI and modern styling.
- **Petra Wallet Adapter**: For wallet connection and transactions.

---

## 📚 Smart Contract Overview

### Scholarship Functions

1. **create_scholarship(...)**: Creates a new scholarship with specific criteria and amount.
2. **apply_for_scholarship(...)**: Allows students to apply for a specific scholarship.
3. **distribute_scholarship(...)**: Disburses funds to qualified applicants.
4. **emergency_close_scholarship(...)**: Closes the scholarship and refunds the donor.

### Token Functions

1. **initialize_balance(...)**: Initializes a zero balance for users.
2. **issue_tokens(...)**: Issues tokens to donors.
3. **get_balance(...)**: Retrieves the balance of an account.
4. **transfer_tokens(...)**: Transfers tokens between accounts.

### Viewing Functions

1. **view_all_scholarships(...)**: Lists all available scholarships.
2. **view_scholarships_by_donor(...)**: Shows scholarships created by a specific donor.
3. **view_scholarships_applied_by_user(...)**: Displays all scholarships a user has applied for.

---

## 🛡 Security and Transparency

- **Smart Contracts**: Ensure secure transactions and disbursement.
- **No Intermediaries**: Direct transactions between donors and applicants.
- **Real-Time Tracking**: Applicants and donors can monitor scholarship status.

---

## 🌐 Common Issues and Solutions

1. **Wallet Connection Issues**: Verify the wallet is installed and connected.
2. **Transaction Failures**: Ensure enough tokens are available for transactions.
3. **RPC Limits**: Use **third-party RPC providers** like **Alchemy** or **QuickNode** if encountering rate limits.

---

## 🚀 Scaling and Deployment

For deployment on **Vercel** or other platforms:

- Use **third-party RPC providers** for reliable performance.
- Implement **request throttling** to manage traffic.
- Utilize **WebSockets** for real-time updates.

---

## 🎉 Conclusion

The **Scholarship Platform** offers a decentralized way to manage scholarships transparently and securely. With blockchain-based operations, donors can create scholarships, students can apply, and funds can be distributed seamlessly. This platform ensures trust, transparency, and easy management of scholarships for all users.
