import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { CheckCircle, FileSearch, Zap, Shield } from "lucide-react";
function Features() {
    return (
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
    )
}

export default Features
