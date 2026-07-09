pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                withCredentials([file(credentialsId: 'my-secret-file', variable: 'SECRET_FILE')]) {
                    bat '''
                        copy "%SECRET_FILE%" credentials.env
                        npx playwright test
                    '''
                }
            }
        }
    }

    post {
        always {
            bat 'if exist credentials.env del credentials.env'
        }
    }
}

//Scheduling the time in the jenikin is called crom format
//minitue,hour,day_of_month,Day_of_week
//5 min[H/5 * * * *]
//30 10 * * *
//0 8 * * 1
//0 18 * * 1-5
//H * * * * 