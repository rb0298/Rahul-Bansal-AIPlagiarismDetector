import { Progress } from "./progress"

function Loading() {
    return (
        <div className="space-y-2">
        <Progress value={66} className="w-full" />
        <p className="text-center text-sm text-gray-500">Analyzing document for plagiarism...</p>
      </div>
    )
}

export default Loading
