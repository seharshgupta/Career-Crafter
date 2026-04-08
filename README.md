# CareerCrafter

## Project Description

CareerCrafter is a comprehensive full-stack web application designed to assist users in their career development. It offers tools for building professional resumes, matching skills to job opportunities, classifying resumes, and providing career insights through an intuitive dashboard. The platform integrates user authentication, resume management, and AI-powered recommendations to help users navigate their professional paths effectively.

## Features

- **Resume Builder**: Create and customize resumes with multiple templates (Classic and Modern).
- **Skill Matcher**: Analyze and match user skills against job requirements.
- **Job Matching**: Get personalized job recommendations based on resume and skills.
- **Resume Classifier**: Automatically classify and analyze uploaded resumes.
- **Career Advisor**: Receive insights and advice on career progression.
- **User Dashboard**: Centralized view of resumes, skills, and career data.
- **Authentication**: Secure user login and registration.

## Tech Stack

- **Backend**: Python, FastAPI, SQLAlchemy, Pydantic
- **Frontend**: React, Vite, Axios
- **Database**: SQLite (configurable)
- **Deployment**: Vercel (frontend), potential for backend hosting

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the backend server:
   ```bash
   python main.py
   ```

   The backend will start on `http://localhost:8000` (or as configured).

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173` (Vite default).

## Usage

1. Ensure both backend and frontend are running.
2. Open your browser and navigate to the frontend URL.
3. Register or log in to access the dashboard.
4. Build resumes, match skills, and explore career insights.

## API Endpoints

The backend provides RESTful APIs for:
- User authentication (`/auth`)
- Resume management (`/resume`)
- Career data (`/career`)
- Job matching (`/job-match`)
- Skills matching (`/skills-matcher`)
- Resume classification (`/resume-classifier`)

Refer to the backend code for detailed endpoint documentation.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or support, please open an issue on GitHub.</content>
<parameter name="filePath">/Users/harshgupta/Desktop/CareerCrafter/README.md