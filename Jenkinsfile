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

bat "docker build -t jenkins-express-demo ."

}

}



stage("Check Docker Image") {

steps {

bat "docker images"

}

}


}


}