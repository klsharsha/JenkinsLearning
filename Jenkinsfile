pipeline {

agent any


tools {
    nodejs "NodeJS-25"
}


stages {


stage("Install Dependencies") {

steps {

bat "npm install"

}

}



stage("Run Tests") {

steps {

bat "npm test"

}

}



stage("Build Docker Image") {

steps {

bat "docker build -t klsharsha/jenkins-express-demo ."

}

}



stage("Push Docker Image") {

steps {

withCredentials([
usernamePassword(
credentialsId:'dockerhub',
usernameVariable:'DOCKER_USER',
passwordVariable:'DOCKER_PASS'
)
]) {

bat """

docker login -u %DOCKER_USER% -p %DOCKER_PASS%

docker push klsharsha/jenkins-express-demo

"""

}

}

}


}


}