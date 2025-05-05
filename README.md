Data Dominators - Intelligent Claim Processing Application


Overview:
Welcome to our project submission for the Agentic AI Incubation! This repository contains the code and documentation for Data Dominators, our intelligent multi-agent system designed to revolutionize claims processing in the insurance industry. Our project aims to automate, optimize, and enhance the transparency of the claims lifecycle using agentic AI principles.

Explanation:
Our project leverages multi-agent systems (MAS), natural language processing (NLP), machine learning (ML), and a comprehensive suite of Azure cloud services to build a modular, scalable, and intelligent web-based claims processing platform. 

Key components include:
•	Intake Agent: Collects and processes initial data inputs into the AI system.

•	Assessment Agent: Evaluates the quality and relevance of the data processed before it is fed into AI models.
•	Fraud Detection Agent: Identifies potential fraudulent activities or suspicious patterns within datasets.
•	Risk Analysis Agent: Assesses and manages potential risks associated with AI implementation in business processes.
•	Informed Decision-making Agent: Synthesizes data-driven insights to aid strategic decision-making processes.

Intent:
The primary intent of Data Dominators is to reduce manual effort, minimize processing time, and improve customer satisfaction in the insurance claims process. We aim to demonstrate how agentic AI and Azure services can transform traditional claims workflows into intelligent, automated pipelines.

Ethical AI Principles:
•	AI for Everyone: Ensuring our AI solutions are accessible and beneficial to all stakeholders.
•	Human-in-the-Loop: Incorporating human oversight at critical stages to ensure safety, security, and ethical decision-making.
•	Transparency: Maintaining clear documentation and communication about AI processes and decisions.
•	Privacy and Security: Protecting user data and ensuring compliance with relevant regulations.

Use Case
Assigned Industry Use Case: Intelligent Claims Processing

Designed for:
•	Insurance companies and providers
•	Claims adjusters and underwriters
•	Customers submitting and tracking claims

Applicable scenarios:
•	Auto Insurance: Automatically assess accident reports and photos to initiate claims.
•	Health Insurance: Extract key data from hospital bills and patient reports to validate claims.
•	Property Insurance: Analyze incident descriptions and damage assessments to process home or business claims.

Contributors:
This project was developed by our dedicated team:
•	Krishnapratap Vedula
•	Naveen Kumar Polipalli
•	Deepthi Chiruvella
•	Krishna Vamsi Regulavalasa


Architecture Diagram

![image](https://github.com/user-attachments/assets/ed9b791f-96e5-4a3f-a773-6d0efb9a038c)

 

Implementation
We have integrated multiple Azure services for a seamless, scalable solution:
•	Frontend: Built using React, Material UI, and Axios for JS, hosted on Azure VM.
•	Backend: Implemented with Python, Semantic Kernel, and Flask for serverless logic execution, hosted on Azure VM.
•	AI/ML Integration:
•	Azure AI Foundry for orchestration of model pipelines.
•	Data Handling:
•	Synthetic data generated in Python leveraging GitHub and GitHub Copilot.
•	Knowledge base created by converting the generated CSV into PDF and attached to the agents in Azure AI Foundry.




AI Agents:

1. Intake Agent
Role: Responsible for collecting and processing initial data inputs into the AI system. 
Responsibilities:
•	Data Collection: Gather relevant data from various sources (e.g., databases, user inputs, external APIs).
•	Initial Processing: Ensure data is clean, structured, and formatted correctly for analysis.
•	User Interaction: Communicate with clients or stakeholders to understand their needs and the data requirements better.
2. Assessment Agent
Role: Evaluates the quality and relevance of the data processed before it is fed into AI models. 
Responsibilities:
•	Data Validation: Check data integrity and accuracy to ensure reliable outcomes from the AI system.
•	Metadata Management: Maintain documentation on data sources and analyses conducted for transparency.
•	Reporting: Provide assessments and feedback on data quality to the relevant stakeholders for continuous improvement.
3. Fraud Detection Agent
Role: Focuses on identifying potential fraudulent activities or suspicious patterns within datasets. 
Responsibilities:
•	Monitoring Transactions: Use algorithms and anomaly detection techniques to identify fraud in real-time transactions.
•	Investigation: Conduct deeper investigations of flagged transactions, producing reports on findings.
•	Collaboration: Work with other departments (e.g., compliance, legal) to develop strategies for fraud prevention and education.
4. Risk Analysis Agent
Role: Responsible for assessing and managing potential risks associated with AI implementation in business processes. 


Responsibilities:
•	Risk Identification: Identify and evaluate risks in data processes, including security breaches or data mismanagement.
•	Analysis & Reporting: Analyze potential impacts of identified risks and report findings to decision-makers.
•	Policy Development: Assist in developing risk management policies and procedures to mitigate identified risks.
5. Informed Decision-making Agent
Role: Specializes in synthesizing data-driven insights to aid strategic decision-making processes. 

Responsibilities:
•	Insight Generation: Transform analyzed data into actionable insights and recommendations.
•	Stakeholder Engagement: Work closely with leadership teams to present findings and support decision-making matrices.
•	Continuous Learning: Stay updated on industry trends and advancements in AI and data analysis methodologies to improve decision quality.

Additional Information
•	Future Plans:
•	Integrate blockchain for immutable claim history.
•	Expand multilingual capabilities for broader accessibility.
•	Known Issues:
•	OCR accuracy needs improvement for handwritten documents; tuning in progress.
•	Acknowledgments: Special thanks to the Agentic AI Incubation team for their mentorship, resources, and support.




How to Execute:
Prerequisites
Before you begin, ensure you have the following applications installed on your system:
•	Node.js: Download and install from Node.js official website.
•	npm: Comes bundled with Node.js.
•	Python: Download and install from Python official website.
•	pip: Comes bundled with Python.

Steps
1.	Clone the Repository
2.	Install Dependencies for Frontend and Backend
3.	Set Up Azure Services
•	Follow the architecture diagram to set up the necessary Azure services.
•	Ensure you have the Azure AI Foundry and Azure VM configured as per the project requirements.
4.	Run the Backend
•	Navigate to the backend folder:
•	Run the backend server:
•	The backend will run on http://localhost:5000/api/SendIntakeAgent.
5.	Run the Frontend
•	Navigate to the frontend folder:
•	Start the frontend server:
•	The frontend will run on http://localhost:3000/.
6.	Access the Application
•	Open your web browser and navigate to http://localhost:3000/ to access the frontend.
•	The frontend will interact with the backend running at http://localhost:5000/api/SendIntakeAgent.
