# Inngest AWS Lambda Template

This is an [AWS Lambda container image](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-images.html), intended to be deployed as a Lambda using Docker and AWS ECR. Based on the public Node Lambda images, this is a reference on how to react to events using AWS Lambda and Inngest.

## Getting Started

```bash
# Build and start
npm install
docker build -t example .
docker run -p 9000:8080 example

# Test
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

## Learn More

- [Inngest Documentation](https://www.inngest.com/docs) - learn about the Inngest SDK, functions, and events
- [AWS Lambda container images](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html) - learn about AWS Lambda container images and deployment
