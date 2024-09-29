import { useState } from 'react'
import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Input } from "@/components/Input"
import { FileSearch } from "lucide-react"
import Navigation from '../components/Navigation'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Results from '../components/Results'


// Mock function to simulate AI API ca

const mockPlagiarismCheck = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        plagiarismPercentage: Math.random() * 100,
        matchedSources: [
          { url: 'https://example.com/source1', similarity: 78 },
          { url: 'https://example.com/source2', similarity: 65 },
        ]
      });
    }, 3000);
  });
};

export default function PlagiarismCheck() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/msword' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please upload a PDF or Word document.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const result = await mockPlagiarismCheck(file);
      setResults(result);
    } catch (err) {
      setError('An error occurred during the plagiarism check. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <div className="flex flex-col min-h-screen">
        <Navigation/>
        <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <FileSearch className="mr-2" />
            Plagiarism Check
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="flex-grow"
              />
                                <Button type="submit" disabled={!file || isLoading}>
                {isLoading ? 'Analyzing...' : 'Check Plagiarism'}
              </Button>
            </div>
            {error && (
            <Error error={error} />
            )}
            {isLoading && (
              <Loading/>
            )}
            {results && (
            <Results results={results} />
            )}
          </form>
        </CardContent>
      </Card>
         </div>
     </div>
  )
}