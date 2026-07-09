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


    }


}