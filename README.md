# 🚛 FleetFlow - Intelligent Logistics Management System

A modern, full-stack fleet management solution designed for logistics companies to streamline operations, track vehicles, manage drivers, and optimize routes across India.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

FleetFlow is an enterprise-grade logistics management platform that helps transportation companies manage their fleet operations efficiently. From dispatching trips to tracking routes in real-time, FleetFlow provides a comprehensive solution for modern logistics challenges.

### Why FleetFlow?

- **Real-time Route Intelligence**: Dynamic route generation with live tracking across Indian highways
- **Multi-tenant Architecture**: Support for multiple companies with role-based access control
- **Cost Optimization**: Automated cost calculations including tolls, fuel, and maintenance
- **Professional Billing**: Generate and email PDF invoices with detailed trip breakdowns
- **Analytics Dashboard**: Comprehensive insights into fleet performance and operational costs

## ✨ Features

### Core Functionality

- **Trip Management**
  - Create and dispatch trips with automatic route generation
  - Real-time tracking with checkpoint-based progress monitoring
  - Dynamic route calculation for any city pair in India
  - Automatic cost calculation based on distance and vehicle type

- **Fleet Management**
  - Vehicle registry with detailed specifications
  - Maintenance log tracking with automatic status updates
  - Fuel expense monitoring and analytics
  - Odometer tracking with automatic updates

- **Driver Management**
  - Driver profiles with license and safety score tracking
  - Trip history and performance metrics
  - Availability status management

- **Billing & Invoicing**
  - Professional PDF invoice generation
  - Email delivery with customizable templates
  - Customer name tracking for personalized billing
  - Detailed cost breakdown (base, toll, other expenses)

- **Analytics & Reporting**
  - Fleet-wide performance metrics
  - Vehicle utilization and cost analysis
  - Driver performance tracking
  - Monthly trend visualization

### Advanced Features

- **Role-Based Access Control (RBAC)**
  - Manager: Full access to all operations
  - Dispatcher: Trip and route management
  - Viewer: Read-only access to data

- **Multi-Company Support**
  - Isolated data per company
  - Company-specific branding in invoices
  - Custom pricing per vehicle type

- **Route Intelligence**
  - Pre-compiled highway network for fast routing
  - Toll plaza detection and cost estimation
  - Live tracking with ETA calculations
  - Checkpoint-based progress monitoring

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **jsPDF** - PDF generation
- **Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **Nodemailer** - Email delivery
- **bcrypt** - Password hashing

### Infrastructure
- **Multi-tenant Architecture** - Company-based data isolation
- **RESTful API** - Clean, predictable endpoints
- **JWT-like Headers** - Stateless authentication

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fleetflow.git
   cd fleetflow
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=fleetflow
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password

   # Email Configuration (Gmail example)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password

   # Server Configuration
   PORT=5000
   ```

4. **Initialize the database**
   ```bash
   node initDb.js
   ```

5. **Add customer name column (migration)**
   ```bash
   node add_customer_name.js
   ```

6. **Start the backend server**
   ```bash
   node server.js
   ```

7. **Set up the frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

8. **Access the application**
   
   Open your browser and navigate to `http://localhost:5173`

### Default Demo Account

```
Email: manager@fleetflow.io
Password: demo123
Role: Manager
Company: FleetFlow Demo Company
```

## 📁 Project Structure

```
fleetflow/
├── backend/
│   ├── server.js              # Express server entry point
│   ├── db.js                  # PostgreSQL connection pool
│   ├── routes.js              # API endpoints
│   ├── routeIntelligence.js   # Route generation & tracking
│   ├── email.js               # Email templates & sending
│   ├── initDb.js              # Database initialization
│   ├── add_customer_name.js   # Database migration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   ├── TripDispatcher.jsx  # Trip management
│   │   │   ├── RouteTracking.jsx   # Live tracking
│   │   │   ├── VehicleRegistry.jsx # Fleet management
│   │   │   ├── DriverProfiles.jsx  # Driver management
│   │   │   ├── FuelExpenses.jsx    # Expense tracking
│   │   │   ├── MaintenanceLogs.jsx # Maintenance records
│   │   │   ├── Analytics.jsx       # Analytics dashboard
│   │   │   ├── LoginPage.jsx       # Authentication
│   │   │   └── Home.jsx            # Landing page
│   │   │
│   │   ├── Components/
│   │   │   ├── RouteTracker.jsx    # Route visualization
│   │   │   └── PasswordInput.jsx   # Secure input
│   │   │
│   │   ├── api.js              # API client
│   │   ├── App.jsx             # Root component
│   │   └── main.jsx            # Entry point
│   │
│   ├── public/
│   │   └── favicon.svg         # App icon
│   │
│   └── package.json
│
└── README.md
```

