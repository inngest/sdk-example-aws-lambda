IMAGE_TAG := inngest-lambda
INNGEST_REGISTER_URL := http://host.docker.internal:8288/fn/register
PORT := 9000

build:
	docker build -t $(IMAGE_TAG) .

run:
	docker run -p $(PORT):8080 -e INNGEST_REGISTER_URL=$(INNGEST_REGISTER_URL) $(IMAGE_TAG)

dev-server:
	npx inngest-cli@latest dev -u http://localhost:$(PORT)/2015-03-31/functions/function/invocations