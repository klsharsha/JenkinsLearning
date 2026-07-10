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
                        credentialsId: 'dockerhub',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {


                    bat """

                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%

                    docker push klsharsha/jenkins-express-demo

                    """

                }

            }

        }



        stage("Deploy To EC2") {


            steps {


                script {


                    def remote = [:]

                    remote.name = "AWS EC2 Server"

                    remote.host = "16.171.15.12"

                    remote.user = "ec2-user"

                    remote.allowAnyHosts = true



                    withCredentials([

                        sshUserPrivateKey(

                            credentialsId: 'ec2-key',

                            keyFileVariable: 'PRIVATE_KEY'

                        )

                    ]) {


                        remote.identityFile = PRIVATE_KEY



                        sshCommand remote: remote, command: """

                        docker pull klsharsha/jenkins-express-demo


                        docker stop express-app || true


                        docker rm express-app || true


                        docker run -d --name express-app -p 3000:3000 klsharsha/jenkins-express-demo

                        """


                    }


                }


            }


        }


    }


}