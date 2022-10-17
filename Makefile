APP_IMAGE=:latest
APP_RUNNING_PORT=4000

start:
	docker run -p 4000:4000 -d --name sbg-tech-test-app ngr05/sbg-gaming-seit-tech-test

stop:
	docker stop sbg-tech-test-app
	docker rm sbg-tech-test-app

logs:
	docker logs -f sbg-tech-test-app

test:
	yarn test:api