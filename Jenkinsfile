pipeline {
    agent {
     node {
         label "linux && nodejs"
     }
    }
    stages {
        stage("Hellow"){
            steps {
                echo "Hellow World"
            }
        }
    }
    post {
        always {
            echo "This will always run"
        }
        success {
            echo "This will run only if the pipeline is successful"
        }
        failure {
            echo "This will run only if the pipeline is broken"
        }
        cleanup {
            echo "This will always run"
        }

    }
}