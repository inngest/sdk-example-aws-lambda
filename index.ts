import { Inngest } from "inngest";
import { serve } from "inngest/lambda";

const inngest = new Inngest({ name: "My Lambda App" });

const fn = inngest.createFunction(
  { name: "Hello World" },
  { event: "test/hello.world" },
  async ({ event }) => {
    return "Hello World";
  }
);

export const handler = serve(inngest, [fn]);
