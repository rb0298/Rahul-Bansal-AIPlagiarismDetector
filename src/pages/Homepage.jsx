import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CheckCircle, FileSearch, Zap, Shield } from "lucide-react";
import Navigation from "../components/Navigation";

export default function Homepage() {

  return (
    <div className="flex flex-col min-h-screen">
     <Navigation/>
      <main className="flex-1">
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
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Get results in seconds, not minutes. Our AI processes
                    documents at incredible speeds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-6 w-6 mb-2" />
                  <CardTitle>Highly Accurate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    State-of-the-art AI ensures the highest level of accuracy in
                    plagiarism detection.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileSearch className="h-6 w-6 mb-2" />
                  <CardTitle>Comprehensive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Checks against a vast database of academic papers, websites,
                    and publications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-6 w-6 mb-2" />
                  <CardTitle>Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Simple interface allows you to upload and check documents
                    with just a few clicks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
  </section>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AI Plagiarism Detector. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
