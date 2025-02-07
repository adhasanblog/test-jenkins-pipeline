pipeline {
    agent {
     node {
         label "linux && nodejs"
     }
    }
    triggers: {
        pollSCM('* * * * *')
    }
    stages {
        stage("Install Dependencies") {
            steps {
                echo "Installing dependencies..."
                sh "npm install"
                echo "Dependencies installed"
            }
        }

        stage("Build") {
            steps {
                echo "Building the project..."
                sh "npm run build"
                echo "Project built"
            }
        }
    }

    post {
        always {
            echo "This will always run"
        }
        success {
            echo "This will run only if successful"
        }
        failure {
            echo "This will run only if failed"
        }
        unstable {
            echo "This will run only if the run was unstable"
        }
        changed {
            echo "This will run only if the state of the Pipeline has changed"
            echo "For example, if the Pipeline was previously failing but is now successful"
        }
    }

}