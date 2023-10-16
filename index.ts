import { Inngest } from "inngest";
import { serve } from "inngest/lambda";

const inngest = new Inngest({ name: "Inngest Lambda Example" });

const helloWorld = inngest.createFunction(
  { name: "Hello World" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("1s");
    return "Hello World";
  }
);

const optionalConfigForLocalTesting = {
    ...(process?.env?.INNGEST_REGISTER_URL && {inngestRegisterUrl: process.env.INNGEST_REGISTER_URL}),
}

export const handler = serve(inngest, [helloWorld], optionalConfigForLocalTesting)
