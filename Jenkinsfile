pipeline {
    agent any

    environment {
        IMAGE_NAME = "belhassen/art-gallery"
        TAG = "1.0"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/belhazzh5/pfa.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'podman build -t $IMAGE_NAME:$TAG .'
            }
        }

        stage('Trivy Scan') {
            steps {
                // Only log vulnerabilities; do not break the build
                sh 'trivy image --exit-code 0 --no-progress $IMAGE_NAME:$TAG || true'
            }
        }

        stage('Deploy or Push') {
            steps {
                // Example: push to DockerHub or trigger Helm chart apply
                sh 'echo "Ready to deploy or push the image"'
            }
        }
    }
}

