import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Explanation() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does this application work?</AccordionTrigger>
        <AccordionContent>
          <h3 className="text-lg font-semibold mb-2">Server Actions</h3>
          <p>
            Server actions process the input on the server-side and return the response. In this app, the server action
            takes the name input and returns a greeting message.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Shadcn UI Components</h3>
          <p>
            This app uses Shadcn UI components such as Button, Input, and Accordion for consistent styling and improved
            user experience.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Next.js 15.1 Features</h3>
          <p>
            Key features used include server actions for form processing, the App Router for simplified routing, and
            server-side rendering for improved performance and SEO.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