## ⚙️ Configuration

### Database Schema

The system uses PostgreSQL with the following main tables:

- `companies` - Multi-tenant company data
- `users` - User accounts with RBAC
- `vehicles` - Fleet registry
- `drivers` - Driver profiles
- `trips` - Trip records with costs
- `maintenance_logs` - Maintenance history
- `fuel_expenses` - Fuel and toll expenses
- `password_resets` - OTP-based password recovery

### Email Templates

FleetFlow includes pre-built email templates for:
- OTP for password reset
- Welcome emails for new users
- Password change notifications
- Trip bill invoices with PDF attachments

### Route Intelligence

The route intelligence system includes:
- 50+ major Indian cities
- 15+ national highways (NH)
- Toll plaza locations and costs
- Real-time checkpoint tracking
- ETA calculations based on average speed

## 📖 Usage

### Creating a Trip

1. Navigate to **Trip Dispatcher**
2. Click **New Trip**
3. Fill in trip details:
   - From/To locations
   - Select vehicle and driver
   - Add cargo details (optional)
4. Click **Generate Route** to see the planned route
5. Click **Dispatch** to start the trip

### Completing a Trip

1. Find the dispatched trip in the list
2. Click **Complete Trip**
3. Enter actual details:
   - Customer name (optional)
   - Extra KM covered
   - Toll charges
   - Other expenses
4. Click **Confirm & Complete**
5. Download PDF or send via email

### Tracking a Trip

1. Navigate to **Route Tracking**
2. Select an active trip
3. View real-time progress on the map
4. See current checkpoint and ETA
5. Monitor distance covered and remaining

### Managing Fleet

1. Navigate to **Vehicle Registry**
2. Add/edit vehicles with specifications
3. Track odometer readings (auto-updated)
4. Monitor vehicle status and availability
5. View maintenance history

### Viewing Analytics

1. Navigate to **Analytics**
2. View KPIs:
   - Total revenue
   - Operational costs
   - Completion rate
   - Total KM covered
3. Analyze monthly trends
4. Review vehicle and driver performance

## 🔌 API Documentation

### Authentication Headers

All API requests require these headers:
```
x-company-id: CO-XXXXXX
x-user-email: user@example.com
x-user-role: Manager|Dispatcher|Viewer
```

### Key Endpoints

#### Trips
- `GET /trips` - List all trips
- `POST /trips` - Create new trip
- `PUT /trips/:id` - Update trip
- `DELETE /trips/:id` - Delete trip
- `POST /trips/:id/email-bill` - Send bill via email

#### Route Intelligence
- `POST /route/generate` - Generate route with tracking
- `POST /route/track` - Get current tracking status

#### Vehicles
- `GET /vehicles` - List all vehicles
- `POST /vehicles` - Add new vehicle
- `PUT /vehicles/:id` - Update vehicle
- `DELETE /vehicles/:id` - Delete vehicle

#### Drivers
- `GET /drivers` - List all drivers
- `POST /drivers` - Add new driver
- `PUT /drivers/:id` - Update driver
- `DELETE /drivers/:id` - Delete driver

For complete API documentation, see the inline comments in `backend/routes.js`.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with clear messages**
   ```bash
   git commit -m "Add: Customer name field in trip completion"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Message Guidelines

Use clear, descriptive commit messages:
- `Add:` New feature or functionality
- `Fix:` Bug fix
- `Update:` Modify existing feature
- `Remove:` Delete code or files
- `Refactor:` Code restructuring
- `Docs:` Documentation changes

## 🐛 Known Issues & Fixes

### Distance Inconsistency Bug (Fixed)
- **Issue**: Extra KM was being added twice to odometer and analytics
- **Fix**: Now uses only `totalKM` for all calculations; `extraKM` is metadata only

### PDF Price Display (Fixed)
- **Issue**: Prices showing as garbled characters
- **Fix**: Using standard fonts and proper number formatting

### Route Direction (Fixed)
- **Issue**: Routes showing in reverse direction
- **Fix**: Respects source → destination order in route generation

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Development Team** - Initial work and ongoing maintenance

## 🙏 Acknowledgments

- Indian highway network data
- Open-source community for amazing tools
- All contributors who help improve FleetFlow

## 📞 Support

For support  open an issue on GitHub.

---

**Built with ❤️ for the logistics industry**

*FleetFlow - Intelligent Logistics Solutions*
