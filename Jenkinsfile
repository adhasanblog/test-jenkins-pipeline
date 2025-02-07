pipeline {
    agent {
     node {
         label "linux && nodejs"
     }
    }
    stages {
        stage("Install Dependencies") {
            steps {
                sh "npm install"
            }
        }

        stage("Build") {
            steps {
                sh "npm run build"
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