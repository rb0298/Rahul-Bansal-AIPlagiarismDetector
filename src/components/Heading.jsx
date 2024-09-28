import { Link } from "react-router-dom"
import { Button } from "./button"

function Heading() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Detect Plagiarism with AI Precision
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our advanced AI technology ensures academic integrity and
                original content creation.
              </p>
            </div>
          <div className="space-x-4"> 
          <Link to="/plagiarismChecker">
          <Button type="link" >Get Started</Button></Link>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Heading
