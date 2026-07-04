pipeline {

    agent any

    environment {
        IMAGE_NAME = "jkarthi/companyportal"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Test Environment') {

            steps {

                sh 'echo "===== JAVA ====="'
                sh 'java -version'

                sh 'echo "===== MAVEN ====="'
                sh 'mvn -version'

                sh 'echo "===== DOCKER ====="'
                sh 'docker version'

            }

        }

        stage('Build Maven') {

            steps {

                dir('companyportal') {

                    sh './mvnw clean package -DskipTests'

                }

            }

        }

        stage('Build Docker Image') {

            steps {

                dir('companyportal') {

                    sh '''
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    '''

                }

            }

        }

        stage('Docker Login') {

            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {

                    sh '''
                    echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                    '''

                }

            }

        }

        stage('Push Docker Image') {

            steps {

                sh '''
                docker push $IMAGE_NAME:$IMAGE_TAG
                '''

            }

        }

    }

    post {

        success {

            echo '================================='
            echo ' Company Portal CI/CD Completed '
            echo '================================='

        }

        failure {

            echo '================================='
            echo ' Company Portal Pipeline Failed '
            echo '================================='

        }

    }

}