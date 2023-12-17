import { Inngest } from "inngest";
import { serve } from "inngest/lambda";

const inngest = new Inngest({ id: "inngest-lambda-example" });

const helloWorld = inngest.createFunction(
  { name: "Hello World", id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-for-a-sec", "1s");
    return "Hello World";
  },
);

// Set INNGEST_BASE_URL=http://host.docker.internal:8288 for local dev within Docker
export const handler = serve({
  client: inngest,
  functions: [helloWorld],
});
