pipeline {
    agent any


    environment {
        FRONT_IMAGE = 'garderie-frontend'
        BACK_IMAGE  = 'garderie-backend'
        TAG         = "${env.BUILD_NUMBER}"
    }

    options { timestamps() }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Install') {
            steps {
                dir('frontend') { sh 'npm install' }
                dir('backend')  { sh 'npm install' }
            }
        }

        // Si le test échoue, le pipeline s'arrête (comportement par défaut de Jenkins)
        stage('Test') {
            steps {
                dir('frontend') { sh 'npm test' }
            }
        }

        stage('Build Frontend') {
            steps { sh 'docker build -t ${FRONT_IMAGE}:${TAG} ./frontend' }
        }

        stage('Build Backend') {
            steps { sh 'docker build -t ${BACK_IMAGE}:${TAG} ./backend' }
        }

        stage('Push Frontend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh '''
                        echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
                        docker tag ${FRONT_IMAGE}:${TAG} $DH_USER/${FRONT_IMAGE}:${TAG}
                        docker tag ${FRONT_IMAGE}:${TAG} $DH_USER/${FRONT_IMAGE}:latest
                        docker push $DH_USER/${FRONT_IMAGE}:${TAG}
                        docker push $DH_USER/${FRONT_IMAGE}:latest
                    '''
                }
            }
        }

        stage('Push Backend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                  usernameVariable: 'DH_USER',
                                                  passwordVariable: 'DH_PASS')]) {
                    sh '''
                        echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
                        docker tag ${BACK_IMAGE}:${TAG} $DH_USER/${BACK_IMAGE}:${TAG}
                        docker tag ${BACK_IMAGE}:${TAG} $DH_USER/${BACK_IMAGE}:latest
                        docker push $DH_USER/${BACK_IMAGE}:${TAG}
                        docker push $DH_USER/${BACK_IMAGE}:latest
                    '''
                }
            }
        }
    }

    post {
        always  { sh 'docker logout || true' }
        success { echo 'Pipeline terminé avec succès.' }
        failure { echo 'Pipeline en échec.' }
    }
}
