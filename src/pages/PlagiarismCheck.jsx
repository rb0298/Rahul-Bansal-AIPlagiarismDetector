import { useState } from 'react'
import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/progress"
import { FileSearch, Upload, AlertCircle } from "lucide-react"

// Mock function to simulate AI API call
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
              <div className="text-red-500 flex items-center">
                <AlertCircle className="mr-2" />
                {error}
              </div>
            )}
            {isLoading && (
              <div className="space-y-2">
                <Progress value={66} className="w-full" />
                <p className="text-center text-sm text-gray-500">Analyzing document for plagiarism...</p>
              </div>
            )}
            {results && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Results</h3>
                <div className="flex items-center justify-between">
                  <span>Plagiarism Detected:</span>
                  <span className={`font-bold ${results.plagiarismPercentage > 20 ? 'text-red-500' : 'text-green-500'}`}>
                    {results.plagiarismPercentage.toFixed(2)}%
                  </span>
                </div>
                <Progress 
                  value={results.plagiarismPercentage} 
                  className="w-full"
                  indicatorClassName={results.plagiarismPercentage > 20 ? 'bg-red-500' : 'bg-green-500'}
                />
                <div>
                  <h4 className="font-semibold mb-2">Matched Sources:</h4>
                  <ul className="space-y-2">
                    {results.matchedSources.map((source, index) => (
                      <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {source.url}
                        </a>
                        <span className="font-semibold">{source.similarity}% match</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}