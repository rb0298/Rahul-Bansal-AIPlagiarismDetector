import { Button } from "./button"

function Trial() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Ensure Original Content?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of educators and students who trust our
                AI-powered plagiarism detection.
              </p>
            </div>
            <Button size="lg">Start Your Free Trial</Button>
          </div>
        </div>
      </section> 
    )
}

export default Trial
