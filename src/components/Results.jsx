function Results({results}) {
    return (
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
    )
}

export default Results
